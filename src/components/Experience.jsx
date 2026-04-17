import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { experience } from "../data/portfolio";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section
      id="experience"
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
          <p className="section-label">Career</p>
          <h2 className="section-title">
            <span className="text-accent">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-ink-200 dark:bg-ink-800 hidden md:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-accent/10 border-2 border-accent items-center justify-center text-accent">
                  <FiBriefcase size={18} />
                </div>

                <div className="card group hover:shadow-lg hover:shadow-ink-900/5 dark:hover:shadow-black/20">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-xl font-700 text-ink-900 dark:text-ink-50">
                        {exp.role}
                      </h3>
                      <p className="font-body text-ink-500 dark:text-ink-400 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent self-start whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + pi * 0.08 }}
                        className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
