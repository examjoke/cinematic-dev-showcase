import { Github, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-display text-sm text-muted-foreground tracking-wider">
        © 2026 Alex Rivera. All rights reserved.
      </p>

      {/* Mobile social links */}
      <div className="flex gap-4 md:hidden">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="w-10 h-10 glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-500"
          >
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground/50 font-body">
        Crafted with passion & pixels
      </p>
    </div>
  </footer>
);

export default Footer;
