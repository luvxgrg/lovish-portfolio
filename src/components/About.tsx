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
              I&apos;m a Computer Science graduate focused on software
              development and applied artificial intelligence. I enjoy
              understanding how systems work and turning that understanding
              into products people can actually use.
            </p>

            <p>
              My experience extends beyond development into product building,
              entrepreneurship and digital growth. That combination has taught
              me to think not only about how something is built, but why it
              should exist and how people will interact with it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}