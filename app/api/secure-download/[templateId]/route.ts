import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { verifySecureDownload, fetchRepoArchive } from "@/lib/github-download";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ templateId: string }> }
) {
  try {
    const supabase = await createClient();

    const searchParams = request.nextUrl.searchParams;
    const signature = searchParams.get("signature");
    const expiresParam = searchParams.get("expires");
    const { templateId } = await params;

    if (!signature || !expiresParam)
      return NextResponse.json(
        { error: "Invalid request parameters" },
        { status: 400 }
      );

    const expires = parseInt(expiresParam, 10);

    const { data: session, error: userError } = await supabase.auth.getUser();

    if (!session.user || userError)
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );

    const { valid, error, templateDetails } = await verifySecureDownload(
      templateId,
      signature,
      expires
    );

    if (!valid || !templateDetails)
      return NextResponse.json(
        { error: error || "Invalid download link" },
        { status: 403 }
      );

    const { data: archiveData, error: fetchError } = await fetchRepoArchive(
      templateDetails.owner,
      templateDetails.repo,
      templateDetails.ref
    );

    if (fetchError || !archiveData)
      return NextResponse.json(
        { error: fetchError || "Failed to fetch template" },
        { status: 500 }
      );

    const headers = new Headers();
    headers.set(
      "Content-Disposition",
      `attachment; filename="${templateDetails.fileName}"`
    );
    headers.set("Content-Type", "application/zip");

    return new NextResponse(archiveData, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Download processing error");
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
