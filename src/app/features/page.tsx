import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Features } from "@/components/features/Features"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Features | Muslim Match",
    description: "Discover the features that make Muslim Match the premier choice for finding your spouse.",
}

export default function FeaturesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <div className="py-12 text-center bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold text-primary mb-4">Platform Features</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Designed with privacy, safety, and effectiveness in mind.
                        </p>
                    </div>
                </div>
                <Features />
            </main>
            <Footer />
        </div>
    )
}
