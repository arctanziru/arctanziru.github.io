import React, { useRef } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Headline from "./Headline";

const easing = [0.22, 1, 0.36, 1];

type HeroProps = {
  compact?: boolean;
};

export default function Hero({ compact = false }: HeroProps) {
  const ref = useRef<HTMLElement | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        id="hero"
        className={`
          relative w-full overflow-hidden text-white
          min-h-screen
          flex items-center justify-center
        `}
      >
        {/* --- PRIMARY BACKGROUND --- */}
        <div aria-hidden className="absolute inset-0 bg-primary-bg" />
        <div
          aria-hidden
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_58%,transparent_100%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            background:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />

        {/* 3D Floating Elements */}
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          {/* Floating cubes */}
          <motion.div
            className="absolute top-[20%] left-[15%] w-20 h-20"
            animate={{
              y: [0, -30, 0],
              rotateX: [0, 360],
              rotateY: [0, 180],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ perspective: 1000 }}
          >
            <div className="w-full h-full relative preserve-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.3)]" />
            </div>
          </motion.div>

          <motion.div
            className="absolute top-[60%] right-[20%] w-16 h-16"
            animate={{
              y: [0, 40, 0],
              rotateZ: [0, 180, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg shadow-[0_0_30px_rgba(56,189,248,0.3)]" />
          </motion.div>

          <motion.div
            className="absolute bottom-[25%] left-[25%] w-12 h-12"
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-lg shadow-[0_0_25px_rgba(99,102,241,0.3)]" />
          </motion.div>

          {/* Floating rings */}
          <motion.div
            className="absolute top-[35%] right-[15%] w-24 h-24"
            animate={{
              rotateZ: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.4),inset_0_0_40px_rgba(34,211,238,0.2)]" />
          </motion.div>

          <motion.div
            className="absolute bottom-[35%] right-[30%] w-16 h-16"
            animate={{
              rotateZ: [360, 0],
              y: [0, -25, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-blue-400/30 shadow-[0_0_35px_rgba(37,99,235,0.4),inset_0_0_35px_rgba(37,99,235,0.2)]" />
          </motion.div>

          {/* Additional cubes */}
          <motion.div
            className="absolute top-[45%] left-[8%] w-14 h-14"
            animate={{
              y: [0, 35, 0],
              rotateY: [0, 360],
              rotateZ: [0, 180],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg shadow-[0_0_28px_rgba(168,85,247,0.3)]" />
          </motion.div>

          <motion.div
            className="absolute top-[15%] right-[10%] w-18 h-18"
            animate={{
              y: [0, -25, 0],
              rotateX: [0, 180, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-lg shadow-[0_0_32px_rgba(34,211,238,0.3)]" />
          </motion.div>

          {/* Additional rings */}
          <motion.div
            className="absolute top-[25%] left-[40%] w-20 h-20"
            animate={{
              rotateZ: [0, -360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full rounded-full border-2 border-indigo-400/30 shadow-[0_0_38px_rgba(99,102,241,0.4),inset_0_0_38px_rgba(99,102,241,0.2)]" />
          </motion.div>
        </div>

        {/* ------- CENTERED CONTENT ------- */}
        <div className="relative z-10 mx-auto w-full px-6 md:px-12 lg:px-16">
          <div className="mx-auto max-w-5xl mt-10">
            {/* Name badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easing, delay: 0.05 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-5 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span className="text-xs md:text-sm tracking-wide text-slate-100/90 font-medium">Open for Collaboration</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easing, delay: 0.1 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">Sultani</span>
                </h1>
              </motion.div>

              <Headline />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.15 }}
                className="mx-auto max-w-3xl text-base md:text-lg lg:text-xl text-slate-300/90 leading-relaxed"
              >
                I build fast, accessible and efficient web applications.
                <br className="hidden md:block" />
                <span className="text-slate-400/80">2+ years shipping UI that feels great and performs even better.</span>
              </motion.p>

              {/* Tech stack pills */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.18 }}
                className="flex flex-wrap items-center justify-center gap-3 pt-2"
              >
                <div className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/10 backdrop-blur-sm px-4 py-2.5">
                  <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M0 12v12h24V0H0zm19.34-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.73.009.025-1.175.839-1.892 1.308-.018.012-.127-.092-.24-.23-.332-.401-.683-.577-1.217-.614-.654-.043-1.075.281-1.063.817.005.262.063.384.256.558.19.171.524.295 1.491.549 1.703.448 2.432.74 2.897 1.159.687.619.997 1.566.86 2.635-.154 1.196-.899 2.022-2.168 2.394-.738.217-2.415.162-3.146-.105-.88-.32-1.719-.994-2.104-1.687-.091-.164-.264-.577-.251-.601.016-.017.236-.164.49-.33l.925-.601.195.29c.264.385.84.933 1.185 1.128.77.435 1.817.386 2.39-.111.243-.21.345-.42.345-.705 0-.278-.033-.4-.165-.58-.145-.198-.537-.413-1.568-.858-1.156-.5-1.652-.81-2.116-1.32-.328-.36-.553-.787-.67-1.27-.083-.344-.104-1.157-.042-1.509.22-1.25 1.038-2.111 2.333-2.458.415-.111 1.36-.12 1.808-.017z"/></svg>
                  <span className="text-sm font-medium text-indigo-300">TypeScript</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-sm px-4 py-2.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.417-.127.662-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438z"/></svg>
                  <span className="text-sm font-medium text-cyan-300">React</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm px-4 py-2.5">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg>
                  <span className="text-sm font-medium text-blue-300">Next.js</span>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing, delay: 0.22 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://wa.me/6282193179080"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm px-7 py-4 text-base font-medium text-white hover:bg-white/12 hover:border-white/25 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Contact Me
              </a>
              <span className="relative inline-flex group">
                <span className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-lg group-hover:opacity-100 transition-opacity"></span>
                <a
                  href="#projects"
                  className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/90 via-blue-500/90 to-indigo-500/90 px-7 py-4 text-base font-semibold text-white shadow-2xl hover:shadow-cyan-500/50 transition-all"
                >
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </LazyMotion>
  );
}
