export const AboutFocusCards = () => {
  const focusAreas = [
    {
      title: 'Research & Technology Development',
      description:
        'Focusing on drone electronics, flight control systems, autonomous technologies, artificial intelligence, drone communication, and security through hands-on development.',
    },
    {
      title: '3D Printing & Additive Manufacturing',
      description:
        'Practical exposure to 3D design, digital modelling, material selection, rapid prototyping, and custom component fabrication for UAV engineering.',
    },
    {
      title: 'Training, Bootcamps & Awareness',
      description:
        'Regular technical workshops, bootcamps, and outreach initiatives nurturing a skilled workforce in drone systems and emerging technologies in the Northeast.',
    },
    {
      title: 'Our Hands-On Approach',
      description:
        'Grounded in "Learning by Doing, Innovation through Experimentation, and Technology for Society", bridging theoretical knowledge with working prototypes.',
    },
  ]

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
          Key Focus &amp; Technological Pillars
        </h3>
        <p className="text-sm font-medium text-slate-600 mt-1">
          Core domains driving indigenous UAV hardware, rapid prototyping, and capacity building
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {focusAreas.map((item) => (
          <div
            key={item.title}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col"
          >
            <h4 className="text-lg font-extrabold text-slate-900 mb-2 font-heading leading-snug">
              {item.title}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed mt-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
