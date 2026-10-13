import { useState, type FormEvent } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { SectionHeader } from '../common/SectionHeader'
import { ContactSecretariatInfo } from './ContactSecretariatInfo'
import { dataService } from '../../services/dataService'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    subject: 'General Inquiry',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.email || !formData.message) return

    setIsSubmitting(true)
    try {
      await dataService.submitContactForm(formData)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          fullName: '',
          email: '',
          organization: '',
          subject: 'General Inquiry',
          message: '',
        })
      }, 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Contact Drone Electronics Laboratory"
          subtitle="Inquire about collaborative UAV research, student internship programs, lab facility visits, or industrial consulting."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <ContactSecretariatInfo />

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900 font-heading mb-1">
              Send an Inquiry or Schedule a Lab Visit
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Our academic coordinators will respond within 2 business days.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
                <div className="text-xs">
                  <p className="font-bold text-sm">Thank you for your message!</p>
                  <p>Your inquiry has been received by DE Lab secretariat.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Dr. / Er. / Mr. / Ms."
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@institution.ac.in"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Institution / College
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      placeholder="University / Organization"
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                    >
                      Inquiry Category
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50 cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Internship / Training">
                        Student Internship / Training
                      </option>
                      <option value="Research Collaboration">
                        Research &amp; Grant Collaboration
                      </option>
                      <option value="Lab Visit Request">Lab Facility Visit</option>
                      <option value="Testing & Certification">
                        Drone Testing &amp; Calibration
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your requirements or research interests..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-blue-900 text-white hover:bg-blue-800 disabled:opacity-50 transition-colors shadow-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
