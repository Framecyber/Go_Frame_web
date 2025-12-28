import { Link } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

export function QualifyDanPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate title="การทดสอบวัดระดับดาน" subtitle="ข้อมูลการทดสอบและวิธีการสมัคร" image="/children-playing-go.png" icons={[{ label: 'การทดสอบ' }, { label: 'สมัคร' }] }>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="text-2xl font-bold">Qualify Dan</h1>
            <p className="mt-3 text-sm text-[#5a534a]">ข้อมูลการทดสอบเพื่อขอวัดระดับดาน</p>
            <section className="mt-6 rounded-lg border border-[#e7dfd4] bg-white p-4">
              <h2 className="text-lg font-semibold">รายละเอียดการทดสอบ</h2>
              <p className="mt-2 text-sm">ขั้นตอนการสมัคร ทดสอบ และประกาศผลสำหรับผู้สมัครสอบดาน</p>
              <div className="mt-4">
                <Link to="/courses" className="text-sm text-[#15636b]">กลับไปหน้าหลักสูตร</Link>
              </div>
            </section>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default QualifyDanPage
