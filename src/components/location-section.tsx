import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="knowledge" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-4 pb-16 pt-6 lg:grid-cols-2">

        {/* ================= MAP SECTION ================= */}
        <div className="relative overflow-hidden rounded-lg border border-[#e1d9cf] bg-[#f7f2eb] shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(81,107,92,0.08),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(81,107,92,0.08),transparent_35%)]" />

          <div className="relative h-full min-h-[300px] w-full p-4">
            <div className="h-full w-full overflow-hidden rounded-lg border border-dashed border-[#cfc5b8] bg-white/70 backdrop-blur-sm">
              <iframe
                title="Go Frame Academy - Map"
                src="https://maps.google.com/maps?q=Go%20Frame%20Academy&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* ================= INFO SECTION ================= */}
        <div className="space-y-6 text-lg md:text-xl text-[#3f3a32]">

          {/* Location */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#516b5c] mb-2">
              ที่ตั้ง
            </h3>
            <p>
              หมู่บ้านคิวบิส1 เลขที่ 3 7 Soi Nonthaburi 48, Ta Sai,
              เมือง Nonthaburi 11000
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <img
              src="/phone.png"
              alt="phone icon"
              className="h-[120px] w-[120px] object-cover"
            />
            <span>Tel : 081-494-6926</span>
          </div>

          {/* LINE */}
          <div className="flex items-center gap-4">
            <img
              src="/line.png"
              alt="line icon"
              className="h-[120px] w-[120px] object-cover"
            />
            <span>LINE ID : @498tqxkn</span>
          </div>

          {/* Website */}
          <div className="flex items-center gap-4">
            <img
              src="/www.png"
              alt="website icon"
              className="h-[120px] w-[120px] object-cover"
            />
            <span>Website : GoFrameAcademy.com</span>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-4">
            <img
              src="/facebook.png"
              alt="facebook icon"
              className="h-[120px] w-[120px] object-cover"
            />
            <span>Facebook : Go Frame Academy</span>
          </div>

          {/* TikTok */}
          <div className="flex items-center gap-4">
            <img
              src="/tiktok.png"
              alt="tiktok icon"
              className="h-[120px] w-[120px] object-cover"
            />
            <span>Tiktok : Go Frame Academy</span>
          </div>

          {/* Button */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Go%20Frame%20Academy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-4 rounded-sm bg-[#516b5c] px-8 py-4 text-base md:text-lg font-semibold text-white shadow-sm hover:bg-[#435545]">
              ดูเส้นทาง
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
