import { useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import Section from "../Section";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import Form from "./Form";

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

export default function Connect() {
  const email = "ahmadsultanidayanullah@gmail.com";
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const socials = [
    {
      href: "https://www.linkedin.com/in/ahmadsultanid/",
      label: "LinkedIn",
      Icon: AiFillLinkedin,
    },
    {
      href: "https://www.instagram.com/ahmadsultanid/",
      label: "Instagram",
      Icon: AiFillInstagram,
    },
    {
      href: "https://www.github.com/ahmadsultani/",
      label: "GitHub",
      Icon: AiFillGithub,
    },
    {
      href: "https://www.facebook.com/ahmadsultanidayanullah/",
      label: "Facebook",
      Icon: AiFillFacebook,
    },
    {
      href: "https://wa.me/6282193179080",
      label: "WhatsApp",
      Icon: RiWhatsappFill,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <Section id="connect">
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
                Let's Connect
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Reach
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Out to Me
              </span>
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-slate-300/90">
              Have a project or role in mind? I deliver fast, accessible, secure web apps end-to-end.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left: intro + contacts */}
            <motion.div
              variants={item}
              className="lg:col-span-5 space-y-6"
            >

              {/* Email card */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
                
                <div className="relative rounded-2xl border border-white/10 bg-primary-bg/80 backdrop-blur-xl p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <p className="text-xs uppercase tracking-widest text-cyan-400/90 font-medium">
                          Email Address
                        </p>
                      </div>
                      <a
                        href={`mailto:${email}`}
                        className="block text-white text-sm md:text-base font-medium hover:text-cyan-300 transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                    <button
                      onClick={copyEmail}
                      className="relative group/btn overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white hover:bg-white/[0.12] hover:border-cyan-400/30 transition-all"
                    >
                      <span className="relative z-10">{copied ? "✓ Copied" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
                  <p className="text-xs uppercase tracking-widest text-indigo-400/90 font-medium">
                    Connect on Social
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ href, label, Icon }, i) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        ease: easing,
                        delay: i * 0.06,
                      }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group/social relative"
                    >
                      {/* Glow */}
                      <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-xl opacity-0 group-hover/social:opacity-100 blur-sm transition-opacity duration-300"></div>
                      
                      <div className="relative inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-primary-bg/80 backdrop-blur-sm px-4 py-2.5 text-sm font-medium text-white group-hover/social:border-cyan-400/30 transition-all">
                        <Icon className="h-5 w-5 text-cyan-400 group-hover/social:text-cyan-300 transition-colors" />
                        <span className="group-hover/social:text-cyan-300 transition-colors">{label}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={item}
              className="lg:col-span-7"
            >
              <Form />
            </motion.div>
          </div>
        </motion.div>

        {/* tiny toast */}
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white backdrop-blur"
          >
            Email copied to clipboard
          </motion.div>
        )}
      </Section>
    </LazyMotion>
  );
}
