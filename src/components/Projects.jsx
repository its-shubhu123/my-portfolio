import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projects } from "../data/portfolio";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
    >
      {/* Number + Info */}
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <span
            className="font-display text-7xl font-800 leading-none select-none"
            style={{ color: project.color + "20" }}
          >
            {project.number}
          </span>
          <div className="pt-3">
            <p
              className="font-mono text-xs tracking-widest uppercase mb-1"
              style={{ color: project.color }}
            >
              Project
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-700 text-ink-900 dark:text-ink-50">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-ink-600 dark:text-ink-400 leading-relaxed">
          {project.description}
        </p>

        <ul className="space-y-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-ink-400"
            >
              <FiCheck
                size={14}
                className="mt-0.5 shrink-0"
                style={{ color: project.color }}
              />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="tag"
              style={{ borderColor: project.color + "30" }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline gap-2 text-xs"
          >
            <FiGithub size={15} /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary gap-2 text-xs"
            >
              <FiExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Visual Card */}
      <motion.div
        whileHover={{ scale: 1.02, rotate: isEven ? -1 : 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative"
      >
        <div
          className="rounded-3xl p-8 min-h-[280px] flex flex-col justify-between"
          style={{
            background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
            border: `1px solid ${project.color}25`,
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest uppercase text-ink-400 dark:text-ink-600">
              {project.tech[0]}
            </span>
            <span
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg font-display font-800"
              style={{ background: project.color + "20", color: project.color }}
            >
              {project.number}
            </span>
          </div>

          <div>
            <h4 className="font-display text-xl font-700 text-ink-900 dark:text-ink-100 mb-2">
              {project.title}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-0.5 rounded-md"
                  style={{
                    background: project.color + "20",
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-1.5 rounded-full"
                style={{
                  width: i === 1 ? "48px" : i === 2 ? "32px" : "20px",
                  background:
                    project.color + (i === 1 ? "cc" : i === 2 ? "88" : "44"),
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-28" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Work</p>
          <h2 className="section-title">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400 max-w-xl">
            Real-world products I've built from scratch — each solving a
            specific problem with clean architecture and thoughtful UX.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
