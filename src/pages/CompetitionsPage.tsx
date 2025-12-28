import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

const competitions = [
  {
    id: 1,
    title: "สนุกหมากล้อมประจำปี 2567",
    date: "15 ธันวาคม 2567",
    location: "สถาบัน Go Frame Academy",
    level: "ระดับชาติ",
    image: "/competition1.jpg",
    prize: "รางวัลรวม 100,000 บาท",
    participants: "200+ ผู้เข้าร่วม",
    status: "สิ้นสุด"
  },
  {
    id: 2,
    title: "ชิงแชมป์เยาวชนหมากล้อมเมืองไทย 2567",
    date: "10 มกราคม 2568",
    location: "กรุงเทพมหานคร",
    level: "ระดับชาติ",
    image: "/competition2.jpg",
    prize: "รางวัลรวม 150,000 บาท",
    participants: "300+ ผู้เข้าร่วม",
    status: "เร็วๆนี้"
  },
  {
    id: 3,
    title: "แข่งขันหมากล้อมระดับภูมิภาค ภาคเหนือ",
    date: "15 มกราคม 2568",
    location: "เชียงใหม่",
    level: "ระดับภูมิภาค",
    image: "/competition3.jpg",
    prize: "รางวัลรวม 80,000 บาท",
    participants: "150+ ผู้เข้าร่วม",
    status: "เร็วๆนี้"
  },
  {
    id: 4,
    title: "ค่ายฤดูร้อนหมากล้อม 2568",
    date: "1-15 มีนาคม 2568",
    location: "สถาบัน Go Frame Academy",
    level: "ระดับจังหวัด",
    image: "/competition4.jpg",
    prize: "โอกาสเรียนรู้ พบผู้เชี่ยวชาญ",
    participants: "100+ เยาวชน",
    status: "เร็วๆนี้"
  },
  {
    id: 5,
    title: "แข่งขันหมากล้อมระดับภูมิภาค ภาคกลาง",
    date: "20 มีนาคม 2568",
    location: "นครปฐม",
    level: "ระดับภูมิภาค",
    image: "/competition5.jpg",
    prize: "รางวัลรวม 80,000 บาท",
    participants: "150+ ผู้เข้าร่วม",
    status: "เร็วๆนี้"
  },
  {
    id: 6,
    title: "แข่งขันหมากล้อมระดับภูมิภาค ภาคใต้",
    date: "10 เมษายน 2568",
    location: "สุราษฎร์ธานี",
    level: "ระดับภูมิภาค",
    image: "/competition6.jpg",
    prize: "รางวัลรวม 80,000 บาท",
    participants: "120+ ผู้เข้าร่วม",
    status: "เร็วๆนี้"
  }
]

export function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate 
          title="งานแข่งหมากล้อม" 
          subtitle="ข้อมูลการแข่งขันหมากล้อมต่างๆทั่วประเทศและสิ่งที่คุณต้องรู้เพื่อเข้าร่วม" 
          image="go_competition_pages.jpg" 
          icons={[{ label: "แข่งขัน" }, { label: "ทั่วประเทศ" }]}
        >
          <div className="px-2">
            <h1 className="mb-4 text-4xl font-black">งานแข่งหมากล้อม</h1>
            <p className="mb-8 text-lg font-bold text-[#5a534a]">ร่วมเข้าแข่งขันหมากล้อมและทดสอบทักษะของคุณ</p>

            {/* Filter Buttons */}
            <div className="mb-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#6b5b47] px-5 py-3 text-white font-bold hover:bg-[#5a4a38] transition">
                ทั้งหมด
              </button>
              <button className="rounded-lg border-2 border-[#d6cec2] bg-white px-5 py-3 font-bold text-[#3f3a32] hover:bg-[#f5f0e8] transition">
                ระดับชาติ
              </button>
              <button className="rounded-lg border-2 border-[#d6cec2] bg-white px-5 py-3 font-bold text-[#3f3a32] hover:bg-[#f5f0e8] transition">
                ระดับภูมิภาค
              </button>
              <button className="rounded-lg border-2 border-[#d6cec2] bg-white px-5 py-3 font-bold text-[#3f3a32] hover:bg-[#f5f0e8] transition">
                ระดับจังหวัด
              </button>
            </div>

            {/* Competitions Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {competitions.map((comp) => (
                <div key={comp.id} className="block">
                  <div className="flex flex-col h-full rounded-lg border border-[#e7dfd4] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden bg-[#f3efe8]">
                      <img 
                        src={comp.image} 
                        alt={comp.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="flex gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#e8dfd4] text-xs font-bold text-[#a89378]">
                          {comp.level}
                        </span>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          comp.status === "สิ้นสุด" 
                            ? "bg-[#d4d4d4] text-[#666]" 
                            : "bg-[#516b5c] text-white"
                        }`}>
                          {comp.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#2f2b25] mb-3">{comp.title}</h3>
                      <div className="space-y-2 mb-4 flex-grow">
                        <div className="text-sm font-bold text-[#6b655d]">📅 {comp.date}</div>
                        <div className="text-sm font-bold text-[#6b655d]">📍 {comp.location}</div>
                        <div className="text-sm font-bold text-[#516b5c]">🏆 {comp.prize}</div>
                        <div className="text-sm font-bold text-[#8b7d73]">👥 {comp.participants}</div>
                      </div>
                      <button className="w-full rounded-lg bg-[#516b5c] px-4 py-2 text-sm font-bold text-white hover:bg-[#3f5345] transition">
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageTemplate>
      </main>
      <Footer />
    </div>
  )
}

export default CompetitionsPage
