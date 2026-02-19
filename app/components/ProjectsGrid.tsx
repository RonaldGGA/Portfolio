import { FiGithub, FiExternalLink } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "ChessMaster",
    description:
      "Chess opening trainer with 12,000+ variations and real-time AI suggestions via Stockfish API.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Stockfish API", "Tailwind"],
    metrics: "12k+ openings, full-text search, 3rd-party API fallback",
    github: "https://github.com/RonaldGGA/ChessMaster",
    demo: "https://chess-openings-indol.vercel.app/",
  },
  {
    title: "Multi-Tenant Store Dashboard",
    description:
      "E-commerce admin panel for multiple stores. Solved state inconsistency bugs and CORS issues.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "Vercel", "Tailwind"],
    metrics: "Edge deployment, 40% re-render reduction",
    github: "https://github.com/RonaldGGA/e-commerce-dashboard",
    demo: null,
  },
  {
    title: "AWS Support Toolkit",
    description:
      "CLI tool to diagnose EC2, IAM, and network issues. Built with Python, Click, and pytest.",
    tech: ["Python", "boto3", "pytest", "Click"],
    metrics: "80%+ test coverage, 3 diagnostic modules (WIP)",
    github: "https://github.com/RonaldGGA/AWSSupportToolkit",
    demo: null,
  },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">📁 Other Projects</h2>
          <p className="subheading">Real applications, real bugs, real fixes.</p>
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
