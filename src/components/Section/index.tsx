import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  delay?: number;
  children: React.ReactNode;
}

export default function Section(props: SectionProps) {
  const { id, children, delay } = props;
  return (
    <motion.section
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      id={id}
      className="w-screen flex flex-col gap-6 mx-auto px-7 lg:px-20 bg-primary-bg"
    >
      {children}
    </motion.section>
  );
}
