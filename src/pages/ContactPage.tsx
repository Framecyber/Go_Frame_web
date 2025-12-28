import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MapPin } from "lucide-react"
import { LocationSection } from "@/components/location-section"
import { getImageUrl } from "@/utils/getImageUrl"

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  ติดต่อเรา
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  มีคำถามเกี่ยวกับคอร์สเรียน สถาบัน หรือกิจกรรมต่างๆ? 
                  สอบถามข้อมูลเพิ่มเติมกับเราได้ ติดต่อเราผ่านช่องทางด้านล่าง
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">โทรศัพท์</p>
                      <p className="text-lg font-semibold text-foreground">081-494-6926</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 5.126 5.818 9.361 12 9.361 1.416 0 2.784-.215 4.062-.625l4.539 2.676c.405.237.926.12 1.201-.262.272-.384.202-.92-.163-1.218l-3.825-2.727C22.176 17.685 24 14.314 24 10.314"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Line</p>
                      <p className="text-lg font-semibold text-foreground">@goframeacademy</p>
                    </div>
                    <div className="w-40 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={getImageUrl("line_oa.jpg")}
                        alt="Line QR Code" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">ที่ตั้งของเรา</p>
                      <p className="text-lg font-semibold text-foreground">
                        หมู่บ้านคิวบิส1 เลขที่ 3 7 Soi Nonthaburi 48, Ta Sai, เมือง Nonthaburi 11000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={getImageUrl("contact_pages.jpg")}
                  alt="ครูและนักเรียนเล่นหมากล้อม"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <LocationSection />

        {/* Enrollment Form Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  กรอกข้อมูลเพื่อสมัครเรียน
                </h2>
                <p className="text-lg text-muted-foreground">
                  กรุณากรอกข้อมูลด้านล่างเพื่อสมัครเรียนกับเรา 
                  ทีมงานของเราจะติดต่อกลับเพื่อแนะนำขั้นตอนต่อไปให้คุณ
                </p>
              </div>
              
              <Card className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">แบบฟอร์มติดต่อ</h3>
                  <p className="text-muted-foreground">
                    กรอกข้อมูลด้านล่างเพื่อส่งข้อความถึงเรา แล้วทีมงานจะรีบติดต่อกลับไปโดยเร็วที่สุด
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="กรุณากรอกชื่อ-นามสกุล"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="กรุณากรอกอีเมล"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      ข้อความ
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="กรุณากรอกข้อความที่ต้องการติดต่อ"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground hover:bg-accent py-6 text-lg"
                  >
                    ส่งข้อมูล
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    ข้อมูลของคุณจะถูกเก็บเป็นความลับและใช้เพื่อการสมัครเรียนเท่านั้น
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}