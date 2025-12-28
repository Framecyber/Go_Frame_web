import { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    "พื้นฐานหมากล้อม",
    "เทคนิคการเล่น",
    "การคิดเชิงกลยุทธ์",
    "หมากล้อมและการพัฒนาการเด็ก",
  ]

  const articles = [
    {
      id: 1,
      title: "พื้นฐานการวางหิน สำหรับผู้เริ่มต้น",
      description: "เรียนรู้วิธีวางหินที่ถูกต้อง เข้าใจพื้นฐานของเกม",
      date: "วันที่: 12 มิถุนายน 2567",
      image: "/children-playing-go.png",
      category: "พื้นฐานหมากล้อม",
    },
    {
      id: 2,
      title: "หมากล้อมและการพัฒนาการ สมองในเด็กอย่างไร",
      description: "เน้นการสังเกต การแก้ปัญหา และการคิดเชิงกลยุทธ์",
      date: "วันที่: 28 มิถุนายน 2567",
      image: "/asian-teacher-and-young-student-playing-go-baduk-t.jpg",
      category: "หมากล้อมและการพัฒนาการเด็ก",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      image: "/children-playing-go.png",
      caption: "ห้องเรียน",
    },
    {
      id: 2,
      image: "/intermediate-go.png",
      caption: "กิจกรรมพิเศษ",
    },
    {
      id: 3,
      image: "/advanced-go.png",
      caption: "ค่าย / Workshop",
    },
    {
      id: 4,
      image: "/children-playing-go.png",
      caption: "ค่าย / Workshop",
    },
  ]

  const testimonials = [
    {
      quote: "บุตรหลานได้พัฒนาการคิดเชิงหลักการ การวางแผน และการคิดเชิงกลยุทธ์",
      author: "นักเรียน อายุ 8 & ผู้ปกครอง",
    },
    {
      quote: "ชอบบรรยากาศการเรียนที่ยืดหยุ่น บรรยากาศการเรียนสนุกและดี เด็กๆ เรียนรู้ได้ดี",
      author: "นักเรียน",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  บทความ & ความรู้เกี่ยวกับหมากล้อม
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  เรียนรู้หลักการพื้นฐาน กลยุทธ์ และปรัชญาหมากล้อม 
                  เพื่อพัฒนาทักษะและการคิดอย่างเป็นระบบ ในบรรยากาศการเรียนรู้อย่างลึกซึ้ง
                </p>
              </div>
              <div className="relative">
                <img
                  src="/go-books-stones.png"
                  alt="หมากล้อมและหนังสือ"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-secondary border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                className={activeFilter === "all" ? "bg-primary text-primary-foreground" : ""}
                onClick={() => setActiveFilter("all")}
              >
                ทั้งหมด
              </Button>
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={activeFilter === filter ? "bg-primary text-primary-foreground" : ""}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <Link to={`/news/${article.id}`}>
                      <Button variant="ghost" className="p-0 text-primary hover:text-accent">
                        อ่านเพิ่มเติม <span className="ml-1">{'>'}</span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Activity Gallery Section - Large Image */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  แกลเลอรี่กิจกรรม
                </h2>
                <p className="text-lg text-muted-foreground">
                  บรรยากาศการเรียนหมากล้อม ที่เต็มไปด้วยความสนุกและความดึงดูดใจ
                </p>
              </div>
              <div className="relative">
                <img
                  src="/asian-teacher-and-young-student-playing-go-baduk-t.jpg"
                  alt="กิจกรรมการเรียนหมากล้อม"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Activity Gallery Grid Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                แกลเลอรี่กิจกรรม
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {galleryImages.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm font-medium text-foreground">{item.caption}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                เสียงจากผู้เรียนและผู้ปกครอง
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="p-8">
                    <div className="mb-4">
                      <span className="text-6xl text-primary/20 leading-none">"</span>
                    </div>
                    <p className="text-lg text-foreground mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <p className="text-sm text-muted-foreground">{testimonial.author}</p>
                  </Card>
                ))}
              </div>
              <div className="mt-12 flex justify-end">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                  <div className="w-6 h-6 rounded-full bg-primary/40"></div>
                  <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

