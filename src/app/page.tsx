export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800/80 px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="text-sm font-semibold tracking-tight">OfferCloud</span>
          <nav className="flex gap-6 text-sm text-zinc-400">
            <span className="cursor-not-allowed opacity-60">Product</span>
            <span className="cursor-not-allowed opacity-60">Pricing</span>
            <span className="cursor-not-allowed opacity-60">Contact</span>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400/90">
          New site
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl sm:leading-[1.1]">
          OfferCloud — strona w Next.js i Tailwind, gotowa pod Vercel.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
          Edytuj <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            src/app/page.tsx
          </code>{" "}
          i rozbudowuj layout w <code className="rounded bg-zinc-900 px-1.5 py-0.5 font-mono text-sm text-zinc-300">
            src/app/layout.tsx
          </code>
          .
        </p>
      </main>
      <footer className="border-t border-zinc-800/80 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} OfferCloud
      </footer>
    </div>
  );
}
