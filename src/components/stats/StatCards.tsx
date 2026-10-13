import { useState, useEffect } from 'react'
import type { LabStat } from '../../types'
import { StatSkeleton } from '../common/SkeletonCard'
import { defaultLabStats } from '../../data/statsData'

interface StatCardsProps {
  stats: LabStat[]
  isLoading?: boolean
}

interface AnimatedCounterProps {
  target: number | string
  suffix?: string
}

const AnimatedCounter = ({ target, suffix = '' }: AnimatedCounterProps) => {
  const parsedTarget =
    typeof target === 'number'
      ? isNaN(target)
        ? 0
        : target
      : parseInt(String(target).replace(/[^0-9]/g, ''), 10) || 0

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (parsedTarget <= 0) return

    let startTime: number | null = null
    const duration = 1200

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easedProgress * parsedTarget))

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(parsedTarget)
      }
    }

    const frameId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(frameId)
  }, [parsedTarget])

  return (
    <span className="font-heading font-extrabold text-4xl sm:text-5xl text-blue-950">
      {count}
      {suffix}
    </span>
  )
}

export const StatCards = ({ stats, isLoading }: StatCardsProps) => {
  const displayStats = stats && stats.length > 0 ? stats : defaultLabStats

  const handleCardClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return (
      <section id="stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <StatSkeleton key={i} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      id="stats"
      aria-label="DE Lab Impact Metrics"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {displayStats.map((stat) => (
          <button
            key={stat.id}
            type="button"
            onClick={() => handleCardClick(stat.sectionId)}
            className="group relative bg-white hover:bg-slate-50/80 p-5 rounded-xl border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          >
            {/* Top row: Section anchor link cue */}
            <div className="flex items-center justify-end mb-3">
              <span className="text-xs font-bold text-slate-400 group-hover:text-blue-700 transition-colors">
                View &rarr;
              </span>
            </div>

            {/* Middle: Number Count-Up */}
            <div className="mb-2">
              <AnimatedCounter
                target={stat.targetNumber}
                suffix={stat.suffix}
              />
            </div>

            {/* Bottom: Label & Description */}
            <div>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                {stat.label}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
