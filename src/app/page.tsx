import Image from "next/image";
import {db} from "@/lib/db";
import { Button } from "@/components/ui/button";
import UserButton from "@/modules/auth/components/user-button";
export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
    <UserButton></UserButton>

  </div>
  );
}
