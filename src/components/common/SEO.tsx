import { useEffect } from 'react'

export interface SEOProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogType?: 'website' | 'article'
  ogImage?: string
}

const DEFAULT_TITLE = 'Drone Electronics Laboratory (DE Lab) | NIELIT Imphal'
const DEFAULT_DESCRIPTION =
  'Drone Electronics Laboratory (DE Lab) at NIELIT Imphal, MeitY, Govt. of India. Center of Excellence for UAV avionics, drone electronics prototyping, embedded flight controllers, and autonomous aerial robotics.'
const BASE_URL = 'https://de-lab-nielit-imphal.github.io'
const DEFAULT_IMAGE = `${BASE_URL}/images/og-image.jpg`

export const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
}: SEOProps) => {
  useEffect(() => {
    // 1. Update document title
    const fullTitle = title.includes('DE Lab')
      ? title
      : `${title} | DE Lab - NIELIT Imphal`
    document.title = fullTitle

    // Helper to set or create meta tag
    const setMetaTag = (
      attributeName: 'name' | 'property',
      attributeValue: string,
      content: string,
    ) => {
      let element = document.querySelector<HTMLMetaElement>(
        `meta[${attributeName}="${attributeValue}"]`,
      )
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attributeName, attributeValue)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Helper to set canonical link
    const setCanonical = (href: string) => {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', href)
    }

    const currentUrl = canonicalPath
      ? `${BASE_URL}${canonicalPath}`
      : `${BASE_URL}/`

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description)
    setMetaTag('name', 'title', fullTitle)

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', currentUrl)
    setMetaTag('property', 'og:type', ogType)
    setMetaTag('property', 'og:image', ogImage)

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)
    setMetaTag('name', 'twitter:url', currentUrl)

    // 5. Canonical Link
    setCanonical(currentUrl)
  }, [title, description, canonicalPath, ogType, ogImage])

  return null
}
