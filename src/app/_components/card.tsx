import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "tailwind-cn";

interface ITCardProps extends ComponentPropsWithoutRef<"div"> {}

export default function Card({ children, className, ...rest }: ITCardProps) {
  const baseClasses = "bg-[#0F0F0F] rounded-lg p-6 border border-[#262626]";
  const mergedClasses = cn(baseClasses, className);
  return (
    <div className={mergedClasses} {...rest}>
      {children}
    </div>
  );
}
