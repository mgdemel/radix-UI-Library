import { Button, Heading, Text } from "@/components";

export const CallToActionBanner = () => {
  const tempStr = "I am clicked!";

  return (
    <section className="w-full">
      <div className="mx-auto flex-col flex items-center justify-center gap-4">
        <Heading level="h1" size="9" text="CTA Heading" />
        <Text size="6" type="p" text="CTA paragraph" />
        <Button
          size="4"
          text="CTA button"
          type="primary"
          onClick={() => console.log(tempStr)}
        />
      </div>
    </section>
  );
};
