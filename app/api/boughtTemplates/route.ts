import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const { data: session, error } = await supabase.auth.getUser();

  if (error || !session.user) {
    return NextResponse.json(
      { error: "User not authenticated" },
      { status: 401 }
    );
  }

  const { data: purchased, error: purchasedError } = await supabase
    .from("purchased")
    .select("template_name")
    .eq("owner", session.user.id);

  if (purchasedError) {
    return NextResponse.json(
      { error: "Error fetching purchased templates" },
      { status: 500 }
    );
  }

  return NextResponse.json(purchased);
}
