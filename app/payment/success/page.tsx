import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentFormattedDate } from "@/utils/formatDate";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const CheckoutSuccessPage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Payment Succesful</CardTitle>
          <CardDescription>{getCurrentFormattedDate()}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-4">
          <p className="text-muted-foreground max-w-sm">
            Your payment was successful. You can now login to your account and
            download your template.
          </p>
          <Link href="/login" className="w-full">
            <Button className="w-full group relative font-semibold">
              Log in
              <ChevronRight className="-ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </CardContent>
      </Card>
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default CheckoutSuccessPage;
