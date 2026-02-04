"use client";
import { useEffect, useState } from "react";

interface Line {
  id: number;
  left: number;
  delay: number;
  duration: number;
  fontSize: number;
  code: string;
}

export default function BackgroundBlur() {
  const [lines, setLines] = useState<Line[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isSmall = window.matchMedia("(max-width: 640px)").matches;
    const total = isSmall ? 25 : 60;

    const generatedLines = Array.from({ length: total }, (_, i) => ({
      id: i,
      left: Math.random() * 140 - 20,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 12,
      fontSize: 10 + Math.random() * 6,
      code: generateRandomCode(),
    }));

    setLines(generatedLines);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none blur-[1px]">
      {/* Background base */}
      <div className="absolute inset-0 bg-white dark:bg-gray-900" />

      {/* Falling code */}
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute whitespace-pre font-mono text-violet-500/30 dark:text-violet-400/25"
          style={{
            left: `${line.left}%`,
            top: "-300px",
            fontSize: `${line.fontSize}px`,
            animation: `codeFall ${line.duration}s linear ${line.delay}s infinite`,
          }}
        >
          {line.code}
        </div>
      ))}

      {/* Gradient overlay - fades the code as you scroll down */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-white dark:to-gray-900" />
    </div>
  );
}

function generateRandomCode(): string {
  const chars = "TURNING COFFEE INTO CODE <>/{}[];";
  let result = "";
  for (let i = 0; i < 25; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    result += char + "\n";
  }
  return result;
}
