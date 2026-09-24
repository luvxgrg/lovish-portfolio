export default function Projects() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
    >
      {/* SECTION HEADER */}
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Things I&apos;ve built.
          </h2>
        </div>

        <p className="hidden max-w-sm text-right text-zinc-500 md:block">
          A selection of projects across software development,
          artificial intelligence and product building.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="space-y-6">

        {/* PROJECT 01 */}
        <article className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600 md:p-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">

            <div className="max-w-2xl">
              <p className="mb-5 text-sm text-zinc-500">
                01 / Artificial Intelligence
              </p>

              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Tokenizer & LLM Fundamentals
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Built a tokenizer from scratch in Python to understand how
                language models process text. Implemented vocabulary creation,
                encoding, decoding and unknown-token handling while exploring
                the foundations behind modern LLM pipelines.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Python",
                  "NLP",
                  "Tokenization",
                  "LLM Fundamentals",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>

        {/* PROJECT 02 */}
        <article className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600 md:p-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">

            <div className="max-w-2xl">
              <p className="mb-5 text-sm text-zinc-500">
                02 / Web Development
              </p>

              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Expense Tracker
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                A web application designed to help users record expenses,
                organize transactions and understand their spending through
                clear financial summaries.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Web Development",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>

        {/* PROJECT 03 */}
        <article className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-zinc-600 md:p-12">
          <div className="flex flex-col justify-between gap-12 md:flex-row">

            <div className="max-w-2xl">
              <p className="mb-5 text-sm text-zinc-500">
                03 / Product Development
              </p>

              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Gamified Ranking Platform
              </h3>

              <p className="mt-5 text-lg leading-8 text-zinc-400">
                Designed and developed a gamified ranking platform combining
                performance metrics with meaningful rewards, taking the
                concept from product design through stakeholder discussions.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Product Design",
                  "Web Development",
                  "Gamification",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </article>

      </div>
    </section>
  );
}