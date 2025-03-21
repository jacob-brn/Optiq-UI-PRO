import LoginForm from "@/components/loginForm";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen relative">
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
        <LoginForm />
      </div>
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default LoginPage;
