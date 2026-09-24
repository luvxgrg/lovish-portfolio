export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-8 lg:px-8">
      <div className="flex flex-col justify-between gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center">

        <p>© 2026 Lovish Garg</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/luvxgrg"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lovish-g-3b4362266/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="mailto:lovishgarg90412@gmail.com/mail/?view=cm&fs=1&to=lovishgarg90412@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}