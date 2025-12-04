import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
    {
        name: "Basic",
        price: "Free",
        description: "Essential features to get started.",
        features: ["Create a profile", "Browse limited profiles", "Basic compatibility matching", "Receive interest requests"],
        cta: "Get Started",
        variant: "outline" as const,
    },
    {
        name: "Premium",
        price: "$29/mo",
        description: "Unlock full access and communication.",
        features: ["Unlimited profile access", "Advanced compatibility algorithms", "Send & receive messages", "See who viewed your profile", "Priority support"],
        cta: "Go Premium",
        variant: "default" as const,
        popular: true,
    },
    {
        name: "Elite",
        price: "$99/mo",
        description: "Personalized matchmaking service.",
        features: ["All Premium benefits", "Dedicated personal matchmaker", "Exclusive event invitations", "Profile verification badge", "Family consultation sessions"],
        cta: "Join Elite",
        variant: "secondary" as const,
    },
]

export function TierPricing() {
    return (
        <section className="bg-accent/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Membership Tiers</h2>
                    <p className="text-muted-foreground">Choose the plan that fits your journey.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {tiers.map((tier) => (
                        <Card key={tier.name} className={`relative flex flex-col ${tier.popular ? 'border-secondary shadow-lg scale-105' : ''}`}>
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                                    Most Popular
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>{tier.name}</CardTitle>
                                <CardDescription>{tier.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="mb-6 text-3xl font-bold">{tier.price}</div>
                                <ul className="space-y-3">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm">
                                            <Check className="mt-0.5 h-4 w-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant={tier.variant}>
                                    {tier.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
