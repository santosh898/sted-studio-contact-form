import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
      <p className="text-center mb-8 text-gray-300">
        Your message has been received. We'll get back to you soon.
      </p>
      <Link href="/">
        <Button className="bg-white text-black hover:bg-gray-200">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
