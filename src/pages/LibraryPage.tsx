import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ZoomIn, Images } from 'lucide-react'
import { SEO } from '../components/common/SEO'
import { SectionHeader } from '../components/common/SectionHeader'
import { GallerySkeleton } from '../components/common/SkeletonCard'
import { LightboxModal } from '../components/library/LightboxModal'
import type { GalleryImage, GalleryCategory } from '../types'

interface LibraryPageProps {
  galleryImages: GalleryImage[]
  isLoading: boolean
}

export const LibraryPage = ({
  galleryImages,
  isLoading,
}: LibraryPageProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>('All')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const categories: GalleryCategory[] = [
    'All',
    'Lab Visits',
    'Snapshots',
    'Bootcamp',
    'Testing',
    'Demo',
  ]

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (img) =>
            img.category.trim().toLowerCase() === selectedCategory.toLowerCase()
        )

  const handlePrev = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex(
      activeImageIndex === 0 ? filteredImages.length - 1 : activeImageIndex - 1
    )
  }

  const handleNext = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex(
      activeImageIndex === filteredImages.length - 1 ? 0 : activeImageIndex + 1
    )
  }

  return (
    <main className="py-10 bg-slate-50 min-h-screen">
      <SEO
        title="Photo Library & Facilities | DE Lab - NIELIT Imphal"
        description="High-resolution media gallery of drone avionics workstations, autonomous UAV platforms, PCB assembly benches, and facility evolution at DE Lab NIELIT Imphal."
        canonicalPath="/#/library"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          badge="MEDIA REPOSITORY"
          title="DE Lab Photo &amp; Hardware Gallery"
          subtitle="Explore the state-of-the-art facilities, autonomous UAV platforms, PCB assembly benches, and the historical evolution of DE Lab NIELIT Imphal."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat)
                setActiveImageIndex(null)
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-blue-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <GallerySkeleton key={i} />
            ))}
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Images className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-800">
              No Photos Found
            </h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No photos found in this category. Please visit regularly for updated information.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
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

                <div className="absolute top-2.5 left-2.5 z-10">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-xs ${
                      img.isOldLab
                        ? 'bg-amber-600/90 text-white'
                        : 'bg-blue-900/90 text-white'
                    }`}
                  >
                    {img.category}
                  </span>
                </div>

                <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1 rounded-full bg-black/60 text-white inline-flex">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xs font-bold font-heading line-clamp-1">
                    {img.title}
                  </h3>
                  <p className="text-[10px] text-slate-300 line-clamp-1 mt-0.5">
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
          activeImageIndex !== null ? filteredImages[activeImageIndex] : null
        }
        onClose={() => setActiveImageIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </main>
  )
}
