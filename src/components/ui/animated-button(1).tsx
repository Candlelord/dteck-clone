"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type AnimatedButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  isExternal?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function AnimatedButton({
  children,
  href,
  className = "",
  variant = "primary",
  isExternal = false,
  type = "button",
}: AnimatedButtonProps) {
  const getButtonClass = () => {
    const baseClasses = "relative overflow-hidden rounded-md px-6 py-3 font-medium inline-flex items-center justify-center transition-colors duration-300";

    switch (variant) {
      case "primary":
        return `${baseClasses} bg-primary text-white hover:bg-primary/90 ${className}`;
      case "secondary":
        return `${baseClasses} bg-white text-navy hover:bg-gray-100 ${className}`;
      case "outline":
        return `${baseClasses} border border-primary text-primary hover:bg-primary/10 ${className}`;
      default:
        return `${baseClasses} bg-primary text-white hover:bg-primary/90 ${className}`;
    }
  };

  const buttonContent = (
    <>
      <span className="z-10 relative">{children}</span>
      <motion.span
        className="absolute inset-0 bg-white bg-opacity-20 z-0"
        initial={{ x: "-100%", opacity: 0.5 }}
        whileHover={{ x: "100%", opacity: 0.2 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClass()}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <Link href={href} className={getButtonClass()}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button type={type} className={getButtonClass()}>
      {buttonContent}
    </button>
  );
}
