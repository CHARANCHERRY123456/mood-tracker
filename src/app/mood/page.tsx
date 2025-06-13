'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const moods = [
  { label: 'Happy', value: 'happy', emoji: '😄' },
  { label: 'Neutral', value: 'neutral', emoji: '😐' },
  { label: 'Sad', value: 'sad', emoji: '😞' },
];

export default function MoodPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!selected) return;

    await fetch('/api/mood', {
      method: 'POST',
      body: JSON.stringify({ mood: selected, comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">How are you feeling today?</h1>

      <div className="flex gap-4 mb-4">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setSelected(m.value)}
            className={`text-4xl p-4 rounded-full border-2 ${
              selected === m.value ? 'border-blue-500' : 'border-gray-300'
            }`}
          >
            {m.emoji}
          </button>
        ))}
      </div>

      <Textarea
        placeholder="Optional comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="mb-4 w-full max-w-md"
      />

      <Button onClick={handleSubmit} disabled={!selected}>
        Submit Mood
      </Button>

      {submitted && <p className="mt-4 text-green-500">Mood submitted!</p>}
    </div>
  );
}
