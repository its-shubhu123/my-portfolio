// src/App.jsx
import { useState, useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-ink-950 flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          onAnimationComplete={onDone}
          className="font-display text-5xl font-800 text-white"
        >
          <span className="text-accent">S</span>V
          <motion.div
            className="mt-4 mx-auto h-0.5 bg-accent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [dark, toggleDark] = useDarkMode();
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader
          key="loader"
          onDone={() => setTimeout(() => setLoading(false), 900)}
        />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Navbar dark={dark} toggleDark={toggleDark} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
