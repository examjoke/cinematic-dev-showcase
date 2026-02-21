import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Download, FileText } from "lucide-react";
import TiltCard from "./TiltCard";

const ResumeSection = () => (
  <SectionWrapper id="resume">
    <div className="flex flex-col items-center">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4 text-glow-sm">
          Resume
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
          My Experience
        </h2>
      </motion.div>

      <TiltCard className="w-full max-w-lg">
        <div className="glass-panel p-10 text-center relative overflow-hidden">
          {/* Spotlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

          <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
            Anish Naziran
          </h3>
          <p className="text-muted-foreground font-body mb-8">
            Full-Stack Developer & Cloud Enthusiastic
          </p>

         
          <div className="flex gap-4">



{/* Google Drive button */}
<a
  href="https://drive.google.com/file/d/1j8ik2mX8ZtWcdJ4kgwStqajivVcDJD-D/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="glass-panel px-40 py-3 font-display text-sm tracking-wider uppercase text-white/80 hover:text-white transition inline-flex items-center gap-3"
>
  Open Drive
</a>

</div>
        </div>
      </TiltCard>
    </div>
  </SectionWrapper>
);

export default ResumeSection;
