import {
  Paragraph,
  PrimaryButton,
  TextButton,
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

type Props = {
  styles?: string;
};

export const ContentCard = ({ styles }: Props) => {
  return (
    <Card variant="classic" className={`${styles}`}>
      <Title
        text="Card title"
        styles="text-4xl font-extrabold text-orange-500"
      />
      <Paragraph text="Test 2" styles="text-base font-normal text-green-500" />
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
      <div>
        <PrimaryButton text="submit" />
      </div>
      <div>
        <TextButton text="back" />
      </div>
      <div>
        <TextInput placeholder="tell us a bit more..." />
      </div>
    </Card>
  );
};
