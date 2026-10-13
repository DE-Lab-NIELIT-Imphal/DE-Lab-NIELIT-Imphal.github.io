import type { Announcement } from '../types'

export const defaultAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title:
      'Call for Applications: 6-Week Summer Internship in Drone Avionics & Embedded Firmware',
    date: 'March 28, 2026',
    category: 'Recruitment',
    content:
      'Applications are invited from engineering students for hands-on training covering PX4 autopilot, STM32 flight controller programming, and telemetry circuits.',
    attachmentUrl: 'https://forms.gle/sample-internship-form',
    isPinned: true,
    isNew: true,
  },
  {
    id: 'ann-2',
    title:
      'National Workshop on Edge-AI Integration for Autonomous Surveillance Drones',
    date: 'March 15, 2026',
    category: 'Workshop',
    content:
      'A 3-day practical workshop hosted at DE Lab NIELIT Imphal on TensorRT acceleration for aerial computer vision and YOLO deployment on NVIDIA Jetson modules.',
    attachmentUrl: 'https://forms.gle/sample-workshop-registration',
    isPinned: true,
    isNew: true,
  },
  {
    id: 'ann-3',
    title:
      'Notice: Procurement of 6-GHz High-Speed RF Oscilloscopes & Spectrum Analyzers',
    date: 'February 24, 2026',
    category: 'Tender',
    content:
      'Sealed tenders are invited from registered OEMs for the supply and installation of high-frequency RF instrumentation at DE Lab.',
    attachmentUrl: 'https://nielit.gov.in/imphal/tenders',
    isPinned: false,
    isNew: true,
  },
  {
    id: 'ann-4',
    title:
      'DE Lab Team Wins "Exceptional NIDAR Journey Showcase" at NIDAR 2025-26',
    date: 'January 28, 2026',
    category: 'Research',
    content:
      'DE Lab students and engineers demonstrated their disaster relief drone system at the national stage, securing top ranks across Design Review and Ignite Prize categories.',
    attachmentUrl: '#',
    isPinned: false,
    isNew: false,
  },
  {
    id: 'ann-5',
    title: 'Scheduled Calibration & Maintenance of Wind Simulation Testing Tunnel',
    date: 'January 05, 2026',
    category: 'Notice',
    content:
      'Propeller aerodynamic testing benches will undergo scheduled sensor audits and recalibration procedures.',
    attachmentUrl: '#',
    isPinned: false,
    isNew: false,
  },
  {
    id: 'ann-6',
    title:
      'MoU Signed with Directorate of IT & Communication for State Drone Surveying',
    date: 'December 12, 2025',
    category: 'Notice',
    content:
      'Strategic partnership established to deploy indigenous sensor payloads for geo-spatial mapping and precision agricultural monitoring.',
    attachmentUrl: '#',
    isPinned: false,
    isNew: false,
  },
]
