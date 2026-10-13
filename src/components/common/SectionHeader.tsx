interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-blue-900 rounded-full mt-4 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  )
}
