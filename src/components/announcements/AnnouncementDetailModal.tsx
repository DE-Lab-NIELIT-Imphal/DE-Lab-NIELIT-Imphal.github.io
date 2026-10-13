import { Tag } from 'lucide-react'
import { Modal } from '../common/Modal'
import type { Announcement } from '../../types'

interface AnnouncementDetailModalProps {
  item: Announcement | null
  onClose: () => void
}

export const AnnouncementDetailModal = ({
  item,
  onClose,
}: AnnouncementDetailModalProps) => {
  return (
    <Modal
      isOpen={item !== null}
      onClose={onClose}
      title={item?.title ?? 'Notice Detail'}
      maxWidth="lg"
    >
      {item && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-500 pb-2 border-b border-slate-100">
            <span className="font-semibold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" /> {item.category}
            </span>
            <span>{item.date}</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
            {item.content}
          </p>
          {item.attachmentUrl && (
            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <a
                href={item.attachmentUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Submit Form
              </a>
            </div>
          )}
        </div>
      )}
    </Modal>
  )
}
