import { Link } from "react-router-dom"

// QuickLinksSection.tsx

// 🔒 วงกลมขนาดเท่ากันทุกอัน
const CIRCLE_SIZE = "h-28 w-28"

const links = [
  { label: "หน้าหลัก", img: "/academy.png", to: "/about/history" },
  { label: "เกี่ยวกับเรา", img: "/about-us.png", to: "/about/history" },
  { label: "หลักสูตร/ราคา", img: "/lecture.png", to: "/courses" },

  // 👇 ไอคอนเล็กเฉพาะ 2 อันนี้
  { label: "ควบคุมการสอน", img: "/teach3.png", to: "/about/teaching", small: true },
  { label: "ร้านค้า", img: "/shop_.png", to: "/shop", small: true },

  { label: "บทความ", img: "/art.png", to: "/activities" },
  { label: "ติดต่อเรา", img: "/contact_.png", to: "/contact" },
  { label: "สมัครเรียน", img: "/enroollll.png", to: "/contact" },
]

export function QuickLinksSection() {
  return (
    <section className="border-y border-[#e0d7cd] bg-white/70">
      <div className="mx-auto flex max-w-full flex-nowrap justify-center items-center gap-6 overflow-x-auto px-4 py-10">
        {links.map(({ label, img, to, small }) => {
          // 🔽 ลดเฉพาะรูปด้านใน
          const imgSize = small ? "h-20 w-20" : "h-30 w-30"

          return (
            <Link
              key={label}
              to={to}
              className="group flex min-w-[120px] flex-col items-center gap-4 px-3 py-4 text-center font-semibold text-[#3f3a32] transition hover:scale-105"
            >
              {/* ✅ วงกลมขนาดเท่ากันหมด */}
              <span
                className={`flex ${CIRCLE_SIZE} items-center justify-center rounded-full border border-[#e2d8cc] bg-[#f7f1e9] shadow-sm transition group-hover:scale-110`}
              >
                {/* ✅ รูปเล็กเฉพาะบางอัน */}
                <img
                  src={img}
                  alt={label}
                  className={`${imgSize} object-contain`}
                  loading="lazy"
                />
              </span>

              <span className="text-sm leading-snug">{label}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
