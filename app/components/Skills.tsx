import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (in progress)",
      "Docker",
      "Vercel",
      "Git/GitHub",
      "CI/CD basics",
    ],
  },
  {
    name: "Backend & DB",
    skills: [
      "Next.js API",
      "tRPC",
      "REST",
      "PostgreSQL",
      "Prisma",
      "SQL optimisation",
    ],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js 14", "TypeScript", "Tailwind", "shadcn/ui"],
  },
  {
    name: "Troubleshooting",
    skills: [
      "Root cause analysis",
      "Debugging (DevTools, logs)",
      "API integration",
      "Error handling",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">⚙️ Technical Toolbox</h2>
          <p className="subheading">What I use to build, break, and fix.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-bold text-navy dark:text-light-slate mb-4">
                  {cat.name}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-aws-orange rounded-full flex-shrink-0"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          {/* Intentionally dark card — AWS certification highlight */}
          <div className="mt-12 p-6 bg-navy text-white rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-turquoise font-mono mb-1">
                🇺🇸 AWS Certification
              </p>
              <h3 className="text-2xl font-bold mb-2">
                Cloud Practitioner (CLF-C02)
              </h3>
              <p className="text-light-slate">
                Exam scheduled: April 2026 · Currently scoring 85%+ on practice
                tests
              </p>
            </div>
            <div className="flex-0">
              <div className="w-28 h-28 bg-white/10 rounded-full flex items-center justify-center border-4 border-turquoise">
                <span className="text-3xl font-bold text-white">85%</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
