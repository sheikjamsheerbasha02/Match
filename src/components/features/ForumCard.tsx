"use client"

import { MessageCircle, Heart, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ForumCardProps {
    id: number
    title: string
    author: string
    category: string
    timeAgo: string
    replies: number
    likes: number
    excerpt: string
}

export function ForumCard({ title, author, category, timeAgo, replies, likes, excerpt }: ForumCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {category}
                        </span>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {timeAgo}
                        </div>
                    </div>
                    <CardTitle className="text-xl hover:text-primary cursor-pointer">{title}</CardTitle>
                    <CardDescription>by {author}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                {replies}
                            </div>
                            <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4" />
                                {likes}
                            </div>
                        </div>
                        <Button variant="ghost" size="sm">View</Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
