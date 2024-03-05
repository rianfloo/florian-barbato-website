import { ComponentPropsWithoutRef } from "react";
import { cn } from "tailwind-cn";

interface ITypographyLeadProps extends ComponentPropsWithoutRef<"p"> {}

export default function TypographyLead({
  children,
  className,
  ...rest
}: ITypographyLeadProps) {
  const baseClasses = "text-[#C0C0C0] text-lg leading-7";
  const mergedClasses = cn(baseClasses, className);

  return (
    <p className={mergedClasses} {...rest}>
      {children}
    </p>
  );
}
