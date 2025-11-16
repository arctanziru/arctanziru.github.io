import React, { useMemo, useState } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const TO = "ahmadsultanidayanullah@gmail.com";

export default function Form() {
  const [data, setData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const fields = useMemo(
    () =>
      [
        { key: "name", label: "Your name", type: "text", autoComplete: "name" },
        {
          key: "email",
          label: "Email address",
          type: "email",
          autoComplete: "email",
        },
        { key: "subject", label: "Subject", type: "text", autoComplete: "off" },
      ] as const,
    []
  );

  function validate(d: FormState) {
    const e: Partial<FormState> = {};
    if (!d.name.trim()) e.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))
      e.email = "Use a valid email.";
    if (!d.subject.trim()) e.subject = "Add a subject.";
    if (d.message.trim().length < 10)
      e.message = "Say a bit more (≥ 10 chars).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) return;

    const body = [
      `Hi Ahmad,`,
      ``,
      data.message.trim(),
      ``,
      `— ${data.name}`,
      `(${data.email})`,
    ].join("\n");
    const url = `mailto:${TO}?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative group h-full">
        {/* Glow effect */}
        <motion.form
          onSubmit={onSubmit}
          className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-primary-bg/80 backdrop-blur-xl p-6 md:p-8 h-full"
        >

        {/* Header */}
        <div className="flex items-center gap-2 pb-2">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
          <h3 className="text-lg md:text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text">
            Send a Message
          </h3>
        </div>

        {/* Inputs */}
        <div className="relative grid gap-5 md:grid-cols-2">
          {fields.map(({ key, label, type, autoComplete }) => (
            <div key={key} className="flex flex-col gap-2">
              <label htmlFor={key} className="text-sm font-medium text-slate-300/90">
                {label}
              </label>
              <div className="relative group/input rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-all">
                <input
                  id={key}
                  type={type}
                  autoComplete={autoComplete}
                  placeholder={label}
                  value={(data as any)[key]}
                  onChange={(e) =>
                    setData((s) => ({ ...s, [key]: e.target.value }))
                  }
                  className="w-full rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400/60 outline-none"
                  aria-invalid={!!(errors as any)[key]}
                  aria-describedby={
                    (errors as any)[key] ? `${key}-err` : undefined
                  }
                />
                {/* gradient focus ring */}
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent focus-within:ring-2 focus-within:ring-cyan-400/50" />
              </div>
              {(errors as any)[key] && (
                <p id={`${key}-err`} className="text-xs text-rose-300">
                  {(errors as any)[key]}
                </p>
              )}
            </div>
          ))}

          {/* Message (span both columns) */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300/90">
              Write me a message
            </label>
            <div className="relative group/input rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-all">
              <textarea
                id="message"
                rows={6}
                placeholder="Project idea, role, timeline, links…"
                value={data.message}
                onChange={(e) =>
                  setData((s) => ({ ...s, message: e.target.value }))
                }
                className="w-full resize-y rounded-xl bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400/60 outline-none"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
              />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent focus-within:ring-2 focus-within:ring-cyan-400/50" />
            </div>
            {errors.message && (
              <p id="message-err" className="text-xs text-rose-300">
                {errors.message}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={() =>
              setData({ name: "", email: "", subject: "", message: "" })
            }
            className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white hover:bg-white/[0.12] hover:border-white/20 transition-all"
          >
            Clear
          </button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group/btn inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all"
          >
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 translate-x-[-100%] group-hover/btn:animate-[shine_1.5s_ease-in-out]" />
            <span className="relative">Send Message</span>
            <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>

        {/* keyframes once */}
        <style>{`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </motion.form>
      </div>
    </LazyMotion>
  );
}
