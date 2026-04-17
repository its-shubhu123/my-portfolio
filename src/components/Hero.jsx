import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { socialLinks } from "../data/portfolio";

const TITLES = [
  "Full Stack Developer",
  "MERN Specialist",
  "ML Enthusiast",
  "Problem Solver",
];

function TypeWriter({ texts }) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

  useEffect(() => {
    const target = texts[idx];
    if (phase === "typing") {
      if (display.length < target.length) {
        const t = setTimeout(
          () => setDisplay(target.slice(0, display.length + 1)),
          70,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), 1800);
        return () => clearTimeout(t);
      }
    }
    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("erasing"), 400);
      return () => clearTimeout(t);
    }
    if (phase === "erasing") {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setIdx((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }
  }, [display, phase, idx, texts]);

  return (
    <span className="text-accent">
      {display}
      <span className="animate-blink ml-0.5">|</span>
    </span>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-teal/5 blur-3xl -translate-x-1/2" />
      </div>

      <div className="section-container w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          {/* Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-ink-500 dark:text-ink-400 uppercase">
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={item}>
              <p className="font-mono text-xs tracking-[0.2em] text-accent mb-3">
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.05] text-ink-900 dark:text-ink-50">
                Shubham
                <br />
                <span className="text-ink-300 dark:text-ink-700">
                  Vishwakarma
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={item}
              className="font-display text-2xl md:text-3xl font-500 h-10"
            >
              <TypeWriter texts={TITLES} />
            </motion.div>

            <motion.p
              variants={item}
              className="font-body text-lg text-ink-500 dark:text-ink-400 max-w-md leading-relaxed"
            >
              I build{" "}
              <strong className="text-ink-700 dark:text-ink-300 font-500">
                scalable web apps
              </strong>{" "}
              and{" "}
              <strong className="text-ink-700 dark:text-ink-300 font-500">
                intelligent systems
              </strong>{" "}
              — turning ideas into production-ready products.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="btn-primary">
                View Projects
                <FiArrowDown size={16} />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-5 pt-2"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-ink-400 dark:text-ink-500 hover:text-accent transition-colors duration-200"
              >
                <FiGithub size={22} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-ink-400 dark:text-ink-500 hover:text-accent transition-colors duration-200"
              >
                <FiLinkedin size={22} />
              </a>
              <span className="h-px w-12 bg-ink-200 dark:bg-ink-700" />
              <span className="font-mono text-xs text-ink-400 dark:text-ink-600">
                Dual Degree (B.Tech+M.Tech) · 4th Year
              </span>
            </motion.div>
          </motion.div>

          {/* Visual — code card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="card shadow-2xl shadow-ink-900/10 dark:shadow-black/40 font-mono text-sm leading-7 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 mb-5 pb-4 border-b border-ink-100 dark:border-ink-800">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-ink-400 dark:text-ink-600">
                    profile.json
                  </span>
                </div>
                <pre className="text-xs text-ink-600 dark:text-ink-400 whitespace-pre-wrap">
                  {`{
  `}
                  <span className="text-accent">"name"</span>
                  {`: `}
                  <span className="text-teal-light">"Shubham Vishwakarma"</span>
                  {`,
  `}
                  <span className="text-accent">"role"</span>
                  {`: `}
                  <span className="text-teal-light">
                    "Full Stack Dev (MERN)"
                  </span>
                  {`,
  `}
                  <span className="text-accent">"education"</span>
                  {`: {
    `}
                  <span className="text-accent">"degree"</span>
                  {`: `}
                  <span className="text-teal-light">" Dual Degree (B.Tech+M.Tech)"</span>
                  {`,
    `}
                  <span className="text-accent">"year"</span>
                  {`: `}
                  <span className="text-yellow-500">4</span>
                  {`
  },
  `}
                  <span className="text-accent">"stack"</span>
                  {`: [
    `}
                  <span className="text-teal-light">"MongoDB"</span>
                  {`, `}
                  <span className="text-teal-light">"Express"</span>
                  {`,
    `}
                  <span className="text-teal-light">"React"</span>
                  {`,    `}
                  <span className="text-teal-light">"Node.js"</span>
                  {`
  ],
  `}
                  <span className="text-accent">"interests"</span>
                  {`: [
    `}
                  <span className="text-teal-light">"Web Dev"</span>
                  {`,
    `}
                  <span className="text-teal-light">"Machine Learning"</span>
                  {`,
    `}
                  <span className="text-teal-light">"Cybersecurity"</span>
                  {`
  ],
  `}
                  <span className="text-accent">"available"</span>
                  {`: `}
                  <span className="text-green-400">true</span>
                  {`
}`}
                </pre>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 card shadow-lg text-xs font-mono py-2 px-3 text-green-500 border-green-200 dark:border-green-900"
              >
                ✓ Open to work
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 card shadow-lg text-xs font-mono py-2 px-3"
              >
                🚀 2 projects live
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-ink-300 dark:text-ink-700"
          >
            <FiArrowDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
