import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

export function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate title="กิจกรรม & การแข่งขัน" subtitle="ข้อมูลกิจกรรม ค่าย และการแข่งขันที่จัดโดยสถาบัน" image="public\go_article_pages.jpg" icons={[{ label: 'กิจกรรม' }, { label: 'ปฏิทิน' }] }>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-2xl font-bold mb-2">กิจกรรม & การแข่งขัน</h1>
            <p className="text-sm text-[#5a534a] mb-6">กำหนดการค่าย การแข่งขัน และกิจกรรมส่งเสริมทักษะหมากล้อม</p>

            <section className="rounded-lg border border-[#e7dfd4] bg-white p-6">
              <h2 className="text-lg font-semibold mb-3">กิจกรรมที่กำลังจะมาถึง</h2>
              <p className="text-sm text-[#5a534a]">รายการกิจกรรมจะแสดงที่นี่ — อัปเดตรายละเอียดและรูปภาพได้ตามต้องการ</p>
            </section>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default ActivitiesPage
