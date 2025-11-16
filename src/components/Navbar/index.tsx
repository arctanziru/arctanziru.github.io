import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  MotionConfig,
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  Easing,
} from "framer-motion";
import { useLocation } from "react-router-dom";

type NavItem = { name: string; href: `#${string}` };

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Reach Me", href: "#connect" },
];

const easing: Easing = [0.43, 0.13, 0.23, 0.96];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const { scrollYProgress } = useScroll();
  const bgAlpha = useTransform(scrollYProgress, [0, 0.1], [0.18, 0.6]);
  const brAlpha = useTransform(scrollYProgress, [0, 0.1], [0.0, 0.14]);
  const bg = useMotionTemplate`rgba(7, 13, 22, ${bgAlpha})`; // #070d16
  const br = useMotionTemplate`rgba(148, 163, 184, ${brAlpha})`; // slate border

  useEffect(() => {
    const onHashChange = () => setOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!isLandingPage) return;

    const NAVS: readonly `#${string}`[] = NAV_ITEMS.map((n) => n.href);
    const NAV_H = 56; // h-14
    let sections: HTMLElement[] = [];
    let retries = 0;
    let retryTimer = 0 as unknown as number;

    const isHTMLElement = (el: Element | null): el is HTMLElement =>
      !!el && el instanceof HTMLElement;

    const collect = () => {
      const found = NAVS.map((sel) => document.querySelector(sel)).filter(
        isHTMLElement
      ); // <-- type guard keeps HTMLElement[]
      sections = found;
      if (sections.length < NAVS.length && retries < 10) {
        retries += 1;
        retryTimer = window.setTimeout(collect, 150);
      } else {
        setup();
      }
    };

    let io: IntersectionObserver | null = null;
    let ticking = false;

    const setup = () => {
      if (!sections.length) return;

      io = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target && (visible.target as HTMLElement).id) {
            setActive((visible.target as HTMLElement).id);
          }
        },
        {
          root: null,
          rootMargin: `-${NAV_H + 8}px 0px -55% 0px`,
          threshold: [0.1, 0.25, 0.5, 0.75, 0.9],
        }
      );

      sections.forEach((el: HTMLElement) => io!.observe(el));

      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          let best: any = null;
          const mid = NAV_H + window.innerHeight * 0.3;
          sections.forEach((el: HTMLElement) => {
            const rect = el.getBoundingClientRect();
            const dist = Math.abs(rect.top - mid);
            if (!best || dist < best.dist) best = { id: el.id, dist };
          });
          if (best) setActive(best.id);
          ticking = false;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
    };

    collect();

    return () => {
      if (retryTimer) window.clearTimeout(retryTimer);
      if (io) io.disconnect();
    };
  }, [isLandingPage]);

  const underlineTarget = useMemo(() => {
    if (!isLandingPage) return null;
    if (hovered) return hovered;
    if (active) {
      const found = NAV_ITEMS.find((i) => i.href === `#${active}`);
      return found?.name ?? null;
    }
    return null;
  }, [hovered, active, isLandingPage]);

  return (
    <MotionConfig transition={{ duration: 0.55, ease: easing }}>
      <LazyMotion features={domAnimation}>
        {/* Top progress bar (cool cyan→indigo) */}
        <motion.div
          className="fixed left-0 right-0 top-0 h-[2px] origin-left z-[60]"
          style={{
            scaleX: scrollYProgress,
            background:
              "linear-gradient(90deg, rgba(34,211,238,0.9), rgba(99,102,241,0.9))",
          }}
        />

        <motion.nav
          style={{ backgroundColor: bg, borderBottomColor: br }}
          className="fixed top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-primary-bg/40"
          aria-label="Primary"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex h-14 items-center justify-between">
              {/* Brand */}
              <a
                href="/"
                className="text-white/90 hover:text-white font-semibold tracking-wide uppercase"
              >
                Sultani
              </a>

              {/* Desktop nav (centered group) */}
              <div className="hidden lg:flex items-center gap-1 relative">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() =>
                      setHovered((h) => (h === item.name ? null : h))
                    }
                    className={`px-3 py-2 text-sm relative ${
                      `#${active}` === item.href
                        ? "text-white"
                        : "text-slate-200/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {underlineTarget === item.name && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 -bottom-[2px] h-[2px] rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(56,189,248,0.9), rgba(99,102,241,0.9))",
                        }}
                      />
                    )}
                  </a>
                ))}
                <span className="mx-2 h-5 w-px bg-white/10" />
                <a
                  href="#projects"
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-white hover:bg-white/[0.12]"
                >
                  View Work
                </a>
              </div>

              {/* Mobile toggle */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((s) => !s)}
                className="lg:hidden group relative h-9 w-9 rounded-xl text-white flex flex-col items-center justify-center gap-[1px]"
              >
                <span className="sr-only">Menu</span>
                <motion.span
                  animate={open ? { rotate: 45, y: 2 } : { rotate: 0, y: -4 }}
                  className="block h-[1.5px] w-5 bg-white"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="block h-[1.5px] w-5 bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 4 }}
                  className="block h-[1.5px] w-5 bg-white"
                />
              </button>
            </div>
          </div>

          {/* Mobile drawer */}
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-drawer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: easing }}
                className="lg:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-4 sm:px-6 py-2">
                  <ul className="flex flex-col">
                    {NAV_ITEMS.map((item, i) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <a
                          href={item.href}
                          className={`flex items-center justify-between py-3 text-sm ${
                            `#${active}` === item.href
                              ? "text-white"
                              : "text-slate-200 hover:text-white"
                          }`}
                        >
                          {item.name}
                          <span className="h-px w-6 bg-white/15" />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* spacer so content doesn't hide under navbar */}
        <div className="h-14" />
      </LazyMotion>
    </MotionConfig>
  );
}
