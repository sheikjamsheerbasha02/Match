import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-primary">NikahMatch</h3>
                        <p className="text-sm text-muted-foreground">
                            Connecting hearts with faith and tradition. The premier matchmaking service for Muslims.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-primary">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-primary">Facebook</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} NikahMatch. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
