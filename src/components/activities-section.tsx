import { Button } from "@/components/ui/button"
import { getImageUrl } from "@/utils/getImageUrl"

export function ActivitiesSection() {
  return (
    <section id="activities" className="bg-[#f6f1ea]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-[#3b352d]">กิจกรรม & การแข่งขัน</h2>
          <ul className="space-y-3 text-base text-[#4a433a]">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#516b5c]" aria-hidden />
              <span>เวิร์กร่วมหมากล้อมสนุก ๆ</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#516b5c]" aria-hidden />
              <span>กิจกรรมรับน้องขึ้นหมากล้อมมากมาย</span>
            </li>
          </ul>
          <Button className="rounded-sm border border-[#cfc5b8] bg-white px-6 py-3 text-sm font-semibold text-[#3f3a32] shadow-sm hover:bg-[#e9e2d8]">
            ดูภาพบรรยากาศ <span className="ml-1">→</span>
          </Button>
        </div>
        <div className="overflow-hidden rounded-lg border border-[#e1d9cf] bg-white shadow-md">
          <img
            src={getImageUrl("teach2.png")}
            alt="เด็กๆ เรียนหมากล้อมร่วมกัน"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}