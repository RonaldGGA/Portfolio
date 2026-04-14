import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      "React · Next.js 16 (App Router, RSC, ISR)",
      "TypeScript strict mode",
      "Tailwind CSS v4 · shadcn/ui",
      "Framer Motion",
      "Core Web Vitals · LCP optimization",
    ],
  },
  {
    name: "GraphQL & CMS",
    skills: [
      "Apollo Client",
      "@apollo/client-integration-nextjs",
      "Contentful (Headless CMS)",
      "Schema design · Normalized cache",
      "ISR + webhook revalidation",
    ],
  },
  {
    name: "Backend & DB",
    skills: [
      "Node.js · Next.js API Routes",
      "Server Actions · REST APIs",
      "PostgreSQL · Prisma ORM (Neon)",
      "Redis (Upstash) · TTFB optimization",
      "Better Auth · RBAC",
    ],
  },
  {
    name: "AI & Testing",
    skills: [
      "Gemini API · OpenRouter",
      "LLM prompt engineering",
      "Structured JSON outputs",
      "Vitest · Testing Library",
      "Playwright (E2E)",
    ],
  },
  {
    name: "SEO & Performance",
    skills: [
      "generateMetadata · JSON-LD",
      "Dynamic OG images (@vercel/og)",
      "sitemap.xml · robots.txt",
      "next/image · next/font/local",
      "Bundle analysis · ISR",
    ],
  },
  {
    name: "DevOps",
    skills: [
      "Docker · Git/GitHub",
      "Vercel · CI/CD",
      "Linux",
      "SQL index optimization",
      "Connection pooling (Neon)",
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-aws-orange rounded-full shrink-0 mt-1.5"></span>
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
