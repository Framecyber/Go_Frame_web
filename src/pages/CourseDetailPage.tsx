import { useParams, Link } from "react-router-dom"
import { CourseCard } from "@/components/ui/course-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

const courses = [
  { slug: "9x9", title: "9x9" },
  { slug: "13x13", title: "13x13" },
  { slug: "8-kyu", title: "8 kyu" },
  { slug: "7-kyu", title: "7 kyu" },
  { slug: "6-kyu", title: "6 kyu" },
  { slug: "5-kyu", title: "5 kyu" },
  { slug: "4-kyu", title: "4 kyu" },
  { slug: "3-kyu", title: "3 kyu" },
  { slug: "2-kyu", title: "2 kyu" },
  { slug: "1-kyu", title: "1 kyu" },
  { slug: "1-dan", title: "1 dan" },
  { slug: "2-dan", title: "2 dan" },
  { slug: "3-dan", title: "3 dan" },
  { slug: "4-dan", title: "4 dan" },
]

export function CourseDetailPage() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)

  if (!course) {
    return (
      <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
        <Header />
        <main>
          <PageTemplate title="ไม่พบหลักสูตร" subtitle="หลักสูตรที่ขอไม่อยู่ในระบบ">
            <div className="mx-auto max-w-3xl px-4 py-8">
              <h1 className="text-xl font-semibold">ไม่พบหลักสูตร</h1>
              <p className="mt-3">หลักสูตรที่ขอไม่อยู่ในระบบ</p>
              <Link to="/courses" className="mt-4 inline-block text-sm text-[#15636b]">กลับไปหน้าหลักสูตร</Link>
            </div>
          </PageTemplate>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate title={`หลักสูตร ${course.title}`} subtitle={`รายละเอียดหลักสูตร ${course.title}`} image="/asian-teacher-and-young-student-playing-go-baduk-t.jpg">
          <div className="mx-auto max-w-3xl px-4 py-8">
            <Link to="/courses" className="text-sm text-[#15636b]">← กลับไปหน้าหลักสูตร</Link>

            <div className="mt-4">
              <CourseCard title={course.title} subtitle={`หลักสูตร ${course.title}`} price={`3,600 บาท`} />

              <section className="mt-6 rounded-lg border border-[#e7dfd4] bg-white p-4">
                <h2 className="mb-2 text-lg font-semibold">รายละเอียดหลักสูตร</h2>
                <p className="text-sm text-[#5a534a]">หลักสูตรนี้ออกแบบมาเพื่อพัฒนาทักษะการเล่นโกะระดับ {course.title}. ประกอบด้วยการบรรยาย, การฝึกปฏิบัติ และแบบฝึกหัด.</p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="text-2xl font-bold text-[#1f6f4f]">3,600 บาท</div>
                  <button className="rounded bg-[#15636b] px-4 py-2 text-white">สมัครเลย</button>
                </div>
              </section>
            </div>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default CourseDetailPage
