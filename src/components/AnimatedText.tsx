import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const AnimatedText = ({ text, className = "", as: Tag = "h1" }: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex mr-[0.3em]">
            {word.split("").map((char, ci) => (
              <motion.span key={ci} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedText;
