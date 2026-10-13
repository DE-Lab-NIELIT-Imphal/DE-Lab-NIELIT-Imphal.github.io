import {
  defaultAnnouncements,
  defaultCarouselSlides,
  defaultGalleryImages,
  defaultLabStats,
  defaultPeople,
  defaultPublications,
  defaultAchievements,
} from '../data/labData'
import type {
  Announcement,
  CarouselSlide,
  GalleryImage,
  LabStat,
  Person,
  PersonCategory,
  Publication,
  Achievement,
} from '../types'

/**
 * Configuration for Google Sheets / Google Apps Script endpoint.
 * Once the user deploys their Google Apps Script Web App,
 * they can set VITE_GOOGLE_SHEETS_API_URL in .env or pass it here.
 */
const GOOGLE_SHEETS_ENDPOINT =
  import.meta.env.VITE_GOOGLE_SHEETS_API_URL || ''

// Helper to simulate asynchronous loading for skeleton animations
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Generic data fetcher with Google Sheets integration and fallback to default lab data
 */
async function fetchSheetOrFallback<T>(
  actionName: string,
  fallbackData: T,
  simulateDelayMs = 400
): Promise<T> {
  // Always include a slight delay so skeleton transitions look smooth and deliberate
  if (simulateDelayMs > 0) {
    await delay(simulateDelayMs)
  }

  if (!GOOGLE_SHEETS_ENDPOINT) {
    return fallbackData
  }

  try {
    const url = new URL(GOOGLE_SHEETS_ENDPOINT)
    url.searchParams.set('action', actionName)
    url.searchParams.set('_t', Date.now().toString())

    const response = await fetch(url.toString(), {
      method: 'GET',
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const json = (await response.json()) as { data?: T }
    return json.data ?? (json as unknown as T)
  } catch {
    // Graceful fallback to default lab data on error or offline
    return fallbackData
  }
}

const normalizeCategory = (cat?: string, role?: string): PersonCategory => {
  const c = (cat || '').trim().toLowerCase()
  const r = (role || '').trim().toLowerCase()

  if (c === 'interns' || c === 'intern') return 'Interns'
  if (c === 'faculty & mentors' || c === 'faculty' || c === 'mentors') {
    return 'Faculty & Mentors'
  }

  if (
    r.includes('intern') ||
    r.includes('trainee') ||
    r.includes('student') ||
    r.includes('wbl') ||
    c.includes('scholars') ||
    c.includes('technical staff')
  ) {
    return 'Interns'
  }

  return 'Faculty & Mentors'
}

const normalizePersonImageUrl = (url?: string): string => {
  if (!url) return ''
  const trimmed = url.trim()
  if (trimmed === '' || trimmed.toLowerCase().includes('unsplash.com')) {
    return ''
  }
  return trimmed
}

export const dataService = {
  getCarouselSlides: (): Promise<CarouselSlide[]> =>
    fetchSheetOrFallback('getCarouselSlides', defaultCarouselSlides, 350),

  getLabStats: async (): Promise<LabStat[]> => {
    const raw = await fetchSheetOrFallback('getStats', defaultLabStats, 300)
    const list = Array.isArray(raw) && raw.length > 0 ? raw : defaultLabStats
    return list.map((item, idx) => {
      const fallback = defaultLabStats[idx] || defaultLabStats[0]
      const rawNum =
        item.targetNumber ??
        (item as unknown as { target_number?: number }).target_number
      const num =
        typeof rawNum === 'number' && !isNaN(rawNum)
          ? rawNum
          : parseInt(String(rawNum || '').replace(/[^0-9]/g, ''), 10)
      return {
        ...item,
        targetNumber: !isNaN(num) && num > 0 ? num : fallback.targetNumber,
        suffix: item.suffix !== undefined ? item.suffix : fallback.suffix,
        label: item.label || fallback.label,
        description: item.description || fallback.description,
        sectionId: item.sectionId || fallback.sectionId,
        iconName: item.iconName || fallback.iconName,
      }
    })
  },

  getAnnouncements: (): Promise<Announcement[]> =>
    fetchSheetOrFallback('getAnnouncements', defaultAnnouncements, 400),

  getPeople: async (): Promise<Person[]> => {
    const raw = await fetchSheetOrFallback('getPeople', defaultPeople, 450)
    return raw.map((person) => ({
      ...person,
      category: normalizeCategory(person.category, person.role),
      imageUrl: normalizePersonImageUrl(person.imageUrl),
    }))
  },

  getPublications: (): Promise<Publication[]> =>
    fetchSheetOrFallback('getPublications', defaultPublications, 400),

  getAchievements: (): Promise<Achievement[]> =>
    fetchSheetOrFallback('getAchievements', defaultAchievements, 350),

  getGalleryImages: (): Promise<GalleryImage[]> =>
    fetchSheetOrFallback('getGallery', defaultGalleryImages, 450),

  submitContactForm: async (payload: {
    fullName: string
    email: string
    organization?: string
    subject: string
    message: string
  }): Promise<{ success: boolean; message: string }> => {
    if (!GOOGLE_SHEETS_ENDPOINT) {
      await delay(500)
      return { success: true, message: 'Inquiry received (offline mode)' }
    }

    try {
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })
      return { success: true, message: 'Inquiry recorded successfully' }
    } catch {
      return { success: false, message: 'Failed to record inquiry' }
    }
  },
}

