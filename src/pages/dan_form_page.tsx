import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"
import { Button } from "@/components/ui/button"

export function DanFormPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate 
          title="แบบฟอร์มขึ้นดั้ง" 
          subtitle="ดาวน์โหลดแบบฟอร์มและส่งข้อมูลตามคำแนะนำ" 
          image="dan-form.jpg"
          icons={[{ label: "แบบฟอร์ม" }]}
        >
          <div className="px-2">
            <h1 className="mb-4 text-4xl font-black">แบบฟอร์มขึ้นดั้ง</h1>
            <p className="mb-8 text-lg font-bold text-[#5a534a]">คลิกปุ่มด้านล่างเพื่อเปิดแบบฟอร์มใน Google Drive</p>

            {/* Card Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a 
                href="https://drive.google.com/file/d/18wrqhbHDXMS4iGEdkabtoMAPAJP94FFP/view" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block"
              >
                <div className="flex flex-col gap-0 rounded-lg border border-[#e7dfd4] bg-white p-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-40 w-full bg-gradient-to-br from-[#e8dfd4] to-[#d6cec2] flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">📋</div>
                      <p className="text-base font-bold text-[#6b655d]">แบบฟอร์ม</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xl font-black text-[#2f2b25]">แบบฟอร์มขึ้นดั้ง</div>
                    <div className="text-base font-bold text-[#6b655d]">ดาวน์โหลดแบบฟอร์มและส่งคำขอ</div>
                    <div className="mt-3 text-base font-bold text-[#6b655d]">คลิกเพื่อเปิดไฟล์ PDF ในแท็บใหม่</div>
                    <div className="mt-4">
                      <Button className="w-full rounded-lg bg-[#516b5c] text-white px-4 py-3 text-base font-bold hover:bg-[#3f5345] transition">
                        เปิดแบบฟอร์ม →
                      </Button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default DanFormPage
