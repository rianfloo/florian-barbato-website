import React, { ComponentPropsWithoutRef } from "react";

import { cn } from "tailwind-cn";

interface ITypographyH1Props extends ComponentPropsWithoutRef<"h1"> {}

export default function TypographyH1({
  children,
  className,
  ...rest
}: ITypographyH1Props) {
  const baseClasses = "text-5xl md:text-9xl font-bold text-white";
  const mergedClasses = cn(baseClasses, className);

  return (
    <h1 className={mergedClasses} {...rest}>
      {children}
    </h1>
  );
}
