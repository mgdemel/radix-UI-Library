import {
  Text,
  PrimaryButton,
  SecondaryButton,
  TextInput,
  Heading,
  IconButton
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
    <Card variant="classic" className="w-96 p-8">
      <Heading level="h2" size="6" text="Card Heading" customStyles="p-2" />
      <Text content="Card paragraph" type="p" size="4" customStyles="p-2" />
      <div className="flex justify-between px-2 py-4">
        <IconButton size="3">
          <ArrowUpIcon />
        </IconButton>
        <IconButton size="3">
          <ArrowTopLeftIcon />
        </IconButton>
        <IconButton size="3">
          <ArrowBottomRightIcon />
        </IconButton>
        <IconButton size="3">
          <ArrowDownIcon />
        </IconButton>
      </div>
      <div className="px-2 pb-4">
        <TextInput placeholder="tell us a bit more..." />
      </div>
      <div className="flex flex-row justify-between p-2">
        <PrimaryButton size="3" text="submit" />
        <SecondaryButton size="3" text="cancel" />
      </div>
    </Card>
  );
};
