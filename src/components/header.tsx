import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#d6cec2] bg-[#f6f1ea]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 text-[#3c372f]">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg">
            <img src="/Go_Frame_web/logo.png" alt="GO FRAME ACADEMY" className="h-25 w-25 object-contain" />
          </div>
          <span className="text-xl font-black tracking-tight">
            GO FRAME ACADEMY
          </span>
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-10 text-base font-bold text-[#3f3a32] md:flex">
          <Link to="/" className="hover:text-[#516b5c] transition">
            หน้าแรก
          </Link>

          {/* Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#516b5c] transition font-bold">
              เกี่ยวกับเรา 
            </button>

          </div>

          <Link to="/courses" className="hover:text-[#516b5c] transition">
            หลักสูตร / ราคา
          </Link>

           {/* Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#516b5c] transition font-bold">
              ควบคุมการสอน
            </button>

          </div>

          <Link to="/shop" className="hover:text-[#516b5c] transition">
            ร้านค้า
          </Link>

            <Link to="/articles" className="hover:text-[#516b5c] transition">
            บทความ
          </Link>

            <Link to="/contact" className="hover:text-[#516b5c] transition">
            ติดต่อเรา
          </Link>

            <Link to="/contact" className="hover:text-[#516b5c] transition">
            สมัครเรียน
          </Link>

        </nav>


        {/* CTA */}
        <Link to="/contact">
          <Button className="rounded-lg border-2 border-[#cfc5b8] bg-white px-6 py-3 text-base font-bold text-[#3f3a32] shadow-md hover:bg-[#e9e2d8]">
            ติดต่อเรา →
          </Button>
        </Link>
      </div>
    </header>
  )
}
