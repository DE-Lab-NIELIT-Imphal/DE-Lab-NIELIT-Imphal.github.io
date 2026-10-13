import { useState, useEffect, useCallback } from 'react'
import type { CarouselSlide } from '../../types'
import { CarouselSkeleton } from '../common/SkeletonCard'

interface LabEvolutionCarouselProps {
  slides: CarouselSlide[]
  isLoading?: boolean
}

export const LabEvolutionCarousel = ({
  slides,
  isLoading,
}: LabEvolutionCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [dragStartX, setDragStartX] = useState<number | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [slides.length])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (isPaused || slides.length === 0) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide, slides.length])

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return
    const diff = e.clientX - dragStartX
    if (diff < -40) {
      nextSlide()
    } else if (diff > 40) {
      prevSlide()
    }
    setDragStartX(null)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const diff = e.changedTouches[0].clientX - touchStartX
    if (diff < -40) {
      nextSlide()
    } else if (diff > 40) {
      prevSlide()
    }
    setTouchStartX(null)
  }

  if (isLoading || slides.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <CarouselSkeleton />
      </div>
    )
  }

  const slide = slides[currentIndex]

  return (
    <section
      aria-label="Drone Electronics Lab Evolution Showcase"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden"
    >
      <div
        className="relative w-full max-w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-950 aspect-[16/10] sm:aspect-[16/8] md:aspect-[21/9] min-h-[360px] sm:min-h-[460px] md:min-h-[520px] cursor-grab active:cursor-grabbing select-none isolate"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false)
          setDragStartX(null)
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides with Crossfade Transition (Fit 100% within page width without horizontal overflow) */}
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              currentIndex === idx
                ? 'opacity-100 z-10 pointer-events-auto'
                : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={s.imageUrl}
              alt={s.title}
              draggable={false}
              className={`w-full h-full object-cover transition-transform duration-1000 ease-out select-none ${
                currentIndex === idx ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Gradient Shadow Overlay for Readable Text */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-transparent" />

        {/* Bottom Text & Centered Dots Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 md:p-8 z-30 flex flex-col justify-end pointer-events-none">
          <div className="max-w-3xl mb-3 pointer-events-auto">
            <h1
              key={`title-${slide.id}`}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight tracking-tight drop-shadow-md mb-2 animate-in fade-in duration-500"
            >
              {slide.title}
            </h1>
            <p
              key={`desc-${slide.id}`}
              className="text-sm sm:text-base md:text-lg font-semibold text-slate-100 leading-snug drop-shadow-sm mb-3.5 line-clamp-2 animate-in fade-in duration-700"
            >
              {slide.description}
            </p>

            {/* Chips placed directly below the text */}
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/25 text-white backdrop-blur-xs border border-white/20 shadow-xs">
                {slide.badge}
              </span>
              <span className="px-3 py-1 rounded-md text-xs sm:text-sm font-bold bg-white/20 text-slate-100 backdrop-blur-xs border border-white/20 shadow-xs">
                {slide.era}
              </span>
            </div>
          </div>

          {/* Centered Dots Pagination */}
          <div className="flex items-center justify-center gap-2 pt-3 border-t border-white/20 pointer-events-auto">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentIndex(idx)
                }}
                className={`h-2.5 rounded-full cursor-pointer transition-all ${
                  currentIndex === idx
                    ? 'w-9 bg-white shadow-xs'
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
