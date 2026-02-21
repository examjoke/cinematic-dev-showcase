import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = (field: string) =>
    `w-full bg-muted/50 border rounded-lg px-4 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-all duration-500 ${
      focused === field
        ? "border-primary/60 shadow-[0_0_20px_hsl(185_100%_50%/0.1)]"
        : "border-border hover:border-primary/30"
    }`;

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4 text-glow-sm">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text">
            Let's Work Together
          </h2>
        </motion.div>

        <motion.form
  action="mailto:itznaziran7@gmail.com"
  method="POST"
  encType="text/plain"
  className="glass-panel p-8 md:p-12 space-y-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              required
              className={inputClass("name")}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className={inputClass("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={inputClass("subject")}
            onFocus={() => setFocused("subject")}
            onBlur={() => setFocused(null)}
          />
          <textarea
            placeholder="Your message..."
            rows={5}
            required
            className={`${inputClass("message")} resize-none`}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />

          <motion.button
            type="submit"
            className="w-full glass-panel py-4 font-display text-sm tracking-wider uppercase flex items-center justify-center gap-3 neon-text hover:neon-glow transition-all duration-500"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {submitted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Message Sent
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
