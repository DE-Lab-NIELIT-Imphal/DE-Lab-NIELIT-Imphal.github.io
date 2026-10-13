import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react'
import type { GalleryImage } from '../../types'

interface LightboxModalProps {
  image: GalleryImage | null
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export const LightboxModal = ({
  image,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }

    if (image) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose, onPrev, onNext])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Close */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800 text-white">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-600/80 text-white flex items-center gap-1">
              <Tag className="w-3 h-3" /> {image.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {image.date}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Image */}
        <div className="relative max-h-[65vh] flex items-center justify-center bg-black overflow-hidden">
          <img
            src={image.imageUrl}
            alt={image.title}
            className="max-h-[65vh] w-auto max-w-full object-contain"
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white border border-white/20 transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Bottom Description */}
        <div className="p-6 bg-slate-950 text-white">
          <h3 className="text-lg font-bold font-heading mb-1">{image.title}</h3>
          <p className="text-xs text-slate-400">{image.description}</p>
        </div>
      </div>
    </div>
  )
}
