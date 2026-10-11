import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70dvh] flex-col items-start justify-center pt-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg">Page not found</h1>
      <p className="mt-3 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
