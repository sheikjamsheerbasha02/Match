import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">NikahMatch</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/about" className="transition-colors hover:text-primary">About</Link>
                    <Link href="/features" className="transition-colors hover:text-primary">Features</Link>
                    <Link href="/pricing" className="transition-colors hover:text-primary">Pricing</Link>
                    <Link href="/community" className="transition-colors hover:text-primary">Community</Link>
                    <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" asChild>
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/register">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}
