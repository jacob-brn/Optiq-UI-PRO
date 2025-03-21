import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface SocialLinksProps {
  href: string;
  icon: React.ReactNode;
}

const footerLinkCategories = ["home", "templates", "account", "product"];

type footerLinkCategoryType = (typeof footerLinkCategories)[number];

interface FooterLinksProps {
  title: string;
  link: string;
  category: footerLinkCategoryType;
}

const SocialLinks: SocialLinksProps[] = [
  {
    href: "https://x.com/jacob_brn",
    icon: <FaXTwitter />,
  },
  {
    href: "https://github.com/jacob-brn/optiqui",
    icon: <FaGithub />,
  },
];

const FooterLinks: FooterLinksProps[] = [
  {
    title: "Log in",
    link: "/login",
    category: "account",
  },
  {
    title: "Sign up",
    link: "/signup",
    category: "account",
  },
  {
    title: "Home",
    link: "/",
    category: "home",
  },
  {
    title: "Optiq UI Pro",
    link: "/",
    category: "home",
  },
  {
    title: "Optiq UI Free",
    link: "https://optiqui.com",
    category: "home",
  },
  {
    title: "FAQs",
    link: "#faq",
    category: "home",
  },
  {
    title: "SaaS",
    link: "/templates/saas",
    category: "templates",
  },
  {
    title: "Terms and Conditions",
    link: "/terms",
    category: "product",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
    category: "product",
  },
  {
    title: "License",
    link: "/license",
    category: "product",
  },
  {
    title: "Refunds",
    link: "/refunds",
    category: "product",
  },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <section
      className={cn(
        "w-full mx-auto pt-12 pb-12 grid px-2 border-t border-border relative",
        className
      )}
    >
      <div className="max-w-6xl w-full mx-auto py-6 px-4 flex justify-between flex-col lg:flex-row gap-x-24 gap-12">
        <div className="grid grid-flow-row gap-6 lg:gap-0">
          <div className="flex flex-col gap-y-4 lg:gap-y-3">
            <div>
              <h3 className="text-xl font-bold">Optiq UI Pro</h3>
            </div>
            <p className="text-muted-foreground text-base text-pretty">
              Build your next wonderful product 50% faster.
            </p>
            <p className="text-muted-foreground text-base text-pretty max-w-xs mt-2">
              Building in public at{" "}
              <Link
                href={"https://x.com/jacob_brn"}
                className="text-rose-500 font-medium"
              >
                @jacob_brn
              </Link>
            </p>
            <div className="flex flex-wrap gap-x-3.5 items-start mt-2">
              {SocialLinks.map((link: SocialLinksProps, index: number) => (
                <Link
                  href={link.href}
                  key={`social-link-${index}`}
                  className={cn(
                    "[&_svg]:w-5 [&_svg]:h-5 text-muted-foreground hover:text-primary transition-all duration-300"
                  )}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4">
          {footerLinkCategories.map(
            (category: footerLinkCategoryType, index: number) => (
              <div
                className="flex flex-col gap-y-4"
                key={`footer-${category}-${index}`}
              >
                <p className="capitalize text-foreground text-sm font-medium">
                  {category}
                </p>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.filter((link) => link.category === category).map(
                    (link, index) => (
                      <li key={`footer-link-${index}`}>
                        <Link
                          href={link.link}
                          className="flex flex-row items-center text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                        >
                          {link.title}
                          <ChevronRight className="ml-0.5 h-4 w-4 group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Copyright © 2025 <span className="font-medium">Optiq UI Pro</span>.
          All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
