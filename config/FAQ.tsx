import { DollarSign, Headphones, Video } from "lucide-react";

const categories = ["general", "support"];

type categoryType = (typeof categories)[number];

interface FAQProps {
  icon?: React.ReactNode;
  question: string;
  answer: string;
  category?: categoryType;
}

const FAQS: FAQProps[] = [
  {
    question: "Do you offer refunds",
    answer: "Due to the nature of digital products, we do not offer refunds.",
    category: "general",
  },
  {
    question: "How do I get access once I've paid?",
    answer:
      "Once you purchase through stripe, login to your account and you will be able to download the template",
    category: "general",
  },
  {
    question: "Do you offer technical support?",
    answer:
      "No, Optiq UI is a self-serve product and does not offer technical support.",
    category: "support",
  },
];

export { FAQS, categories };
export type { FAQProps, categoryType };
