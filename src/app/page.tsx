import { Title } from "@/components";
import { Card } from ".././modules";
import { CTA } from ".././sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <header className="bg-primary p-4 text-white w-full mb-12">
        <Title text="Page heading" />
        <nav className="mt-2">
          <a href="#" className="text-lg font-medium mr-4 hover:underline">
            Home
          </a>
          <a href="#" className="text-lg font-medium mr-4 hover:underline">
            About
          </a>
          <a href="#" className="text-lg font-medium hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <div className="my-12">
        <Card />
      </div>
      <div className="my-12 w-full">
        <CTA />
      </div>

      <footer className="bg-base-300 p-4 text-center w-full">
        <p className="text-sm">© 2024 copyright.</p>
        <nav className="mt-2">
          <a href="#" className="text-sm mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Service
          </a>
        </nav>
      </footer>
    </main>
  );
}
