import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skills } from "../data/portfolio";

const categoryColors = {
  Frontend: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    dot: "bg-blue-400",
  },
  Backend: {
    bg: "bg-green-50 dark:bg-green-950/30",
    border: "border-green-200 dark:border-green-800",
    dot: "bg-green-400",
  },
  Database: {
    bg: "bg-orange-50 dark:bg-orange-950/30",
    border: "border-orange-200 dark:border-orange-800",
    dot: "bg-orange-400",
  },
  Tools: {
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    dot: "bg-purple-400",
  },
  Other: {
    bg: "bg-teal-50 dark:bg-teal-950/30",
    border: "border-teal-200 dark:border-teal-800",
    dot: "bg-teal-400",
  },
};

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section
      id="skills"
      className="py-28 bg-ink-50/50 dark:bg-ink-900/30"
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">
            Skills & <span className="text-accent">Technologies</span>
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400 max-w-xl">
            A curated set of tools I use to build products — from interactive
            UIs to intelligent backends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], ci) => {
            const colors = categoryColors[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className={`rounded-2xl border p-6 ${colors.bg} ${colors.border}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <h3 className="font-display text-sm font-700 text-ink-800 dark:text-ink-200 uppercase tracking-wider">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: ci * 0.1 + si * 0.05,
                      }}
                      whileHover={{ scale: 1.08 }}
                      className="font-mono text-xs px-3 py-1.5 rounded-lg bg-white/80 dark:bg-ink-900/60 text-ink-700 dark:text-ink-300 border border-ink-100 dark:border-ink-700 cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* GitHub stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-3 card overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <h3 className="font-display text-sm font-700 text-ink-800 dark:text-ink-200 uppercase tracking-wider">
                GitHub Activity
              </h3>
            </div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=shubhamvishwakarma&show_icons=true&hide_border=true&bg_color=00000000&title_color=e8622a&icon_color=e8622a&text_color=8e8979&hide_title=true"
              alt="GitHub Stats"
              className="w-full max-w-lg opacity-90"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <p className="font-mono text-xs text-ink-400 dark:text-ink-600 mt-3">
              github.com/<span className="text-accent">shubhamvishwakarma</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
