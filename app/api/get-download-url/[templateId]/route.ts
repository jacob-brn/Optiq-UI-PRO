import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { generateSecureDownloadUrl } from "@/lib/github-download";
import { isTemplateValid } from "@/utils/template";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ templateId: string }> }
) {
  try {
    const supabase = await createClient();
    const { templateId } = await params;

    if (!isTemplateValid(templateId))
      return NextResponse.json(
        { error: "Templated ID not valid" },
        { status: 401 }
      );

    const { data: session, error: userError } = await supabase.auth.getUser();

    if (!session.user || userError)
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );

    const { signedUrl, error } = await generateSecureDownloadUrl(
      templateId,
      10
    );

    if (error || !signedUrl)
      return NextResponse.json(
        { error: error || "Failed to generate download link" },
        { status: 403 }
      );

    return NextResponse.json({ url: signedUrl });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
