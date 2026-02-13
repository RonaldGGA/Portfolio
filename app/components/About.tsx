import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading">🧠 Beyond the Code</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="md:col-span-2">
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                I&apos;m a 19‑year‑old Automation Engineering student from Cuba,
                but my real classroom has been GitHub and the documentation
                rabbit hole. In 2 years of self‑study, I&apos;ve built
                <span className="font-semibold text-navy">
                  {" "}
                  4 production‑grade applications
                </span>{" "}
                and developed a systematic approach to troubleshooting inherited
                from engineering.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                My edge? I combine{" "}
                <span className="font-semibold text-navy">
                  full‑stack development
                </span>{" "}
                with
                <span className="font-semibold text-navy">
                  {" "}
                  systems thinking
                </span>
                . I don&apos;t just fix bugs — I find root causes. I don&apos;t
                just deploy — I optimise. And I communicate everything clearly
                in
                <span className="font-semibold text-aws-orange">
                  {" "}
                  C1 English
                </span>
                .
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When I&apos;m not coding, I&apos;m playing chess, watching
                anime, studying for university or figuring out how to make my
                internet last longer during blackouts. Resilience is built, not
                given.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy mb-3">Quick facts</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-aws-orange rounded-full"></span>
                  <span className="text-slate-700">
                    📍 Based in Havana, Cuba (remote‑ready)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-aws-orange rounded-full"></span>
                  <span className="text-slate-700">
                    🗣️ English C1 (CAE 193) · Spanish native
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-aws-orange rounded-full"></span>
                  <span className="text-slate-700">
                    ⚡ 2+ years of daily coding
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-aws-orange rounded-full"></span>
                  <span className="text-slate-700">
                    ♟️ Chess · Volleyball · Personal growth
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
