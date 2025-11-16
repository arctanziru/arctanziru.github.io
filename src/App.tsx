import {
  LazyMotion,
  domAnimation,
  MotionConfig,
  AnimatePresence,
} from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Connect from "./components/Connect";
import About from "./components/About";
import Experience from "./components/Experience";
import ButtonHome from "./components/ButtonHome";

import { motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProjectDetail from "./components/ProjectDetail";

const page = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  exit: { opacity: 0, y: 6, transition: { duration: 0.25 } },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
      </motion.div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={
              <motion.div
                variants={page}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <main className="-mt-14 text-gray-400  flex flex-col gap-10 md:gap-20 lg:gap-40 pb-20 w-screen overflow-hidden">
                  <Hero />
                  <About />
                  <Experience />
                  <Projects />
                  <Skills />
                  <Connect />
                </main>
              </motion.div>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <motion.div
                variants={page}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-gray-400  -mt-14 min-h-screen"
              >
                <ProjectDetail />
              </motion.div>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>

      <ButtonHome />
      <ScrollToTop />
    </LazyMotion>
  );
}

export default App;
