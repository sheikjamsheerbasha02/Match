"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function Navbar() {
    const router = useRouter()
    const [user, setUser] = useState<{ name: string } | null>(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('user')
        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        router.push('/')
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">Match</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/about" className="transition-colors hover:text-primary">About</Link>
                    <Link href="/features" className="transition-colors hover:text-primary">Features</Link>
                    <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
                    <Link href="/community" className="transition-colors hover:text-primary">Community</Link>
                    <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
                    {user && (
                        <Link href="/matches" className="transition-colors hover:text-primary font-bold">Matches</Link>
                    )}
                </nav>

                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">Hi, {user.name}</span>
                            <Button variant="ghost" onClick={handleLogout}>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <>
                            <Button variant="ghost" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register">Get Started</Link>
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    )
}
