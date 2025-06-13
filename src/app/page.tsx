import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mood Tracker</h1>
      <Button>Submit Your Mood</Button>
    </main>
  );
}
