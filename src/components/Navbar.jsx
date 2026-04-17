import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, socialLinks } from "../data/portfolio";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink-50/90 dark:bg-ink-950/90 backdrop-blur-md shadow-sm border-b border-ink-100 dark:border-ink-800"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={() => handleNav("#hero")}
              className="font-display font-700 text-xl tracking-tight"
            >
              <span className="text-accent">S</span>hubham
              <span className="text-ink-400 dark:text-ink-600">.</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`font-body text-sm transition-colors duration-200 ${
                    active === href.slice(1)
                      ? "text-accent font-500"
                      : "text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDark}
                className="p-2 rounded-full text-ink-500 dark:text-ink-400 hover:text-accent dark:hover:text-accent hover:bg-ink-100 dark:hover:bg-ink-800 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
              <a
                href={`mailto:${socialLinks.email}`}
                className="hidden md:block btn-primary text-xs py-2"
              >
                Hire me
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden p-2 text-ink-600 dark:text-ink-300"
              >
                {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-ink-50/95 dark:bg-ink-950/95 backdrop-blur-md border-b border-ink-100 dark:border-ink-800 md:hidden"
          >
            <nav className="flex flex-col px-6 py-5 gap-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className="text-left font-display text-lg font-500 text-ink-700 dark:text-ink-300 hover:text-accent dark:hover:text-accent transition-colors"
                >
                  {label}
                </button>
              ))}
              <a
                href={`mailto:${socialLinks.email}`}
                className="btn-primary mt-2 self-start"
              >
                Hire me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
