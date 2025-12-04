"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl"
                >
                    Find Your <span className="text-secondary">Pious</span> Partner
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
                >
                    A matchmaking service tailored for Muslims who value tradition, faith, and family.
                    Start your journey to a blessed Matches today.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button size="lg" className="h-12 px-8 text-lg" asChild>
                        <Link href="/register">Create Profile</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-lg" asChild>
                        <Link href="/about">Learn More</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"
            />
        </section>
    )
}
