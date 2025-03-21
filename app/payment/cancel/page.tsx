import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentFormattedDate } from "@/utils/formatDate";
import { Star } from "lucide-react";
import Link from "next/link";

const CheckoutCancelPage = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Payment Cancelled</CardTitle>
          <CardDescription>{getCurrentFormattedDate()}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-4">
          <Link href="/" className="w-full">
            <Button className="w-full group relative font-semibold">
              Home
            </Button>
          </Link>
          <Link href="/templates" className="w-full">
            <Button
              variant={"outline"}
              className="w-full group relative font-semibold"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Star className="fill-current transition-all duration-300 group-hover:text-rose-600" />
                Explore Templates
              </span>
            </Button>
          </Link>
        </CardContent>
      </Card>
      <div className="-z-[10] w-full h-full absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_70%,transparent_120%)]"></div>
    </div>
  );
};

export default CheckoutCancelPage;
