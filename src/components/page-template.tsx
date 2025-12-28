import React from "react"

interface IconItem {
  label: string
  href?: string
}

interface PageTemplateProps {
  title: string
  subtitle?: string
  image?: string
  icons?: IconItem[]
  children?: React.ReactNode
}

export function PageTemplate({ title, subtitle, image, icons = [], children }: PageTemplateProps) {
  return (
    <div className="space-y-14">
      <section className="py-16 bg-[#f6f1ea]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-3 text-base font-bold text-[#7b756c]">เรียนหมากล้อมอย่างเป็นระบบ</p>
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-[#2f2a23]">{title}</h1>
              {subtitle && (
                <p className="text-xl text-[#5a534a] mb-6 leading-relaxed font-bold">{subtitle}</p>
              )}

              <div className="flex items-center gap-4">
                <button className="rounded bg-[#3f593f] px-5 py-3 text-white font-semibold">สมัครเรียน</button>
                <button className="rounded border-2 border-[#d6cec2] bg-white px-5 py-3 font-semibold">ดูหลักสูตร</button>
              </div>
            </div>

            <div className="relative">
              <img
                src={image ?? "/asian-teacher-and-young-student-playing-go-baduk-t.jpg"}
                alt={title}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Icon navigation row */}
      {icons.length > 0 && (
        <section className="py-6 bg-white border-t border-b border-[#e8e0d6]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex justify-between gap-6">
              {icons.map((ic, idx) => (
                <a key={idx} href={ic.href ?? "#"} className="flex flex-col items-center gap-2 text-center text-sm text-[#6e665c]">
                  <div className="h-12 w-12 rounded-full border-2 border-[#efe8df] bg-white flex items-center justify-center">●</div>
                  <span>{ic.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          {children}
        </div>
      </section>
    </div>
  )
}

export default PageTemplate
