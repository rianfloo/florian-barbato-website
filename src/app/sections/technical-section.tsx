import React, { ComponentPropsWithoutRef } from "react";
import TypographyH2 from "../_components/typography/typography-h2";
import { cn } from "tailwind-cn";

interface ITechnicalSectionProps extends ComponentPropsWithoutRef<"section"> {}

export default function TechnicalSection({
  className,
  ...rest
}: ITechnicalSectionProps) {
  const baseClasses = "";
  const mergedClasses = cn(baseClasses, className);
  return (
    <section className={mergedClasses} {...rest}>
      <div className="grid grid-cols-2">
        <TypographyH2>This will be a technical section. WIP</TypographyH2>
      </div>
    </section>
  );
}
