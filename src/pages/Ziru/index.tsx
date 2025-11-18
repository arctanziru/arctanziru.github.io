import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme, SiWritedotas } from "react-icons/si";

// Placeholder data - replace with your actual content
const WRITEUPS = [
  {
    id: 1,
    title: "Gemastik XVIII Final (Attack Defense)",
    platform: "Gemastik XVIII",
    category: "Web Exploitation",
    link: "https://docs.google.com/document/d/1nLLJ-mlBQyQCCoJohhorfmZ_k4U38Z4QMzNGAsQsDK8/edit?usp=drive_link",
    description: `
      We achieved 2nd Place on Scoreboard. In this competition, we blooded and exploited multiple web vulnerabilities 
      including Server-Side Template Injection (SSTI), Command Injection, and SQL Injection 
    `,
  },
  {
    id: 2,
    title: "Cyber Ops Clash 2.0 Final",
    platform: "CTFd",
    category: "Reverse Engineering, Forensics, Web Exploitation, Cryptography",
    link: "https://docs.google.com/document/d/1OncakXPl54cOtHpIyhBB2zUuYeSZ7c94vUxfDbRg8GA/edit?usp=drive_link",
    description: `
     We secured 1st Place in this CTF competition. This event challenged us with various highlighted challenge in this
     CTF is the great Forensics and Reverse Engineering challenges that require deep analysis.
    `,
  },
  {
    id: 3,
    title: "Intechfest 2025",
    platform: "CTFd",
    category:
      "Web Exploitation, Forensics, Cryptography, Reverse Engineering",
    link: "https://docs.google.com/document/d/1MPjItUAetRLnIKgX4WS4WAtWcB6qCaI9y89KIxTsTwE/edit?usp=drive_link",
    description: `
      We secured 3rd place on the scoreboard. In this CTF, we solved various challenges,
      including Web Exploitation, Forensics, Cryptography, and Reverse Engineering.
    `,
  },
  {
    id: 4,
    title: "Schematics 2025 Qualifier",
    platform: "CTFd",
    category:
      "Web Exploitation, Forensics, Cryptography, Reverse Engineering, Misc",
    link: "https://docs.google.com/document/d/1I8NooJs2TAUkblW3o4GaNB8Aas1WRQeasTa7lrN40aA/edit?usp=drive_link",
    description: `
      We secured our place to final round. In this CTF, we fully clear the Web Exploitation,
      Forensics, Cryptograpy, and Misc challenges.
    `,
  },
];

const SKILLS = [
  {
    category: "Web Exploitation",
    items: [
      "SQL Injection",
      "XSS",
      "CSRF",
      "SSRF",
      "LFI/RFI",
      "Command Injection",
    ],
  },
  {
    category: "Reverse Engineering",
    items: [
      "Binary Analysis",
      "Ghidra",
      "IDA Pro",
      "Dynamic Analysis",
      "Debugging",
    ],
  },
  {
    category: "Tools",
    items: ["Burp Suite", "Metasploit", "Wireshark", "Nmap", "Python", "GDB"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Ziru() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070d16] via-[#0a1220] to-[#070d16] text-gray-300">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-mono mb-4">
                Offensive Security
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              ziru
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Cybersecurity enthusiast specializing in{" "}
              <span className="text-cyan-400 font-semibold">
                Web Exploitation
              </span>{" "}
              and{" "}
              <span className="text-blue-400 font-semibold">
                Reverse Engineering
              </span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://www.linkedin.com/in/ahmadsultanid/"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-cyan-400/50"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://tryhackme.com/p/ziru"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-cyan-400/50"
                aria-label="TryHackMe"
              >
                <SiTryhackme className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmadsultanid/"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-cyan-400/50"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              About Me
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I'm a CTF player with a deep passion for breaking things to
                understand how they work. My journey into cybersecurity began
                alongside my software engineering career, where I discovered
                that building secure applications required thinking like an
                attacker. This dual perspective—as both a developer and a CTF
                Player—gives me unique insights into finding and exploiting
                vulnerabilities.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                I specialize in{" "}
                <span className="text-cyan-400 font-semibold">
                  web exploitation
                </span>
                , hunting for injection flaws, authentication bypasses, and
                logic vulnerabilities in web applications. Whether it's crafting
                the perfect SQL injection payload or chaining XSS with CSRF for
                maximum impact, I love the creativity that web exploitation
                demands. On the{" "}
                <span className="text-blue-400 font-semibold">
                  reverse engineering
                </span>{" "}
                side, I enjoy diving into binaries with tools like Ghidra and
                IDA Pro, uncovering hidden logic, and understanding low-level
                program behavior.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {SKILLS.map((skill, idx) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                    {skill.category}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-400 flex items-center"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Writeups Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              CTF Writeups
            </h2>

            <div className="space-y-4">
              {WRITEUPS.map((writeup) => (
                <motion.a
                  key={writeup.id}
                  href={writeup.link}
                  variants={itemVariants}
                  className="block bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {writeup.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">
                        {writeup.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="text-cyan-400 font-mono">
                          {writeup.platform}
                        </span>
                        <span className="text-gray-600">•</span>
                        <span className="text-blue-400">
                          {writeup.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-cyan-400 group-hover:translate-x-2 transition-transform">
                      <SiWritedotas className="w-6 h-6" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Placeholder for more writeups */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center p-12 bg-white/5 border border-dashed border-white/20 rounded-xl"
            >
              <SiWritedotas className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-500 text-lg">
                More writeups coming soon...
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Add your writeup links in the WRITEUPS array
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Interested in collaboration, CTF teams, or just want to discuss
              security research? Feel free to reach out!
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          <p>© 2025 ziru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
