import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ProfileForm } from "@/components/features/ProfileForm"

export default function CreateProfilePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 bg-accent/30 py-12">
                <div className="container mx-auto max-w-3xl px-4">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-primary">Complete Your Profile</h1>
                        <p className="text-muted-foreground">
                            Share your details to help us find your perfect match in accordance with Islamic values.
                        </p>
                    </div>
                    <ProfileForm />
                </div>
            </main>
            <Footer />
        </div>
    )
}
