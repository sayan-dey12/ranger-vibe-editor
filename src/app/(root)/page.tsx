import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col items-center justify-start min-h-screen py-10">
      {/* Hero Image */}
      <div className="flex flex-col justify-center items-center space-y-6">
        <Image 
          src="/hero.svg" 
          alt="Hero Section" 
          height={500}  
          width={500}
          priority
        />

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400 tracking-tight leading-tight">
          VibeCode with Intelligence
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-center text-lg text-gray-700 dark:text-gray-300 px-6">
          VibeCode Editor is a powerful and intelligent code editor that enhances
          your coding experience with{" "}
          <span className="font-semibold text-blue-500">
            AI-powered features
          </span>.  
          Write, debug, and optimize your code seamlessly with a modern,
          developer-first design.
        </p>

        {/* Call to Action */}
        <div className="flex gap-4 mt-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6"
            >
              Get Started
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-zinc-800"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
