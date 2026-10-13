import { MapPin, Mail, Clock } from 'lucide-react'

export const ContactSecretariatInfo = () => {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5">
        <h3 className="text-xl font-extrabold text-slate-900 font-heading">
          Laboratory Contact
        </h3>

        <div className="space-y-4 text-sm sm:text-base text-slate-800 font-medium">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-800 shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-slate-900 font-bold">Address:</strong>
              Drone Electronics Lab (DE Lab), National Institute of
              Electronics &amp; Information Technology (NIELIT) Imphal,
              Akampat, Post Box No. 104, Imphal - 795001, Manipur, India
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-800 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-slate-900 font-bold">Email:</strong>
              <a
                href="mailto:droneelectronics9@gmail.com"
                className="text-blue-700 hover:underline cursor-pointer font-bold"
              >
                droneelectronics9@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-800 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-slate-900 font-bold">Office Hours:</strong>
              Monday – Friday: 9:00 AM – 5:30 PM IST
            </div>
          </div>
        </div>
      </div>

      {/* Campus Location Map Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-2 overflow-hidden shadow-xs">
        <iframe
          title="NIELIT Imphal Campus Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.355152504938!2d93.9608677!3d24.7831114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374926577484df2d%3A0xc3cfd61d1558bf2a!2sNIELIT%20Imphal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          className="w-full h-52 rounded-xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
