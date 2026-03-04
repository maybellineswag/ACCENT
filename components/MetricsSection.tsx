"use client"

import { useRef } from "react"

interface MetricsSectionProps {
    translations: any
}

export function MetricsSection({ translations }: MetricsSectionProps) {
    const metrics = translations?.testimonials?.metrics;
    if (!Array.isArray(metrics)) return null;

    return (
        <section className="pt-8 pb-8 px-4 sm:px-2 lg:px-4 relative z-20 w-full overflow-visible">
            <div className="w-full pl-2 pr-4 sm:container sm:mx-auto sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12 xl:gap-x-16">
                    {metrics.map((metric: any, idx: number) => (
                        <div
                            key={idx}
                            className="flex flex-col items-start w-full"
                        >
                            <div className="group flex flex-col items-start w-full">
                                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-gradient-blobs tracking-tighter mb-4 leading-none">
                                    {metric.value}
                                </div>
                                <div className="w-12 h-[2px] bg-[#8B8DD1] mb-6 opacity-40"></div>
                                <div className="text-base sm:text-lg text-black font-bold tracking-tight leading-tight mb-3">
                                    {metric.label}
                                </div>
                                <div className="text-sm sm:text-[15px] text-neutral-600 font-normal leading-relaxed">
                                    {metric.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
