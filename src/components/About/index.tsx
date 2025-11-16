import { motion, LazyMotion, domAnimation, useInView, useMotionValue, useSpring } from "framer-motion";
import Section from "../Section";
import { FaAccessibleIcon, FaShieldAlt } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { useEffect, useRef } from "react";

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

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <p
      ref={ref}
      className="text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent"
    >
      0{suffix}
    </p>
  );
}

export default function About() {
  return (
    <LazyMotion features={domAnimation}>
      <Section id="about">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl"
        >
          {/* Header */}
          <motion.div variants={item} className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400/50 to-transparent"></span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-cyan-400/80 font-medium">Who I Am</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Building Digital
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Experiences
              </span>
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-slate-300/90">
              Software Engineer specializing in frontend architecture with solid foundations
              in backend systems, web security, and Artifitcial Intelligence (AI) integrations.
            </p>
          </motion.div>

          {/* Main content grid */}
          <motion.div
            variants={item}
            className="grid gap-6 lg:grid-cols-3"
          >
            {/* Main summary - takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="relative group">
                <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-sm group-hover:blur-md transition-all"></div>
                <div className="relative rounded-3xl border border-white/10 bg-primary-bg/80 backdrop-blur-xl p-8 md:p-10">
                  <p className="text-base md:text-lg text-slate-200/95 leading-relaxed mb-8">
                    I design and ship <span className="text-cyan-400 font-medium">fast, accessible, and maintainable</span> web apps
                    end-to-end. I move quickly, keep things clean, and bring
                    security awareness to product decisions. I'm a fast learner
                    who thrives on challenging problems and delivering measurable
                    impact.
                  </p>

                  {/* Impact grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/20">
                        <RiFlashlightFill size={20} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">Performance-First</h3>
                        <p className="text-sm text-slate-300/80 leading-relaxed">
                          Ship snappy UI with smart code-splitting, caching, and smooth animations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-400/20">
                        <FaShieldAlt size={18} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">Security-Aware</h3>
                        <p className="text-sm text-slate-300/80 leading-relaxed">
                          Reduce XSS/CSRF/SSTI exposure with safe patterns and code reviews.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-400/20">
                        <FaAccessibleIcon size={20} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">Accessibility</h3>
                        <p className="text-sm text-slate-300/80 leading-relaxed">
                          Semantic HTML, keyboard flows, and motion-reduction fallbacks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20 text-fuchsia-300 border border-fuchsia-400/20">
                        <HiOutlinePuzzlePiece size={22} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white mb-1">E2E Delivery</h3>
                        <p className="text-sm text-slate-300/80 leading-relaxed">
                          From API contracts and testing up to polished, animated frontends.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-slate-400 mb-4">Core Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { name: "React", color: "bg-cyan-400" },
                        { name: "Next.js", color: "bg-blue-400" },
                        { name: "TypeScript", color: "bg-indigo-400" },
                        { name: "Framer Motion", color: "bg-purple-400" },
                        { name: "Node.js", color: "bg-emerald-400" },
                        { name: "Tailwind", color: "bg-cyan-400" },
                        { name: "Web Security", color: "bg-red-400" },
                        { name: "Testing", color: "bg-amber-400" },
                      ].map((t) => (
                        <span
                          key={t.name}
                          className={`group relative inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-200/90 hover:bg-white/[0.08] hover:border-white/20 transition-all cursor-default`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${t.color}`}></span>
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Stats & CTA */}
            <div className="lg:col-span-1 space-y-6">
              {/* Stats cards */}
              <motion.div
                variants={item}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <AnimatedCounter value={20} suffix="+" />
                  <p className="mt-2 text-sm uppercase tracking-wider text-slate-300/80 font-medium">
                    Projects Delivered
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={item}
                whileHover={{ y: -4, scale: 1.02 }}
                className="relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 p-6 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <AnimatedCounter value={2} suffix="+" />
                  <p className="mt-2 text-sm uppercase tracking-wider text-slate-300/80 font-medium">
                    Years Experience
                  </p>
                </div>
              </motion.div>

              {/* Focus areas */}
              <motion.div
                variants={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6"
              >
                <p className="text-xs uppercase tracking-wider text-cyan-400/80 mb-4 font-medium flex items-center gap-2">
                  <span className="h-px w-4 bg-cyan-400/50"></span>
                  Expertise
                </p>
                <ul className="space-y-2.5 text-sm text-slate-200/90">
                  {[
                    "Frontend Architecture",
                    "Performance & DX",
                    "Motion Design",
                    "API Integration",
                    "Security by Design",
                    "Accessibility",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-2 group">
                      <span className="h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-150 transition-transform"></span>
                      <span className="group-hover:text-white group-hover:translate-x-1 transition-all">{area}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
