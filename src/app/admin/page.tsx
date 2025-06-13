'use client';

import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type MoodEntry = {
  mood: 'happy' | 'neutral' | 'sad';
  comment?: string;
  timestamp: string;
};

export default function AdminPage() {
  const [moods, setMoods] = useState<MoodEntry[]>([]);

  useEffect(() => {
    const fetchMoods = async () => {
      const res = await fetch('/api/mood');
      const data = await res.json();
      setMoods(data);
    };

    fetchMoods();
  }, []);



  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mood Submissions</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mood</TableHead>
            <TableHead>Comment</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {moods.map((mood, idx) => (
            <TableRow key={idx}>
              <TableCell>{mood.mood === 'happy' ? '😄' : mood.mood === 'neutral' ? '😐' : '😞'}</TableCell>
              <TableCell>{mood.comment || '-'}</TableCell>
              <TableCell>{new Date(mood.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
