import { getImageUrl } from "@/utils/getImageUrl"

export function WhyUsSection() {
  return (
    <section id="courses" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <h2 className="text-3xl font-semibold leading-tight text-[#3b352d]">
            สถาบันสอนหมากล้อมสำหรับทุกวัย
          </h2>
          <p className="text-base leading-relaxed text-[#5a5349]">
            สถาบันสอนหมากล้อมเพื่อการคิดอย่างเป็นระบบ
          </p>
          <ul className="space-y-3 text-[#4a433a]">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#516b5c]" aria-hidden />
              <span>ใช้หมากล้อมเป็นเครื่องมือพัฒนาความคิด</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#516b5c]" aria-hidden />
              <span>เหมาะกับเด็ก นักเรียน ผู้ใหญ่ และองค์กร</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#516b5c]" aria-hidden />
              <span>หยืดยุ่นตามไลฟ์สไตล์ของผู้เรียน</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#516b5c]" aria-hidden />
              <span>เรียนได้ทั้ง online และ onsite</span>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#e1d9cf] bg-[#f9f4ec] shadow-md flex items-center justify-center p-6">
          <img
            src={getImageUrl("teach1.png")}
            alt="ไอคอนสถาบัน"
            className="h-full w-full object-cover"
          /> 
        </div>
      </div>
    </section>
  )
}