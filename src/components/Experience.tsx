export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-28 lg:px-8"
    >
      <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Beyond the code.
          </h2>

          <p className="mt-6 max-w-sm leading-7 text-zinc-500">
            Experience across product development, entrepreneurship,
            technology and digital growth.
          </p>
        </div>

        {/* RIGHT */}
        <div className="divide-y divide-zinc-800">

          {/* EXPERIENCE 01 */}
          <div className="grid gap-5 py-10 first:pt-0 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-medium text-white">
                Founder
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Virtuoso
              </p>
            </div>

            <div>
              <p className="leading-7 text-zinc-400">
                Founded and architected a gamified platform designed around
                performance, competition and meaningful rewards. Led the
                product concept and engaged with university stakeholders
                regarding implementation and rollout.
              </p>
            </div>
          </div>

          {/* EXPERIENCE 02 */}
          <div className="grid gap-5 py-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-medium text-white">
                Marketing Manager
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Rapid Roots
              </p>
            </div>

            <div>
              <p className="leading-7 text-zinc-400">
                Worked across digital marketing and growth initiatives,
                coordinating campaigns, content strategy and audience
                development.
              </p>
            </div>
          </div>

          {/* EXPERIENCE 03 */}
          <div className="grid gap-5 py-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="font-medium text-white">
                Independent Developer
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Software & AI
              </p>
            </div>

            <div>
              <p className="leading-7 text-zinc-400">
                Built web applications and real-world interface projects
                while independently studying large language model
                architecture, tokenization, preprocessing and model
                training workflows.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}