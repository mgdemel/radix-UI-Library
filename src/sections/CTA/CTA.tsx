import { Paragraph, PrimaryButton, Title } from "@/components";
import React from "react";

export const CTA = () => {
  return (
    <section className="p-10 w-full bg-neutral">
      <div className="mx-auto flex-col flex items-center justify-center gap-1">
        <Title text="CTA title" styles="text-white" />
        <Paragraph text="CTA paragraph" styles="text-white" />
        <PrimaryButton text="CTA button" />
      </div>
    </section>
  );
};
