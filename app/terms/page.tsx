import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sections = [
  {
    title: "Overview",
    content:
      "These terms and conditions outline the rules and regulations for the use of Optiq UI Pro's website, located at pro.optiqui.com.",
  },
  {
    title: "Acceptance of Terms",
    content:
      "By accessing this website, we assume you accept these terms and conditions. Do not continue to use pro.optiqui.com if you do not agree to all of the terms and conditions stated on this page.",
  },
  {
    title: "Cookies",
    content:
      "The website uses cookies to help personalize your online experience. By accessing pro.optiqui.com, you agreed to use the required cookies.",
  },
  {
    title: "Content Liability",
    content:
      "We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
  },
];
const TermsPage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <main className="w-full max-w-3xl mx-auto py-24 md:py-40 px-8">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-center">
            Terms and Conditions
          </h2>
          <h3 className="text-muted-foreground text-xl max-w-xl sm:text-center mx-auto mt-4">
            Please go through the terms and conditions agreenment below to
            understand what you can and cannot do with Optiq UI Pro.
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
        </div>
      </main>
      <Footer className="bg-background" />
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_120%)] lg:[mask-image:radial-gradient(ellipse_30%_45%_at_50%_45%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default TermsPage;
