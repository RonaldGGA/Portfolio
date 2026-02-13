import { FiMail, FiLinkedin, FiGithub, FiDownload } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading">📬 Let&apos;s talk</h2>
          <p className="subheading">
            I&apos;m actively seeking a{" "}
            <span className="font-semibold text-navy">
              Cloud Support Associate
            </span>{" "}
            role. If you need a problem‑solver who codes, let&apos;s connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:ronald.dearmass@email.com"
              className="bg-navy text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition flex items-center gap-2"
            >
              <FiMail /> ronald.dearmass@email.com
            </a>
            <a
              href="https://linkedin.com/in/ronald-de-armas-8797082ab"
              target="_blank"
              className="border-2 border-navy text-navy px-6 py-3 rounded-md font-medium hover:bg-navy hover:text-white transition flex items-center gap-2"
            >
              <FiLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/RonaldGGA"
              target="_blank"
              className="border-2 border-navy text-navy px-6 py-3 rounded-md font-medium hover:bg-navy hover:text-white transition flex items-center gap-2"
            >
              <FiGithub /> GitHub
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

          <p className="text-sm text-slate-500 mt-12">
            Prefer a video intro?{" "}
            <span className="text-aws-orange font-semibold">
              I recorded a 3‑min demo
            </span>{" "}
            of my Library System – available upon request.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
