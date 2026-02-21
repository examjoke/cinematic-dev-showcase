import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import TiltCard from "./TiltCard";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Quantum Dashboard",
    description: "Real-time analytics platform with AI-powered insights and interactive data visualization.",
    tags: ["React", "Three.js", "Python", "WebSocket"],
    color: "from-neon-cyan/20 to-neon-blue/10",
  },
  {
    title: "Neural Commerce",
    description: "E-commerce platform with recommendation engine and AR product preview.",
    tags: ["Next.js", "Stripe", "TensorFlow", "AR.js"],
    color: "from-neon-magenta/20 to-neon-cyan/10",
  },
  {
    title: "Orbit Social",
    description: "Decentralized social platform with real-time messaging and content curation.",
    tags: ["React", "GraphQL", "WebRTC", "IPFS"],
    color: "from-neon-blue/20 to-neon-magenta/10",
  },
  {
    title: "Synthwave Studio",
    description: "Browser-based music production tool with synthesizer and beat sequencer.",
    tags: ["TypeScript", "Web Audio API", "Canvas", "MIDI"],
    color: "from-neon-cyan/20 to-neon-magenta/10",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4 text-glow-sm">
        Portfolio
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
        Featured Projects
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <TiltCard key={project.title}>
          <div className="glass-panel-hover p-8 h-full flex flex-col">
            <div className={`w-full h-40 rounded-lg bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center`}>
              <span className="font-display text-2xl text-foreground/30 tracking-wider">
                0{i + 1}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-display tracking-wider uppercase px-3 py-1 rounded-full border border-primary/20 text-primary/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <ExternalLink className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Github className="w-5 h-5" />
              </button>
            </div>
          </div>
        </TiltCard>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
