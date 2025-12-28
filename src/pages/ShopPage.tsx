import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"
import { CourseCard } from "@/components/ui/course-card"

export function ShopPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate title="ร้านค้า" subtitle="สั่งซื้ออุปกรณ์และหนังสือเกี่ยวกับหมากล้อม" image="public\shop.jpg" icons={[{ label: 'สินค้า' }, { label: 'ตะกร้า' }] }>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-2xl font-bold mb-2">ร้านค้า</h1>
            <p className="text-sm text-[#5a534a] mb-6">จำหน่ายกระดาน หิน หนังสือ และอุปกรณ์การฝึกสำหรับทุกวัย</p>

            <section className="rounded-lg border border-[#e7dfd4] bg-white p-6">
              <h2 className="text-lg font-semibold mb-3">สินค้าแนะนำ</h2>
              <p className="text-sm text-[#5a534a]">รายการสินค้าจะแสดงที่นี่ — คุณสามารถอัปเดตรูปภาพและรายละเอียดสินค้าได้ภายหลัง</p>
            </section>

            {/* Courses grid (copied from CoursesPage) */}
            <section className="mt-8">
              <h1 className="mb-4 text-4xl font-black">หลักสูตร go online</h1>
              <p className="mb-6 text-lg font-bold text-[#5a534a]">หลักสูตรออนไลน์ที่สามารถสมัครและเรียนผ่านเว็บ</p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { slug: "9x9", title: "9x9", img: "/9x9_online.jpg" },
                  { slug: "13x13", title: "13x13", img: "/13x13_online.jpg" },
                  { slug: "8-kyu", title: "8 kyu", img: "/8_online.jpg" },
                  { slug: "7-kyu", title: "7 kyu", img: "/7_online.jpg" },
                  { slug: "6-kyu", title: "6 kyu", img: "/6_online.jpg" },
                  { slug: "5-kyu", title: "5 kyu", img: "/5_online.jpg" },
                  { slug: "4-kyu", title: "4 kyu", img: "/4_online.jpg" },
                  { slug: "3-kyu", title: "3 kyu", img: "/3_online.jpg" },
                  { slug: "2-kyu", title: "2 kyu", img: "/2_online.jpg" },
                  { slug: "1-kyu", title: "1 kyu", img: "/1_online.jpg" },
                  { slug: "1-dan", title: "1 dan", img: "/1d_online.jpg" },
                  { slug: "mixed", title: "all kyu/dan", img: "/all_dan.jpg" },
                ].map((c) => (
                  <CourseCard key={c.slug} title={c.title} subtitle={`หลักสูตร ${c.title}`} price={c.slug === "mixed" ? "5,999 บาท" : "999 บาท"} to={`/courses/${c.slug}`}>
                  <div className="h-36 w-full bg-[#f3efe8] overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                  </CourseCard>
                ))}
              </div>
            </section>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default ShopPage
