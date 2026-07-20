"use client";

export default function Error({
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mesh-bg flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-secondary">Error</p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
        Something broke on this page.
      </h1>
      <p className="mt-3 max-w-sm text-sm text-ink-400">
        Try again, or head back to the homepage if the problem continues.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
      >
        Try again
      </button>
    </div>
  );
}
