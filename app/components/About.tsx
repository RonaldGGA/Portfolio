import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">🧠 Beyond the Code</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection className="md:col-span-2">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I&apos;m a 19-year-old Automation Engineering student from Cuba,
                but my real classroom has been GitHub and the documentation
                rabbit hole. With 2+ years of daily self-study, I&apos;ve built{" "}
                <span className="font-semibold text-navy dark:text-light-slate">
                  5 production-grade applications
                </span>{" "}
                — from headless CMS platforms with AI syndication pipelines to
                multi-tenant SaaS and real-time monitoring dashboards.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                My edge? I combine{" "}
                <span className="font-semibold text-navy dark:text-light-slate">
                  full-stack engineering
                </span>{" "}
                with{" "}
                <span className="font-semibold text-navy dark:text-light-slate">
                  systems thinking
                </span>{" "}
                inherited from Automation. I don&apos;t just fix bugs — I find
                root causes. I don&apos;t just ship — I measure. And I
                communicate everything clearly in{" "}
                <span className="font-semibold text-aws-orange">
                  C1 English
                </span>
                .
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I&apos;m not coding, I&apos;m playing chess, watching
                anime, or figuring out how to make my internet last longer
                during blackouts. Resilience is built, not given. 🇨🇺
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="bg-navy p-6 rounded-xl">
              <h3 className="font-bold text-light-slate mb-4">Quick facts</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "📍 Remote · Available immediately",
                  "🗣️ English C1 (CAE 193) · Spanish native",
                  "⚡ 2+ years of daily coding",
                  "🏗️ 5 production apps deployed",
                  "♟️ Chess · Volleyball · Anime",
                ].map((fact) => (
                  <li key={fact} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-aws-orange rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-light-slate">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
