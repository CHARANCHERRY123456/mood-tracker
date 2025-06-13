'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function DarkToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 border rounded-md text-sm"
    >
      Toggle {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
