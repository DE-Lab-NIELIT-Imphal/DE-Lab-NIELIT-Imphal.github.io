import { useState } from 'react'
import { Mail, ExternalLink, Award } from 'lucide-react'
import type { Person } from '../../types'

interface PersonCardProps {
  person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
  const [imageError, setImageError] = useState(false)
  const isUnsplash = Boolean(
    person.imageUrl && person.imageUrl.toLowerCase().includes('unsplash.com')
  )
  const hasValidImage = Boolean(
    person.imageUrl &&
      person.imageUrl.trim() !== '' &&
      !isUnsplash &&
      !imageError
  )

  return (
    <article className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-900/20 group-hover:border-blue-700 transition-colors bg-slate-100 shadow-xs flex items-center justify-center">
          {hasValidImage ? (
            <img
              src={person.imageUrl}
              alt={person.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <img
              src="/images/default-avatar.svg"
              alt="Default Display Picture"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <span className="absolute bottom-0 right-0 p-1.5 rounded-full bg-blue-900 text-white shadow-xs">
          <Award className="w-3.5 h-3.5" />
        </span>
      </div>

      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors">
        {person.name}
      </h3>
      <p className="text-sm font-bold text-blue-700 mt-1">
        {person.role}
      </p>

      <span className="text-xs text-slate-700 font-semibold px-3 py-1 rounded-md bg-slate-100 mt-2 mb-3.5">
        {person.qualification}
      </span>

      <div className="w-full pt-3 border-t border-slate-100 text-left mt-auto">
        <p className="text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1">
          Research Domain:
        </p>
        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed line-clamp-2 mb-4">
          {person.researchFocus}
        </p>

        <div className="flex items-center justify-center gap-3 pt-2 border-t border-slate-50">
          <a
            href={`mailto:${person.email}`}
            className="p-1.5 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
            title={`Email ${person.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
          {person.scholarUrl && (
            <a
              href={person.scholarUrl}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer"
              title="Google Scholar Profile"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
