import { Hero } from "@/components/features/Hero"
import { Features } from "@/components/features/Features"
import { TierPricing } from "@/components/features/TierPricing"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <TierPricing />
      </main>
      <Footer />
    </div>
  )
}
