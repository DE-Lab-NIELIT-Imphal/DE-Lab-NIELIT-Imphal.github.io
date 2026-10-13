import type { CarouselSlide, GalleryImage } from '../types'

export const defaultCarouselSlides: CarouselSlide[] = [
  {
    id: 'slide-1',
    title: 'Initial Laboratory Setup',
    era: '2024 – 2025',
    badge: 'OLD LAB',
    badgeType: 'old',
    description: 'Legacy prototyping workbench and early testing tools.',
    imageUrl: '/images/old_lab.jpg',
    highlights: ['Legacy Hardware', 'Early Setup'],
  },
  {
    id: 'slide-2',
    title: 'First-Gen Drone Testing',
    era: '2024 – 2025',
    badge: 'OLD DRONES',
    badgeType: 'old',
    description: 'Initial multi-rotor airframes and basic flight telemetry.',
    imageUrl: '/images/old_drones.jpeg',
    highlights: ['Initial Airframes', 'Basic Telemetry'],
  },
  {
    id: 'slide-3',
    title: 'Modernized DE Lab Facility',
    era: '2025 – Present',
    badge: 'NEW LAB',
    badgeType: 'new',
    description: 'State-of-the-art avionics testing and research center.',
    imageUrl: '/images/new_lab_01.jpg',
    highlights: ['Modernized Pods', 'Precision Gear'],
  },
  {
    id: 'slide-4',
    title: 'Avionics & Electronics Benches',
    era: '2025 – Present',
    badge: 'NEW LAB',
    badgeType: 'new',
    description: 'Precision flight controller programming and RF analysis.',
    imageUrl: '/images/new_lab_02.jpg',
    highlights: ['RF Analyzers', 'SMT Workstations'],
  },
  {
    id: 'slide-5',
    title: 'Autonomous Drone Fleet',
    era: '2025 – Present',
    badge: 'NEW DRONES',
    badgeType: 'new',
    description: 'Edge AI aerial robotics and autonomous UAV systems.',
    imageUrl: '/images/new_drones.jpg',
    highlights: ['Autonomous Flight', 'Edge AI Vision'],
  },
]

export const defaultGalleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Modernized DE Lab Avionics Pods & Workstations',
    category: 'Testing',
    imageUrl: '/images/new_lab_01.jpg',
    date: 'February 2026',
    description:
      'Equipped with flight controller programming benches, RF spectrum analyzers, and testing equipment.',
  },
  {
    id: 'gal-2',
    title: 'Avionics Prototyping & Flight Controller Electronics Benches',
    category: 'Testing',
    imageUrl: '/images/new_lab_02.jpg',
    date: 'January 2026',
    description:
      'Precision flight controller programming, signal integrity analysis, and electronics assembly.',
  },
  {
    id: 'gal-3',
    title: 'Autonomous Drone Fleet & Aerial Robotics Platforms',
    category: 'Demo',
    imageUrl: '/images/new_drones.jpg',
    date: 'September 2025',
    description:
      'Autonomous UAV platforms equipped with RTK-GPS telemetry and obstacle avoidance systems.',
  },
  {
    id: 'gal-4',
    title: 'Historical Prototyping Workstation Bench',
    category: 'Snapshots',
    imageUrl: '/images/old_lab.jpg',
    date: 'August 2024',
    description:
      'Initial DE Lab hardware development workbench setup prior to modernization.',
    isOldLab: true,
  },
  {
    id: 'gal-5',
    title: 'First-Generation Drone Testing Platform',
    category: 'Snapshots',
    imageUrl: '/images/old_drones.jpeg',
    date: 'June 2024',
    description:
      'Early flight test airframe during initial DE Lab development phases.',
    isOldLab: true,
  },
]
