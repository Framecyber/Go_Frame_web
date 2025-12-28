import { Link } from "react-router-dom"
import { MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-[#d9d0c5] bg-[#f6f1ea]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10">
        <div className="flex flex-col items-start gap-4 text-[#3f3a32] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md">
              <img src="/logo.png" alt="GO FRAME ACADEMY" className="h-25 w-25 object-contain" />
            </div>
            <span className="text-base font-semibold tracking-tight">GO FRAME ACADEMY</span>
          </div>

          <Link to="/contact">
            <Button className="rounded-sm border border-[#cfc5b8] bg-white px-5 py-2 text-sm font-semibold text-[#3f3a32] shadow-sm hover:bg-[#e9e2d8]">
              ติดต่อเรา <span className="ml-1">→</span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-sm text-[#4a433a] sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#516b5c]" />
            <span>โทร : 081-234-5678</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-[#516b5c]" />
            <span>LINE : @goframe</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#516b5c]" />
            <span>หมู่บ้านคิวบิส1 เลขที่ 3 7 Soi Nonthaburi 48, Ta Sai, เมือง Nonthaburi 11000</span>
          </div>
        </div>

        <div className="flex justify-center gap-8 text-[#7a7266]">
          <Phone className="h-4 w-4" />
          <MessageCircle className="h-4 w-4" />
          <MapPin className="h-4 w-4" />
        </div>

        <div className="border-t border-[#e0d7cd] pt-4 text-center text-xs text-[#7a7266]">
          <p>© 2025 Go Frame Academy  . สงวนลิขสิทธิ์.</p>
        </div>
      </div>
    </footer>
  )
}
