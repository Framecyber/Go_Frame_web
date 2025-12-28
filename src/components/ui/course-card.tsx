import { Link } from "react-router-dom"

import { ReactNode } from "react"

type CourseCardProps = {
  title: string
  subtitle?: string
  price?: string
  to?: string
  children?: ReactNode
}

export function CourseCard({ title, subtitle, price, to, children }: CourseCardProps) {
  const content = (
    <div className="flex flex-col gap-0 rounded-lg border border-[#e7dfd4] bg-white p-0 shadow-sm overflow-hidden">
      {children}
      <div className="p-4">
        <div className="text-xl font-bold text-[#2f2b25]">{title}</div>
        {subtitle && <div className="text-base font-bold text-[#6b655d]">{subtitle}</div>}
        {price && <div className="mt-2 font-bold text-lg text-[#1f6f4f]">{price}</div>}
        <div className="mt-3 text-sm font-semibold text-[#6b655d]">Course includes lessons, exercises and certificate.</div>
      </div>
    </div>
  )

  if (to) {
    return (
      <Link to={to} className="block">
        {content}
      </Link>
    )
  }

  return content
}

export default CourseCard
