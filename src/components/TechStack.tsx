export default function TechStack() {
  const groups = [
    {
      title: "Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
      ],
    },
    {
      title: "Programming",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "AI & LLM",
      skills: [
        "PyTorch",
        "Tokenization",
        "LLM Architecture",
        "Fine-tuning",
      ],
    },
    {
      title: "Digital & Tools",
      skills: [
        "SEO",
        "Google Search Console",
        "Google Ads",
        "Social Media",
        "Figma",
        "VS Code",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-28 lg:px-8">

      {/* HEADER */}
      <div className="mb-16">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Capabilities
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tools I work with.
        </h2>

        <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
          Technologies and digital tools I use across development,
          artificial intelligence and online growth.
        </p>
      </div>

      {/* CAPABILITIES GRID */}
      <div className="grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-4">

        {groups.map((group) => (
          <div
            key={group.title}
            className="bg-[#0a0a0a] p-8 transition duration-300 hover:bg-zinc-950"
          >
            <h3 className="text-lg font-medium">
              {group.title}
            </h3>

            <div className="mt-6 space-y-3">
              {group.skills.map((skill) => (
                <p
                  key={skill}
                  className="text-zinc-500 transition hover:text-zinc-300"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}