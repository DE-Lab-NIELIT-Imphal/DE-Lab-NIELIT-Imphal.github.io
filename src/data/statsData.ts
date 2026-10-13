import type { LabStat } from '../types'

export const defaultLabStats: LabStat[] = [
  {
    id: 'stat-pubs',
    label: 'Research Publications',
    targetNumber: 5,
    suffix: '+',
    description: 'Indexed in IEEE Elsevier & Springer conferences & journals',
    sectionId: 'publications',
    iconName: 'book-open',
  },
  {
    id: 'stat-team',
    label: 'Students Produced',
    targetNumber: 650,
    suffix: '+',
    description: 'Total Internships and Bootcamp participated students',
    sectionId: 'people',
    iconName: 'users',
  },
  {
    id: 'stat-achieve',
    label: 'Achievements',
    targetNumber: 1,
    suffix: '+',
    description: 'National Achievements in Competitions',
    sectionId: 'achievements',
    iconName: 'award',
  },
  {
    id: 'stat-workstations',
    label: 'Avionics Workstations',
    targetNumber: 28,
    suffix: '',
    description: 'Equipped hardware benches in modern DE Lab Akampat',
    sectionId: 'library',
    iconName: 'cpu',
  },
  {
    id: 'stat-projects',
    label: 'Funded Projects & Grants',
    targetNumber: 12,
    suffix: '+',
    description: 'Sponsored by MeitY, DST & State Govt. initiatives',
    sectionId: 'achievements',
    iconName: 'briefcase',
  },
]
