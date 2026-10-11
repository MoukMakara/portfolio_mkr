"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 75;
const DELETE_MS = 35;
const HOLD_MS = 1700;
const GAP_MS = 350;

// Typewriter that types each role, holds it, deletes it, then moves to the next.
// Screen readers get the full list once instead of character-by-character updates.
export default function TypingRole({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const role = roles[roleIndex];

  useEffect(() => {
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && length === role.length) delay = HOLD_MS;
    if (deleting && length === 0) delay = GAP_MS;

    const timer = setTimeout(() => {
      if (!deleting && length === role.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else setLength((value) => value + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [length, deleting, role, roles.length]);

  return (
    <span className="inline-flex min-h-[1.3em] items-center">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true" className="text-gradient-accent whitespace-pre">
        {role.slice(0, length) || " "}
      </span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[1.05em] w-[3px] animate-blink rounded-full bg-gradient-to-b from-accent to-ai"
      />
    </span>
  );
}
