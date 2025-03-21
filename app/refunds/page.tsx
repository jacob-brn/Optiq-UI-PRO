import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const RefundsPage = () => {
  return (
    <div className="w-full relative">
      <Header />
      <main className="w-full max-w-3xl mx-auto py-24 md:py-40 px-8">
        <div>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-center">
            Refunds Policy
          </h2>
          <h3 className="text-muted-foreground text-xl max-w-xl sm:text-center mx-auto mt-4">
            Our policy regarding refunds for Optiq UI Pro products.
          </h3>
        </div>
        <div className="flex flex-col gap-y-6 mt-12">
          <div className="grid gap-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              No Refunds Policy
            </h3>
            <p className="text-muted-foreground text-base">
              Due to the nature of our digital products, we do not offer refunds
              for Optiq UI Pro purchases.
            </p>
          </div>
          <div className="grid gap-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              Support and Assistance
            </h3>
            <p className="text-muted-foreground text-base">
              Optiq UI Pro is a self-serve product. We do not offer technical
              support. However, if you have a bug to report, please message us
              at{" "}
              <Link href="https://x.com/jacob_brn" className="text-foreground">
                @jacob_brn
              </Link>{" "}
              and we will fix it as soon as possible.
            </p>
          </div>
        </div>
      </main>
      <Footer className="bg-background" />
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_120%)] lg:[mask-image:radial-gradient(ellipse_30%_45%_at_50%_45%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default RefundsPage;
