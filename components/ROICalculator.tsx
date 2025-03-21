"use client";
import { Clock, Code, DollarSign, Frame } from "lucide-react";
import DaysSlider from "./DaySlider";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Input } from "./ui/input";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

const emojisUrl = [
  "/neutral.webp",
  "/frown.webp",
  "/tear-drop.webp",
  "/crying.webp",
  "/cursing.webp",
  "/skull.webp",
];
const ROICalculator = ({
  totalCost,
  setTotalCost,
  totalWaitTime,
  setTotalWaitTime,
}: {
  totalCost: number | null;
  setTotalCost: React.Dispatch<React.SetStateAction<number | null>>;
  totalWaitTime: number | null;
  setTotalWaitTime: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [designerTime, setDesignerTime] = useState<number>(10);
  const [developerTime, setDeveloperTime] = useState<number>(15);
  const [designerRate, setDesignerRate] = useState<number>(100);
  const [developerRate, setDeveloperRate] = useState<number>(150);

  useEffect(() => {
    const calculateCost = (): number => {
      const designerCost = designerTime * designerRate * 8;
      const developerCost = developerTime * developerRate * 8;

      return designerCost + developerCost;
    };

    const calculateWaitTime = (): number => {
      return Math.round(designerTime + developerTime);
    };
    setTotalCost(calculateCost());
    setTotalWaitTime(calculateWaitTime());
  }, [designerTime, developerTime, designerRate, developerRate]);

  const selectedEmoji = useMemo(() => {
    const minDays = 2,
      maxDays = 30;
    const minRate = 50,
      maxRate = 300;

    let timeScore =
      (designerTime + developerTime - 2 * minDays) /
      (2 * maxDays - 2 * minDays);
    let rateScore =
      (designerRate + developerRate - 2 * minRate) /
      (2 * maxRate - 2 * minRate);

    let finalScore = timeScore * 0.8 + rateScore * 0.5;

    let emojiIndex = 0;
    if (finalScore < 0.2) emojiIndex = 0; // Neutral
    else if (finalScore < 0.4) emojiIndex = 1; // Frown
    else if (finalScore < 0.6) emojiIndex = 2; // Tear-drop
    else if (finalScore < 0.8) emojiIndex = 3; // Crying
    else if (finalScore < 0.95) emojiIndex = 4; // Cursing
    else emojiIndex = 5; // Skull

    return emojisUrl[emojiIndex];
  }, [designerTime, developerTime, designerRate, developerRate]);

  return (
    <Card className="bg-background grid h-min ">
      <CardHeader className="border-b text-center">
        <CardTitle className="tracking-tight text-2xl font-bold">
          Custom Landing Page
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          Estimate how much it would cost to build these templates with your
          team
        </CardDescription>
      </CardHeader>
      <CardContent className="border-b pt-6">
        <div className="w-full flex items-center justify-center flex-col gap-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedEmoji}
              initial={{
                scale: 0.5,
                filter: "blur(3px)",
              }}
              animate={{
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Image
                src={selectedEmoji}
                alt="Emoji representing the current price and wait time"
                width={180}
                height={180}
                unoptimized
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-muted-foreground" />
              <div>
                <span className="text-muted-foreground text-sm">Payment</span>
                <div className="text-2xl">
                  <span className="text-rose-500 font-semibold">
                    ${totalCost?.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="h-12 w-[1.5px] bg-gray-700 hidden xl:block" />

            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-muted-foreground" />
              <div>
                <span className="text-muted-foreground text-sm">Wait Time</span>
                <div className="text-2xl text-muted-foreground">
                  <span className="text-rose-500 font-semibold">
                    {totalWaitTime}
                  </span>
                  <span> days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-6 flex-col gap-y-6">
        <DaysSlider
          min={2}
          max={30}
          defaultValue={10}
          icon={<Frame className="h-4 w-4 text-muted-foreground" />}
          title={"Designer Time"}
          selectedDays={designerTime}
          setSelectedDays={setDesignerTime}
        />
        <DaysSlider
          min={2}
          max={30}
          defaultValue={10}
          icon={<Code className="h-4 w-4 text-muted-foreground" />}
          title={"Developer Time"}
          selectedDays={developerTime}
          setSelectedDays={setDeveloperTime}
        />
        <div className="w-full flex flex-col gap-4 xl:flex-row items-start justify-between">
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row items-center justify-start">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-base">Designer Rate ($/hour)</span>
            </div>
            <Input
              type="number"
              defaultValue={designerRate}
              min={50}
              max={300}
              onChange={(e) => setDesignerRate(Number(e.target.value))}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-row items-center justify-start">
              <DollarSign className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-base">Developer Rate ($/hour)</span>
            </div>
            <Input
              type="number"
              defaultValue={150}
              min={50}
              max={300}
              onChange={(e) => setDeveloperRate(Number(e.target.value))}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ROICalculator;
