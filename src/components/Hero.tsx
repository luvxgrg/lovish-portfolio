export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
      <div className="max-w-5xl">

        {/* ROLE / STUDIO */}
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
          Lovish Garg • Developer behind ASCE
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          I build digital experiences
          <span className="text-zinc-500">
            {" "}that help ideas grow.
          </span>
        </h1>

        {/* INTRO */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          I&apos;m Lovish Garg, a software developer and digital marketer
          building modern websites, web applications and digital experiences
          through ASCE — my independent digital studio.
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
            Start a project
          </a>
        </div>

        {/* AVAILABILITY */}
        <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Available for freelance projects & collaborations
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-8 flex gap-6 text-sm text-zinc-500">
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