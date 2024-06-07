import { Card } from ".././modules";
import { CTA } from ".././sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card styles="w-96" />
      <CTA />
    </main>
  );
}
