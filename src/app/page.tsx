import { Title, Paragraph, Card, ToggleButton } from ".././components";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowBottomRightIcon
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card styles="w-96">
        <Title text="Test" styles="text-4xl font-extrabold text-orange-500" />
        <Paragraph
          text="Test 2"
          styles="text-base font-normal text-green-500"
        />
        <div>
          <ToggleButton>
            <ArrowUpIcon />
          </ToggleButton>
          <ToggleButton>
            <ArrowTopLeftIcon />
          </ToggleButton>
          <ToggleButton>
            <ArrowBottomRightIcon />
          </ToggleButton>
          <ToggleButton>
            <ArrowDownIcon />
          </ToggleButton>
        </div>
      </Card>
    </main>
  );
}
