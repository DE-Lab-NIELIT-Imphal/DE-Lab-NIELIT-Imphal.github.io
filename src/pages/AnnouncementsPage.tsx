import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ArrowLeft, Calendar, Bell, Pin } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { SectionHeader } from '../components/common/SectionHeader'
import { AnnouncementSkeleton } from '../components/common/SkeletonCard'
import { AnnouncementDetailModal } from '../components/announcements/AnnouncementDetailModal'
import type { Announcement, AnnouncementCategory } from '../types'

interface AnnouncementsPageProps {
  announcements: Announcement[]
  isLoading: boolean
}

export const AnnouncementsPage = ({
  announcements,
  isLoading,
}: AnnouncementsPageProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | AnnouncementCategory
  >('All')
  const [activeModalItem, setActiveModalItem] =
    useState<Announcement | null>(null)

  const categories: ('All' | AnnouncementCategory)[] = [
    'All',
    'Notice',
    'Workshop',
    'Recruitment',
    'Research',
    'Tender',
  ]

  const filtered = announcements.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="py-10 bg-slate-50 min-h-screen">
      <SEO
        title="Circulars & Announcements | DE Lab - NIELIT Imphal"
        description="Official notifications, recruitment notices, drone workshop admissions, and administrative circulars from Drone Electronics Laboratory (DE Lab), NIELIT Imphal."
        canonicalPath="/#/announcements"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 hover:text-blue-950 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <SectionHeader
          badge="OFFICIAL DIRECTORY"
          title="Announcements, Circulars &amp; Notices"
          subtitle="Archive of all recruitment calls, drone training workshops, tenders, and official administrative notifications from DE Lab NIELIT Imphal."
        />

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars by title, keyword..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List of Announcements */}
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <AnnouncementSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Bell className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">
              No Announcements Found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No circulars found matching your selection. Please visit regularly for updated information.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200/50">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                    {item.isPinned && (
                      <span className="text-xs text-amber-600 font-semibold flex items-center gap-0.5">
                        <Pin className="w-3 h-3 fill-amber-500" /> Pinned
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.content}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <button
                    type="button"
                    onClick={() => setActiveModalItem(item)}
                    className="px-3.5 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-900 transition-colors cursor-pointer"
                  >
                    View Details
                  </button>

                  {item.attachmentUrl && (
                    <a
                      href={item.attachmentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 rounded-lg text-xs font-bold bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      Submit Form
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <AnnouncementDetailModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
      />
    </main>
  )
}
