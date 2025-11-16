import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import { motion } from "framer-motion";
import {
  HiArrowUpRight,
  HiArrowLeft,
  HiSparkles,
  HiCodeBracket,
  HiTag,
} from "react-icons/hi2";

const easing = [0.22, 1, 0.36, 1];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();

  const proj = projects.find((p) => p.slug === slug);

  if (!proj) {
    return (
      <div className="min-h-screen bg-primary-bg flex items-center justify-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Project not found
          </h1>
          <p className="text-slate-300/80 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-white/[0.08] to-white/[0.04] px-6 py-3 text-sm font-medium text-white hover:border-cyan-400/30 hover:from-cyan-400/10 hover:to-blue-400/5 transition-all backdrop-blur-sm"
          >
            <HiArrowLeft size={16} />
            Back home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] md:h-[60vh] overflow-hidden"
      >
        {proj.image && (
          <>
            <img
              src={proj.image}
              alt={proj.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/20 via-primary-bg/60 to-primary-bg" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-bg/40 to-transparent" />

            {/* Animated accents */}
            <div className="absolute top-0 left-0 w-32 h-32">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/80 to-transparent"></div>
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
            </div>
          </>
        )}

        {/* Title & Breadcrumb */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easing }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-300/80">
                <Link to="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-cyan-400">Projects</span>
                <span>/</span>
                <span>{proj.title}</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {proj.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-200/90 max-w-3xl">
                {proj.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* Actions */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          {proj.href && (
            <a
              href={proj.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-cyan-400/10 to-blue-400/5 px-6 py-3 text-sm font-medium text-white hover:border-cyan-400/40 hover:from-cyan-400/20 hover:to-blue-400/10 transition-all backdrop-blur-sm"
            >
              View Project
              <HiArrowUpRight
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={16}
              />
            </a>
          )}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-white/[0.08] to-white/[0.04] px-6 py-3 text-sm font-medium text-white hover:border-white/30 hover:from-white/[0.12] hover:to-white/[0.06] transition-all backdrop-blur-sm"
          >
            <HiArrowLeft size={16} />
            Back to Projects
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Story Section */}
            {proj.story && (
              <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <HiSparkles className="text-cyan-400" size={20} />
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Project Story
                  </h2>
                </div>

                <div dangerouslySetInnerHTML={{ __html: proj.story }} />
              </motion.section>
            )}

            {/* Gallery Section - Placeholder */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <HiSparkles className="text-cyan-400" size={20} />
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Gallery
                </h2>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-12 text-center">
                <p className="text-slate-400">Gallery coming soon...</p>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stack */}
            {proj.stack?.length ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <HiCodeBracket className="text-cyan-400" size={20} />
                  <h3 className="text-lg font-semibold text-white">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.stack.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="group/tech relative inline-flex items-center"
                    >
                      <span className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-indigo-400/30 blur-sm opacity-0 group-hover/tech:opacity-100 transition-opacity" />
                      <span className="relative rounded-lg border border-white/20 bg-white/[0.05] px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/[0.12] hover:border-cyan-400/40 hover:text-cyan-300 transition-all">
                        {tech}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ) : null}

            {/* Tags */}
            {proj.tags?.length ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <HiTag className="text-cyan-400" size={20} />
                  <h3 className="text-lg font-semibold text-white">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="rounded-lg border border-white/20 bg-white/[0.05] px-3 py-1.5 text-sm text-slate-300 hover:bg-white/[0.1] hover:border-white/30 transition-all"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
