import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { socialLinks } from "../data/portfolio";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Shubham Vishwakarma",
    href: socialLinks.linkedin,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "Shubham Vishwakarma",
    href: socialLinks.github,
  },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("message", form.message);

  try {
    const res = await fetch("https://formspree.io/f/xrerqylz", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="contact" className="py-28" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="text-accent">Work Together</span>
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400 max-w-xl">
            Whether you have a project idea, want to collaborate, or just want
            to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {contactItems.map(({ icon: Icon, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-ink-100 dark:hover:bg-ink-800/50 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-200">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-mono text-xs text-ink-400 dark:text-ink-600 uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="font-display font-500 text-ink-800 dark:text-ink-200">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="mt-8 p-5 rounded-2xl bg-accent/5 border border-accent/15">
              <p className="font-body text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                💡{" "}
                <strong className="text-ink-800 dark:text-ink-200">
                  Currently looking for internships
                </strong>{" "}
                and freelance opportunities. If you have a project that needs a
                passionate full-stack dev, let's talk!
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card h-full flex flex-col items-center justify-center text-center gap-4 min-h-[320px]"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                  <FiCheck size={28} />
                </div>
                <h3 className="font-display text-xl font-700 text-ink-900 dark:text-ink-50">
                  Message Sent!
                </h3>
                <p className="text-ink-500 dark:text-ink-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-outline text-xs"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form  onSubmit={handleSubmit} className="card space-y-4" method="POST">
                {[
                  {
                    name: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Arjun Sharma",
                  },
                  {
                    name: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "arjun@example.com",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="font-mono text-xs tracking-wider text-ink-500 dark:text-ink-400 uppercase block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-accent dark:focus:border-accent focus:outline-none text-ink-900 dark:text-ink-100 placeholder-ink-400 dark:placeholder-ink-600 font-body text-sm transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="font-mono text-xs tracking-wider text-ink-500 dark:text-ink-400 uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 focus:border-accent dark:focus:border-accent focus:outline-none text-ink-900 dark:text-ink-100 placeholder-ink-400 dark:placeholder-ink-600 font-body text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"
                      />
                      Sending…
                    </span>
                  ) : (
                    <>
                      <FiSend size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
