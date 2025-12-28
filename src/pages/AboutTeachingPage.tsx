import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

export function AboutTeachingPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate title="ควบคุมการสอน" subtitle="แนวทางและมาตรฐานการสอนของสถาบัน" image="/teacher1.jpg" icons={[{ label: 'แนวทาง' }, { label: 'ครู' }] }>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-2xl font-bold mb-2">ควบคุมการสอน</h1>
            <p className="text-sm text-[#5a534a] mb-6">แนวทางการสอน การประเมิน และมาตรฐานคุณภาพการเรียนการสอน</p>

            <section className="rounded-lg border border-[#e7dfd4] bg-white p-6">
              <h2 className="text-lg font-semibold mb-3">มาตรฐานการสอน</h2>
              <p className="text-sm text-[#5a534a]">รายละเอียดเกี่ยวกับกระบวนการสอนและการประเมินจะอยู่ที่นี่</p>
            </section>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default AboutTeachingPage
