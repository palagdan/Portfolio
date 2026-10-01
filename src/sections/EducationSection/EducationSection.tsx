import {education} from "@/constants";

const EducationSection = () => {
    return (
        <section id="education" className="max-w-5xl mx-auto px-8">
            <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40 mb-10">Education</h2>

            {/* Gradient border wrapper */}
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/60 via-violet-500/30 to-pink-500/60 shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]">
                <div className="relative overflow-hidden rounded-3xl bg-tertiaryTmp px-6 py-8 sm:px-10 sm:py-12">
                    {/* Decorative background */}
                    {/* Rotating conic-gradient aurora (wrapper centres it; inner spins) */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[180%] w-[140%] -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="animate-glow-spin h-full w-full rounded-full opacity-60 blur-3xl [background:conic-gradient(from_0deg,rgba(168,85,247,0.45),rgba(236,72,153,0.45),rgba(59,130,246,0.45),rgba(168,85,247,0.45))]" />
                    </div>
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:22px_22px]"
                    />
                    <div
                        aria-hidden="true"
                        className="animate-glow-a pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-600/40 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="animate-glow-b pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-600/30 blur-3xl"
                    />

                    {/* Content */}
                    <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-4 sm:gap-5">
                            <img
                                src={education.logo}
                                alt={`${education.institution} logo`}
                                className="h-14 w-14 shrink-0 rounded-xl object-cover ring-1 ring-white/10 sm:h-16 sm:w-16"
                            />
                            <div>
                                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-secondaryTmp">
                                    {education.degree}
                                </span>
                                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                                    {education.institution}
                                </h3>
                                <p className="mt-1 text-sm text-secondaryTmp sm:text-base">
                                    {education.faculty}
                                </p>
                                <p className="mt-0.5 bg-gradient-to-r from-purple-400 via-violet-400 to-pink-400 bg-clip-text text-sm font-semibold text-transparent sm:text-base">
                                    {education.field}
                                </p>
                            </div>
                        </div>

                        <div className="flex shrink-0 flex-col gap-2 sm:items-end sm:text-right">
                            <span className="text-sm font-medium text-white">
                                {education.period}
                            </span>
                            <span className="text-xs text-secondaryTmp">
                                {education.location}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationSection;