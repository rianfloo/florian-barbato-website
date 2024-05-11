import React, { ComponentPropsWithoutRef } from "react";
import { RiArtboard2Fill, RiCodeBoxFill } from "@remixicon/react";

import Card from "../_components/card";
import GridCard from "../_components/card/grid-card";
import TypographyH2 from "../_components/typography/typography-h2";
import TypographyLead from "../_components/typography/typography-lead";
import { cn } from "tailwind-cn";
import { skillData } from "../data/skills";

interface ITechnicalSectionProps extends ComponentPropsWithoutRef<"section"> {}

export default function TechnicalSection({
  className,
  ...rest
}: ITechnicalSectionProps) {
  const baseClasses = "";
  const mergedClasses = cn(baseClasses, className);
  return (
    <section className={mergedClasses} {...rest}>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <TypographyH2 className="md:w-7/12">
            Skills and expertise
          </TypographyH2>
          <TypographyLead className="mt-4 md:max-w-96">
            I am a full-stack developer with a focus on TypeScript. I am
            passionate about creating high-quality software and I am always
            looking to learn new things.
          </TypographyLead>
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="flex flex-col gap-2">
              <RiCodeBoxFill color="#2FF91D" />
              <h3 className="text-white font-bold">Code</h3>
              <p className="text-[#C0C0C0]">
                My primary skills are in programming. I began my journey with
                Ruby on Rails and have since shifted my focus to TypeScript,
                primarily using NestJS and Next.js for my projects.
              </p>
            </Card>
            <Card className="flex flex-col gap-2">
              <RiArtboard2Fill color="#2FF91D" />
              <h3 className="text-white font-bold">Design</h3>
              <p className="text-[#C0C0C0]">
                I do some design work, but I am not a designer. I use Figma for
                my design work and I am familiar with the basics of design
                principles. I am also familiar with the basics of UI/UX design.
              </p>
            </Card>
          </div>
        </div>

        {/* Skills cards */}
        <div className="grid md:grid-cols-2 border rounded-lg border-[#252525] p-2 gap-2">
          {skillData.map((skill) => (
            <GridCard key={skill.title} img={skill.img} title={skill.title} />
          ))}
        </div>
        {/* END skills cards */}
      </div>
    </section>
  );
}
