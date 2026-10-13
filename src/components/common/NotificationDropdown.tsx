import { useState, useRef, useEffect } from 'react'
import { Bell, ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Announcement } from '../../types'

interface NotificationDropdownProps {
  announcements: Announcement[]
}

export const NotificationDropdown = ({
  announcements,
}: NotificationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const recentAnnouncements = announcements.slice(0, 5)
  const unreadCount = announcements.filter((a) => a.isNew).length

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="View recent announcements"
        className="relative p-2 rounded-lg cursor-pointer text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-700 text-white text-[10px] font-bold items-center justify-center">
              {unreadCount}
            </span>
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-900 text-sm">
                Recent Announcements
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-800">
                Top 5
              </span>
            </div>
            {unreadCount > 0 && (
              <span className="text-xs text-blue-700 font-semibold">
                {unreadCount} new
              </span>
            )}
          </div>

          <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
            {recentAnnouncements.length === 0 ? (
              <div className="py-8 px-4 text-center">
                <Bell className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                <h5 className="text-xs font-bold text-slate-800">
                  No Announcements Found
                </h5>
                <p className="text-[11px] text-slate-500 mt-1">
                  Please visit regularly for updated information.
                </p>
              </div>
            ) : (
              recentAnnouncements.map((item) => (
                <Link
                  key={item.id}
                  to="/announcements"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {item.date}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-slate-800 group-hover:text-blue-800 line-clamp-2 transition-colors">
                    {item.title}
                  </h4>
                </Link>
              ))
            )}
          </div>

          <div className="p-2 border-t border-slate-100 bg-slate-50 rounded-b-xl">
            <Link
              to="/announcements"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-blue-700 hover:text-blue-900 hover:bg-blue-100/50 rounded-lg transition-colors"
            >
              <span>View All Announcements</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
