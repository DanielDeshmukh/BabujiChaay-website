import { Link } from "react-router-dom";
import { legalPageData } from "../data/legalData";

function BackToHomeButton() {
  return (
    <Link
      to="/"
      className="inline-flex items-center justify-center rounded-full border border-[#0B3D2E] px-5 py-2 text-sm font-semibold text-[#0B3D2E] transition-colors hover:bg-[#0B3D2E] hover:text-[#F8F5F1]"
    >
      Back to home
    </Link>
  );
}

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F1] pt-24 text-[#0B3D2E]">
      <section className="py-10 sm:py-14">
        <div className="mx-auto w-full max-w-[800px] px-6 font-sans leading-relaxed">
          <div className="mb-8 flex justify-start">
            <BackToHomeButton />
          </div>

          <header className="mb-10 border-b border-[#0B3D2E]/20 pb-6">
            <h1 className="text-3xl font-bold sm:text-4xl">Legal Information</h1>
            <p className="mt-3 text-sm sm:text-base">
              Last updated: {legalPageData.updatedOn}
            </p>
          </header>

          <nav className="mb-10 rounded-xl border border-[#0B3D2E]/15 bg-white/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B3D2E]/75">
              Jump to section
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {legalPageData.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-[#0B3D2E]/30 px-3 py-1 text-sm transition-colors hover:border-[#0B3D2E] hover:bg-[#0B3D2E]/5"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="space-y-10">
            {legalPageData.sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-2xl border border-[#0B3D2E]/15 bg-white/70 p-6 sm:p-8"
              >
                <h2 className="text-2xl font-bold sm:text-3xl">{section.title}</h2>
                <p className="mt-4 text-sm sm:text-base">{section.intro}</p>

                <div className="mt-6 space-y-5">
                  {section.clauses.map((clause) => (
                    <section key={clause.heading}>
                      <h3 className="text-lg font-semibold sm:text-xl">{clause.heading}</h3>
                      <ul className="mt-2 list-disc space-y-2 pl-5 text-sm sm:text-base">
                        {clause.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-start">
            <BackToHomeButton />
          </div>
        </div>
      </section>
    </main>
  );
}

