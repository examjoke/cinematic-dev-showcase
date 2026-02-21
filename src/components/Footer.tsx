import { Github, Linkedin, Youtube, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Naziran7", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/naziran7", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-display text-sm text-muted-foreground tracking-wider">
        © 2026 Anish Naziran. All rights reserved.
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
        itznaziran7@gmail.com
      </p>
    </div>
  </footer>
);

export default Footer;
