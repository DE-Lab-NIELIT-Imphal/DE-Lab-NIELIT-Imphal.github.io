import { SectionHeader } from '../common/SectionHeader'
import { AboutFocusCards } from './AboutFocusCards'
import { InstitutionalPartners } from './InstitutionalPartners'

export const AboutSection = () => {
  const coreObjectives = [
    {
      title: 'Research & Development',
      desc: 'Promote innovation in drone electronics, autonomous systems, artificial intelligence, embedded technologies, and additive manufacturing.',
    },
    {
      title: 'Skill Development',
      desc: 'Deliver practical, industry-oriented training programmes, courses, workshops, and bootcamps.',
    },
    {
      title: '3D Printing & Prototyping',
      desc: 'Encourage 3D design, additive manufacturing, rapid prototyping, material selection, and custom product development.',
    },
    {
      title: 'AI & Emerging Technologies',
      desc: 'Explore artificial intelligence, machine learning, computer vision, and advanced autonomous robotics.',
    },
    {
      title: 'Technology Awareness',
      desc: 'Conduct awareness programmes, field demonstrations, and outreach activities to introduce emerging technologies to students and communities.',
    },
    {
      title: 'Indigenous Innovation',
      desc: 'Encourage the design, development, and integration of locally developed Indian technological solutions.',
    },
    {
      title: 'Academic & Industry Collaboration',
      desc: 'Promote active partnerships with academic institutions, industries, researchers, and technology enthusiasts.',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/60 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ABOUT DE-LAB"
          title="Drone Electronics Lab (DE-Lab), NIELIT Imphal"
          subtitle="A dedicated research, development, and technology training facility focused on advancing Unmanned Aircraft Systems (UAS), drone electronics, artificial intelligence, and emerging technologies."
        />

        {/* Narrative & Vision/Mission Cards Grid (Image Removed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Lab Overview */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-blue-800 font-extrabold text-xs uppercase tracking-wider block mb-2">
                Genesis &amp; Institutional Mandate
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mb-4">
                Strengthening India&apos;s Drone &amp; UAS Capabilities
              </h3>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-4">
                Established under the <strong>SwaYaan – Capacity Building for Human Resource Development in Unmanned Aircraft Systems (UAS)</strong> project of the <strong>Ministry of Electronics and Information Technology (MeitY)</strong>, Government of India, the laboratory aims to strengthen national capabilities in drone technology through research, innovation, practical training, and workforce skill development.
              </p>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                Located at the <strong>NIELIT Imphal campus, Akampat, Imphal East, Manipur</strong>, DE-Lab provides an advanced ecosystem for students, researchers, industry professionals, and technology enthusiasts to explore, build, and experiment with indigenous technological solutions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Center of Excellence &bull; Akampat, Imphal East, Manipur</span>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-lg font-extrabold font-heading text-blue-900 mb-2">
                Our Mission
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                To advance research, innovation, and technical skill development in drone technology, artificial intelligence, 3D printing, and emerging technologies through practical learning, indigenous technology development, and collaborative initiatives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-lg font-extrabold font-heading text-blue-900 mb-2">
                Our Vision
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                To establish DE-Lab as a centre for technological innovation, research, and skill development, empowering students, researchers, and professionals to explore emerging technologies and contribute to India&apos;s growing technology ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Key Focus Areas (Research, 3D Printing, Training, Approach) */}
        <AboutFocusCards />

        {/* Objectives Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs mb-16">
          <div className="mb-6">
            <span className="text-blue-800 font-extrabold text-xs uppercase tracking-wider block mb-1">
              Core Strategic Goals
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Our Key Objectives
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreObjectives.map((obj) => (
              <div
                key={obj.title}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-100"
              >
                <div>
                  <h5 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1">
                    {obj.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Acknowledgments & Patrons */}
        <InstitutionalPartners />
      </div>
    </section>
  )
}
