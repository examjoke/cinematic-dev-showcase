import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code2, Palette, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Coding Languages" },
  { icon: Palette, label: "10+ Projects " },
  { icon: Zap, label: "FreeLancer" },
  { icon: Globe, label: "Software Developer" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => (
  <SectionWrapper id="about">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={fadeUp} className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4 text-glow-sm">
          About Me
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold mb-6 gradient-text">
          I'm Anish naziran
        </motion.h2>
        <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-4 font-body">
        BCA student with a strong passion for Frontend Development and DevOps. Skilled in
building user-friendly web interfaces, with a solid foundation in Data Structures and
Algorithms (DSA). Eager to apply technical knowledge, gain hands-on experience, and
explore opportunities to grow as a developer while contributing to impactful projects
        </motion.p>
        <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed font-body">
          
        </motion.p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-4"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {highlights.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={fadeUp}
            className="glass-panel-hover p-6 flex flex-col items-center text-center gap-3"
          >
            <Icon className="w-8 h-8 text-primary" />
            <span className="font-display text-xs tracking-wider uppercase text-foreground">{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
