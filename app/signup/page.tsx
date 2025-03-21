import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import SignupForm from "@/components/signupForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen">
      <div className="container flex h-screen w-full flex-col items-center justify-center mx-auto">
        <Link
          href={"/"}
          className={cn(
            "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
