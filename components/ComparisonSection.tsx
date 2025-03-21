"use client";
import { useState } from "react";
import ROICalculator from "./ROICalculator";
import OptiqUICard from "./OptiqUICard";

const ComparisonSection = () => {
  const [totalCost, setTotalCost] = useState<number | null>(null);
  const [totalWaitTime, setTotalWaitTime] = useState<number | null>(null);

  return (
    <>
      <ROICalculator
        totalCost={totalCost}
        setTotalCost={setTotalCost}
        totalWaitTime={totalWaitTime}
        setTotalWaitTime={setTotalWaitTime}
      />
      <OptiqUICard totalCost={totalCost} totalWaitTime={totalWaitTime} />
    </>
  );
};

export default ComparisonSection;
