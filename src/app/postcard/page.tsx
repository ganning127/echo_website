import type { Metadata } from "next";
import PostcardBuilder from "@/components/postcard/PostcardBuilder";

export const metadata: Metadata = {
  title: "Fill Out a Card, Fill Up Our Hearts! | ECHO",
  description: "Write a postcard to your friends from Echoville.",
};

export default function PostcardPage() {
  // Nav / Footer / Newsletter come from your existing layout components.
  return (
    <main className="bg-[#fff6dc]">
      <PostcardBuilder />
    </main>
  );
}