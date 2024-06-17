import { Paragraph, PrimaryButton, Heading } from "@/components";

export const CallToActionBanner = () => {
  return (
    <section className="p-10 w-full">
      <div className="mx-auto flex-col flex items-center justify-center gap-1">
        <Heading level="h1" size="9" text="CTA Heading" />
        <Paragraph text="CTA paragraph" />
        <PrimaryButton text="CTA button" />
      </div>
    </section>
  );
};
