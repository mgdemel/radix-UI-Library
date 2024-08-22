"use client";

import { toggleButton } from "@/components";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useState } from "react";

export default function Home() {
  const [isOn, setOn] = useState<boolean>(false);
  const toggle = () => setOn((isOn) => !isOn);

  return (
    <main className="flex w-full p-10">
      <IconButton variant={toggleButton(isOn)} onClick={toggle}>
        <ArrowDownIcon />
      </IconButton>
    </main>
  );
}
