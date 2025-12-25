import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MatchCard } from "@/components/features/MatchCard"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { MOCK_MATCHES } from "@/lib/mock-data"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Discover Matches | Muslim Match",
    description: "Find your perfect match based on compatibility, values, and preferences.",
}

export default function MatchesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-accent/30 py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-primary">Discover Matches</h1>
                            <p className="text-muted-foreground">Find your partner based on your preferences.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Select>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Age" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="18-25">18 - 25</SelectItem>
                                    <SelectItem value="26-35">26 - 35</SelectItem>
                                    <SelectItem value="36-50">36 - 50</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[140px]">
                                    <SelectValue placeholder="Sect" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sunni">Sunni</SelectItem>
                                    <SelectItem value="shia">Shia</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline">More Filters</Button>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {MOCK_MATCHES.map((match) => (
                            <MatchCard key={match.id} {...match} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
