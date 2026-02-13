import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80  backdrop-blur-sm z-50 border-b border-gray-200 dark:border-slate-800">
      <div className="section-container py-4! flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-navy dark:text-white">
          Ronald<span className="text-aws-orange">.</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#projects" className="text-navy   transition">
            Projects
          </a>
          <a
            href="#skills"
            className="text-navy  hover:text-aws-orange  transition"
          >
            Skills
          </a>
          <a
            href="#certifications"
            className="text-navy  hover:text-aws-orange  transition"
          >
            Certifications
          </a>
          <a
            href="#about"
            className="text-navy  hover:text-aws-orange  transition"
          >
            About
          </a>
        </nav>

        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/RonaldGGA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy   transition"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/ronald-de-armas-8797082ab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy   transition"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:ronald.dearmass@email.com"
            className="text-navy   transition"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}
