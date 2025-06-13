import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { DarkToggle } from '@/components/dark-toggle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 text-center p-6">
      <h1 className="text-3xl font-bold">Welcome to Mood Tracker</h1>

      <div className="flex gap-4">
        <Link href="/mood">
          <Button>Submit Your Mood</Button>
        </Link>
        <Link href="/admin">
          <Button variant="outline">Admin Dashboard</Button>
        </Link>
      </div>

      <DarkToggle />
    </main>
  );
}
