"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type Ray = {
  rotate: number;
  opacity: number;
  translateY: number;
};

type CastDirectionType = "from-right" | "from-left" | "from-center";

interface RaysProps {
  className?: string;
  rayColor?: string;
  rayWidth?: string;
  blurAmount?: string;
  castDirection?: CastDirectionType;
  animationDuration?: number;
  animationDelay?: number;
  staggerDelay?: number;
  rays?: Ray[];
}

const POSITION_CLASSES: Record<CastDirectionType, string> = {
  "from-right":
    "absolute -top-1/4 left-full w-[300%] h-[200%] sm:w-[150%] sm:left-0 md:left-full",
  "from-center":
    "absolute -top-[150%] left-1/2 -translate-x-1/2 w-[300%] h-[200%] sm:w-[200%]",
  "from-left":
    "absolute -top-1/4 right-full w-[300%] h-[200%] sm:w-[150%] sm:right-0 md:right-full pointer-events-none",
};

const TRANSFORM_ORIGINS: Record<CastDirectionType, string> = {
  "from-right": "top left",
  "from-center": "top center",
  "from-left": "top right",
};

const RAY_POSITIONS: Record<CastDirectionType, string> = {
  "from-right": "top-0 left-0",
  "from-center": "top-0 left-0",
  "from-left": "top-0 right-0",
};

// Default rays configuration - moved outside component to prevent recreation
const DEFAULT_RAYS = [
  { rotate: 10, opacity: 50, translateY: 0 },
  { rotate: 2, opacity: 41, translateY: 15 },
  { rotate: -3, opacity: 40, translateY: 30 },
  { rotate: -9, opacity: 20, translateY: 45 },
  { rotate: -10, opacity: 46, translateY: 60 },
  { rotate: 22, opacity: 45, translateY: 30 },
  { rotate: 5, opacity: 45, translateY: 0 },
];

const Rays = ({
  className,
  rayColor = "white",
  rayWidth,
  blurAmount = "22px",
  castDirection = "from-left",
  animationDuration = 5,
  staggerDelay = 0.2,
  rays = DEFAULT_RAYS,
}: RaysProps) => {
  // Use Framer Motion's useInView hook
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    margin: "200px 0px",
    amount: "some",
  });

  const [isMobile, setIsMobile] = useState(false);
  const actualRays = isMobile ? rays.slice(0, 4) : rays;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const positionClasses = POSITION_CLASSES[castDirection];
  const transformOrigin = TRANSFORM_ORIGINS[castDirection];
  const rayPosition = RAY_POSITIONS[castDirection];

  const baseRotation =
    castDirection === "from-left"
      ? -45
      : castDirection === "from-center"
      ? 0
      : 45;

  // Modified container variants - start with opacity 1
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  // Simplified ray variants
  const rayVariants = {
    hidden: {
      scaleY: 0,
    },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Memoize blur amount as a number
  const blurAmountNum = Number.parseInt(blurAmount);

  // Don't return early - render a placeholder with the same ref
  return (
    <motion.div
      ref={ref}
      className={cn(positionClasses, "pointer-events-none", className)}
      style={{
        filter: `blur(${blurAmount})`,
        transform: `rotate(${baseRotation}deg)`,
        willChange: "transform", // Hardware acceleration hint
      }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {actualRays.map((ray, index) => {
        const opacityValue = ray.opacity / 100;

        return (
          <motion.div
            key={index}
            className={cn(
              "absolute w-[15px] sm:w-[20px] md:w-[30px]",
              rayPosition,
              rayWidth
            )}
            style={{
              background: `linear-gradient(to bottom, ${rayColor} 70%, transparent)`,
              transformOrigin,
              opacity: opacityValue,
              height: "200%",
              willChange: "transform", // Hardware acceleration hint
              filter: `blur(${blurAmountNum})`,
            }}
            variants={rayVariants}
            animate={
              inView
                ? {
                    translateY: [ray.translateY, ray.translateY + ray.rotate],
                    rotate: [
                      ray.rotate,
                      ray.rotate + (index % 2 === 0 ? 2 : -2),
                    ],
                  }
                : {}
            }
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: animationDuration,
              ease: "easeInOut",
              delay: index * 0.1, // Simplified delay calculation
            }}
          />
        );
      })}
    </motion.div>
  );
};

export default Rays;
