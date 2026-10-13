interface PartnerItem {
  role: string
  name: string
  description: string
  tag: string
  image: string
  link?: string
}

export const InstitutionalPartners = () => {
  const partners: PartnerItem[] = [
    {
      role: 'Host Institution',
      name: 'NIELIT Imphal',
      image: '/images/nielit.jpg',
      description:
        'National Institute of Electronics & Information Technology, Imphal. Deepest gratitude for providing laboratory premises, academic mentorship, and world-class testing infrastructure.',
      tag: 'Autonomous Scientific Society',
      link: 'https://nielit.gov.in/imphal/',
    },
    {
      role: 'Research Initiative',
      name: 'Swaayan',
      image: '/images/swayaan.jpg',
      description:
        'Project Swaayan — Autonomous Aerial & Robotics Initiative. Heartfelt acknowledgment for driving autonomous navigation frameworks, advanced flight protocols, and joint UAV technical development.',
      tag: 'Autonomous UAV Systems',
    },
    {
      role: 'Sponsoring Ministry',
      name: 'MeitY',
      image: '/images/meity.jpg',
      description:
        'Ministry of Electronics & Information Technology, Government of India. Grateful acknowledgment for research grant funding, visionary guidance, and national policy support empowering indigenous drone innovation.',
      tag: 'Government of India',
      link: 'https://www.meity.gov.in/',
    },
  ]

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-900 font-heading">
          Institutional Acknowledgments &amp; Patrons
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          With sincere gratitude to our parent institution, sponsoring
          ministry, and project partners for their continuous guidance and
          support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-blue-300 transition-all flex flex-col justify-between items-center text-center group"
          >
            <div className="flex flex-col items-center w-full">
              {/* Circular Emblem Image Container (matches People cards) */}
              <div className="relative mb-4">
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-900/20 group-hover:border-blue-700 transition-colors bg-white shadow-xs p-3 flex items-center justify-center">
                  <img
                    src={partner.image}
                    alt={`${partner.name} Emblem`}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <span className="text-xs font-extrabold text-blue-800 uppercase tracking-wider block mb-1">
                {partner.role}
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors font-heading">
                {partner.name}
              </h4>
              <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed mb-4">
                {partner.description}
              </p>
            </div>

            <div className="w-full mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-semibold">
              <span>{partner.tag}</span>
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 hover:text-blue-900 cursor-pointer font-bold"
                >
                  Visit &rarr;
                </a>
              ) : (
                <span className="text-blue-900 font-bold">Technical Partner</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
