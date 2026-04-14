import { FiArrowDown, FiDownload } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-gray-950">
      <div className="section-container">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-aws-orange font-mono mb-4">👋 Hi, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-navy dark:text-white mb-4">
              Ronald González
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-500 dark:text-gray-400 mb-6">
              Full-Stack Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Specialized in{" "}
              <span className="font-semibold text-navy dark:text-light-slate">
                Next.js · GraphQL · performance-driven architecture
              </span>
              . I build production systems with Redis cache strategies, headless
              CMS integrations, multi-tenant SaaS logic, and AI pipelines.
              Automation Engineering student at CUJAE.{" "}
              <span className="font-semibold text-navy dark:text-light-slate">
                C1 English (CAE 193/210)
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-navy dark:bg-navy-mid text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition flex items-center gap-2"
              >
                View Projects <FiArrowDown />
              </a>
              <a
                href="#contact"
                className="border-2 border-navy text-navy dark:border-light-slate dark:text-light-slate px-8 py-3 rounded-md font-medium hover:bg-navy hover:text-white dark:hover:bg-navy-mid transition"
              >
                Contact Me
              </a>
              <a
                href="/Ronald_Gonzalez_CV.pdf"
                download="Ronald_Gonzalez_CV.pdf"
                className="bg-aws-orange text-white px-8 py-3 rounded-md font-medium hover:opacity-90 transition flex items-center gap-2 shadow-md"
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Open to work (remote)
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-turquoise rounded-full"></span>
                CS50 · CAE C1 certified
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-aws-orange rounded-full"></span>
                5 production apps deployed
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}