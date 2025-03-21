"use client";
import SocialLoginButton from "@/components/SocialLoginButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loginWithEmail } from "@/app/login/action";
import { validateEmail } from "@/utils/email-validator";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateAndSubmit = async (formData: FormData) => {
    const validation = validateEmail(email);

    console.log(formData.get("email"));
    if (validation.isValid) {
      setError("");
      await loginWithEmail(formData);
    } else {
      setError(validation.message);
      return;
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-6 max-w-xs">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-base tracking-tight font-semibold text-muted-foreground/80">
          Optiq UI Pro
        </h1>
        <h2 className="text-3xl font-semibold tracking-tight text-accent-foreground">
          Welcome Back
        </h2>
        <p className="text-sm text-muted-foreground/80">
          Login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            validateAndSubmit(formData);
          }}
        >
          <div className="grid gap-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="john.doe@example.com"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                className={error ? "border-red-500" : ""}
              />
              {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
            </div>
            <Button variant={"default"} type="submit">
              Sign in with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground/80">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-4">
          <SocialLoginButton
            provider="github"
            text="Github"
            variant="default"
            className="border"
          />
        </div>
        <Link
          href={"/signup"}
          className="underline underline-offset-2 text-muted-foreground/80 text-sm text-center"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
