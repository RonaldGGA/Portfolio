import { FiGithub, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "ClientFlow",
    description:
      "Multi-tenant client management SaaS with role-based access (admin/staff), business-scoped data isolation at the Prisma query level, and AI-powered weekly report generation via Gemini 2.5 Flash with OpenRouter fallback.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma 7",
      "Better Auth",
      "Gemini AI",
      "Tailwind",
    ],
    metrics:
      "Multi-tenant architecture · Optimistic UI updates · Parallel Prisma queries via Promise.all",
    github: "https://github.com/RonaldGGA/clientflow",
    demo: "https://clientflow-demo.vercel.app",
  },
  {
    title: "SensorWatch AI",
    description:
      "Real-time industrial sensor monitoring dashboard with LLM-powered anomaly detection. Calls OpenRouter API on every anomaly to generate maintenance recommendations in natural language.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "OpenRouter AI",
      "Recharts",
      "NextAuth",
    ],
    metrics:
      "60fps Recharts with memoization · PostgreSQL audit trail · AI weekly report endpoint",
    github: "https://github.com/RonaldGGA/sensorwatch-ai",
    demo: "https://sensorwatch-ai.vercel.app",
  },
  {
    title: "Library Management System",
    description:
      "Full book-lending platform with RBAC (admin/librarian/member), loan tracking, and full-text search. Production debugging: JWT expiry, connection pool 5xx errors, image delivery via Cloudinary.",
    tech: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Docker", "JWT"],
    metrics:
      "60% faster API response via PostgreSQL index optimization · Composite indexes on high-cardinality filters",
    github: "https://github.com/RonaldGGA/LibraryManagementSystem",
    demo: "https://lms-libraryhub.vercel.app/",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">📁 Other Projects</h2>
          <p className="subheading">
            Real applications, real bugs, real fixes.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={0.1 * idx}>
              <div className="card group hover:-translate-y-1 transition-transform h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-navy dark:text-light-slate">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-aws-orange transition"
                    >
                      <FiGithub size={18} />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-aws-orange transition"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-aws-orange uppercase tracking-wide">
                    Impact
                  </span>
                  <p className="text-sm text-navy dark:text-light-slate font-medium mt-1">
                    {project.metrics}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
