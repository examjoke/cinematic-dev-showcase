import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / HTML5", level: 90 },
      { name: "CSS (BootStrap/Tailwind CSS)", level: 90 },
      { name: "JAVASCRIPT", level: 80 },
      
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 78 },
      { name: "PostgreSQL", level: 82 },
      { name: "RestAPI", level: 75 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
     
      { name: "AWS /IBM Cloud", level: 78 },
      { name: "Git / CI/CD", level: 90 },
      { name: "BlockChain ", level: 50 },
      
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-2">
      <span className="font-body text-sm text-foreground">{name}</span>
      <span className="font-display text-xs text-primary">{level}%</span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(185 100% 50%), hsl(300 80% 60%))`,
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <SectionWrapper id="skills">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4 text-glow-sm">
        Expertise
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
        Skills & Technologies
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6">
      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="glass-panel-hover p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: ci * 0.15 }}
        >
          <h3 className="font-display text-lg font-semibold mb-6 neon-text">{cat.title}</h3>
          {cat.skills.map((skill, si) => (
            <SkillBar key={skill.name} {...skill} delay={ci * 0.15 + si * 0.1} />
          ))}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
