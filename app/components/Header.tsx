import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="section-container py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-navy dark:text-white"
        >
          Ronald<span className="text-aws-orange">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["projects", "skills", "certifications", "about"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-gray-600 dark:text-gray-300 hover:text-aws-orange dark:hover:text-aws-orange capitalize transition"
            >
              {section}
            </a>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/RonaldGGA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-aws-orange dark:hover:text-aws-orange transition"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ronald-de-armas-8797082ab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-aws-orange dark:hover:text-aws-orange transition"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:ronald.dearmass@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-aws-orange dark:hover:text-aws-orange transition"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
