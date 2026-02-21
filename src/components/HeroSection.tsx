import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ChevronDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
    {/* Ambient gradient orbs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-cyan/5 blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-magenta/5 blur-[100px] animate-float-slow" />
    </div>

    <motion.div
      className="relative z-10 text-center max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <motion.p
        className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6 text-glow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Creative Developer & Designer
      </motion.p>

      <AnimatedText
        text="Building Digital Experiences"
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight gradient-text"
      />

      <motion.p
        className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        I craft immersive web experiences with cutting-edge technology,
        blending design and engineering into seamless digital products.
      </motion.p>

      <motion.div
        className="mt-12 flex gap-4 justify-center flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <a
          href="#projects"
          className="glass-panel px-8 py-3 font-display text-sm tracking-wider uppercase neon-text hover:neon-glow transition-all duration-500"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="glass-panel px-8 py-3 font-display text-sm tracking-wider uppercase text-foreground hover:text-primary transition-all duration-500"
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>

    {/* Scroll cue */}
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-6 h-6 text-primary/50" />
    </motion.div>
  </section>
);

export default HeroSection;
