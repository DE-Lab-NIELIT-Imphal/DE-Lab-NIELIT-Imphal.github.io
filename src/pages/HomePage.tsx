import { SEO } from '../components/common/SEO'
import { LabEvolutionCarousel } from '../components/hero/LabEvolutionCarousel'
import { StatCards } from '../components/stats/StatCards'
import { AnnouncementsPreview } from '../components/announcements/AnnouncementsPreview'
import { AboutSection } from '../components/about/AboutSection'
import { PeopleSection } from '../components/people/PeopleSection'
import { PublicationsSection } from '../components/publications/PublicationsSection'
import { AchievementsSection } from '../components/achievements/AchievementsSection'
import { LibraryPreview } from '../components/library/LibraryPreview'
import { ContactSection } from '../components/contact/ContactSection'
import type {
  Announcement,
  CarouselSlide,
  GalleryImage,
  LabStat,
  Person,
  Publication,
  Achievement,
} from '../types'

interface HomePageProps {
  slides: CarouselSlide[]
  stats: LabStat[]
  announcements: Announcement[]
  people: Person[]
  publications: Publication[]
  achievements: Achievement[]
  galleryImages: GalleryImage[]
  isLoading: boolean
}

export const HomePage = ({
  slides,
  stats,
  announcements,
  people,
  publications,
  achievements,
  galleryImages,
  isLoading,
}: HomePageProps) => {
  return (
    <main className="w-full max-w-full overflow-x-hidden">
      <SEO
        title="Drone Electronics Laboratory (DE Lab) | NIELIT Imphal"
        description="Drone Electronics Laboratory (DE Lab) at NIELIT Imphal, MeitY, Govt. of India. Center of Excellence for UAV avionics, drone electronics prototyping, embedded flight controllers, autonomous aerial robotics, and industry skilling."
        canonicalPath="/"
      />
      {/* 1. Hero: Old to New Lab Evolution Carousel */}
      <LabEvolutionCarousel slides={slides} isLoading={isLoading} />

      {/* 2. Stat Cards with Increment Style & Section Anchoring */}
      <StatCards stats={stats} isLoading={isLoading} />

      {/* 3. Announcements Highlights & Notification Link */}
      <AnnouncementsPreview
        announcements={announcements}
        isLoading={isLoading}
      />

      {/* 4. About Section */}
      <AboutSection />

      {/* 5. People / Faculty / Researchers */}
      <PeopleSection people={people} isLoading={isLoading} />

      {/* 6. Publications & Patents */}
      <PublicationsSection
        publications={publications}
        isLoading={isLoading}
      />

      {/* 7. Achievements & Funded Grants */}
      <AchievementsSection
        achievements={achievements}
        isLoading={isLoading}
      />

      {/* 8. Library / Facilities Preview */}
      <LibraryPreview images={galleryImages} isLoading={isLoading} />

      {/* 9. Contact Us Section with Location Map */}
      <ContactSection />
    </main>
  )
}
