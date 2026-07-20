import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mesh-bg flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-secondary">404</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        This page went missing.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
      >
        Back to home
      </Link>
    </div>
  );
}
