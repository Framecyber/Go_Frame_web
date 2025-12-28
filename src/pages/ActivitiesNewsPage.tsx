import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import PageTemplate from "@/components/page-template"

const newsItems = [
  {
    id: 1,
    slug: "annual-tournament-2024",
    title: "สนุกไปกับการแข่งขันประจำปีสถาบัน 2567",
    date: "15 ธันวาคม 2567",
    author: "สถาบัน Go Frame Academy",
    image: "/news1.jpg",
    excerpt: "การแข่งขันประจำปีได้จัดขึ้นอย่างสำเร็จและมีผู้เข้าร่วมจำนวนมาก",
    category: "งานแข่งขัน",
    readTime: "5 นาที"
  },
  {
    id: 2,
    slug: "new-course-launch",
    title: "เปิดหลักสูตรใหม่: การฝึกสอนขั้นสูงสำหรับผู้มีประสบการณ์",
    date: "10 ธันวาคม 2567",
    author: "ทีมสอน Go Frame Academy",
    image: "/news2.jpg",
    excerpt: "สถาบันเปิดหลักสูตรใหม่เพื่อพัฒนาทักษะของผู้เล่นขั้นสูง",
    category: "ข่าวสาร",
    readTime: "4 นาที"
  },
  {
    id: 3,
    slug: "summer-camp-2024",
    title: "ค่ายฤดูร้อนหมากล้อม 2567 - สมัครเข้าร่วมตอนนี้",
    date: "5 ธันวาคม 2567",
    author: "ฝ่ายกิจกรรม",
    image: "/news3.jpg",
    excerpt: "เปิดรับสมัครค่ายฤดูร้อนเพื่อเพิ่มเติมทักษะการเล่นหมากล้อมแก่เยาวชน",
    category: "กิจกรรม",
    readTime: "3 นาที"
  },
  {
    id: 4,
    slug: "teacher-training",
    title: "การอบรมครูผู้สอนหมากล้อมระดับประเทศ",
    date: "1 ธันวาคม 2567",
    author: "ศูนย์อบรม",
    image: "/news4.jpg",
    excerpt: "สถาบันจัดการอบรมครูผู้สอนหมากล้อมเพื่อเพิ่มคุณภาพการศึกษา",
    category: "ข่าวสาร",
    readTime: "6 นาที"
  },
  {
    id: 5,
    slug: "youth-championship",
    title: "ชิงแชมป์หมากล้อมเยาวชนเมืองไทย 2567",
    date: "25 พฤศจิกายน 2567",
    author: "องค์การกีฬา",
    image: "/news5.jpg",
    excerpt: "การแข่งขันเยาวชนชิงแชมป์ประเทศเมืองไทยได้จัดขึ้นอย่างยิ่งใหญ่",
    category: "งานแข่งขัน",
    readTime: "7 นาที"
  },
  {
    id: 6,
    slug: "community-event",
    title: "งานวันกีฬาชุมชน: หมากล้อมสำหรับทุกคน",
    date: "20 พฤศจิกายน 2567",
    author: "ชุมชนท้องถิ่น",
    image: "/news6.jpg",
    excerpt: "จัดงานวันกีฬาเพื่อส่งเสริมหมากล้อมในชุมชนอย่างเป็นไปต่อเนื่อง",
    category: "กิจกรรม",
    readTime: "4 นาที"
  }
]

export function ActivitiesNewsPage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main>
        <PageTemplate 
          title="ข่าวกิจกรรม" 
          subtitle="ติดตามข่าวสารและกิจกรรมต่างๆจากสถาบัน Go Frame Academy" 
          image="activity_news.jpg" 
          icons={[{ label: "ข่าว" }, { label: "กิจกรรม" }]}
        >
          <div className="px-2">
            <h1 className="mb-4 text-4xl font-black">ข่าวกิจกรรม</h1>
            <p className="mb-8 text-lg font-bold text-[#5a534a]">ข่าวสารและกิจกรรมปกติของสถาบัน Go Frame Academy</p>

            {/* Filter Buttons */}
            <div className="mb-8 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#6b5b47] px-5 py-3 text-white font-bold hover:bg-[#5a4a38] transition">
                ทั้งหมด
              </button>
              <button className="rounded-lg border-2 border-[#d6cec2] bg-white px-5 py-3 font-bold text-[#3f3a32] hover:bg-[#f5f0e8] transition">
                ข่าวสาร
              </button>
              <button className="rounded-lg border-2 border-[#d6cec2] bg-white px-5 py-3 font-bold text-[#3f3a32] hover:bg-[#f5f0e8] transition">
                งานแข่งขัน
              </button>
              <button className="rounded-lg border-2 border-[#d6cec2] bg-white px-5 py-3 font-bold text-[#3f3a32] hover:bg-[#f5f0e8] transition">
                กิจกรรม
              </button>
            </div>

            {/* News Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {newsItems.map((news) => (
                <div key={news.id} className="block">
                  <div className="flex flex-col h-full rounded-lg border border-[#e7dfd4] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden bg-[#f3efe8]">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <div className="text-sm font-bold text-[#a89378] mb-2">{news.category}</div>
                      <h3 className="text-lg font-bold text-[#2f2b25] mb-3 line-clamp-2">{news.title}</h3>
                      <p className="text-sm text-[#6b655d] mb-4 flex-grow">{news.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs font-bold text-[#8b7d73]">
                        <span>👤 {news.author}</span>
                        <span>⏱ {news.readTime}</span>
                        <span>📅 {news.date}</span>
                      </div>
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

export default ActivitiesNewsPage
