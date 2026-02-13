import Link from "next/link";
import { FaChess } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-navy flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icono animado - 404 con personalidad */}
        <div className="relative inline-block mb-8 animate-pulse-slow">
          <span className="text-8xl md:text-9xl font-bold text-navy dark:text-white opacity-10 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl transform hover:rotate-12 transition-transform duration-300">
              <FaChess />
            </span>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
          Page not found
        </h1>

        {/* Descripción - conecta con tu perfil */}
        <p className="text-lg text-slate-600 dark:text-light-slate mb-8 leading-relaxed">
          Even the best automated systems encounter unmatched routes.
          <span className="block mt-2 text-aws-orange font-semibold">
            This one leads nowhere — but you don&apos;t.
          </span>
        </p>

        {/* Subtle: tu mindset */}
        <p className="text-sm text-slate-500 dark:text-light-slate/70 mb-10 italic">
          “In chess, a wrong move isn&apos;t the end — it&apos;s just a new
          position to troubleshoot.”
        </p>

        {/* Botón IDÉNTICO al de tu Hero (coherencia visual) */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-navy dark:bg-aws-orange text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all duration-200"
        >
          <FiHome /> Return to Home
        </Link>

        {/* Contexto sutil de ubicación */}
        <p className="mt-12 text-xs text-slate-400 dark:text-light-slate/50">
          HTTP 404 · Havana, Cuba (remote troubleshooting activated)
        </p>
      </div>
    </main>
  );
}
