"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { validateEmail } from "@/utils/email-validator";

export async function loginWithEmail(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { email } = {
    email: formData.get("email") as string,
  };

  if (!validateEmail(email)) {
    redirect("/login");
  }

  const { error } = await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: "/",
    },
  });

  console.log(error);

  if (error) {
    redirect("/login");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
