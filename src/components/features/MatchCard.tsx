"use client"

import { MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface MatchCardProps {
    name: string
    age: number
    location: string
    occupation: string
    education: string
    sect: string
    imageUrl?: string
}

export function MatchCard({ name, age, location, occupation, education, sect, imageUrl }: MatchCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
        >
            <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <motion.div
                    className="aspect-[4/5] w-full bg-muted relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Placeholder for user image */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/10">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
                        ) : (
                            <span className="text-4xl font-serif text-primary/40">Photo</span>
                        )}
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute top-4 right-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur"
                    >
                        {sect}
                    </motion.div>
                </motion.div>
                <CardHeader className="p-4 pb-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-primary">{name}, {age}</h3>
                    </div>
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {location}
                    </div>
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        {occupation}
                    </div>
                    <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        {education}
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-2">
                    <Button className="w-full" variant="outline">View Profile</Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
