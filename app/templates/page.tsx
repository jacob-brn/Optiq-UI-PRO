import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { TemplateProps, templates } from "@/config/templates";
import Link from "next/link";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Metadata } from "next";
import DialogButton from "@/components/DialogButton";

export const metadata: Metadata = {
  title: "Templates - Optiq UI Pro",
  description:
    "Collection of templates for building your next product. Built with React, NextJS, TailwindCSS, Framer Motion and Typescript.",
};

const TemplatesPage = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="max-w-7xl w-full mx-auto py-32 xl:border-x">
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center justify-center relative py-8 px-8">
          <h1 className="text-3xl md:text-4xl font-medium">Templates</h1>
          <h2 className="max-w-lg text-center mt-4 text-muted-foreground px-4">
            Collection of templates for building your next product. Built with
            React, NextJS, TailwindCSS, Framer Motion and Typescript.
          </h2>
          <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]  [mask-image:radial-gradient(ellipse_50%_90%_at_50%_100%,#000_70%,transparent_120%)]"></div>
        </div>
        <div className="max-w-7xl w-full mx-auto border-t pt-16 xl:pt-32 px-8">
          {templates.map((template: TemplateProps, idx: number) => (
            <Link href={`/templates/${template.id}`} key={idx}>
              <div className="w-full max-w-7xl mx-auto" id={template.id}>
                <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:gap-y-12 xl:grid-cols-5">
                  <div className="xl:col-span-2 flex flex-col justify-center">
                    <h4 className="text-3xl font-bold text-foreground sm:text-4xl">
                      {template.name} Template
                    </h4>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                      {template.description}
                    </p>
                    <div className="mt-4 flex items-center justify-start flex-row gap-1 flex-wrap">
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
                    <div className="flex flex-col xl:flex-row mt-8 gap-4">
                      <DialogButton templateId={template.id} linkHref={""}>
                        <span className="relative z-10 flex items-center justify-center gap-1.5 font-semibold">
                          Buy Now <span className="">${template.price}</span>
                        </span>
                      </DialogButton>
                    </div>
                  </div>
                  <div className="xl:col-span-3 -order-1 xl:order-1">
                    <video
                      className="w-full rounded-xl border border-border aspect-video"
                      src="/saas.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplatesPage;
