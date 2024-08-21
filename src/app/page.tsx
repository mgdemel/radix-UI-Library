"use client";
import { CallToActionBanner } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="my-12 w-full">
        <CallToActionBanner />
      </div>
    </main>
  );
}
