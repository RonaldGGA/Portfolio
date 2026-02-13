import { FiDownload } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    id: 1,
    icon: "🎓",
    title: "C1 Advanced (CAE)",
    issuer: "Cambridge Assessment English",
    description: "Score: 193/210 – Grade B · CEFR Level C1",
    detail: "Professional working proficiency",
    status: "verified",
    downloadUrl: "/certificates/cae-certificate.pdf",
    filename: "Ronald_Gonzalez_CAE_Certificate.pdf",
  },
  {
    id: 2,
    icon: "☁️",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Exam scheduled: April 2026",
    status: "in-progress",
    progress: 80,
    examDate: "April 2026",
    confidence: "80%",
  },
  {
    id: 3,
    icon: "🧠",
    title: "CS50's Introduction to Computer Science",
    issuer: "Harvard University",
    description: "Completed · Verified certificate",
    detail: "C, Python, SQL, Algorithms, Data Structures",
    status: "verified",
    downloadUrl: "/certificates/cs50-certificate.pdf",
    filename: "Ronald_Gonzalez_CS50_Certificate.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <AnimatedSection>
        <h2 className="heading">📜 Certifications</h2>
        <p className="subheading">
          Formal recognition of my skills and knowledge.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <AnimatedSection key={cert.id} delay={0.1 * index}>
            <div className="card flex gap-4 h-full">
              <div className="text-aws-orange text-3xl flex-0">{cert.icon}</div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-bold text-navy dark:text-white text-lg mb-1">
                  {cert.title}
                </h3>
                <p className="text-slate-600 dark:text-light-slate text-sm mb-2">
                  {cert.issuer}
                </p>

                <p className="text-sm font-mono text-aws-orange mb-1">
                  {cert.description}
                </p>

                {cert.detail && (
                  <p className="text-xs text-slate-500 dark:text-light-slate/70 mb-3">
                    {cert.detail}
                  </p>
                )}

                {cert.status === "in-progress" ? (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-aws-orange h-2 rounded-full"
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-light-slate/70">
                      Exam: {cert.examDate} · Confidence: {cert.confidence}
                    </p>
                  </div>
                ) : (
                  <div className="mt-3">
                    <a
                      href={cert.downloadUrl}
                      download={cert.filename}
                      className="inline-flex items-center gap-2 bg-aws-orange text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-opacity-90 transition shadow-sm"
                    >
                      <FiDownload size={14} />
                      Download Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
