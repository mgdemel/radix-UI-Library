import { Heading, Blockquote, Text } from "@/components";
import { Accordion, Card } from ".././modules";
import { CallToActionBanner } from ".././sections";

export default function Home() {
  const items = [
    {
      id: "item 1",
      header: "Item 1",
      content: "Here is the content hiding in item 1"
    },
    {
      id: "item 2",
      header: "Item 2",
      content: "Here is the content hiding in item 2"
    },
    {
      id: "item 3",
      header: "Item 3",
      content: "Here is the content hiding in item 3"
    }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <header className="p-4 w-full mb-12">
        <Heading level="h1" size="8" text="Page heading" />
        <nav className="mt-2">
          <button className="text-lg font-medium mr-4 hover:underline">
            Home
          </button>
          <button className="text-lg font-medium mr-4 hover:underline">
            About
          </button>
          <button className="text-lg font-medium hover:underline">
            Contact
          </button>
        </nav>
      </header>

      <Blockquote
        size="5"
        weight="medium"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac felis non leo fringilla volutpat. Duis sed leo et sem auctor rhoncus. Curabitur pellentesque urna nec tortor iaculis dignissim."
      />

      <div className="my-12">
        <Card />
      </div>
      <div className="my-12 w-full">
        <CallToActionBanner />
      </div>
      <div className="my-12 w-full">
        <Accordion items={items} />
      </div>

      <footer className="p-4 text-center w-full">
        <Text type="p" content="© 2024 copyright." size="1" />
        <nav className="mt-2">
          <button className="text-sm mr-4 hover:underline">
            Privacy Policy
          </button>
          <button className="text-sm hover:underline">Terms of Service</button>
        </nav>
      </footer>
    </main>
  );
}
