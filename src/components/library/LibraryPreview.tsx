import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ZoomIn, Images } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { GallerySkeleton } from '../common/SkeletonCard'
import { LightboxModal } from './LightboxModal'
import type { GalleryImage } from '../../types'

interface LibraryPreviewProps {
  images: GalleryImage[]
  isLoading?: boolean
}

export const LibraryPreview = ({ images, isLoading }: LibraryPreviewProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const previewImages = images.slice(0, 6)

  const handlePrev = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex(
      activeImageIndex === 0 ? previewImages.length - 1 : activeImageIndex - 1
    )
  }

  const handleNext = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex(
      activeImageIndex === previewImages.length - 1 ? 0 : activeImageIndex + 1
    )
  }

  return (
    <section id="library" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <SectionHeader
              badge="FACILITIES &amp; MEDIA"
              title="DE Lab Infrastructure &amp; Image Library"
              subtitle="Glimpse into our flight testing arena, PCB fabrication benches, and historical lab progression at NIELIT Imphal."
              centered={false}
            />
          </div>

          <div className="mt-4 md:mt-0 mb-8">
            <Link
              to="/library"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-blue-900 text-white hover:bg-blue-800 transition-colors shadow-sm"
            >
              <span>Explore Full Photo Library</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <GallerySkeleton key={i} />
            ))}
          </div>
        ) : previewImages.length === 0 ? (
          <div className="text-center py-12 px-4 bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
            <Images className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">
              No Photos Found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Gallery media is currently being curated. Please visit regularly for updated information.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => setActiveImageIndex(idx)}
                className="group relative bg-slate-900 rounded-xl overflow-hidden shadow-xs hover:shadow-xl cursor-pointer aspect-[4/3] border border-slate-200"
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-95 group-hover:opacity-90"
                />

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                      img.isOldLab
                        ? 'bg-amber-600/90 text-white'
                        : 'bg-blue-900/90 text-white'
                    }`}
                  >
                    {img.category}
                  </span>
                </div>

                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded-full bg-black/60 text-white inline-flex">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-sm font-bold font-heading line-clamp-1">
                    {img.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <LightboxModal
        image={
          activeImageIndex !== null ? previewImages[activeImageIndex] : null
        }
        onClose={() => setActiveImageIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  )
}
