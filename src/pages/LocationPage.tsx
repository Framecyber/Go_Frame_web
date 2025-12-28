import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationSection } from "@/components/location-section"
import PageTemplate from "@/components/page-template"

export function LocationPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main className="space-y-0">
        <PageTemplate
          title="สาขาและสถานที่เรียน"
          subtitle="ดูสถานที่เรียน รายละเอียด และตารางเรียนของแต่ละสาขา"
          image="/children-playing-go.png"
          icons={[
            { label: "แผนที่" },
            { label: "หลักสูตร" },
            { label: "กิจกรรม" },
            { label: "แหล่งความรู้" },
            { label: "ติดต่อเรา" },
          ]}
        >
          <LocationSection />
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}
