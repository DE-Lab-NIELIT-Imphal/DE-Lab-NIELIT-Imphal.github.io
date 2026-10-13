export const StatSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs animate-pulse flex flex-col justify-between">
      <div className="h-3 w-12 bg-slate-100 rounded ml-auto mb-3" />
      <div className="h-8 w-20 bg-slate-200 rounded mb-2" />
      <div className="h-4 w-28 bg-slate-200 rounded mb-1" />
      <div className="h-3 w-36 bg-slate-100 rounded" />
    </div>
  )
}

export const AnnouncementSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm animate-pulse">
      <div className="flex items-center justify-between mb-3">
        <div className="h-5 w-20 bg-slate-200 rounded-full" />
        <div className="h-4 w-24 bg-slate-200 rounded" />
      </div>
      <div className="h-5 w-full bg-slate-200 rounded mb-2" />
      <div className="h-4 w-5/6 bg-slate-100 rounded mb-2" />
      <div className="h-4 w-2/3 bg-slate-100 rounded" />
    </div>
  )
}

export const PersonSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm animate-pulse flex flex-col items-center text-center">
      <div className="w-28 h-28 bg-slate-200 rounded-full mb-4" />
      <div className="h-5 w-32 bg-slate-200 rounded mb-2" />
      <div className="h-4 w-40 bg-slate-200 rounded mb-3" />
      <div className="h-3 w-48 bg-slate-100 rounded mb-2" />
      <div className="h-3 w-40 bg-slate-100 rounded" />
    </div>
  )
}

export const PublicationSkeleton = () => {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm animate-pulse">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-5 w-16 bg-slate-200 rounded" />
        <div className="h-4 w-12 bg-slate-200 rounded" />
      </div>
      <div className="h-5 w-full bg-slate-200 rounded mb-2" />
      <div className="h-4 w-3/4 bg-slate-100 rounded mb-2" />
      <div className="h-3 w-1/2 bg-slate-100 rounded" />
    </div>
  )
}

export const GallerySkeleton = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm animate-pulse">
      <div className="w-full aspect-[4/3] bg-slate-200" />
      <div className="p-4">
        <div className="h-4 w-3/4 bg-slate-200 rounded mb-2" />
        <div className="h-3 w-1/2 bg-slate-100 rounded" />
      </div>
    </div>
  )
}

export const CarouselSkeleton = () => {
  return (
    <div className="w-full aspect-[16/8] sm:aspect-[16/7] bg-slate-200 rounded-2xl animate-pulse flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-slate-300" />
    </div>
  )
}
