import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag, Bell } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { AnnouncementCard } from './AnnouncementCard'
import { AnnouncementSkeleton } from '../common/SkeletonCard'
import { Modal } from '../common/Modal'
import type { Announcement } from '../../types'

interface AnnouncementsPreviewProps {
  announcements: Announcement[]
  isLoading?: boolean
}

export const AnnouncementsPreview = ({
  announcements,
  isLoading,
}: AnnouncementsPreviewProps) => {
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<Announcement | null>(null)

  const previewList = announcements.slice(0, 3)

  return (
    <section id="announcements" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <SectionHeader
              badge="OFFICIAL NOTICES"
              title="Recent Announcements & Circulars"
              subtitle="Stay updated with new internship calls, drone workshops, academic research notices, and procurement tenders."
              centered={false}
            />
          </div>

          <div className="mt-4 md:mt-0 mb-8">
            <Link
              to="/announcements"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm"
            >
              <span>View All Announcements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Card Grid / Skeletons */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnnouncementSkeleton key={i} />
            ))}
          </div>
        ) : previewList.length === 0 ? (
          <div className="text-center py-12 px-4 bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <Bell className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">
              No Announcements Found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              There are no active notices or circulars right now. Please visit regularly for updated information.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewList.map((item) => (
              <AnnouncementCard
                key={item.id}
                announcement={item}
                onViewDetails={(ann) => setSelectedAnnouncement(ann)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal for Full Announcement Detail */}
      <Modal
        isOpen={selectedAnnouncement !== null}
        onClose={() => setSelectedAnnouncement(null)}
        title={selectedAnnouncement?.title ?? 'Announcement Details'}
        maxWidth="lg"
      >
        {selectedAnnouncement && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span className="flex items-center gap-1 font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full">
                <Tag className="w-3 h-3" /> {selectedAnnouncement.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedAnnouncement.date}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {selectedAnnouncement.content}
            </p>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Official Release &bull; NIELIT Imphal DE Lab
              </span>
              {selectedAnnouncement.attachmentUrl && (
                <a
                  href={selectedAnnouncement.attachmentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer"
                >
                  Submit Form
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
