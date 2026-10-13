import type { Achievement } from '../types'

export const defaultAchievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'NIDAR 2025-26 National Drone Competition — Disaster Management UAV',
    year: '2025 - 2026',
    category: 'Competition',
    organization: 'Drone Federation of India',
    description:
      'DE Lab team secured AIR 18th position overall, AIR 6th in Design Review, AIR 40th in Business Pitching, and AIR 19th in Ignite Prize. Demonstrated exceptional resilience and aerial innovation during the high-altitude disaster relief mission.',
    badgeText: 'WON Exceptional Nidar Journey Showcase',
  },
  {
    id: 'ach-2',
    title: 'MeitY R&D Grant for Indigenous Drone Avionics Development',
    year: '2024 - 2027',
    category: 'Grant',
    organization: 'Ministry of Electronics and Information Technology (MeitY), New Delhi',
    description:
      'Sanctioned grant of INR 2.45 Crores for the design, development, and skilling in high-reliability indigenous flight controllers and telemetry modules tailored for Northeast terrains.',
    badgeText: '₹2.45 Cr Grant',
  },
  {
    id: 'ach-3',
    title: 'First Prize — Northeast Autonomous Drone Technology Challenge',
    year: '2025',
    category: 'Competition',
    organization: 'Northeast Space Applications Centre (NESAC) & IIT Guwahati',
    description:
      'Secured 1st position for presenting real-time forest fire spot detection using on-edge thermal drone computer vision and LoRa telemetry.',
    badgeText: '1st Prize Winner',
  },
  {
    id: 'ach-4',
    title: 'Institutional MoU with State Disaster Management Authority',
    year: '2024',
    category: 'MoU',
    organization: 'Manipur State Disaster Management Authority (MSDMA)',
    description:
      'Formal technical partnership to provide rapid aerial surveillance, flood water level monitoring, and emergency payload deployment during contingencies.',
    badgeText: 'State Partnership',
  },
]
