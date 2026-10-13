import { useState } from 'react'
import { SectionHeader } from '../common/SectionHeader'
import { PersonCard } from './PersonCard'
import { PersonSkeleton } from '../common/SkeletonCard'
import type { Person, PersonCategory } from '../../types'

interface PeopleSectionProps {
  people: Person[]
  isLoading?: boolean
}

export const PeopleSection = ({ people, isLoading }: PeopleSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | PersonCategory
  >('All')

  const categories: ('All' | PersonCategory)[] = [
    'All',
    'Faculty & Mentors',
    'Interns',
  ]

  const filteredPeople =
    selectedCategory === 'All'
      ? people
      : people.filter((p) => p.category === selectedCategory)

  return (
    <section id="people" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FACULTY & RESEARCH TEAM"
          title="The Minds Behind DE Lab"
          subtitle="A multidisciplinary team of drone avionics scientists, embedded system architects, and technical specialists shaping aerospace innovation at NIELIT Imphal."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-blue-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* People Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <PersonSkeleton key={i} />
            ))}
          </div>
        ) : filteredPeople.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <h4 className="text-sm font-bold text-slate-800">
              No Members Found
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              No team records found in this category. Please visit regularly for updated information.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {filteredPeople.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
