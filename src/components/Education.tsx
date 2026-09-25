export default function Education() {
  return (
    <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-28 lg:px-8">

      <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Education
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Academic background.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="border-t border-zinc-800">

          <div className="grid gap-6 border-b border-zinc-800 py-10 md:grid-cols-[2fr_1fr]">

            <div>
              <h3 className="text-xl font-medium">
                Bachelor of Technology — Computer Science & Engineering
              </h3>

              <p className="mt-2 text-zinc-500">
                Chitkara University
              </p>

              <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600">
                Focused on software development, computer science
                fundamentals and emerging technologies including
                artificial intelligence.
              </p>
            </div>

            <div className="md:text-right">
              <p className="text-zinc-400">
                2022 — 2026
              </p>

              <p className="mt-2 text-sm text-zinc-600">
                CGPA 7.99 / 10
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}