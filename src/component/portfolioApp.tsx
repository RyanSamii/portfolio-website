import './portfolio.css';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  video: string | null;
  img: string;
  demo: string;
  repo: string;
  description: string;
}

import React, { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { video } from "framer-motion/client";

const projectsData = [
  {
    id: "gesture",
    title: "Gesture Recognition Plugin",
    subtitle: "Real-time webcam gesture recognition — Unity integration + front-end demo",
    tech: ["Unity", "C#", "UI Toolkit", "Google MediaPipe", "SQLite", "Computer Vision"],
    video: "/videos/nova-kiosk.mp4",
    img: "/images/NOVA_Logo.png", 
    demo: "#", // replace with live demo URL if available
    repo: "https://github.com/GYOUDNova/Nova",
    description:
      "Built a real-time gesture recognition system for interactive kiosks and accessibility tools. The front-end demo shows the Kiosk example I developed to showcase its capabilities.",
  },
  {
    id: "chatbot",
    title: "Personal AI Chatbot",
    subtitle: "Conversational assistant with custom knowledge + voice interaction",
    tech: ["Python", "RVC", "Ollama", "Text-to-Speech", "Speech-to-Text", "LLMs"],
    video: null,
    img: "/images/chat-bot.png",
    demo: "#",
    repo: "https://github.com/RyanSamii/Personal-Chatbot",
    description:
      "A personal chatbot interface with conversation history, session saving, and streaming responses. uses RVC and Ollama for voice interaction. Mainly for fun and personal use so repo is private.",
  },
  {
    id: "public-health",
    title: "Public Health Inspection Simulation",
    subtitle: "Interactive simulation for training inspectors and decision-makers",
    tech: ["Unity", "UI Toolkit", "C#", "Simulation", "JavaScript"],
    video: null,
    img: "/images/health-inspection.png",
    demo: "#",
    repo: "https://github.com/RyanSamii",
    description:
      "A simulation environment to model health inspections. Made with Unity and C#, it includes interactive elements for training inspectors. This project is not publicly available as it was developed for work.",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "This very website! Built with React, Tailwind, and Framer Motion",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    video: null,
    img: "/images/portfolio-website.png",
    demo: "#",
    repo: "https://github.com/RyanSamii/portfolio-website",
    description:
      "A personal portfolio website to showcase my projects and skills. Built with React and Tailwind CSS, it features a clean, responsive design and smooth animations using Framer Motion.",
  }
];

export default function PortfolioApp() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Ryan Samii</h1>
          <p className="text-sm text-gray-600 mt-1">Front-end Developer — React, Tailwind, accessibility-focused</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href="https://github.com/RyanSamii" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-gray-800">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/ryan-samii/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-gray-800">
            <FiLinkedin size={20} />
          </a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Intro / Hero */}
        <section className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Computer Science Graduate</h2>
              <p className="mt-3 text-gray-600">I build functional code with an emphasis on accessibility, maintainability, and performance. I am proficient in debugging. Below are selected projects that highlight my work.</p>

              <div className="mt-4 flex gap-3">
                <a href="https://www.linkedin.com/in/ryan-samii/" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:shadow" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg text-sm hover:opacity-95">View projects</a>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex-shrink-0">
              <div className="w-40 h-40 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center text-white font-bold">RS</div>
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section id="projects">
          <h3 className="text-xl font-semibold mb-4">Selected Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((p) => (
              <motion.article
                key={p.id}
                className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-md cursor-pointer"
                whileHover={{ y: -4 }}
                onClick={() => setSelected(p)}
              >
                <div className="flex gap-4">
                  <div className="w-28 h-20 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 flex items-center justify-center text-sm text-gray-500">
                    { p.img ? <img src={p.img} alt={p.title} className="w-full h-full object-contain" /> : "No Screenshot Available" }
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium">{p.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{p.subtitle}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <ul className="flex flex-wrap gap-2 text-xs text-gray-600">
                        {p.tech.map((t) => (
                          <li key={t} className="px-2 py-1 bg-gray-100 rounded">{t}</li>
                        ))}
                      </ul>

                      <div className="flex gap-2 items-center">
                        <a href={p.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm flex items-center gap-1">
                          <FiGithub /> Code
                        </a>
                        {p.demo !== "#" && (
                          <a href={p.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm flex items-center gap-1">
                            <FiExternalLink /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* About / Skills */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mt-8">
          <div className="md:flex md:items-start md:gap-8">
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold">About me</h3>
              <p className="text-gray-600 mt-2">I build various experiences and programs with a focus on performance and functionality. I enjoy turning complex problems into simple solutions and shipping reliable, testable components.</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium">Skills</h4>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {[
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Responsive Design",
                    "Testing",
                    "Debugging",
                    "Performance Optimization",
                    "Agile/Scrum",
                    "Git",
                  ].map((s) => (
                    <span key={s} className="px-3 py-1 bg-gray-100 rounded">{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:w-56">
              <h4 className="text-sm font-medium">Contact</h4>
              <div className="mt-3 flex flex-col gap-2 text-sm">
                <a className="flex items-center gap-2" href="https://github.com/RyanSamii" target="_blank" rel="noreferrer"><FiGithub /> github.com/RyanSamii</a>
                <a className="flex items-center gap-2" href="https://linkedin.com/in/RyanSamii" target="_blank" rel="noreferrer"><FiLinkedin /> linkedin.com/in/RyanSamii</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Ryan Samii — Built with React & Tailwind</footer>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />

            <motion.div className="relative max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 z-10" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold">{selected.title}</h4>
                  <p className="text-sm text-gray-600">{selected.subtitle}</p>
                </div>
                <button className="text-gray-500" onClick={() => setSelected(null)}>Close</button>
              </div>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-56 flex items-center justify-center">
                    {selected.video ? (
                      <video src={selected.video} controls className="w-full h-full object-contain" />
                    ) : (
                      <img src={selected.img} alt={selected.title} className="w-full h-full object-contain" />
                    )}
                  </div>

                <div>
                  <p className="text-sm text-gray-700">{selected.description}</p>

                  <div className="mt-4">
                    <h5 className="text-sm font-medium">Tech</h5>
                    <div className="mt-2 flex flex-wrap gap-2 text-xs">
                      {selected.tech.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-100 rounded">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a href={selected.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 border rounded">View code</a>
                    {selected.demo !== "#" && <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 bg-sky-600 text-white rounded">Live demo</a>}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}