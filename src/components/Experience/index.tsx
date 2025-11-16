import { motion, LazyMotion, domAnimation } from "framer-motion";
import Section from "../Section";
import { HiBriefcase, HiMapPin } from "react-icons/hi2";

const easing = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing, staggerChildren: 0.08 },
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

interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

const experiences: ExperienceItem[] = [
  {
    company: "SkillMapper",
    location: "Paris, France",
    role: "Software Engineer (Frontend)",
    period: "Jul 2023 - Present",
    current: true,
    highlights: [
      "Improved web app performance by ~50% through strategic caching and state optimization",
      "Delivered high-fidelity UIs with >80% Figma accuracy across platforms",
      "Built 30+ reusable utilities and 25+ atomic components, reducing feature dev time by 20-30%",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    role: "Software Developer",
    period: "",
    current: true,
    highlights: [
      "Developed custom web solutions for international clients across multiple industries",
      "Delivered end-to-end features from database design to polished UI with modern tech stacks",
      "Maintained 100% client satisfaction through clear communication and on-time delivery",
    ],
  },
  {
    company: "Celebes Digital",
    location: "Makassar, Indonesia",
    role: "Software Engineer (Fullstack)",
    period: "Jun 2024 - Dec 2024",
    highlights: [
      "Led development of disaster reporting platform with admin dashboard",
      "Built 100% responsive UI optimized across mobile, tablet, and desktop",
      "Implemented RBAC, push notifications, and reusable Blade components",
    ],
  },
  {
    company: "Torche Education",
    location: "Tangerang, Indonesia",
    role: "Frontend Engineer Intern",
    period: "Feb 2023 - Jun 2023",
    highlights: [
      "Delivered Career Page app ahead of deadlines with minimal supervision",
      "Standardized state management with Redux Toolkit following best practices",
      "Achieved >90% design fidelity with pixel-perfect responsive UI",
    ],
  },
];

export default function Experience() {
  return (
    <LazyMotion features={domAnimation}>
      <Section id="experience">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400/50 to-transparent"></span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-cyan-400/80 font-medium">
                Career Path
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Professional
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-slate-300/90">
              Building production-grade software across startups and agencies.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  variants={item}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                    <div className="relative">
                      <div
                        className={`h-4 w-4 rounded-full border-2 ${
                          exp.current
                            ? "border-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-400/50"
                            : "border-blue-400/50 bg-primary-bg"
                        }`}
                      >
                        {exp.current && (
                          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="group relative">
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all"></div>
                    <div className="relative rounded-2xl border border-white/10 bg-primary-bg/60 backdrop-blur-sm p-6 md:p-8 hover:bg-primary-bg/80 transition-all">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <HiBriefcase className="text-cyan-400" size={18} />
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {exp.company}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-base md:text-lg font-medium text-slate-200/90 mb-1">
                            {exp.role}
                          </p>
                          <div className="flex items-center gap-1.5 text-sm text-slate-400">
                            <HiMapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-cyan-400/90 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2.5">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300/90 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
