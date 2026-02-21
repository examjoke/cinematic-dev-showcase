import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import TiltCard from "./TiltCard";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Spotify Clone",
    description: "Developed a responsive Spotify Clone web app with an interactive music player featuring play, pause, and track navigation controls. Built using React.js with a clean, component-based architecture and optimized for performance and mobile responsiveness.",
    tags: ["HTML5", "CSS", "JAVASCRIPT", "Netlify"],
    image: "../public/images/pro1.png", // put image in public/images
    liveLink: "https://nazi-spotify-clone.netlify.app/",
    githubLink: "https://github.com/Naziran7/Nazi-Spotify",
    color: "from-neon-cyan/20 to-neon-blue/10",
  },
  {
    title: "Pet Service Website",
    description: "Developed a responsive pet services website with a modern and user-friendly interface to showcase services, booking details, and contact information. Focused on clean UI design, smooth navigation, and mobile responsiveness to enhance user experience.",
    tags: ["HTML5", "CSS(BootStrap)", "JAVASCRIPT", "API", "Netlify"],
    image: "../public/images/pro1.png", 
    liveLink: "https://joespawandwalks.com",
    githubLink: "https://github.com/Naziran7/joe-s-paw",
    color: "from-neon-magenta/20 to-neon-cyan/10",
  },
  {
    title: "Live Chat Box",
    description: "Developed a real-time live chat application enabling instant messaging between users with a smooth and responsive interface. Implemented using Node.js and Express.js with dynamic message updates to enhance user interaction and communication experience.",
    tags:["HTML5", "CSS(BootStrap)", "JAVASCRIPT","BACKEND(Express.js)","Socket.io","Node.js","Render"],
    image: "../public/images/pro1.png",
    liveLink: "https://chat-app-wb9z.onrender.com",
    githubLink: "https://github.com/Naziran7/Chat-app",
    color: "from-neon-blue/20 to-neon-magenta/10",
  },
  {
    title: "ERP System",
    description: "Developed an ERP system to streamline business operations including user management, data tracking, and reporting with a clean and responsive interface. Focused on improving workflow efficiency through centralized data management and intuitive UI.",
    tags: ["React", "Tailwind CSS","JS","Node.js", "PostgreSQL", "Express.js", "API", "Cloud(AWS)","JWT","Render"],
    image: "../public/images/pro1.png",
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/your-repo",
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
          <div className="w-full h-full object-contain bg-black">
          <img
  src={project.image}
  alt={project.title}
  className="w-full h-40 object-cover rounded-lg mb-6"
/>
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

  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    <ExternalLink className="w-5 h-5" />
  </a>

  <a
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    <Github className="w-5 h-5" />
  </a>

</div>
          </div>
        </TiltCard>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
