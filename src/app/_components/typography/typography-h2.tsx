import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "tailwind-cn";

interface ITypographyH2Props extends ComponentPropsWithoutRef<"h2"> {}

export default function TypographyH2({
  children,
  className,
  ...rest
}: ITypographyH2Props) {
  const baseClasses = "text-7xl font-bold text-white leading-none";
  const mergedClasses = cn(baseClasses, className);

  return (
    <h2 className={mergedClasses} {...rest}>
      {children}
    </h2>
  );
}
