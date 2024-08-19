import { Text, PrimaryButton, Heading } from "@/components";

export const CallToActionBanner = () => {
  const tempStr = "I am clicked!";

  return (
    <section className="w-full">
      <div className="mx-auto flex-col flex items-center justify-center gap-4">
        <Heading level="h1" size="9" text="CTA Heading" />
        <Text size="6" type="p" content="CTA paragraph" />
        <PrimaryButton
          size="4"
          text="CTA button"
          onClick={() => console.log(tempStr)}
        />
      </div>
    </section>
  );
};
