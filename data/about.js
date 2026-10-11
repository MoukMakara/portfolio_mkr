import { BrainCircuit, Boxes, Cpu, Database, Layers, Server, Smartphone, Webhook } from "lucide-react";

// Content for the About section. Everything here comes from the CV.

export const story = [
  "I'm an early-career software engineer with a Bachelor of Computer Science from the Royal University of Phnom Penh. At the Korea Software HRD Center I completed the Full Stack Basic Course, building full-stack applications with Spring Boot, Next.js, and PostgreSQL.",
  "I also worked as an Entry Level Web Developer at IR Group, building and maintaining PHP applications with CodeIgniter and MySQL. Today I'm studying the Advanced Course in Spring Microservices and AI Engineering — service discovery, messaging, OAuth2, and local LLMs.",
];

export const interests = [
  { label: "Backend development", icon: Server },
  { label: "Full-stack development", icon: Layers },
  { label: "REST APIs", icon: Webhook },
  { label: "Microservices", icon: Boxes },
  { label: "Database systems", icon: Database },
  { label: "AI Engineering", icon: BrainCircuit },
  { label: "Local LLMs", icon: Cpu },
  { label: "Mobile development", icon: Smartphone },
];

// Numbers animate from 0 when the tile scrolls into view.
export const stats = [
  { value: 4, suffix: " yrs", label: "B.Sc. Computer Science", detail: "Royal University of Phnom Penh · 2022–2026" },
  { value: 810, suffix: "h", label: "Full-Stack Basic Course", detail: "Korea Software HRD Center · 2026" },
  { value: 675, suffix: "h", label: "Advanced Course", detail: "Spring Microservices & AI · in progress" },
  { value: 3, suffix: " mo", label: "Professional experience", detail: "Entry Level Web Developer · IR Group" },
];

// Chronological milestones.
export const journey = [
  { year: "2021", title: "Web Development Fundamental", place: "ISTAD" },
  { year: "2022", title: "Started B.Sc. Computer Science", place: "Royal University of Phnom Penh" },
  { year: "2025", title: "Short Course Spring Framework", place: "REST APIs with Spring" },
  { year: "2025", title: "Entry Level Web Developer", place: "IR Group · Jul – Oct" },
  { year: "2026", title: "Full-Stack Basic Course", place: "Korea Software HRD Center · 810 hours" },
  { year: "Now", title: "Advanced Course: Microservices & AI", place: "Korea Software HRD Center", current: true },
];
