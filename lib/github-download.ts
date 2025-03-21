import { createClient } from "@/utils/supabase/server";
import { createHmac } from "crypto";
import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";
import { getRepoNameByTemplateId } from "@/utils/template";

const GITHUB_APP_ID = process.env.GITHUB_APP_ID as string;
const GITHUB_APP_INSTALLATION_ID = process.env
  .GITHUB_APP_INSTALLATION_ID as string;
const GITHUB_PRIVATE_KEY = process.env.GITHUB_APP_PRIVATE_KEY as string;
const SIGNING_SECRET = process.env.URL_SIGNING_SECRET as string;
const GITHUB_APP_CLIENT_SECRET = process.env.GITHUB_APP_CLIENT_SECRET as string;
const GITHUB_APP_CLIENT_ID = process.env.GITHUB_APP_CLIENT_ID as string;

async function getOctokit() {
  try {
    const auth = createAppAuth({
      appId: GITHUB_APP_ID,
      privateKey: GITHUB_PRIVATE_KEY,
      clientId: GITHUB_APP_CLIENT_ID,
      clientSecret: GITHUB_APP_CLIENT_SECRET,
      installationId: GITHUB_APP_INSTALLATION_ID,
    });

    const { token } = await auth({
      type: "installation",
      installationId: GITHUB_APP_INSTALLATION_ID,
    });

    return new Octokit({ auth: token });
  } catch (error) {
    console.error("GitHub App authentication error:", error);
    throw new Error("Failed to authenticate with GitHub");
  }
}

export async function generateSecureDownloadUrl(
  templateId: string,
  expiryMinutes: number = 15
): Promise<{ signedUrl: string | null; error: string | null }> {
  try {
    const supabase = await createClient();

    const { data: session, error } = await supabase.auth.getUser();

    if (error || !session.user) {
      return { signedUrl: null, error: "User not authenticated" };
    }

    const { data: template, error: templateError } = await supabase
      .from("purchased")
      .select("id")
      .eq("owner", session.user.id)
      .eq("template_name", templateId)
      .single();

    if (templateError || !template) {
      return { signedUrl: null, error: "Template not found" };
    }

    const expiryTime = Math.floor(Date.now() / 1000) + expiryMinutes * 60;
    const signaturePayload = `${session.user.id}:${templateId}:${expiryTime}`;
    const signature = createHmac("sha256", SIGNING_SECRET)
      .update(signaturePayload)
      .digest("hex");

    const signedUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/secure-download/${templateId}?signature=${signature}&expires=${expiryTime}`;

    return { signedUrl: signedUrl, error: null };
  } catch (error) {
    console.error("Error generating secure download URL");
    return { signedUrl: null, error: "Error generating secure download URL" };
  }
}

export async function verifySecureDownload(
  templateId: string,
  signature: string,
  expires: number
): Promise<{
  valid: boolean;
  error?: string;
  templateDetails?: {
    owner: string;
    repo: string;
    ref: string;
    fileName: string;
  };
}> {
  try {
    const supabase = await createClient();

    const { data: session, error: userError } = await supabase.auth.getUser();

    if (userError || !session.user)
      return { valid: false, error: "User not authenticated" };

    if (Math.floor(Date.now() / 1000) > expires)
      return { valid: false, error: "Download link has expired" };

    const expectedPayload = `${session.user.id}:${templateId}:${expires}`;
    const expectedSignature = createHmac("sha256", SIGNING_SECRET)
      .update(expectedPayload)
      .digest("hex");

    if (signature !== expectedSignature)
      return { valid: false, error: "Invalid signature" };

    return {
      valid: true,
      templateDetails: {
        owner: "jacob-brn",
        repo: getRepoNameByTemplateId(templateId) as string,
        ref: "main",
        fileName: `${getRepoNameByTemplateId(templateId) as string}.zip`,
      },
    };
  } catch (error) {
    console.error("Error veryfing download");
    return { valid: false, error: "Verification failed" };
  }
}

export async function fetchRepoArchive(
  owner: string,
  repo: string,
  ref: string
): Promise<{ data: ArrayBuffer | null; error: string | null }> {
  try {
    const octokit = await getOctokit();

    const { url } = await octokit.repos.downloadZipballArchive({
      owner,
      repo,
      ref,
    });

    const response = await fetch(url);

    if (!response.ok) throw new Error("Github API error");

    const data = await response.arrayBuffer();
    return { data, error: null };
  } catch (error) {
    console.error("Error fetching repo archive");
    return { data: null, error: "Failed to fetch tempalte from github" };
  }
}
