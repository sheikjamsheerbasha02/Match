"use client"

import { Shield, Heart, Users, Lock } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        name: "Halal Environment",
        description: "Our platform is designed with Islamic principles at its core, ensuring a respectful and modest environment.",
        icon: Heart,
    },
    {
        name: "Verified Profiles",
        description: "We strictly verify every user to ensure authenticity and safety for our community.",
        icon: Shield,
    },
    {
        name: "Family Involvement",
        description: "Optional Wali integration allows family members to be part of the matchmaking process.",
        icon: Users,
    },
    {
        name: "Privacy First",
        description: "Advanced privacy controls let you decide who sees your photos and profile details.",
        icon: Lock,
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function Features() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Why Choose Us?</h2>
                    <p className="text-muted-foreground">Built upon the foundations of trust and tradition.</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.name}
                            variants={item}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform hover:scale-110">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold">{feature.name}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
