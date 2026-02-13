export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy">
      {/* SKELETON HERO */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="section-container">
          <div className="max-w-3xl animate-pulse">
            <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded mb-4"></div>
            <div className="h-12 md:h-16 w-3/4 bg-gray-300 dark:bg-slate-600 rounded mb-4"></div>
            <div className="h-10 md:h-14 w-2/3 bg-gray-300 dark:bg-slate-600 rounded mb-6"></div>
            <div className="space-y-2 mb-8">
              <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 w-4/6 bg-gray-200 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-32 bg-gray-300 dark:bg-slate-600 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SKELETON FEATURED PROJECT */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="section-container">
          <div className="h-8 w-48 bg-gray-300 dark:bg-slate-600 rounded mb-4 animate-pulse"></div>
          <div className="h-4 w-96 bg-gray-200 dark:bg-slate-700 rounded mb-12 animate-pulse"></div>
          <div className="bg-linear-to-br from-navy/50 to-slate/50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-4 w-32 bg-white/20 rounded"></div>
                <div className="h-8 w-48 bg-white/30 rounded"></div>
                <div className="h-20 w-full bg-white/10 rounded"></div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-6 w-16 bg-white/20 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="h-4 w-32 bg-turquoise/30 rounded mb-4"></div>
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-4 w-full bg-white/10 rounded mb-2"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKELETON PROJECTS GRID */}
      <section className="section-container">
        <div className="h-8 w-48 bg-gray-300 dark:bg-slate-600 rounded mb-4 animate-pulse"></div>
        <div className="h-4 w-64 bg-gray-200 dark:bg-slate-700 rounded mb-12 animate-pulse"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm p-6 animate-pulse"
            >
              <div className="flex justify-between mb-4">
                <div className="h-6 w-32 bg-gray-200 dark:bg-slate-700 rounded"></div>
                <div className="h-6 w-6 bg-gray-200 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="h-4 w-24 bg-gray-200 dark:bg-slate-700 rounded mb-2"></div>
              <div className="flex gap-2 mt-4">
                {[1, 2, 3].map((j) => (
                  <div
                    key={j}
                    className="h-6 w-16 bg-gray-100 dark:bg-slate-700 rounded"
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKELETON SKILLS */}
      <section className="bg-slate-50 dark:bg-slate-900">
        <div className="section-container">
          <div className="h-8 w-48 bg-gray-300 dark:bg-slate-600 rounded mb-4 animate-pulse"></div>
          <div className="h-4 w-64 bg-gray-200 dark:bg-slate-700 rounded mb-12 animate-pulse"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
              >
                <div className="h-5 w-24 bg-gray-200 dark:bg-slate-700 rounded mb-4"></div>
                {[1, 2, 3, 4].map((j) => (
                  <div
                    key={j}
                    className="h-4 w-full bg-gray-100 dark:bg-slate-700 rounded mb-2"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
