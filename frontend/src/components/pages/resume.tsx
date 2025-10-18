import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub,
  FaFigma,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaUserTie,
  FaLanguage,
  FaBriefcase,
  FaCogs
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiVite,
  SiCanva,
  SiJavascript,
  SiNpm,
  SiExpress,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { useRef } from "react";

export const ResumeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  const skills = [
    { icon: <SiTypescript size={32} color="#3178c6" />, name: "TypeScript" },
    { icon: <SiTailwindcss size={32} color="#38bdf8" />, name: "TailwindCSS" },
    { icon: <FaReact size={32} color="#61dafb" />, name: "React" },
    { icon: <FaHtml5 size={32} color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt size={32} color="#1572b6" />, name: "CSS" },
    { icon: <FaNodeJs size={32} color="#68a063" />, name: "Node.js" },
    { icon: <SiJavascript size={32} color="#f7df1e" />, name: "JavaScript" },
    { icon: <SiNpm size={32} color="#cb3837" />, name: "NPM" },
    { icon: <SiExpress size={32} color="#fff" />, name: "Express.js" },
    { icon: <MdDesignServices size={32} color="#f472b6" />, name: "UI/UX Design" },
    { icon: <FaGithub size={32} color="#fff" />, name: "Git & GitHub" },
    { icon: <SiVite size={32} color="#646cff" />, name: "Vite" },
    { icon: <SiMongodb size={32} color="#47a248" />, name: "MongoDB" },
    { icon: <FaFigma size={32} color="#a259ff" />, name: "Figma" },
    { icon: <SiCanva size={32} color="#00c4cc" />, name: "Canva" },
  ];

  const softSkills = [
    "Conflict Management",
    "Proactivity",
    "Flexibility",
    "Adaptability",
    "Responsibility",
    "Communication",
  ];

  const languages = [
    "Portuguese — Fluent",
    "English — Intermediate",
    "Changana — Fluent",
  ];

  const experiences = [
    "CRUD Task Manager with localStorage & modals.",
    "SpotiDados: Spotify-style dashboard using React.",
    "Mini movie platform using pure JS & CSS.",
    "Fully responsive landing page from scratch.",
    "Responsive e-commerce (team project).",
    "Bytes-Go responsive site (team project).",
  ];

  return (
    <motion.section
      ref={ref}
      style={{ y: translateY }}
      className="w-full min-h-[80vh] text-white px-6 md:px-16 py-12 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617]"
    >
      <main className="max-w-6xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight flex items-center justify-center gap-3">
            <FaCogs className="inline-block text-cyan-400" size={36} /> Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.05 }}
                className="relative group bg-gradient-to-br from-cyan-700 to-indigo-800 p-5 rounded-3xl shadow-2xl text-center hover:scale-110 transform transition duration-300 border-2 border-transparent hover:border-cyan-400 hover:shadow-cyan-400/40"
              >
                <div className="flex items-center justify-center mb-3">
                  {skill.icon}
                </div>
                <p className="text-base font-bold text-white drop-shadow-lg tracking-wide group-hover:text-cyan-300 transition">
                  {skill.name}
                </p>
                <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:ring-4 group-hover:ring-cyan-400/30 transition"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight flex items-center justify-center gap-3">
            <FaUserTie className="inline-block text-cyan-400" size={32} /> Soft Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-r from-cyan-600 to-cyan-800 p-4 rounded-2xl shadow-xl hover:scale-105 transform transition"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight flex items-center justify-center gap-3">
            <FaLanguage className="inline-block text-cyan-400" size={32} /> Languages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-cyan-700 to-indigo-800 p-4 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight flex items-center justify-center gap-3">
            <FaBriefcase className="inline-block text-cyan-400" size={32} /> Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-bl from-cyan-800 to-indigo-900 p-6 rounded-2xl shadow-xl hover:scale-105 transition"
              >
                {exp}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </motion.section>
  );
};
