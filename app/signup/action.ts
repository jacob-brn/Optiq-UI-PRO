"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { validateEmail } from "@/utils/email-validator";

export async function signUpWithEmail(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { email } = {
    email: formData.get("email") as string,
  };

  if (!validateEmail(email)) {
    redirect("/signup");
  }

  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: "/",
    },
  });

  if (error) {
    redirect("/signup");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
