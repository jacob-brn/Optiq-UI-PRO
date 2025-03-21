"use client";

import { categories, categoryType } from "@/config/FAQ";
import FAQAccordion from "./FAQAccordion";
import { useState } from "react";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [currentFaqCategory, setCurrentFaqCategory] =
    useState<string>("general");

  return (
    <section className="w-full mx-auto py-20 max-w-7xl px-8" id="faq">
      <div className="grid grid-flow-row gap-y-6">
        <h4 className="text-4xl font-medium text-center text-balance tracking-tight text-foreground ">
          Frequently Asked Questions
        </h4>
        <p className="text-center mx-auto text-balance max-w-prose text-muted-foreground">
          These are the most commonly asked questions about Optiq UI Pro.
        </p>
        <div className="grid grid-flow-col w-max mx-auto border border-ring/30 rounded-md overflow-hidden">
          {categories.map((category: categoryType, index: number) => (
            <button
              key={`category-${index}`}
              onClick={() => setCurrentFaqCategory(category)}
              className={`${
                currentFaqCategory === category
                  ? "text-foreground"
                  : "hover:text-foreground/80"
              } relative text-foreground text-sm font-medium px-3 py-2 cursor-pointer rounded-md transition-all duration-300 `}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {currentFaqCategory === category && (
                <motion.span
                  layoutId="categories"
                  className="absolute inset-0 z-10 bg-muted rounded-md"
                  transition={{
                    type: "spring",
                    duration: 0.7,
                  }}
                />
              )}
              <span className="capitalize relative z-20"> {category}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-row mt-4">
          <FAQAccordion currentCategory={currentFaqCategory} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
