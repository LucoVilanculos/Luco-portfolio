import { motion } from "framer-motion";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";
import "../../index.css";

const socials = [
  {
    name: "GitHub",
    icon: <GithubLogoIcon size={48} />,
    href: "https://github.com/LucoVilanculos",
    colors: "from-blue-600 to-cyan-800",
  },
  {
    name: "LinkedIn",
    icon: <LinkedinLogoIcon size={48} />,
    href: "https://www.linkedin.com/in/luco-vilanculos-5b551432a",
    colors: "from-blue-600 to-cyan-800",
  },
  {
    name: "Facebook",
    icon: <FacebookLogoIcon size={48} />,
    href: "https://www.facebook.com/luisisaura.vilanculos/",
    colors: "from-blue-600 to-cyan-800",
  },
  {
    name: "Instagram",
    icon: <InstagramLogoIcon size={48} />,
    href: "https://www.instagram.com/sr.lucoooo/",
    colors: "from-blue-600 to-cyan-800",
  },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center px-6 relative bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] text-slate-100"
    >
      <div className="absolute w-[900px] h-[900px] bg-emerald-500 opacity-10 rounded-full blur-[150px] -z-10 top-[-200px] left-[-200px] animate-pulse-glow" />
      <div className="absolute w-[500px] h-[500px] bg-indigo-500 opacity-10 rounded-full blur-[100px] -z-10 bottom-[-100px] right-[-100px] animate-pulse-glow-delay" />

      <div className="max-w-5xl w-full text-center z-10 py-16 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight glow-text"
        >
          Luco Vilanculos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-lg sm:text-xl text-slate-300 max-w-xl mx-auto"
        >
          Junior Full-Stack Developer creating impactful experiences.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mt-10 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl border border-white/10 p-6 w-50 h-40 text-slate-100 text-center flex flex-col items-center gap-2
                bg-gradient-to-br ${social.colors} shadow-xl hover:shadow-2xl hover:rotate-1
                transition-all duration-500 ease-in-out transform hover:scale-105`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {social.icon}
              <h2 className="text-lg font-bold tracking-tight">{social.name}</h2>
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          className="mt-12 px-8 py-3 text-lg font-semibold rounded-full bg-emerald-500 hover:bg-emerald-400 text-black transition shadow-xl animate-pulse-glow"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Ver Projectos
        </motion.button>
      </div>
    </section>
  );
};
