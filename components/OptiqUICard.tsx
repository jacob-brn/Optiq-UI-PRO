"use client";
import { CircleCheck, Clock, DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

const emojiUrl = "/hearts.webp";

const OptiqUICard = ({
  totalCost,
  totalWaitTime,
}: {
  totalCost: number | null;
  totalWaitTime: number | null;
}) => {
  return (
    <Card className="bg-muted/60 grid py-4">
      <CardHeader className="border-b border-border text-center h-min">
        <CardTitle className="tracking-tight text-2xl font-bold">
          Optiq UI Landing Page
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          Get huge benefits with our template
        </CardDescription>
      </CardHeader>
      <CardContent className="border-b pt-6 h-full">
        <div className="w-full flex items-center justify-center flex-col gap-y-4">
          <Image
            src={emojiUrl}
            alt="Emoji representing the current price and wait time"
            width={180}
            height={180}
            unoptimized
            className="object-contain"
          />
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-muted-foreground" />
              <div>
                <span className="text-muted-foreground text-sm">Payment</span>
                <div className="text-2xl">
                  <span className="text-green-500 font-semibold">$39</span>
                </div>
              </div>
            </div>

            <div className="h-12 w-[1.5px] bg-gray-700 hidden xl:block" />

            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-muted-foreground" />
              <div>
                <span className="text-muted-foreground text-sm">Wait Time</span>
                <div className="text-2xl text-muted-foreground">
                  <span className="text-green-500 font-semibold">0</span>
                  <span> days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-6 flex-col gap-y-6">
        <div className="space-y-8">
          <div className="flex justify-center gap-6 bg-accent p-6 rounded-xl flex-col xl:flex-row items-start xl:items-center">
            <CircleCheck className="h-8 w-8 flex-none text-green-600" />
            <p className="text-2xl xl:text-2xl font-medium">
              Reduce costs by{" "}
              <span className="text-green-500">
                ${((totalCost ?? 26000) - 39).toLocaleString()}
              </span>
              . It's{" "}
              <span className="text-green-500">
                {(
                  (((totalCost ?? 26000) - 39) / (totalCost ?? 26000)) *
                  100
                ).toFixed(1)}
                %
              </span>{" "}
              cheaper than building it yourself.
            </p>
          </div>
          <div className="flex justify-center gap-6 bg-accent p-6 rounded-xl flex-col xl:flex-row items-start xl:items-center box-content">
            <CircleCheck className="h-8 w-8 flex-none text-green-600 " />
            <p className="text-2xl xl:text-2xl font-medium pr-4">
              Launch{" "}
              <span className="text-green-500">
                {(totalWaitTime ?? 25) - 0.5}
              </span>{" "}
              business days sooner on average. That's almost{" "}
              <span className="text-green-500">
                {(((totalWaitTime ?? 25) - 0.5) / 5).toFixed(1)}
              </span>{" "}
              weeks earlier!
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OptiqUICard;
