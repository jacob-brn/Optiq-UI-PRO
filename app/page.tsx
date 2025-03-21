import ComparisonSection from "@/components/ComparisonSection";
import DialogButton from "@/components/DialogButton";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Rays from "@/components/Rays";
import { StickyCard } from "@/components/StickyCard";
import { Button } from "@/components/ui/button";
import { TemplateProps, templates } from "@/config/templates";
import { LogIn, SquareMousePointer, Star } from "lucide-react";
import Link from "next/link";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <StickyCard className="min-h-max">
        <main className="pt-32 pb-20 md:py-60 md:pb-40 px-8 relative overflow-hidden rounded-b-2xl scale-x-100">
          <h1 className="tracking-tight font-extrabold text-4xl md:text-5xl lg:text-7xl text-left md:text-center text-transparent bg-clip-text bg-[radial-gradient(hsl(var(--foreground))_20%,theme(colors.neutral.500)_50%,theme(colors.neutral.600)_100%)]">
            Build your next wonderful <br /> product 50% faster
          </h1>
          <h2 className="my-4 text-muted-foreground mx-auto max-w-5xl text-left md:text-center text-base md:mt-4 md:text-lg">
            Explore ever growing collection of templates.
            <br />
            Focus on what matters most - building and marketing your product.
          </h2>
          <Rays
            castDirection="from-left"
            rayWidth="w-[20px] md:w-[50px] lg:w-[75px]"
            className="-top-2/3"
          />

          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-6">
            <Link
              href={"/templates"}
              className="w-full md:w-auto min-w-[200px] group"
            >
              <Button
                variant={"default"}
                className="w-full md:w-auto min-w-[200px] group relative px-6 py-5 font-semibold"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Star className="fill-current transition-all duration-300 group-hover:text-rose-600" />
                  Explore Templates
                </span>
              </Button>
            </Link>
            <Link href={"/login"} className="w-full md:w-auto min-w-[200px]">
              <Button
                variant={"outline"}
                className="w-full group relative px-6 py-5 font-medium text-foreground rounded-md overflow-hidden transition-all duration-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <LogIn />
                </span>
              </Button>
            </Link>
          </div>
          <div className="mt-10 grid grid-flow-col lg:grid-flow-col gap-x-6 gap-y-2 relative">
            <div className="flex items-center justify-center flex-row gap-4 px-4 overflow-x-scroll [scrollbar-width:none] flex-wrap">
              <RiNextjsFill className="size-8 text-neutral-500 flex-shrink-0 transition-all duration- cursor-pointer hover:text-neutral-400" />
              <FaReact className="size-8 text-neutral-500 flex-shrink-0 stroke-[1.5] transition-all duration- cursor-pointer hover:text-neutral-400" />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="size-8 text-neutral-500 flex-shrink-0 stroke-[1] transition-all duration- cursor-pointer hover:text-neutral-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"></path>
              </svg>

              <TbBrandFramerMotion className="size-8 text-neutral-500 flex-shrink-0 stroke-[1.5] transition-all duration- cursor-pointer hover:text-neutral-400" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="shadcn"
                viewBox="0 0 256 256"
                className="size-8 text-neutral-500 flex-shrink-0 stroke-[1.5] transition-all duration- cursor-pointer hover:text-neutral-400"
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
              <SiTypescript className="size-8 text-neutral-500 flex-shrink-0 transition-all duration- cursor-pointer hover:text-neutral-400" />
            </div>
          </div>
        </main>
        <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_120%)]"></div>
      </StickyCard>
      <StickyCard className="mt-1 bg-gradient-to-t from-stone-900 to-stone-950">
        <section
          className="border-t-2 rounded-xl py-20 h-full grid"
          id="templates"
        >
          <div className="w-full max-w-7xl mx-auto px-8">
            <h3 className="text-4xl font-semibold text-center text-balance tracking-tight text-foreground ">
              Templates made for your case
            </h3>
          </div>
          {templates.map((template: TemplateProps, idx: number) => (
            <div
              className="w-full max-w-7xl mx-auto px-8 py-12 sm:py-20 mt-6 md:mt-12"
              id="saas"
              key={`template-${template.id}`}
            >
              <div className="grid grid-cols-1 gap-x-16 gap-y-12 sm:gap-y-20 xl:grid-cols-5">
                <div className="xl:col-span-2 flex flex-col justify-center">
                  <p className="text-rose-500 text-xl font-medium">
                    ${template.price} USD
                  </p>
                  <h4 className="text-3xl font-bold text-foreground sm:text-4xl mt-2">
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
                    <DialogButton
                      templateId={template.id}
                      linkHref={`/templates/${template.id}`}
                      className="w-full md:w-auto min-w-[250px]"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-1.5 font-semibold">
                        Buy Now <span className="">${template?.price}</span>
                      </span>
                    </DialogButton>
                    <Link
                      href={template.previewUrl}
                      className="w-full md:w-auto min-w-[200px]"
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
          ))}
        </section>
        <section className="max-w-7xl w-full mx-auto rounded-xl py-20 h-full grid px-8">
          <h3 className="text-4xl font-medium text-center text-balance tracking-tight text-foreground ">
            Calculate How Much You Will Save
          </h3>
          <h4 className="my-4 text-muted-foreground mx-auto max-w-lg text-center text-base md:mt-4 md:text-lg">
            See how much time and money you can save by using our templates
            compared to building everything from scratch.
          </h4>
          <div className="mt-8 grid grid-cols-1 gap-y-6 xl:grid-cols-2 items-center justfify-center">
            <ComparisonSection />
          </div>
        </section>
        <FAQSection />
        <Footer />
      </StickyCard>
    </div>
  );
}
