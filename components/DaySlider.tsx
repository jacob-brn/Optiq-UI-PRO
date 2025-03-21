"use client";

import { Frame, Info } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

interface DaysSliderProps {
  min: number;
  max: number;
  defaultValue: number;
  icon: React.ReactNode;
  title: string;
  selectedDays: number;
  setSelectedDays: (value: number) => void;
}

export default function DaysSlider({
  min,
  max,
  defaultValue,
  icon,
  title,
  selectedDays,
  setSelectedDays,
}: DaysSliderProps) {
  return (
    <div className="w-full space-y-4 realtive">
      <div className="flex items-center gap-2">
        {icon}
        <h4>{title}</h4>
      </div>

      <div className="px-1 flex flex-row gap-x-4 items-start justify-center">
        <div className="relative flex-grow pr-2">
          <Slider
            defaultValue={[defaultValue]}
            min={min}
            max={max}
            step={1}
            className="[&_[role=slider]]:bg-rose-500 [&_[role=slider]]:border-rose-600 [&_[role=slider]]:hover:border-rose-700 [&_[role=slider]]:focus:border-rose-700 [&_[role=track]]:bg-rose-600"
            onValueChange={(value) => setSelectedDays(value[0])}
          />

          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>2 days</span>
            <span>30 days</span>
          </div>
        </div>
        <div className="border-2 border-rose-500 py-0.5 px-2 rounded-lg">
          <span className="font-bold">{selectedDays} </span>days
        </div>
      </div>
    </div>
  );
}
