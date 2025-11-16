import { LazyMotion, domAnimation, motion } from "framer-motion";
import Section from "./Section";
import { projects } from "../data";
import {
  HiArrowUpRight,
  HiSparkles,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { useState } from "react";

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

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentProjects = projects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <LazyMotion features={domAnimation}>
      <Section id="projects">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto "
        >
          {/* Header */}
          <motion.div variants={item} className="mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400/50 to-transparent"></span>
              <span className="text-xs md:text-sm uppercase tracking-widest text-cyan-400/80 font-medium flex items-center gap-2">
                <HiSparkles size={14} />
                Featured Work
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Selected
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <p className="max-w-2xl text-base md:text-lg text-slate-300/90">
                Frontend-first applications with solid backend foundations,
                security awareness, and Artificial Intelligence integrations.
              </p>
              <motion.a
                href="https://github.com/ahmadsultani"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-white/[0.08] to-white/[0.04] px-5 py-2.5 text-sm font-medium text-white hover:border-cyan-400/30 hover:from-cyan-400/10 hover:to-blue-400/5 transition-all backdrop-blur-sm"
              >
                View all on GitHub
                <HiArrowUpRight
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={16}
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Carousel Container */}
          <motion.div variants={item} className="relative">
            {/* Navigation Buttons */}
            <div className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20">
              <motion.button
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPrev}
                disabled={currentPage === 0}
                className={`group h-12 w-12 rounded-full border backdrop-blur-xl transition-all ${
                  currentPage === 0
                    ? "border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed"
                    : "border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.04] text-white hover:border-cyan-400/40 hover:from-cyan-400/20 hover:to-blue-400/10"
                }`}
              >
                <HiChevronLeft className="mx-auto" size={20} />
              </motion.button>
            </div>

            <div className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20">
              <motion.button
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNext}
                disabled={currentPage === totalPages - 1}
                className={`group h-12 w-12 rounded-full border backdrop-blur-xl transition-all ${
                  currentPage === totalPages - 1
                    ? "border-white/5 bg-white/[0.02] text-slate-600 cursor-not-allowed"
                    : "border-white/20 bg-gradient-to-br from-white/[0.12] to-white/[0.04] text-white hover:border-cyan-400/40 hover:from-cyan-400/20 hover:to-blue-400/10"
                }`}
              >
                <HiChevronRight className="mx-auto" size={20} />
              </motion.button>
            </div>

            {/* Grid Container */}
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: easing }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
            >
              {currentProjects.map((p, i: number) => {
                const CardEl: any = p.slug ? motion.a : motion.div;

                return (
                  <motion.div
                    key={`${p.title}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: easing }}
                    className="relative"
                  >
                    <CardEl
                      href={p.slug ? `/projects/${p.slug}` : p.href}
                      target={!p.slug && p.href ? "_blank" : undefined}
                      rel={!p.slug && p.href ? "noreferrer" : undefined}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3, ease: easing }}
                      className="group/card relative flex flex-col h-full overflow-hidden rounded-sm border border-white/10 backdrop-blur-xl bg-primary-bg/95 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 cursor-pointer"
                    >
                      <div className="relative h-48 sm:h-56 md:h-72 w-full overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>

                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top scale-100 group-hover/card:scale-105 transition-all duration-700"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                          }}
                        />

                        {/* Gradient overlays */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/60 to-transparent" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-bg/80" />

                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-16 h-16">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400/80 to-transparent"></div>
                          <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-16 h-16">
                          <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-indigo-400/80 to-transparent"></div>
                          <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-indigo-400/80 to-transparent"></div>
                        </div>

                        {/* Floating badge */}
                        {p.href && (
                          <motion.div
                            className="absolute top-4 right-4 z-20"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.34, 1.56, 0.64, 1],
                            }}
                          >
                            <div className="relative group/badge">
                              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70 group-hover/badge:opacity-100 blur transition-opacity"></div>
                              <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-primary-bg border-2 border-white/30 text-cyan-300 group-hover/card:scale-110 transition-transform">
                                <HiArrowUpRight size={18} />
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="relative flex flex-col flex-1 p-5 sm:p-6 md:p-7 transition-all duration-300">
                        {/* Top border accent */}
                        <motion.div
                          className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.6, ease: easing }}
                        ></motion.div>

                        <h3 className="font-bold mb-3 text-base sm:text-lg md:text-xl text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text transition-all duration-300">
                          {p.title}
                        </h3>

                        <p className="leading-relaxed mb-4 text-xs md:text-sm text-slate-200/90 line-clamp-3 transition-all duration-300">
                          {p.description}
                        </p>

                        {/* Tags */}
                        {p.tags?.length ? (
                          <div className="mt-auto flex flex-wrap gap-2">
                            {p.tags.slice(0, 5).map((t, idx) => (
                              <motion.span
                                key={t}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: idx * 0.04,
                                  duration: 0.3,
                                }}
                                className="group/tag relative inline-flex items-center"
                              >
                                <span className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-indigo-400/30 blur-sm opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                                <span className="relative rounded-lg border border-white/20 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/[0.12] hover:border-cyan-400/40 hover:text-cyan-300 transition-all">
                                  {t}
                                </span>
                              </motion.span>
                            ))}
                            {p.tags.length > 5 && (
                              <span className="inline-flex items-center px-3 py-1.5 text-xs text-cyan-400/80 font-medium">
                                +{p.tags.length - 5}
                              </span>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </CardEl>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Progress Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      i === currentPage
                        ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Section>
    </LazyMotion>
  );
}
