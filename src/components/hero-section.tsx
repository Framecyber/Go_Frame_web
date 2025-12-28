import { Button } from "@/components/ui/button"
import { getImageUrl } from "@/utils/getImageUrl"

export function HeroSection() {
  return (
    <section className="bg-[#f6f1ea]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:py-16 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xl uppercase tracking-[0.3em] text-[#516b5c]">เรียนหมากล้อมอย่างเป็นระบบที่</p>
          <h1 className="text-4xl font-semibold leading-tight text-[#3b352d] md:text-5xl">
            GO FRAME ACADEMY
          </h1>
          <h2 className="text-xl leading-relaxed text-[#5a5349]">
            สถาบันสอนหมากล้อม (โกะ)
            <br /> 
            ที่ปลูกฝังสติ สมดุล และปัญญา ผ่านหมากล้อมเพียงกระดานเดียว
          </h2>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="/Go_Frame_web/contact">
              <Button className="rounded-sm bg-[#516b5c] px-7 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#435545]">
                สมัครเรียน
              </Button>
            </a>
            <a
              href="/Go_Frame_web/courses"
              className="rounded-sm border border-[#cfc5b8] bg-white px-7 py-3 text-base font-semibold text-[#3f3a32] hover:bg-[#e9e2d8] inline-flex items-center"
            >
              ดูหลักสูตร <span className="ml-1">→</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-[#e1d9cf] bg-white shadow-md">
            <img
              src={getImageUrl("go_board_stone.png")}
              alt="กระดานหมากล้อมพร้อมหมากขาวดำ"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}