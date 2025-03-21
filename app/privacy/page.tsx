import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, and payment information.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use your information to provide and improve our services, process transactions, send you important updates, and personalize your experience with Optiq UI Pro.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use third-party services that collect, monitor and analyze this information to improve our service's functionality and user experience.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us.",
  },
  {
    title: "Changes to This Policy",
    content:
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date.',
  },
];
const PrivacyPage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <main className="w-full max-w-3xl mx-auto py-24 md:py-40 px-8">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-center">
            Privacy Policy
          </h2>
          <h3 className="text-muted-foreground text-xl sm:text-center max-w-lg mx-auto mt-4">
            This Privacy Policy outlines how Optiq UI Pro collects, uses, and
            protects your personal information.
          </h3>
        </div>
        <div className="flex flex-col gap-y-6 mt-12">
          {sections.map((section, index) => (
            <div key={index} className="grid gap-y-1">
              <h3 className="text-xl font-semibold text-foreground">
                {section.title}
              </h3>
              <p className="text-muted-foreground text-base">
                {section.content}
              </p>
            </div>
          ))}
          <div className="grid gap-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              Contact Us
            </h3>
            <p className="text-muted-foreground text-base">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <Link
                href={"https://x.com/jacob_brn"}
                className="underline text-foreground underline-offset-2"
              >
                @jacob_brn
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer className="bg-background" />
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_120%)] lg:[mask-image:radial-gradient(ellipse_30%_45%_at_50%_45%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default PrivacyPage;
