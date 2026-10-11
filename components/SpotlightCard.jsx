"use client";

import { useRef } from "react";

// Card wrapper with a soft highlight that follows the cursor.
// `spot` is an "r g b" string for the highlight color.
export default function SpotlightCard({ as: Component = "div", spot, className = "", style, children, ...props }) {
  const ref = useRef(null);

  function handleMove(event) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      className={`spotlight ${className}`}
      style={spot ? { ...style, "--spot": spot } : style}
      {...props}
    >
      {children}
    </Component>
  );
}
