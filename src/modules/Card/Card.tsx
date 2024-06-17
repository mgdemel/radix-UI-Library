import {
  Text,
  PrimaryButton,
  TextInput,
  Heading,
  ToggleButton
} from "@/components";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { Card } from "@radix-ui/themes";

export const ContentCard = () => {
  return (
    <Card variant="classic" className="w-96 p-10">
      <Heading level="h2" size="6" text="Card Heading" />
      <Text content="Test 2" type="p" size="4" customStyles="pt-2" />
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
      <div className="p-4">
        <TextInput placeholder="tell us a bit more..." />
      </div>
      <div className="flex flex-row p-4">
        <div>
          <PrimaryButton text="submit" />
        </div>
      </div>
    </Card>
  );
};
