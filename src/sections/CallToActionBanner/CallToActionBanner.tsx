import { Button } from "@/components";
import { Heading, Text } from "@radix-ui/themes";

export const CallToActionBanner = () => {
  const tempStr = "I am clicked!";

  return (
    <section className="w-full">
      <div className="mx-auto flex-col flex items-center justify-center gap-4">
        <Heading as="h2" size="6">
          CTA heading
        </Heading>
        <Text> CTA paragraph</Text>
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
