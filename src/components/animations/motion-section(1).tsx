"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
  threshold?: number;
};

export default function MotionSection({
  children,
  className = "",
  delay = 0.1,
  direction = "up",
  distance = 50,
  once = true,
  threshold = 0.1,
}: MotionSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold,
  });

  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
