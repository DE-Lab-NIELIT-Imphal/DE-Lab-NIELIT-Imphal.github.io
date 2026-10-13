import { Calendar, ExternalLink, Pin } from 'lucide-react'
import type { Announcement } from '../../types'

interface AnnouncementCardProps {
  announcement: Announcement
  onViewDetails?: (item: Announcement) => void
}

export const AnnouncementCard = ({
  announcement,
  onViewDetails,
}: AnnouncementCardProps) => {
  const getCategoryColor = (cat: Announcement['category']) => {
    switch (cat) {
      case 'Recruitment':
        return 'bg-purple-50 text-purple-700 border-purple-200'
      case 'Workshop':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      case 'Tender':
        return 'bg-amber-50 text-amber-700 border-amber-200'
      case 'Research':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200'
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200'
    }
  }

  return (
    <article className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between relative group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-xs font-bold px-3 py-0.5 rounded-full border ${getCategoryColor(
              announcement.category
            )}`}
          >
            {announcement.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            {announcement.isPinned && (
              <span className="flex items-center gap-0.5 text-amber-700 font-bold">
                <Pin className="w-3.5 h-3.5 fill-amber-500" /> Pinned
              </span>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {announcement.date}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 mb-2 leading-snug">
          {announcement.title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-slate-700 line-clamp-3 leading-relaxed mb-4">
          {announcement.content}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onViewDetails?.(announcement)}
          className="text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
        >
          Read Details
        </button>

        {announcement.attachmentUrl && (
          <a
            href={announcement.attachmentUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer"
            title="Open registration / submission form"
          >
            <span>Submit Form</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}
