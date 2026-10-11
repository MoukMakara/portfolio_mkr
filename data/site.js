// Central personal/site information. Replace the "#" placeholders with real URLs.
export const site = {
  name: "Mouk Makara",
  title: "Full Stack Developer",
  focus: ["Backend", "Full Stack", "AI Engineering"],
  location: "Phnom Penh, Cambodia",
  email: "makaramouk@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL in production so Open Graph URLs resolve correctly.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description:
    "Portfolio of Mouk Makara, a Full Stack Developer specializing in Java, Spring Boot, Next.js, PostgreSQL, Python, FastAPI, Microservices, and AI Engineering.",
  socials: {
    github: "https://github.com/MoukMakara",
    // NOTE: this is LinkedIn's Jobs page, not a personal profile — replace with your profile URL
    // (https://www.linkedin.com/in/<your-handle>/) when you have it.
    linkedin: "https://www.linkedin.com/jobs/",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// "https://github.com/MoukMakara/" → "github.com/MoukMakara"
export function displayUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function isPlaceholder(url) {
  return !url || url === "#";
}
