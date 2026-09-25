export default function Projects() {
  const projects = [
    {
      number: "01",
      category: "Artificial Intelligence",
      title: "Tokenizer & LLM Fundamentals",
      description:
        "Built a word-level tokenizer from scratch to explore how language models transform text into numerical representations, including encoding, decoding, vocabulary mapping, punctuation handling and unknown-token support.",
      technologies: [
        "Python",
        "NLP",
        "Tokenization",
        "LLM Fundamentals",
      ],
      link: "https://github.com/luvxgrg/simple-tokenizer",
      linkText: "View Repository",
    },
    {
      number: "02",
      category: "Web Development",
      title: "Expense Tracker",
      description:
        "Built a web application for recording expenses, organizing transactions and presenting spending information through a simple, accessible interface.",
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Web Development",
      ],
      link: null,
      linkText: null,
    },
    {
      number: "03",
      category: "Product Development",
      title: "Gamified Ranking Platform",
      description:
        "Designed a gamified ranking platform that combines performance metrics with meaningful rewards, developing the concept from product design through stakeholder discussions.",
      technologies: [
        "Product Design",
        "Web Development",
        "Gamification",
      ],
      link: null,
      linkText: null,
    },
  ];

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
          Selected work across web development, artificial intelligence
          and digital product development.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:border-zinc-600 md:p-12"
          >
            <div className="flex flex-col justify-between gap-12 md:flex-row">

              {/* PROJECT CONTENT */}
              <div className="max-w-2xl">
                <p className="mb-5 text-sm text-zinc-500">
                  {project.number} / {project.category}
                </p>

                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-zinc-400">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* PROJECT LINK */}
                {project.link && (
                  <div className="mt-8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-zinc-400"
                    >
                      {project.linkText} ↗
                    </a>
                  </div>
                )}
              </div>

              {/* PROJECT NUMBER */}
              <div className="hidden items-start md:flex">
                <span className="text-6xl font-semibold tracking-tight text-zinc-900 transition duration-300 group-hover:text-zinc-800">
                  {project.number}
                </span>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* ASCE WORK */}
      <div className="mt-8 rounded-3xl border border-dashed border-zinc-800 px-8 py-10 md:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-600">
              ASCE
            </p>

            <h3 className="text-xl font-medium">
              More digital experiences are in development.
            </h3>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
              Business websites, e-commerce experiences and digital
              products built through ASCE will be added here.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Start a project →
          </a>
        </div>
      </div>
    </section>
  );
}