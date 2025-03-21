"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleHelp, PlusCircle } from "lucide-react";
import { categoryType, FAQProps, FAQS } from "@/config/FAQ";

const FAQAccordionItem = (
  props: FAQProps & {
    currentCategory: categoryType;
    isOpen: boolean;
    toggleOpen: () => void;
  }
) => {
  return (
    <div className="mb-4 px-4 py-4 border border-border rounded-md">
      <div className="flex flex-row items-center justify-center gap-x-4">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={props.toggleOpen}
        >
          <span className="text-foreground font-medium">{props.question}</span>
          <PlusCircle
            className={`text-muted-foreground transition-transform duration-300 ${
              props.isOpen ? "transform -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {props.isOpen && (
          <motion.div
            key={`content-${props.question}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: "easeInOut" },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="mt-2">
              <p className="text-muted-foreground text-base">{props.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const containerVariants = {
  hidden: {
    filter: "blur(8px)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      filter: { duration: 0.15 },
      opacity: { duration: 0.15 },
      staggerChildren: 0.1,
    },
  },
  exit: {
    filter: "blur(8px)",
    opacity: 0,
    transition: {
      filter: { duration: 0.15 },
      opacity: { duration: 0.15 },
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FAQAccordion = ({
  currentCategory,
}: {
  currentCategory: categoryType;
}) => {
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    setOpenIndex(-1);
  }, [currentCategory]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid gap-y-8"
        >
          <div className="space-y-4">
            {FAQS.filter((faq) => faq.category === currentCategory).map(
              (faq, index) => (
                <motion.div
                  layout="position"
                  key={`faq-${index}`}
                  variants={itemVariants}
                  className="relative"
                >
                  <FAQAccordionItem
                    currentCategory={currentCategory}
                    question={faq.question}
                    answer={faq.answer}
                    category={faq.category ?? "general"}
                    icon={faq.icon ?? <CircleHelp />}
                    isOpen={index === openIndex}
                    toggleOpen={() => {
                      if (index === openIndex) {
                        setOpenIndex(-1);
                      } else {
                        setTimeout(() => setOpenIndex(index), 1);
                        setOpenIndex(-1);
                      }
                    }}
                  />
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;
