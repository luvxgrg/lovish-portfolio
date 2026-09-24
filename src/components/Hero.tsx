export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
      <div className="max-w-5xl">

        {/* ROLE */}
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Software Developer • Computer Science
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          I build software
          <span className="text-zinc-500">
            {" "}that turns ideas into products.
          </span>
        </h1>

        {/* INTRO */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I&apos;m Lovish Garg, a Computer Science graduate focused on
          building modern web applications and exploring artificial
          intelligence. I enjoy turning ideas into practical,
          user-focused digital products.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            View my work →
          </a>

          <a
            href="#contact"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-400"
          >
            Contact me
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-12 flex gap-6 text-sm text-zinc-500">

          <a
            href="https://github.com/luvxgrg"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lovish-g-3b4362266/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:lovishgarg90412@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>

        </div>
      </div>
    </section>
  );
}