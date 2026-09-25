export default function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive websites built for performance, usability and a strong digital presence.",
    },
    {
      number: "02",
      title: "E-commerce",
      description:
        "Clean online storefronts designed to showcase products and create a smooth buying experience.",
    },
    {
      number: "03",
      title: "Landing Pages",
      description:
        "Focused landing pages for products, campaigns and businesses designed around clear calls to action.",
    },
    {
      number: "04",
      title: "Digital Growth",
      description:
        "SEO, content and digital marketing support to help businesses strengthen their online presence.",
    },
  ];

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-6 py-28 lg:px-8"
    >
      {/* HEADER */}
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            What I can build for you.
          </h2>
        </div>

        <p className="hidden max-w-sm text-right text-zinc-500 md:block">
          From an idea to a polished digital experience — built with
          performance, usability and growth in mind.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.number}
            className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:border-zinc-600 md:p-10"
          >
            <div className="mb-16 flex items-start justify-between">
              <span className="text-sm text-zinc-600">
                {service.number}
              </span>

              <span className="text-zinc-600 transition duration-300 group-hover:text-white">
                ↗
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-medium tracking-tight">
              {service.title}
            </h3>

            <p className="max-w-md leading-7 text-zinc-500">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}