import { useState, useEffect } from 'react'
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { Navbar } from './components/common/Navbar'
import { Footer } from './components/common/Footer'
import { HomePage } from './pages/HomePage'
import { AnnouncementsPage } from './pages/AnnouncementsPage'
import { LibraryPage } from './pages/LibraryPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { dataService } from './services/dataService'
import type {
  Announcement,
  CarouselSlide,
  GalleryImage,
  LabStat,
  Person,
  Publication,
  Achievement,
} from './types'

// Automatically scrolls window to top when route path changes
const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [slides, setSlides] = useState<CarouselSlide[]>([])
  const [stats, setStats] = useState<LabStat[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [people, setPeople] = useState<Person[]>([])
  const [publications, setPublications] = useState<Publication[]>([])
  const [achievements, setAchievements] = useState<Achievement[]>([])
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    let ignore = false

    const fetchInitialData = async () => {
      try {
        const [
          slidesData,
          statsData,
          announcementsData,
          peopleData,
          publicationsData,
          achievementsData,
          galleryData,
        ] = await Promise.all([
          dataService.getCarouselSlides(),
          dataService.getLabStats(),
          dataService.getAnnouncements(),
          dataService.getPeople(),
          dataService.getPublications(),
          dataService.getAchievements(),
          dataService.getGalleryImages(),
        ])

        if (!ignore) {
          setSlides(slidesData)
          setStats(statsData)
          setAnnouncements(announcementsData)
          setPeople(peopleData)
          setPublications(publicationsData)
          setAchievements(achievementsData)
          setGalleryImages(galleryData)
        }
      } catch {
        // Fallback provided by dataService
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    void fetchInitialData()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
        {/* Navigation Bar with Logo & Notifications */}
        <Navbar announcements={announcements} />

        {/* Dynamic Route Pages */}
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  slides={slides}
                  stats={stats}
                  announcements={announcements}
                  people={people}
                  publications={publications}
                  achievements={achievements}
                  galleryImages={galleryImages}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/announcements"
              element={
                <AnnouncementsPage
                  announcements={announcements}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/library"
              element={
                <LibraryPage
                  galleryImages={galleryImages}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Institutional Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
