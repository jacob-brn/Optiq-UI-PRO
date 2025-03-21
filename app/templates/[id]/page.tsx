import type { Metadata } from "next";
import { templates } from "@/config/templates";
import Header from "@/components/Header";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Button, buttonVariants } from "@/components/ui/button";
import { Check, SquareMousePointer, Star } from "lucide-react";
import { StickyCard } from "@/components/StickyCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DialogButton from "@/components/DialogButton";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const template = templates.find((template) => template.id === id);

  return {
    title: `${template?.name} Template - Optiq UI Pro`,
    description: template?.description,
  };
};

const TemplatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const template = templates.find((template) => template.id === id);

  return (
    <div className="w-full">
      <Header />
      <StickyCard className="min-h-max">
        <section className="max-w-7xl w-full mx-auto relative pt-24 pb-12 px-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-y-6 xl:border-x">
          <div>
            <h1 className="text-4xl font-semibold text-foreground">
              {template?.name} Template
            </h1>
            <h2 className="max-w-lg mt-4 text-muted-foreground text-xl">
              {template?.description}
            </h2>
            <div className="w-max  mt-4 inline-flex items-center justify-start flex-row gap-1 flex-wrap">
              <RiNextjsFill className="size-7 text-neutral-500 flex-shrink-0 transition-all duration- cursor-pointer hover:text-neutral-400" />
              <FaReact className="size-7 text-neutral-500 flex-shrink-0 stroke-[1.5] transition-all duration- cursor-pointer hover:text-neutral-400" />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-7 text-neutral-500 flex-shrink-0 stroke-[1] transition-all duration- cursor-pointer hover:text-neutral-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
              </svg>

              <TbBrandFramerMotion className="size-7 text-neutral-500 flex-shrink-0 stroke-[1.5] transition-all duration- cursor-pointer hover:text-neutral-400" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="shadcn"
                viewBox="0 0 256 256"
                className="size-7 text-neutral-500 flex-shrink-0 stroke-[1.5] transition-all duration- cursor-pointer hover:text-neutral-400"
                fill="none"
                stroke="currentColor"
              >
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></line>
              </svg>
              <SiTypescript className="size-7 text-neutral-500 flex-shrink-0 transition-all duration- cursor-pointer hover:text-neutral-400" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-end justify-end gap-6">
            <DialogButton
              templateId={template?.id as string}
              linkHref=""
              className="w-full lg:w-auto group relative px-12 py-5 font-medium rounded-md overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5 font-semibold">
                Buy Now <span className="">${template?.price}</span>
              </span>
            </DialogButton>
            <Link
              href={template?.previewUrl ?? ""}
              className="w-full lg:w-auto "
              target="_blank"
            >
              <Button
                variant={"outline"}
                className="w-full group relative px-6 py-5 font-medium rounded-md overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Live Preview <SquareMousePointer />
                </span>
              </Button>
            </Link>
          </div>
          <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_45px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_100%,#000_70%,transparent_120%)]"></div>
        </section>
      </StickyCard>
      <StickyCard className="min-h-max bg-background">
        <main className="w-full border-t">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5">
            <div className="h-min xl:col-span-2 xl:border-l">
              <div className="h-min w-full flex flex-col justify-center py-8 px-8 border-b">
                <h3 className="text-xl font-semibold">What is this?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  This is a landing page template for a {template?.name}{" "}
                  product. The template is built with Next.js, TailwindCSS, and
                  Framer Motion.
                </p>
              </div>
              <div className="h-min w-full flex flex-col justify-center py-8 px-8 border-b">
                <h3 className="text-xl font-semibold">Who is this for?</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  You are launching a new {template?.name} product but
                  don&apos;t want to spend time on learning frontend or figuring
                  out how to design.
                </p>
              </div>
              <div className="h-min w-full flex flex-col justify-center py-8 px-8 border-b">
                <h3 className="text-xl font-semibold">
                  Built with the latest technologies
                </h3>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  {template?.usedTech.map(
                    (tech: { name: string; version?: string }, idx: number) => (
                      <li
                        key={`tech-${idx}`}
                        className={`flex flex-row items-center justify-start`}
                      >
                        <Check className="size-4 mr-1 text-muted-foreground" />
                        <span>
                          {tech.name}
                          {tech.version && (
                            <span className="text-muted-foreground">
                              {" "}
                              v{tech.version}
                            </span>
                          )}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="h-full xl:col-span-3 flex flex-col justify-center border-b xl:border-x -order-1 xl:order-1">
              <video
                src="/saas.mp4"
                autoPlay
                loop
                className="h-full object-cover"
              ></video>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto xl:border-x grid grid-cols-1 xl:grid-cols-3">
            <div className="xl:col-span-1 xl:border-r flex flex-col">
              <div className="py-8 px-8 ">
                <h3 className="text-xl font-semibold">What&apos;s included?</h3>
                <h4 className="text-sm text-muted-foreground mt-2">
                  This template is specifically designed for landing pages,
                  packed with essential features and components. It helps you
                  create stunning, high-converting landing pages much faster.
                </h4>
              </div>
              <div className="hidden relative xl:flex flex-grow flex-col items-center justify-center border-t px-8 py-8">
                <div className="flex flex-grow flex-col items-center justify-center gap-y-4">
                  <Link
                    href={"https://optiqui.com"}
                    className={cn(
                      buttonVariants({ size: "sm", variant: "outline" }),
                      "px-4 py-6 justify-between w-full"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="size-8 fill-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>

                    <h5 className="text-sm font-medium">
                      Browse our free components
                    </h5>
                  </Link>
                  <Link
                    href={"https://x.com/jacob_brn"}
                    className={cn(
                      buttonVariants({ size: "sm", variant: "outline" }),
                      "px-4 py-6 w-full"
                    )}
                  >
                    <Star className="size-8 fill-current" />
                    <h5 className="text-sm font-medium">See more of my work</h5>
                  </Link>
                </div>
                <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px]"></div>
              </div>
            </div>
            <div className="xl:col-span-2 border-t xl:border-t-0 grid">
              <div className="py-8 px-8">
                <h4 className="text-xl font-semibold">Features</h4>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2">
                  {template?.features.map((feature: string, idx: number) => (
                    <li
                      className="flex flex-row items-center justify-start"
                      key={`feature-${idx}`}
                    >
                      <Check className="size-4 mr-1 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-8 border-t">
                <h4 className="text-xl font-semibold">Sections</h4>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-y-2">
                  {template?.sections.map((section: string, idx: number) => (
                    <li
                      className="flex flex-row items-center justify-start"
                      key={`section-${idx}`}
                    >
                      <Check className="size-4 mr-1 text-muted-foreground" />
                      <span>{section}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </StickyCard>
    </div>
  );
};

export default TemplatePage;
