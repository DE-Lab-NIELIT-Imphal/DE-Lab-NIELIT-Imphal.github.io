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
    title: 'Modern SMT Electronics Assembly & Rework Station',
    category: 'Testing',
    imageUrl:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    date: 'February 2026',
    description:
      'Equipped with stereo inspection microscopes, hot air rework stations, and anti-static ESD-safe workstations.',
  },
  {
    id: 'gal-2',
    title: 'Heavy-Lift Quadrotor Platform with Thermal Gimbal',
    category: 'Demo',
    imageUrl:
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=80',
    date: 'January 2026',
    description:
      'Custom carbon-fiber frame designed for payload carrying capacity up to 5 kg with dual-frequency telemetry.',
  },
  {
    id: 'gal-3',
    title: 'High-Altitude Outdoor Flight Calibration at Kangla Field',
    category: 'Testing',
    imageUrl:
      'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    date: 'December 2025',
    description:
      'Real-world flight trials to validate autonomous waypoint navigation in valley wind conditions.',
  },
  {
    id: 'gal-4',
    title: 'Specialized Hands-On Drone Assembly Workshop',
    category: 'Bootcamp',
    imageUrl:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    date: 'November 2025',
    description:
      'Trainees learning soldering techniques, ESC calibration, and Betaflight/PX4 ground station tuning.',
  },
  {
    id: 'gal-5',
    title: 'Historical 2024 Prototyping Bench',
    category: 'Snapshots',
    imageUrl: '/images/old_lab.jpg',
    date: 'August 2024',
    description:
      'Initial DE Lab setup with manually wired microcontrollers and analog RC receivers prior to renovation.',
    isOldLab: true,
  },
  {
    id: 'gal-6',
    title: 'Multi-Axis Drone Propeller Thrust & Vibration Rig',
    category: 'Testing',
    imageUrl:
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    date: 'October 2025',
    description:
      'Automated thrust measurement cell providing real-time RPM, voltage drop, and vibration spectral data.',
  },
  {
    id: 'gal-7',
    title: 'Autonomous Hexarotor with Dual RTK-GPS Antennas',
    category: 'Demo',
    imageUrl: '/images/new_drones.jpg',
    date: 'September 2025',
    description:
      'Centimeter-level positioning UAV customized for precision agricultural analysis and topographic surveys.',
  },
  {
    id: 'gal-8',
    title: 'Legacy First-Generation Drone Testing',
    category: 'Snapshots',
    imageUrl: '/images/old_drones.jpeg',
    date: 'June 2024',
    description:
      'Early flight trials conducted during the first phase of DE Lab establishment.',
    isOldLab: true,
  },
]
