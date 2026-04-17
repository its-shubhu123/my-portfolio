import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { socialLinks } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-100 dark:border-ink-800 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display font-700 text-lg">
              <span className="text-accent">S</span>hubham
              <span className="text-ink-300 dark:text-ink-700">.</span>
            </span>
            <p className="font-mono text-xs text-ink-400 dark:text-ink-600 mt-1">
              Full Stack Developer (MERN)
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: socialLinks.github, label: "GitHub" },
              {
                icon: FiLinkedin,
                href: socialLinks.linkedin,
                label: "LinkedIn",
              },
              {
                icon: FiMail,
                href: `mailto:${socialLinks.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-ink-400 dark:text-ink-600 hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="font-body text-xs text-ink-400 dark:text-ink-600 flex items-center gap-1.5">
            © {year} — Built with{" "}
            <FiHeart size={12} className="text-accent" fill="currentColor" /> by
            Shubham
          </p>
        </div>
      </div>
    </footer>
  );
}
