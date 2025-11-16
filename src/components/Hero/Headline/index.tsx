import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type HeadlineProps = {
  phrases?: string[];
  intervalMs?: number;
};

const easing = [0.22, 1, 0.36, 1];

export default function Headline({
  phrases = ["Software Engineer", "Front-End Focused", "Performance Oriented"],
  intervalMs = 2600,
}: HeadlineProps) {
  const list = useMemo(() => phrases, [phrases]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % list.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [list, intervalMs]);

  const current = list[index];

  // Split into words for a subtle stagger
  const words = current.split(" ");

  return (
    <div className="mt-2">
      <div className="relative h-[3.2rem] md:h-[4.5rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-60%", opacity: 0 }}
            transition={{ duration: 0.7, ease: easing }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.h1
              className="text-[34px] leading-tight md:text-6xl font-semibold tracking-tight text-center"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.05 },
                },
              }}
            >
              {words.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  className="inline-block mr-2"
                  variants={{
                    hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: easing },
                    },
                  }}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
