import { FiExternalLink, FiGithub } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedProject() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">✨ Featured Project</h2>
          <p className="subheading">
            Where Industry 4.0 meets modern software architecture.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="bg-navy text-white rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-aws-orange font-mono mb-2">
                  2026 · Full-Stack · GraphQL · AI Pipeline
                </p>
                <h3 className="text-3xl font-bold mb-4">Setpoint</h3>
                <p className="text-light-slate mb-6 leading-relaxed">
                  Technical publication platform for Industry 4.0 — PLCs, SCADA,
                  IIoT, OPC-UA — built with a production-grade stack.{" "}
                  <span className="text-turquoise font-semibold">
                    Redis cache achieves TTFB &lt;50ms
                  </span>{" "}
                  on cached routes. Contentful GraphQL via Apollo Client with
                  RSC integration, AI syndication pipeline, role-based auth, and
                  a full admin panel.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Next.js 16",
                    "TypeScript",
                    "GraphQL",
                    "Apollo Client",
                    "Contentful",
                    "Redis",
                    "PostgreSQL",
                    "Gemini 2.5 Flash",
                    "Better Auth",
                    "Vitest · Playwright",
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
                    href="https://github.com/RonaldGGA/setpoint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-md font-medium transition"
                  >
                    <FiGithub /> Code
                  </a>
                  <a
                    href="https://setpoint-blog.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm border border-white/10">
                  <div className="text-sm font-mono text-turquoise mb-4">
                    ⚙️ What makes it special
                  </div>
                  <ul className="space-y-3 text-light-slate">
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise mt-0.5">▹</span>
                      <span>
                        <strong className="text-white">TTFB &lt;50ms</strong> on
                        cached routes via Upstash Redis (vs ~400ms cold)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise mt-0.5">▹</span>
                      <span>
                        <strong className="text-white">AI syndication</strong> —
                        Contentful webhook → Gemini adapts → Hashnode publishes
                        with canonical URL
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise mt-0.5">▹</span>
                      <span>
                        <strong className="text-white">
                          Lighthouse 97/100/100
                        </strong>{" "}
                        Accessibility · Best Practices · SEO
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise mt-0.5">▹</span>
                      <span>
                        <strong className="text-white">43 tests</strong> —
                        Vitest (unit + component) + Playwright E2E
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-turquoise mt-0.5">▹</span>
                      <span>
                        Full <strong className="text-white">admin panel</strong>{" "}
                        — comment moderation, syndication controls, logs
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
