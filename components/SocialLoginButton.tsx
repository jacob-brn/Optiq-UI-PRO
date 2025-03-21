import { cn } from "@/lib/utils";
import React from "react";
import {
  FaApple,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaMicrosoft,
} from "react-icons/fa6";

type providerType =
  | "google"
  | "facebook"
  | "apple"
  | "github"
  | "linkedin"
  | "microsoft";

type SocialLoginButtonVariantsType = {
  [key in providerType]: {
    text: string;
    icons: {
      [key: string]: React.ReactNode;
    };
    colors: {
      [key: string]: string;
    };
  };
};

const SocialLoginButtonVariants: SocialLoginButtonVariantsType = {
  google: {
    text: "Sign In with Google",
    icons: {
      default: (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-5 h-5"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          ></path>
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          ></path>
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          ></path>
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          ></path>
          <path fill="none" d="M0 0h48v48H0z"></path>
        </svg>
      ),
      custom: <FaGoogle className="w-5 h-5" />,
    },
    colors: {
      default:
        "bg-white text-muted-foreground border border-border hover:bg-accent dark:hover:bg-accent dark:bg-background dark:text-foreground",
      custom:
        "bg-primary text-background dark:bg-foreground dark:text-background hover:bg-primary/80",
    },
  },
  facebook: {
    text: "Sign In with Facebook",
    icons: {
      default: <FaFacebook className="w-5 h-5" />,
      custom: <FaFacebook className="w-5 h-5" />,
    },
    colors: {
      default: "bg-[#1877F2] text-foreground hover:bg-[#1877F2]/80",
      custom:
        "bg-primary text-background dark:bg-foreground dark:text-background hover:bg-primary/80",
    },
  },
  github: {
    text: "Sign In with Github",
    icons: {
      default: <FaGithub className="w-5 h-5" />,
      custom: <FaGithub className="w-5 h-5" />,
    },
    colors: {
      default:
        "bg-black text-background dark:text-foreground hover:bg-black/80 dark:hover:bg-zinc-900",
      custom:
        "bg-primary text-background dark:bg-foreground dark:text-background hover:bg-primary/80",
    },
  },
  linkedin: {
    text: "Sign In with Linkedin",
    icons: {
      default: <FaLinkedin className="w-5 h-5" />,
      custom: <FaLinkedin className="w-5 h-5" />,
    },
    colors: {
      default: "bg-[#007EBB] text-white hover:bg-[#007EBB]/80",
      custom:
        "bg-primary text-background dark:bg-foreground dark:text-background hover:bg-primary/80",
    },
  },
  microsoft: {
    text: "Sign In with Microsoft",
    icons: {
      default: (
        <svg
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[1.3rem] h-[1.3rem] dark:stroke-[1px] dark:stroke-background"
        >
          <path fill="#f3f3f3" d="M0 0h23v23H0z" />
          <path fill="#f35325" d="M1 1h10v10H1z" />
          <path fill="#81bc06" d="M12 1h10v10H12z" />
          <path fill="#05a6f0" d="M1 12h10v10H1z" />
          <path fill="#ffba08" d="M12 12h10v10H12z" />
        </svg>
      ),
      custom: <FaMicrosoft className="w-[1.3rem] h-[1.3rem]" />,
    },
    colors: {
      default:
        "bg-white text-[#757575] border border-border hover:bg-accent dark:hover:bg-accent dark:bg-background dark:text-foreground",
      custom:
        "bg-primary text-background dark:bg-foreground dark:text-background hover:bg-primary/80",
    },
  },
  apple: {
    text: "Sign In with Apple",
    icons: {
      default: <FaApple className="w-5 h-5" />,
      custom: <FaApple className="w-5 h-5" />,
    },
    colors: {
      default: "bg-black text-white hover:bg-black/50",
      custom:
        "bg-primary text-background dark:bg-foreground dark:text-background hover:bg-primary/80",
    },
  },
};

interface SocialLoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: providerType;
  variant?: string;
  text?: string;
  className?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  provider,
  variant = "default",
  text,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "w-full flex items-center justify-center gap-3 px-6 py-2 rounded-lg text-base font-medium transition-all duration-300",
        SocialLoginButtonVariants[provider].colors[variant],
        className
      )}
      {...props}
    >
      {SocialLoginButtonVariants[provider].icons[variant]}
      {text ?? SocialLoginButtonVariants[provider].text}
    </button>
  );
};

export default SocialLoginButton;
