import { useState } from 'react'
import { Search, FileText, ExternalLink, Bookmark, Quote } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { PublicationSkeleton } from '../common/SkeletonCard'
import type { Publication, PublicationType } from '../../types'

interface PublicationsSectionProps {
  publications: Publication[]
  isLoading?: boolean
}

export const PublicationsSection = ({
  publications,
  isLoading,
}: PublicationsSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<'All' | PublicationType>('All')

  const types: ('All' | PublicationType)[] = [
    'All',
    'Journal',
    'Conference',
    'Patent',
    'Technical Report',
  ]

  const filteredPublications = publications.filter((pub) => {
    const matchesType =
      selectedType === 'All' || pub.type === selectedType
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  return (
    <section id="publications" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="RESEARCH SCHOLARSHIP"
          title="Publications &amp; Intellectual Property"
          subtitle="Peer-reviewed scientific journals, IEEE conferences, and patent disclosures developed at DE Lab NIELIT Imphal."
        />

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, author, topic..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-slate-50/50"
            />
          </div>

          {/* Type Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {types.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedType(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                  selectedType === t
                    ? 'bg-blue-900 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <PublicationSkeleton key={i} />
            ))}
          </div>
        ) : filteredPublications.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">
              No publications match your search criteria.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPublications.map((pub) => (
              <article
                key={pub.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200/50">
                      {pub.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {pub.year}
                    </span>
                  </div>

                  {pub.citationCount !== undefined && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      <Quote className="w-3 h-3 text-blue-700" />
                      {pub.citationCount} Citations
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug mb-2">
                  {pub.title}
                </h3>

                <p className="text-xs text-slate-600 mb-2">
                  <span className="font-semibold text-slate-700">Authors:</span>{' '}
                  {pub.authors}
                </p>

                <p className="text-xs text-slate-500 italic mb-4">
                  {pub.venue}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {pub.doiUrl && (
                      <a
                        href={pub.doiUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View DOI</span>
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a
                        href={pub.pdfUrl}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-900 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>PDF Document</span>
                      </a>
                    )}
                  </div>

                  <span className="text-[11px] text-slate-400 flex items-center gap-1">
                    <Bookmark className="w-3 h-3" /> NIELIT Imphal Repository
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
