import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

export function AboutHistoryPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate title="ประวัติสถาบัน" subtitle="เรื่องราวและจุดเริ่มต้นของสถาบัน" image="/academy_his.jpg" icons={[{ label: 'ประวัติ' }, { label: 'ทีมงาน' }] }>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-2xl font-bold mb-2">ประวัติสถาบัน</h1>
            <p className="text-sm text-[#5a534a] mb-6">เรื่องราวการก่อตั้ง แนวคิด และพันธกิจของสถาบัน</p>

            <section className="rounded-lg border border-[#e7dfd4] bg-white p-6">
              <h2 className="text-lg font-semibold mb-3">จุดเริ่มต้น</h2>
              <p className="text-sm text-[#5a534a]">เนื้อหาประวัติจะถูกวางที่นี่ — ปรับแต่งข้อความและรูปภาพตามต้องการ</p>
            </section>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default AboutHistoryPage
