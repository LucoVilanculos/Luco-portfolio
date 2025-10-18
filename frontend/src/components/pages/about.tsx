import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src="https://res.cloudinary.com/dtopurogz/image/upload/v1750771182/luco_r50weu.jpg"
          alt="Luco Vilanculos"
          className="rounded-3xl shadow-2xl w-80 md:w-[320px] lg:w-[400px] border-4 border-emerald-400"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.5 }}
        className="w-full md:w-1/2 text-center md:text-left space-y-6 px-4"
      >
        <h2 className="text-4xl font-extrabold tracking-tight text-emerald-400">
          About-me
        </h2>
        <p className="text-lg leading-relaxed text-slate-200">
          I'm a passionate Junior Full-Stack Developer focused on building
          responsive web applications with clean code and great user
          experiences. I love working with modern technologies like{" "}
          <strong className="text-emerald-400">React</strong>,{" "}
          <strong className="text-emerald-400">Next.js</strong>,{" "}
          <strong className="text-emerald-400">JavaScript</strong>,{" "}
          <strong className="text-emerald-400">TypeScript</strong>, and{" "}
          <strong className="text-emerald-400">TailwindCSS</strong> on the
          front-end, and have a solid foundation in{" "}
          <strong className="text-emerald-400">Node.js</strong> and{" "}
          <strong className="text-emerald-400">Express</strong> on the
          back-end.
        </p>
        <p className="text-lg leading-relaxed text-slate-300">
          I enjoy learning continuously, solving problems, and collaborating to
          create meaningful digital products. I'm always open to new challenges!
          💡
        </p>
      </motion.div>
    </section>
  );
};
