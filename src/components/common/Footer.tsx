import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, ExternalLink, ShieldCheck, FileText } from 'lucide-react'
import { PrivacyPolicyModal } from '../legal/PrivacyPolicyModal'
import { TermsConditionsModal } from '../legal/TermsConditionsModal'

export const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="NIELIT Imphal DE Lab Logo"
                className="h-12 w-auto object-contain"
              />
              <h3 className="text-lg font-extrabold text-slate-900 font-heading">
                Drone Electronics Lab
              </h3>
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              Center of Excellence for research, prototyping, and workforce
              skilling in Unmanned Aerial Vehicle (UAV) avionics, embedded flight
              controllers, and autonomous aerial robotics.
            </p>
            <div className="text-xs sm:text-sm text-slate-700 pt-2 font-semibold">
              Affiliated to NIELIT Imphal &bull; MeitY, Govt. of India
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 mb-4 font-heading">
              Explore Lab
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
              <li>
                <a href="#about" className="hover:text-blue-900 transition-colors">
                  About DE Lab
                </a>
              </li>
              <li>
                <Link to="/announcements" className="hover:text-blue-900 transition-colors">
                  Circulars & Announcements
                </Link>
              </li>
              <li>
                <a href="#people" className="hover:text-blue-900 transition-colors">
                  Faculty & Researchers
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-blue-900 transition-colors">
                  Publications & Patents
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-blue-900 transition-colors">
                  Grants & Achievements
                </a>
              </li>
              <li>
                <Link to="/library" className="hover:text-blue-900 transition-colors">
                  Photo Library & Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 mb-4 font-heading">
              Contact & Location
            </h4>
            <ul className="space-y-3.5 text-sm font-medium text-slate-700">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-1" />
                <span className="leading-relaxed">
                  National Institute of Electronics & Information Technology
                  (NIELIT) Imphal, Akampat, Post Box No. 104, Imphal - 795001,
                  Manipur
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-700 shrink-0" />
                <a href="mailto:droneelectronics9@gmail.com" className="hover:text-blue-900 font-bold transition-colors">
                  droneelectronics9@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Institutional Links & Compliance */}
          <div>
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-900 mb-4 font-heading">
              Institutional Links
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-700">
              <li>
                <a
                  href="https://nielit.gov.in/imphal/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-900 transition-colors"
                >
                  <span>NIELIT Imphal Main Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.meity.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-900 transition-colors"
                >
                  <span>MeitY, Government of India</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://digitalsky.dgca.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-blue-900 transition-colors"
                >
                  <span>DigitalSky (DGCA Drone Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-900 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-blue-700" /> Privacy Policy
              </button>
              <span className="text-slate-300">&bull;</span>
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-900 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-blue-700" /> Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-medium text-slate-600 gap-3">
          <p>
            &copy; {new Date().getFullYear()} Drone Electronics Laboratory (DE
            Lab), NIELIT Imphal. All Rights Reserved.
          </p>
          <p className="text-slate-600 font-semibold">
            Designed for Excellence in UAV Avionics & Autonomous Systems
          </p>
        </div>
      </div>

      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
      <TermsConditionsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />
    </footer>
  )
}
