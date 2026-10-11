"use client";

import { motion } from "framer-motion";

// Re-mounts on every navigation within /projects, giving each page a short fade-in.
export default function ProjectsTemplate({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
