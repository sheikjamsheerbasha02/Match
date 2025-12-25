
import { Heart, Shield, Users, Lock } from "lucide-react"

export const FORUM_TOPICS = [
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

export const MOCK_MATCHES = [
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

export const FEATURES_DATA = [
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

export const TIERS_DATA = [
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
