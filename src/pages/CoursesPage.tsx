import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"
import { CourseCard } from "@/components/ui/course-card"

const courses = [
  { slug: "9x9", title: "9x9", img: "/9x9.jpg" },
  { slug: "13x13", title: "13x13", img: "/13x13.jpg" },
  { slug: "8-kyu", title: "8 kyu", img: "/8.jpg" },
  { slug: "7-kyu", title: "7 kyu", img: "/7.jpg" },
  { slug: "6-kyu", title: "6 kyu", img: "/6.jpg" },
  { slug: "5-kyu", title: "5 kyu", img: "/5.jpg" },
  { slug: "4-kyu", title: "4 kyu", img: "/4.jpg" },
  { slug: "3-kyu", title: "3 kyu", img: "/3.jpg" },
  { slug: "2-kyu", title: "2 kyu", img: "/2.jpg" },
  { slug: "1-kyu", title: "1 kyu", img: "/1.jpg" },
  { slug: "1-dan", title: "1 dan", img: "/1d.jpg" },
  { slug: "2-dan", title: "2 dan", img: "/2d.jpg" },
  { slug: "3-dan", title: "3 dan", img: "/3d.jpg" },
  { slug: "4-dan", title: "4 dan", img: "/4d.jpg" },
]

export function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main className="space-y-0">
        <PageTemplate
          title="หลักสูตร / ราคา"
          subtitle="เลือกหลักสูตรที่เหมาะกับคุณหรือบุตรหลาน"
          image="public\course_page.jpg"
          icons={[{ label: "หลักสูตร" }, { label: "ราคา" }, { label: "สมัคร" }]}
        >
          <div className="px-2">
            <h1 className="mb-4 text-2xl font-bold">หลักสูตร Go</h1>

            <p className="mb-6 text-sm text-[#5a534a]">เลือกหลักสูตรที่ต้องการดูรายละเอียดและสมัคร</p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {courses.map((c) => (
                <CourseCard
                  key={c.slug}
                  title={c.title}
                  subtitle={`หลักสูตร ${c.title}`}
                  price={`3,600 บาท`}
                  to={`/courses/${c.slug}`}
                >
                  {/* Render image at top of card */}
                  <div className="h-36 w-full bg-[#f3efe8] overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                </CourseCard>
              ))}
            </div>

            <section className="mt-8">
              <h2 className="mb-3 text-lg font-semibold">บริการอื่น ๆ</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CourseCard title="Comment Game" subtitle="กิจกรรมฝึกเล่น" to="/comment-game" />
                <CourseCard title="Qualify Dan" subtitle="การทดสอบวัดระดับดาน" to="/qualify-dan" />
                <CourseCard title="Verify Dan" subtitle="การรับรองดาน" to="/verify-dan" />
              </div>
            </section>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default CoursesPage
