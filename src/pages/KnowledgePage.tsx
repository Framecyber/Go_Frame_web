import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Link } from "react-router-dom"

// This is the SAME data we put in ArticleDetailPage.tsx
const allArticles = [
  {
    id: 1,
    slug: "go-life-lessons",
    title: "หมากล้อมสอนอะไรเราเกี่ยวกับชีวิต",
    category: "ปรัชญาชีวิต",
    readTime: "5 นาที",
    date: "10 มีนาคม 2567",
    author: "กองบรรณาธิการ",
    image: "/article1.jpg",
    excerpt: "หมากล้อมไม่ได้เป็นเพียงเกมแข่งขัน แต่ยังเป็นภาพสะท้อนของชีวิตที่สอนบทเรียนสำคัญหลายประการ",
  },
  {
    id: 2,
    slug: "losing-mindset",
    title: "แพ้หมากล้อมหนึ่งกระดาน แต่ชนะทั้งความคิด",
    category: "จิตวิทยา",
    readTime: "4 นาที",
    date: "12 มีนาคม 2567",
    author: "อาจารย์กวี",
    image: "/article2.jpg",
    excerpt: "การแพ้หมากล้อมหนึ่งกระดานอาจไม่ใช่ความสูญเสีย หากมันแลกมากับการเติบโตของความคิด",
  },
  {
    id: 3,
    slug: "patience-success",
    title: "ความอดทนบนกระดานหมากล้อม กับความสำเร็จในชีวิตจริง",
    category: "การพัฒนาตนเอง",
    readTime: "6 นาที",
    date: "14 มีนาคม 2567",
    author: "ทีมงานหมากล้อม",
    image: "/article3.jpg",
    excerpt: "สิ่งที่หมากล้อมมอบให้ผู้เล่นตั้งแต่ก้าวแรก ไม่ใช่กลยุทธ์ หากคือความอดทน",
  },
  {
    id: 4,
    slug: "slow-but-far",
    title: "เดินหมากช้า ๆ แต่ไปได้ไกล",
    category: "ปรัชญาชีวิต",
    readTime: "4 นาที",
    date: "16 มีนาคม 2567",
    author: "อาจารย์สมชาย",
    image: "/article4.jpg",
    excerpt: "การเดินหมากช้า ๆ อาจเป็นหนทางที่พาเราไปได้ไกลกว่าการรีบร้อน",
  },
  {
    id: 5,
    slug: "retreat-to-grow",
    title: "เมื่อการถอยคือก้าวสำคัญของการเติบโต",
    category: "กลยุทธ์",
    readTime: "5 นาที",
    date: "18 มีนาคม 2567",
    author: "ดร.วิชัย",
    image: "/article5.jpg",
    excerpt: "การถอยไม่ใช่ความพ่ายแพ้ แต่คือการเลือกเติบโตอย่างมีสติ",
  },
  {
    id: 6,
    slug: "butterfly-effect",
    title: "จากหมากหนึ่งเม็ด สู่การเปลี่ยนแปลงทั้งกระดาน",
    category: "มุมมอง",
    readTime: "4 นาที",
    date: "20 มีนาคม 2567",
    author: "อาจารย์นภา",
    image: "/article6.jpg",
    excerpt: "หมากหนึ่งเม็ดที่วางถูกที่ ถูกเวลา จะค่อย ๆ สร้างอิทธิพลและเปลี่ยนแปลงเกม",
  },
  {
    id: 7,
    slug: "long-term-thinking",
    title: "หมากล้อมคือเกมที่สอนให้คิดถึงผลลัพธ์ระยะยาว",
    category: "การวางแผน",
    readTime: "5 นาที",
    date: "22 มีนาคม 2567",
    author: "ทีมงานหมากล้อม",
    image: "/article1.jpg",
    excerpt: "บนกระดานหมากล้อม ทุกการตัดสินใจเชื่อมโยงกับอนาคต",
  },
  {
    id: 8,
    slug: "power-of-silence",
    title: "พลังความเงียบของกระดานหมากล้อม กับพลังของสมาธิ",
    category: "สมาธิ",
    readTime: "4 นาที",
    date: "24 มีนาคม 2567",
    author: "คุณสมาธิ",
    image: "/article2.jpg",
    excerpt: "ในความเงียบของกระดาน กลับเต็มไปด้วยพลังของสมาธิและการตื่นรู้",
  },
  {
    id: 9,
    slug: "mental-strength",
    title: "เล่นหมากล้อมอย่างไร ให้ได้ใจแข็งแรง",
    category: "จิตวิทยา",
    readTime: "5 นาที",
    date: "26 มีนาคม 2567",
    author: "อาจารย์กิตติ",
    image: "/article3.jpg",
    excerpt: "หมากล้อมไม่ใช่เพียงเกมวัดเชาวน์ปัญญา หากแต่เป็นสนามฝึกจิตใจอย่างลึกซึ้ง",
  },
  {
    id: 10,
    slug: "failure-as-teacher",
    title: "ความพ่ายแพ้จากหมากล้อมคือครูที่ดีที่สุด",
    category: "การเรียนรู้",
    readTime: "5 นาที",
    date: "28 มีนาคม 2567",
    author: "ดร.ประวิจิต",
    image: "/article4.jpg",
    excerpt: "ความพ่ายแพ้ในหมากล้อมไม่ใช่จุดสิ้นสุดของความสามารถ แต่คือจุดเริ่มต้นของการเรียนรู้ที่แท้จริง",
  },
  {
    id: 11,
    slug: "imperfection",
    title: "หมากล้อมคือการยอมรับความไม่สมบูรณ์แบบ",
    category: "ปรัชญาชีวิต",
    readTime: "4 นาที",
    date: "30 มีนาคม 2567",
    author: "กองบรรณาธิการ",
    image: "/article5.jpg",
    excerpt: "กระดานหมากล้อมไม่ใช่พื้นที่ของความสมบูรณ์แบบ หากเป็นพื้นที่ของการยอมรับความไม่สมบูรณ์แบบอย่างลึกซึ้ง",
  },
  {
    id: 12,
    slug: "balance-attack-defense",
    title: "หมากล้อมกับบทเรียนเรื่องความสมดุลระหว่างบุกและรับ",
    category: "กลยุทธ์",
    readTime: "5 นาที",
    date: "1 เมษายน 2567",
    author: "อาจารย์ศักดา",
    image: "/article6.jpg",
    excerpt: "การรู้จักบุกและรับอย่างพอดี คือหัวใจของการอยู่รอดและความสำเร็จ",
  }
]

export function KnowledgePage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-[#1a1a1a] mb-4">บทความหมากล้อม</h1>
            <p className="text-[#8b7d73]">ค้นหาความรู้และแนวคิดดีๆ จากกระดานหมากล้อม</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article) => (
              <Link key={article.id} to={`/articles/${article.slug}`} className="block group">
                <div className="flex flex-col h-full rounded-xl border border-[#e7dfd4] bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="h-48 overflow-hidden bg-[#f3efe8]">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-[#a89378] px-2 py-1 bg-[#f6f1ea] rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-[#8b7d73]">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2f2b25] mb-3 line-clamp-2 group-hover:text-[#516b5c] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-[#8b7d73] mb-4 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="pt-4 border-t border-[#f0ebe5] flex justify-between items-center text-xs font-bold text-[#8b7d73]">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default KnowledgePage