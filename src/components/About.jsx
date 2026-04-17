import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { FiCode, FiCpu, FiShield, FiZap } from "react-icons/fi";

const highlights = [
  { icon: FiCode, label: "Full Stack Web", desc: "End-to-end MERN apps" },
  { icon: FiCpu, label: "Machine Learning", desc: "Real-world ML systems" },
  { icon: FiShield, label: "Cybersecurity", desc: "Security-aware dev" },
  { icon: FiZap, label: "Problem Solver", desc: "Competitive mindset" },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-28" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Big letter background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[220px] font-800 text-ink-100 dark:text-ink-900 select-none leading-none">
                  SV
                </span>
              </div>

              {/* Stat cards */}
              <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6">
                {[
                  { value: "2+", label: "Projects Built" },
                  { value: "4th", label: "Year Dual Degree" },
                  { value: "MERN", label: "Primary Stack" },
                  { value: "ML", label: "AI & Cyber Security" },
                ].map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="card flex flex-col items-center justify-center text-center shadow-sm"
                  >
                    <span className="font-display text-3xl font-800 text-accent">
                      {value}
                    </span>
                    <span className="font-body text-xs text-ink-500 dark:text-ink-400 mt-1">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-title">
                Turning Ideas Into
                <br />
                <span className="text-accent">Reality</span>
              </h2>
            </div>

            <div className="space-y-4 text-ink-600 dark:text-ink-400 leading-relaxed">
              <p>
                I'm a{" "}
                <strong className="text-ink-800 dark:text-ink-200 font-500">
                  Dual Degree CSE
                </strong>{" "}
                student with a deep passion for building scalable web
                applications and intelligent systems that solve real-world
                problems.
              </p>
              <p>
                My journey spans{" "}
                <strong className="text-ink-800 dark:text-ink-200 font-500">
                  full-stack web development
                </strong>{" "}
                with the MERN stack,{" "}
                <strong className="text-ink-800 dark:text-ink-200 font-500">
                  machine learning
                </strong>{" "}
                for computer vision applications, and a growing interest in{" "}
                <strong className="text-ink-800 dark:text-ink-200 font-500">
                  cybersecurity
                </strong>
                .
              </p>
              <p>
                I thrive on tackling hard problems — whether that's architecting
                a multi-tenant job platform or training a hybrid LSTM + CNN
                model to keep drivers safe. I care deeply about clean code, good
                UX, and shipping things that matter.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-ink-100 dark:hover:bg-ink-800/50 transition-colors duration-200"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent mt-0.5">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-600 text-ink-800 dark:text-ink-200">
                      {label}
                    </p>
                    <p className="font-body text-xs text-ink-500 dark:text-ink-500">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
