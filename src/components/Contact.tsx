export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-32 lg:px-8"
    >
      <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
        Start a Project
      </p>

      <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">

        {/* LEFT */}
        <div>
          <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Have an idea?
            <span className="block text-zinc-500">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Whether you need a website, landing page, digital product or
            help strengthening your online presence, tell me what you&apos;re
            working on and let&apos;s see what we can build together.
          </p>

          <p className="mt-5 text-sm text-zinc-600">
            Also open to development opportunities and collaborations.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-wrap gap-3">

          <a
            href="https://wa.me/917681942028?text=Hi%20Lovish%2C%20I%20came%20across%20ASCE%20and%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-zinc-200"
          >
            Start a project →
          </a>

          <a
            href="mailto:lovishgarg90412@gmail.com?subject=Project%20Inquiry%20%E2%80%94%20ASCE"
            className="inline-flex w-fit items-center rounded-full border border-zinc-700 px-7 py-4 font-medium text-white transition hover:border-zinc-400"
          >
            Email
          </a>

        </div>

      </div>

      {/* DIRECT CONTACT */}
      <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-zinc-900 pt-8 text-sm text-zinc-500">

        {/* WHATSAPP */}
        <a
          href="https://wa.me/917681942028"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          WhatsApp <span className="hidden sm:inline">↗</span>
        </a>

        {/* EMAIL */}
        <a
          href="mailto:lovishgarg90412@gmail.com"
          className="transition hover:text-white"
        >
          Email
        </a>

        {/* LINKEDIN */}
        <a
          href="https://www.linkedin.com/in/lovish-g-3b4362266/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn <span className="hidden sm:inline">↗</span>
        </a>

        {/* GITHUB */}
        <a
          href="https://github.com/luvxgrg"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          GitHub <span className="hidden sm:inline">↗</span>
        </a>

      </div>
    </section>
  );
}