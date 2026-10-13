import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Compass } from 'lucide-react'
import { SEO } from '../components/common/SEO'

export const NotFoundPage = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <SEO
        title="404 - Page Not Found | DE Lab - NIELIT Imphal"
        description="The requested page could not be located on the Drone Electronics Laboratory portal."
      />

      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-xs">
        <div className="w-16 h-16 bg-blue-50 text-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <span className="text-4xl font-extrabold text-blue-900 font-heading block mb-2">
          404
        </span>

        <h1 className="text-xl font-bold text-slate-900 mb-2">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          The link you followed may be broken or the page may have been moved to another section.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold shadow-xs transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </main>
  )
}
