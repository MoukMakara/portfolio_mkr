"use client";

import { motion } from "framer-motion";

// Fades content in once as it scrolls into view. Keeps parent sections as Server Components.
export default function Reveal({ children, delay = 0, className, as = "div" }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </Component>
  );
}
