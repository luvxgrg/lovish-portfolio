export default function Experience() {
  const experiences = [
    {
      role: "Founder",
      company: "Virtuoso",
      description:
        "Founded and developed the concept for a gamified ranking platform built around performance, competition and meaningful rewards. Led product planning and engaged with university stakeholders regarding potential implementation.",
    },
    {
      role: "Freelance Social Media Manager",
      company: "Independent",
      description:
        "Worked with clients on social media strategy, content and audience growth, including helping grow a client page from approximately 3K to 70K followers.",
    },
    {
      role: "Marketing Manager",
      company: "Rapid Roots",
      description:
        "Worked across digital marketing and growth initiatives, supporting campaigns, content strategy and audience development.",
    },
    {
      role: "Independent Developer",
      company: "Software & AI",
      description:
        "Built web applications and interface projects while independently exploring large language models, tokenization, text preprocessing and AI development workflows.",
    },
  ];

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
            software and digital growth.
          </p>

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            View résumé
            <span className="hidden sm:inline">↗</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="divide-y divide-zinc-800">
          {experiences.map((experience) => (
            <div
              key={`${experience.role}-${experience.company}`}
              className="grid gap-5 py-10 first:pt-0 md:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="font-medium text-white">
                  {experience.role}
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  {experience.company}
                </p>
              </div>

              <div>
                <p className="leading-7 text-zinc-400">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}