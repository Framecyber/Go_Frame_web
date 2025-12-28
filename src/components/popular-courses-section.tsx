import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Clock } from "lucide-react"

const courses = [
  {
    title: "คอร์สพื้นฐานสำหรับผู้เริ่มต้น",
    description: "เรียนรู้กฎพื้นฐานและเทคนิคการเล่นหมากล้อมสำหรับผู้เริ่มต้น",
    duration: "12 สัปดาห์",
    students: "20 คน",
    icon: BookOpen,
  },
  {
    title: "คอร์สระดับกลาง",
    description: "พัฒนาทักษะการวางแผนและกลยุทธ์สำหรับผู้เล่นที่มีประสบการณ์",
    duration: "16 สัปดาห์",
    students: "15 คน",
    icon: Users,
  },
  {
    title: "คอร์สระดับสูง",
    description: "เทคนิคขั้นสูงและการแข่งขันสำหรับผู้เล่นระดับมืออาชีพ",
    duration: "20 สัปดาห์",
    students: "10 คน",
    icon: Clock,
  },
]

export function PopularCoursesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">คอร์สเรียนยอดนิยม</h2>
          <p className="text-muted-foreground text-lg">เลือกคอร์สที่เหมาะกับระดับของคุณ</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{course.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{course.description}</p>
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </span>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-accent">
                  ดูรายละเอียด
                </Button>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
