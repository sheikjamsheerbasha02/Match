import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us | Muslim Match",
    description: "Learn more about our mission to connect hearts with faith and tradition.",
}

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold text-primary text-center">About Muslim Match</h1>
                    <p className="text-lg text-muted-foreground text-center">
                        Connecting hearts with faith and tradition.
                    </p>

                    <div className="prose dark:prose-invert mx-auto">
                        <p>
                            Muslim Match is dedicated to helping single Muslims find their perfect partner in a safe,
                            halal, and respectful environment. We understand the importance of compatibility not just
                            in personality, but in faith, values, and family expectations.
                        </p>
                        <p>
                            Our platform combines modern technology with traditional values to ensure that your
                            search for a spouse is dignified and effective. Whether you are looking for someone
                            from a specific sect, ethnicity, or profession, we provide the tools to help you
                            find your match.
                        </p>
                        <h3>Our Mission</h3>
                        <p>
                            To faciliate blessed unions that strengthen our community and uphold the values of our deen.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
