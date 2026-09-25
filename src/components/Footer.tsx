export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl border-t border-zinc-900 px-6 py-8 lg:px-8">
      <div className="flex flex-col justify-between gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center">

        {/* BRAND */}
        <div className="flex flex-wrap items-center gap-2">
          <p>© 2026 Lovish Garg</p>

          <span className="text-zinc-800">•</span>

          <p className="text-zinc-600">
            ASCE
          </p>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap gap-6">

          <a
            href="https://wa.me/917681942028?text=Hi%20Lovish%2C%20I%20came%20across%20ASCE%20and%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            WhatsApp
          </a>

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
            href="mailto:lovishgarg90412@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}