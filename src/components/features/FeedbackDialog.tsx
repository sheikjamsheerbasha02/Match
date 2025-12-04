"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquare } from "lucide-react"

export function FeedbackDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    Give Feedback
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Share Your Feedback</DialogTitle>
                    <DialogDescription>
                        Help us improve NikahMatch. Your thoughts and suggestions matter to us.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name (Optional)
                        </label>
                        <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">
                            Category
                        </label>
                        <Select>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="feature">Feature Request</SelectItem>
                                <SelectItem value="bug">Bug Report</SelectItem>
                                <SelectItem value="improvement">Improvement</SelectItem>
                                <SelectItem value="general">General Feedback</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                            Your Feedback
                        </label>
                        <Textarea
                            id="message"
                            placeholder="Please share your thoughts, suggestions, or report any issues..."
                            className="min-h-[120px]"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Submit Feedback</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
