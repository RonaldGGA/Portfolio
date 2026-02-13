import { FiExternalLink, FiGithub } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-slate-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">✨ Featured Project</h2>
          <p className="subheading">
            The one that proves I can troubleshoot production‑grade systems.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-linear-to-br from-navy to-slate text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-aws-orange font-mono mb-2">
                  2025 · Full‑stack
                </p>
                <h3 className="text-3xl font-bold mb-4">
                  Library Management System
                </h3>
                <p className="text-light-slate mb-6 leading-relaxed">
                  A complete book‑lending platform with role‑based access,
                  real‑time availability, and analytics dashboard. Optimised
                  query performance by{" "}
                  <span className="text-turquoise font-semibold">60%</span>{" "}
                  through strategic indexing and connection pooling. Debugged
                  JWT expiry, 5xx errors, and image loading bottlenecks.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js 14",
                    "TypeScript",
                    "Prisma",
                    "PostgreSQL",
                    "JWT",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/RonaldGGA/LibraryManagementSystem"
                    target="_blank"
                    className="flex items-center gap-2 bg-white text-navy px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href="https://lms-libraryhub.vercel.app/"
                    target="_blank"
                    className="flex items-center gap-2 border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-navy transition"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-sm font-mono text-turquoise mb-2">
                    📊 Impact metrics
                  </div>
                  <ul className="space-y-3 text-light-slate">
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise">▹</span>
                      <span>
                        <strong className="text-white">60%</strong> faster API
                        response times
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise">▹</span>
                      <span>
                        <strong className="text-white">Zero</strong> downtime
                        after connection pool fix
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise">▹</span>
                      <span>
                        Handles <strong className="text-white">10k+</strong>{" "}
                        book records efficiently
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise">▹</span>
                      <span>
                        Completely{" "}
                        <strong className="text-white">functional</strong> app
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-aws-orange/20 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
