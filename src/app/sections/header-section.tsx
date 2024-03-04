import React, { ComponentPropsWithoutRef } from "react";
import TypographyH1 from "../_components/typography/typography-h1";
import { cn } from "tailwind-cn";

interface IHeaderSectionProps extends ComponentPropsWithoutRef<"section"> {}

export default function HeaderSection({
  className,
  ...rest
}: IHeaderSectionProps) {
  const baseClasses = "";
  const mergedClasses = cn(baseClasses, className);
  return (
    <section className={mergedClasses} {...rest}>
      <TypographyH1>
        Hi, you are currently viewing my WIP Portfolio.
      </TypographyH1>
    </section>
  );
}
