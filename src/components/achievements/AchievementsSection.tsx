import { Award, Trophy, Handshake, ShieldCheck } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import type { Achievement } from '../../types'

interface AchievementsSectionProps {
  achievements: Achievement[]
  isLoading?: boolean
}

export const AchievementsSection = ({
  achievements,
  isLoading,
}: AchievementsSectionProps) => {
  const getIcon = (cat: Achievement['category']) => {
    switch (cat) {
      case 'Grant':
        return <Award className="w-5 h-5 text-blue-700" />
      case 'Competition':
        return <Trophy className="w-5 h-5 text-amber-600" />
      case 'MoU':
        return <Handshake className="w-5 h-5 text-emerald-600" />
      case 'Award':
        return <ShieldCheck className="w-5 h-5 text-purple-600" />
      default:
        return <Award className="w-5 h-5 text-blue-700" />
    }
  }

  return (
    <section id="achievements" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HONORS &amp; MILESTONES"
          title="Laboratory Achievements &amp; Grants"
          subtitle="Key institutional recognition, government research grants, technology competition awards, and strategic MoUs."
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-200 animate-pulse h-40"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
                        {getIcon(item.category)}
                      </div>
                      <span className="text-xs font-bold text-slate-500">
                        {item.year}
                      </span>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/60">
                      {item.badgeText}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    {item.organization}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Category: {item.category}</span>
                  <span className="text-blue-700 font-semibold">
                    Verified Credential &bull; NIELIT Imphal
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
