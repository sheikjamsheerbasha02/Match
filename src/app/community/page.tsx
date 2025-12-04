import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ForumCard } from "@/components/features/ForumCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCirclePlus } from "lucide-react"

const FORUM_TOPICS = [
    {
        id: 1,
        title: "Tips for First Meeting with Potential Match",
        author: "Amina K.",
        category: "Advice",
        timeAgo: "2 hours ago",
        replies: 24,
        likes: 45,
        excerpt: "Assalamu alaikum everyone! I have my first meeting coming up next week and I'm feeling nervous. What questions should I ask?"
    },
    {
        id: 2,
        title: "Importance of Family Involvement in Marriage Process",
        author: "Ibrahim M.",
        category: "Islamic Guidance",
        timeAgo: "5 hours ago",
        replies: 18,
        likes: 67,
        excerpt: "I wanted to share my thoughts on why involving family, especially the Wali, is crucial in the marriage process..."
    },
    {
        id: 3,
        title: "Success Story: Found My Match After 6 Months!",
        author: "Sarah A.",
        category: "Success Stories",
        timeAgo: "1 day ago",
        replies: 89,
        likes: 234,
        excerpt: "Alhamdulillah! I wanted to share my journey and give hope to everyone still searching. We got engaged last week!"
    },
    {
        id: 4,
        title: "Dealing with Rejection Gracefully",
        author: "Yusuf H.",
        category: "Support",
        timeAgo: "2 days ago",
        replies: 31,
        likes: 52,
        excerpt: "It's been tough lately. How do you all cope with rejection while staying positive in your search?"
    },
    {
        id: 5,
        title: "Balancing Career and Marriage Search",
        author: "Fatima R.",
        category: "Advice",
        timeAgo: "3 days ago",
        replies: 15,
        likes: 38,
        excerpt: "As a working professional, I'm finding it challenging to balance my career growth with actively searching for a partner..."
    },
]

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
