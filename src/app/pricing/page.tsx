import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { TierPricing } from "@/components/features/TierPricing"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Pricing | Muslim Match",
    description: "Choose the plan that fits your journey.",
}

export default function PricingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="py-12 text-center bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold text-primary mb-4">Membership Plans</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Invest in your future with our flexible pricing options.
                        </p>
                    </div>
                </div>
                <TierPricing />
            </main>
            <Footer />
        </div>
    )
}
