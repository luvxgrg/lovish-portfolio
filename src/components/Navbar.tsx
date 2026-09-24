import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <Link href="/" className="text-xl font-semibold tracking-tight">
        Lovish Garg
      </Link>

      <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
        <a href="#work" className="transition hover:text-white">
          Work
        </a>

        <a href="#experience" className="transition hover:text-white">
          Experience
        </a>

        <a href="#about" className="transition hover:text-white">
          About
        </a>

        <a href="#contact" className="transition hover:text-white">
          Contact
        </a>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-zinc-700 px-5 py-2 text-sm transition hover:border-zinc-400"
      >
        Resume
      </a>
    </nav>
  );
}