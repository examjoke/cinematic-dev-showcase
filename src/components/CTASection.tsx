import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const CTASection = () => (
  <SectionWrapper id="cta" className="text-center">
    {/* Glow background */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] animate-pulse-glow" />
    </div>

    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-6 text-glow-sm">
        Ready to Create?
      </p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8">
        Let's Build Together
      </h2>
      <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-12">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <motion.a
        href="#contact"
        className="inline-block glass-panel px-12 py-5 font-display text-base tracking-wider uppercase neon-text hover:neon-glow transition-all duration-500 animate-pulse-glow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Hire Me
      </motion.a>
    </motion.div>
  </SectionWrapper>
);

export default CTASection;
