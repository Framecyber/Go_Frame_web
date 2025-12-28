import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuickLinksSection } from "@/components/quick-links-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ActivitiesSection } from "@/components/activities-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#3f3a32]">
      <Header />
      <main className="space-y-0">
        <HeroSection />
        <QuickLinksSection />
        <WhyUsSection />
        <ActivitiesSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  )
}
