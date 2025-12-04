import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { MatchCard } from "@/components/features/MatchCard"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const MOCK_MATCHES = [
    {
        id: 1,
        name: "Sarah",
        age: 24,
        location: "London, UK",
        occupation: "Software Engineer",
        education: "Masters",
        sect: "Sunni",
    },
    {
        id: 2,
        name: "Aisha",
        age: 27,
        location: "Manchester, UK",
        occupation: "Doctor",
        education: "MD",
        sect: "Sunni",
    },
    {
        id: 3,
        name: "Fatima",
        age: 22,
        location: "Birmingham, UK",
        occupation: "Student",
        education: "Bachelors",
        sect: "Shia",
    },
    {
        id: 4,
        name: "Zainab",
        age: 29,
        location: "Leeds, UK",
        occupation: "Teacher",
        education: "Bachelors",
        sect: "Sunni",
    },
    {
        id: 5,
        name: "Mariam",
        age: 25,
        location: "London, UK",
        occupation: "Architect",
        education: "Masters",
        sect: "Sunni",
    },
    {
        id: 6,
        name: "Hana",
        age: 26,
        location: "Bristol, UK",
        occupation: "Designer",
        education: "Bachelors",
        sect: "Sunni",
    },
]

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
