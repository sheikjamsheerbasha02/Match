import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ForumCard } from "@/components/features/ForumCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCirclePlus } from "lucide-react"

import { FORUM_TOPICS } from "@/lib/mock-data"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Community Forum | Muslim Match",
    description: "Join the conversation, share experiences, and seek advice from our community.",
}

export default function CommunityPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-accent/30 py-8">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-primary">Community Forum</h1>
                            <p className="text-muted-foreground">Connect, share experiences, and seek advice from the community.</p>
                        </div>
                        <Button className="gap-2">
                            <MessageCirclePlus className="h-4 w-4" />
                            New Discussion
                        </Button>
                    </div>

                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                        <Input placeholder="Search discussions..." className="md:max-w-sm" />
                        <Select>
                            <SelectTrigger className="md:w-[180px]">
                                <SelectValue placeholder="All Categories" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="advice">Advice</SelectItem>
                                <SelectItem value="islamic">Islamic Guidance</SelectItem>
                                <SelectItem value="success">Success Stories</SelectItem>
                                <SelectItem value="support">Support</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-4">
                        {FORUM_TOPICS.map((topic) => (
                            <ForumCard key={topic.id} {...topic} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
