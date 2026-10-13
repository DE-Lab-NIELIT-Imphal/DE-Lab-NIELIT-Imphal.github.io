export type AnnouncementCategory =
  | 'Notice'
  | 'Workshop'
  | 'Recruitment'
  | 'Research'
  | 'Tender'

export type PersonCategory =
  | 'Faculty & Mentors'
  | 'Interns'

export type PublicationType =
  | 'Journal'
  | 'Conference'
  | 'Patent'
  | 'Technical Report'

export type AchievementCategory =
  | 'Award'
  | 'Grant'
  | 'Competition'
  | 'MoU'

export type GalleryCategory =
  | 'All'
  | 'Lab Visits'
  | 'Snapshots'
  | 'Bootcamp'
  | 'Testing'
  | 'Demo'

export interface Announcement {
  id: string
  title: string
  date: string
  category: AnnouncementCategory
  content: string
  attachmentUrl?: string
  isPinned?: boolean
  isNew?: boolean
}

export interface LabStat {
  id: string
  label: string
  targetNumber: number
  suffix: string
  description: string
  sectionId: string
  iconName: 'book-open' | 'award' | 'users' | 'cpu' | 'briefcase'
}

export interface Person {
  id: string
  name: string
  role: string
  category: PersonCategory
  qualification: string
  researchFocus: string
  email: string
  linkedinUrl?: string
  scholarUrl?: string
  imageUrl: string
}

export interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: number
  type: PublicationType
  doiUrl?: string
  pdfUrl?: string
  citationCount?: number
}

export interface Achievement {
  id: string
  title: string
  year: string
  category: AchievementCategory
  organization: string
  description: string
  badgeText: string
}

export interface GalleryImage {
  id: string
  title: string
  category: Exclude<GalleryCategory, 'All'>
  imageUrl: string
  date: string
  description: string
  isOldLab?: boolean
}

export interface CarouselSlide {
  id: string
  title: string
  era: string
  badge: string
  badgeType: 'old' | 'transition' | 'new'
  description: string
  imageUrl: string
  comparisonImageUrl?: string
  highlights: string[]
}
