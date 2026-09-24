export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-32 lg:px-8"
    >
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
        Contact
      </p>

      <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

        <div>
          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Have an idea?
            <span className="block text-zinc-500">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I&apos;m open to software development opportunities,
            collaborations and interesting products worth building.
          </p>
        </div>

        <a
          href="mailto:lovishgarg90412@gmail.com"
          className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-zinc-200"
        >
          Get in touch →
        </a>

      </div>
    </section>
  );
}