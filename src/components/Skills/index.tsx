import { useId, useMemo, useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  motion,
  useMotionValue,
  animate,
} from "framer-motion";
import Section from "../Section";
import { languages, frameworks } from "../../data";

type Skill = { name: string; level?: number; years?: number };

const easing = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing, staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: easing },
  },
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    animate(rx, clamp((0.5 - py) * 10, -10, 10), { duration: 0.2 });
    animate(ry, clamp((px - 0.5) * 14, -14, 14), { duration: 0.2 });
  }
  function onLeave() {
    animate(rx, 0, { duration: 0.35 });
    animate(ry, 0, { duration: 0.35 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" as any }}
      className="relative will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  const core: Skill[] = useMemo(
    () => (frameworks as Skill[]).map((x) => ({ ...x, level: x.level ?? 75 })),
    []
  );
  const langs: Skill[] = useMemo(
    () => (languages as Skill[]).map((x) => ({ ...x, level: x.level ?? 75 })),
    []
  );

  const toolsMarquee = useMemo(
    () => [
      "Git",
      "PNPM",
      "Bun",
      "Vite",
      "Webpack",
      "Vitest/Jest",
      "RTL",
      "ESLint/Prettier",
      "CI/CD",
      "Docker",
    ],
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="skills">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto w-full max-w-7xl"
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400/50 to-transparent"></span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-cyan-400/80 font-medium">
                Technical Arsenal
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Skills &amp;
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-slate-300/90">
              Modern tech stack focused on performance, type safety, and
              developer experience.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Frameworks Card */}
            <motion.div variants={item}>
              <TiltCard>
                <div className="relative h-full group">
                  <div
                    className="relative h-full rounded-3xl border border-white/10 bg-primary-bg/80 backdrop-blur-xl p-8"
                    style={{ transformStyle: "preserve-3d" as any }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                        Frameworks & Libraries
                      </h3>
                    </div>

                    {/* Skills Grid */}
                    <ul className="grid gap-5">
                      {core.map((s, i) => (
                        <motion.li
                          key={`core-${s.name}-${i}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                          className="group/item flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-cyan-400/30 transition-all"
                        >
                          <Ring level={s.level} size={56} stroke={6} />
                          <div className="flex-1">
                            <p className="text-base font-medium text-white group-hover/item:text-cyan-300 transition-colors">
                              {s.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${s.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.8,
                                    ease: easing,
                                    delay: i * 0.05,
                                  }}
                                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                />
                              </div>
                              <span className="text-xs text-slate-400 tabular-nums min-w-[3ch]">
                                {s.level}%
                              </span>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>

            {/* Languages Card */}
            <motion.div variants={item}>
              <TiltCard>
                <div className="relative h-full group">
                  <div
                    className="relative h-full rounded-3xl border border-white/10 bg-primary-bg/80 backdrop-blur-xl p-8"
                    style={{ transformStyle: "preserve-3d" as any }}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text">
                        Languages
                      </h3>
                    </div>

                    {/* Skills Grid */}
                    <ul className="grid gap-5">
                      {langs.map((s, i) => (
                        <motion.li
                          key={`lang-${s.name}-${i}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.4 }}
                          className="group/item flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-indigo-400/30 transition-all"
                        >
                          <Ring level={s.level} size={56} stroke={6} />
                          <div className="flex-1">
                            <p className="text-base font-medium text-white group-hover/item:text-indigo-300 transition-colors">
                              {s.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="h-1 flex-1 rounded-full bg-white/10 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${s.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.8,
                                    ease: easing,
                                    delay: i * 0.05,
                                  }}
                                  className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
                                />
                              </div>
                              <span className="text-xs text-slate-400 tabular-nums min-w-[3ch]">
                                {s.level}%
                              </span>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          {/* Tools Marquee */}
          <motion.div variants={item} className="mt-8">
            <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-primary-bg/60 backdrop-blur-sm">
              <div className="relative px-6 py-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-6 bg-gradient-to-r from-emerald-400/50 to-transparent"></span>
                  <p className="text-sm uppercase tracking-wider text-emerald-400/80 font-medium">
                    Development Tools
                  </p>
                </div>

                <div className="relative overflow-hidden">
                  <div className="flex gap-3 animate-[marq_20s_linear_infinite] whitespace-nowrap">
                    {[...toolsMarquee, ...toolsMarquee, ...toolsMarquee].map(
                      (t, i) => (
                        <span
                          key={`${t}-${i}`}
                          className="group/pill relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-emerald-400/30 transition-all"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover/pill:animate-pulse"></span>
                          <span className="text-sm font-medium text-slate-200 group-hover/pill:text-emerald-300 transition-colors">
                            {t}
                          </span>
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <style>{`
          @keyframes marq { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        `}</style>
      </Section>
    </LazyMotion>
  );
}

function Ring({
  level = 0,
  size = 64,
  stroke = 8,
}: {
  level?: number;
  size?: number;
  stroke?: number;
}) {
  const pct = Math.max(0, Math.min(100, level));
  const id = useId();

  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c;
  const offset = c * (1 - pct / 100);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <span className="pointer-events-none absolute -inset-1 rounded-full blur-md bg-[linear-gradient(90deg,rgba(34,211,238,0.35),rgba(99,102,241,0.35),rgba(56,189,248,0.35))]" />

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="relative rotate-[-90deg]" // start at 12 o’clock
      >
        <defs>
          {/* SAME gradient as your bar: cyan → indigo → cyan */}
          <linearGradient
            id={`ring-grad-${id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(34,211,238,0.95)" />{" "}
            <stop offset="50%" stopColor="rgba(99,102,241,0.95)" />{" "}
            <stop offset="100%" stopColor="rgba(56,189,248,0.95)" />{" "}
          </linearGradient>
        </defs>

        {/* track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="rgba(255,255,255,0.10)"
          strokeWidth={stroke}
          fill="none"
        />

        {/* progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke={`url(#ring-grad-${id})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={dash}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 800ms cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </svg>

      {/* label */}
      <div className="absolute inset-0 grid place-items-center text-xs font-medium text-white">
        {pct}%
      </div>
    </div>
  );
}
