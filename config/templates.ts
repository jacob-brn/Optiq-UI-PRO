type tech = {
  name: string;
  version?: string;
};

interface TemplateProps {
  id: string;
  name: string;
  repoName: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  price: number;
  productionPriceId: string;
  developmentPriceId: string;
  previewUrl: string;
  usedTech: tech[];
  features: string[];
  sections: string[];
}

const templates: TemplateProps[] = [
  {
    id: "saas",
    name: "SaaS",
    repoName: "SaaS-Template",
    description:
      "Build a beatiful landing page for your product or service. Includes 11 customizable sections, responsive design, dark and light theme, and much more.",
    thumbnailUrl: "/saas-template-thumbnail.png",
    videoUrl: "/saas.mp4",
    price: 39,
    productionPriceId: "price_1R56CwK9YrZBiErRjCUz10SS",
    developmentPriceId: "price_1R0ecRGbjt10Jx4Gkeo2PGyP",
    previewUrl: "https://optiqui-saas-template.vercel.app/",
    usedTech: [
      {
        name: "Next.js",
        version: "14",
      },
      {
        name: "React",
        version: "18",
      },
      {
        name: "TypeScript",
        version: "5",
      },
      {
        name: "TailwindCSS",
        version: "3.4",
      },
      {
        name: "Framer Motion",
        version: "11.4",
      },
      {
        name: "shadcn/ui",
      },
    ],
    features: [
      "Save 200+ hours of work",
      "1x Landing Page with 11 sections",
      "1x Blog using MDX",
      "Dark and light mode support",
      "100% Mobile responsive",
      "Tons of animations / micro-interactions",
      "Global config for content",
      "Dynamic Open Graph images",
      "Optimized for SEO",
    ],
    sections: [
      "Header",
      "Hero",
      "Logos",
      "Features",
      "Get Started",
      "Testimonials",
      "Pricing",
      "FAQ",
      "Blog",
      "CTA",
      "Footer",
    ],
  },
];

export { templates };
export type { TemplateProps };
