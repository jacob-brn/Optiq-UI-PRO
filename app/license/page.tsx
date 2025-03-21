import Footer from "@/components/Footer";
import Header from "@/components/Header";

const sections = [
  {
    title: "Overview",
    content:
      "This agreement outlines the permissions granted by our Optiq UI License for each item available for purchase or download on pro.optiqui.com.",
  },
  {
    title: "License Grant",
    content:
      "The Optiq UI License provides you with an ongoing, non-exclusive, worldwide license to use the digital work (“Item”).",
  },
];
const LicensePage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <main className="w-full max-w-3xl mx-auto py-24 md:py-40 px-8">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-center">
            License Agreement
          </h2>
          <h3 className="text-muted-foreground text-xl max-w-xl sm:text-center mx-auto mt-4">
            Please go through the licensing agreenment below to understand what
            you can and cannot do with Optiq UI Pro.
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
              Permitted Uses
            </h3>
            <ul className="text-base text-muted-foreground list-disc list-inside">
              <li>
                Create End Products: You can create unlimited end products for
                yourself or your clients.
              </li>
              <li>
                Distribution: End products may be sold, licensed, sub-licensed,
                or freely distributed.
              </li>
              <li>
                Modification: You may modify, manipulate, and combine the Item
                with other works to create derivative works. These resulting
                works are subject to this license.
              </li>
              <li>
                Multi-use: This license allows you to use an Item multiple times
                in various projects.
              </li>
            </ul>
          </div>
          <div className="grid gap-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              Prohibited Uses
            </h3>
            <ul className="text-base text-muted-foreground list-disc list-inside">
              <li>
                Re-distribution: You cannot re-distribute the Item as a stock
                image or its source files, regardless of modifications.
              </li>
              <li>
                Marketplace Restrictions: You cannot sell, resell, or distribute
                the Item or derivative works on any marketplace, including
                pro.optiqui.com and other platforms.
              </li>
              <li>
                Template Creation: You cannot create themes, templates, or
                derivative products to sell on any marketplace.
              </li>
            </ul>
          </div>
          <div className="grid gap-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              Additional Terms
            </h3>
            <ul className="text-base text-muted-foreground list-disc list-inside">
              <li>
                Third-Party Components: Some Items may contain components
                sourced from elsewhere with different license terms, such as
                open source or Creative Commons licenses. These components will
                be identified in the Item&apos;s description or downloaded files
                and will be governed by their respective licenses.
              </li>
              <li>
                Ownership: The author retains ownership of the Item but grants
                you a license under these terms. This agreement is between you
                and the Item&apos;s author. pro.optiqui.com is not a party to
                this agreement.
              </li>
            </ul>
          </div>
          <p className="text-foreground text-base">
            Thank you for supporting the authors by adhering to these licensing
            terms.
          </p>
        </div>
      </main>
      <Footer className="bg-background" />
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_120%)] lg:[mask-image:radial-gradient(ellipse_30%_45%_at_50%_45%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default LicensePage;
