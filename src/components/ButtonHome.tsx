import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";

type Props = {
  threshold?: number; // when to show (px)
  size?: number; // button diameter
  className?: string;
  label?: string;
};

export default function ButtonHome({
  threshold = 240,
  size = 48,
  className = "",
  label = "Back to top",
}: Props) {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false); // hide on idle
  const idleTimer = useRef<number | null>(null);

  // show/hide threshold
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > threshold);
      setActive(true);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setActive(false), 1600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  // progress ring (stroke offset)
  const circumference = 2 * Math.PI * 18; // r=18
  const offset = useTransform(scrollYProgress, (p) => (1 - p) * circumference);

  const ringBg = useMotionTemplate`conic-gradient(from 120deg, rgba(34,211,238,0.45), rgba(99,102,241,0.45), rgba(56,189,248,0.45))`;

  const clickTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: active ? 1 : 0.65, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.25 }}
          className="fixed z-50 right-5 bottom-6"
        >
          <motion.button
            type="button"
            aria-label={label}
            onClick={clickTop}
            whileTap={{ scale: 0.96 }}
            className={`relative grid place-items-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur ${className}`}
            style={{ width: size, height: size }}
          >
            {/* gradient halo */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-[3px] rounded-full opacity-60 blur-sm"
              style={{ background: ringBg as any }}
            />
            {/* ring track */}
            <svg
              aria-hidden
              width={size}
              height={size}
              viewBox="0 0 48 48"
              className="absolute inset-0"
            >
              <circle
                cx="24"
                cy="24"
                r="18"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="3"
                fill="none"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="18"
                stroke="url(#grad)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={circumference}
                style={{ strokeDashoffset: offset }}
              />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="48" y2="0">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.95)" />
                  <stop offset="50%" stopColor="rgba(99,102,241,0.95)" />
                  <stop offset="100%" stopColor="rgba(56,189,248,0.95)" />
                </linearGradient>
              </defs>
            </svg>

            {/* arrow icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="relative"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
