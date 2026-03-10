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
      </div>
    </section>
  );
}
