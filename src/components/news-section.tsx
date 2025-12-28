import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const courses = [
  {
    title: "คอร์สเด็ก",
    description: "คอร์สเรียนสำหรับเด็กอายุ 6-12 ปี เน้นการเรียนรู้พื้นฐานและการพัฒนาทักษะการคิด",
    image: "/children-playing-go.png",
  },
  {
    title: "คอร์สระดับกลาง",
    description: "สำหรับผู้ที่มีพื้นฐานแล้ว เน้นการพัฒนากลยุทธ์และเทคนิคการเล่นที่ซับซ้อนขึ้น",
    image: "/intermediate-go.png",
  },
  {
    title: "คอร์สระดับสูง",
    description: "สำหรับผู้เล่นที่มีประสบการณ์ เน้นเทคนิคขั้นสูงและการแข่งขัน",
    image: "/advanced-go.png",
  },
]

export function NewsSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">ข่าวสาร & กิจกรรม</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{course.title}</h3>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">{course.description}</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-accent py-3 text-lg">
                  ดูคอร์ส <span className="ml-1">{'>'}</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
