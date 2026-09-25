import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

      {/* BRAND */}
      <Link href="/" className="flex items-center gap-3">
        <span className="text-xl font-semibold tracking-tight">
          Lovish Garg
        </span>

        <span className="hidden text-xs uppercase tracking-[0.2em] text-zinc-600 sm:inline">
          / ASCE
        </span>
      </Link>

      {/* NAVIGATION */}
      <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
        <a href="#work" className="transition hover:text-white">
          Work
        </a>

        <a href="#services" className="transition hover:text-white">
          Services
        </a>

        <a href="#experience" className="transition hover:text-white">
          Experience
        </a>

        <a href="#about" className="transition hover:text-white">
          About
        </a>
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-zinc-400 hover:bg-white hover:text-black"
      >
        Start a project
      </a>

    </nav>
  );
}