import { FiArrowDown, FiDownload } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <AnimatedSection>
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="text-aws-orange font-mono mb-4">👋 Hi, I&apos;m</p>
              <h1 className="text-5xl md:text-7xl font-bold text-navy mb-4">
                Ronald González
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-600 mb-6">
                Cloud Support Engineer{" "}
                <span className="text-aws-orange">(in the making)</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Self‑taught full‑stack developer with{" "}
                <span className="font-semibold text-navy">2+ years</span> of
                project‑based experience. Automation Engineering student.{" "}
                <span className="font-semibold">C1 English (CAE 193/210)</span>.
                AWS Certified Cloud Practitioner (🇺🇸 exam April 2026). I build,
                break, and fix things — and I&apos;m looking for a remote role
                where I can do that at scale.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-navy text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition flex items-center gap-2"
                >
                  View Projects <FiArrowDown />
                </a>
                <a
                  href="#contact"
                  className="border-2 border-navy text-navy px-8 py-3 rounded-md font-medium hover:bg-navy hover:text-white transition"
                >
                  Contact Me
                </a>
                <a
                  href="Ronald_Gonzalez_CV.docx"
                  download="Ronald_Gonzalez_CV.docx"
                  className="bg-aws-orange text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition flex items-center gap-2 shadow-md"
                >
                  <FiDownload size={18} />
                  Download CV
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Open to work (remote)
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-aws-orange rounded-full"></span>
                  AWS Certified (in progress)
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
