import {
  Paragraph,
  PrimaryButton,
  TextInput,
  Title,
  ToggleButton
} from "@/components";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { Card } from "@radix-ui/themes";
import React from "react";

export const ContentCard = () => {
  return (
    <Card variant="classic" className="w-96 p-10">
      <Title text="Card title" styles="text-4xl font-bold" />
      <Paragraph text="Test 2" styles="text-base text-gray mt-2" />
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
        <TextInput placeholder="tell us a bit more..." variant="classic" />
      </div>
      <div className="flex flex-row p-4">
        <div>
          <PrimaryButton text="submit" />
        </div>
      </div>
    </Card>
  );
};
