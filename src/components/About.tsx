export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-28 lg:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">

        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            About
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I like building things at the intersection of
            <span className="text-zinc-500">
              {" "}technology, products and ideas.
            </span>
          </h2>

          <div className="mt-10 grid gap-8 text-lg leading-8 text-zinc-400 md:grid-cols-2">
            <p>
              I&apos;m Lovish Garg, a Computer Science graduate working
              across software development, web technologies and applied
              artificial intelligence. I enjoy taking ideas from early
              concepts and turning them into practical digital experiences.
            </p>

            <p>
              My experience also extends into product building,
              entrepreneurship and digital marketing. I created ASCE as an
              independent digital studio where I can bring those disciplines
              together to build websites, digital products and online
              experiences for businesses and individuals.
            </p>
          </div>

          {/* ASCE */}
          <div className="mt-14 border-l border-zinc-700 pl-6">
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-500">
              ASCE
            </p>

            <p className="max-w-2xl text-base leading-7 text-zinc-400">
              An independent digital studio focused on modern web
              development, digital experiences and helping ideas establish
              a stronger presence online.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}