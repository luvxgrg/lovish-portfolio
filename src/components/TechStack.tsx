export default function TechStack() {
  return (
    <section className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-28 lg:px-8">

      <div className="mb-16">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
          Technologies
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Tools I work with.
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
          },
          {
            title: "Programming",
            skills: ["Python", "JavaScript", "TypeScript"],
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
            title: "Tools",
            skills: ["Git", "GitHub", "VS Code", "Figma"],
          },
        ].map((group) => (
          <div key={group.title} className="bg-[#0a0a0a] p-8">

            <h3 className="text-lg font-medium">
              {group.title}
            </h3>

            <div className="mt-6 space-y-3">
              {group.skills.map((skill) => (
                <p key={skill} className="text-zinc-500">
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