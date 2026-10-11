"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";
import { navLinks, site } from "@/data/site";

function useActiveSection(enabled) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (!enabled) return;
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
      },
      // A thin band in the middle of the viewport decides which section is "current".
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : null;
}

export default function Navbar() {
  const pathname = usePathname();
  const active = useActiveSection(pathname === "/");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const floating = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          floating
            ? "border-line-strong bg-bg/75 shadow-2xl shadow-shade backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav aria-label="Primary" className="flex h-14 items-center justify-between gap-4 pr-2 pl-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight text-fg"
            onClick={() => setOpen(false)}
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-ai font-mono text-xs font-bold text-white shadow-lg shadow-accent/20"
            >
              MM
            </span>
            <span>{site.name}</span>
          </Link>

          <ul className="hidden items-center rounded-full border border-line bg-fg/[0.02] p-1 lg:flex">
            {navLinks.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-fg/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Link
                    href={`/#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                      isActive ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <SocialLinks include={["GitHub", "LinkedIn"]} className="hidden md:flex" />
            <ThemeToggle className="ml-1" />
            <Link
              href="/#contact"
              className="ml-1.5 hidden items-center gap-1 rounded-lg bg-gradient-to-r from-accent to-ai px-3.5 py-2 text-sm font-semibold text-white shadow-md shadow-accent/25 transition-shadow hover:shadow-lg hover:shadow-accent/35 sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg text-fg hover:bg-fg/5 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="grid gap-0.5 border-t border-line p-2">
                {navLinks.map(({ id, label }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index }}
                  >
                    <Link
                      href={`/#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === id ? "true" : undefined}
                      className={`block rounded-lg px-3 py-2.5 text-base ${
                        active === id ? "bg-fg/[0.06] text-fg" : "text-muted hover:bg-fg/[0.03] hover:text-fg"
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center justify-between border-t border-line px-3 py-3">
                <SocialLinks bordered />
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 rounded-lg bg-fg px-3.5 py-2 text-sm font-medium text-bg sm:hidden"
                >
                  Let&apos;s talk
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
