import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const SocialDock = () => (
  <motion.div
    className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 2 }}
  >
    {socials.map(({ icon: Icon, href, label }, i) => (
      <motion.a
        key={label}
        href={href}
        aria-label={label}
        className="w-10 h-10 glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-500"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
      >
        <Icon className="w-4 h-4" />
      </motion.a>
    ))}
  </motion.div>
);

export default SocialDock;
