"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function ProfileForm() {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                    <CardDescription>Tell us about yourself.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Date of Birth</label>
                        <Input type="date" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Gender</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Height</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select height" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5-0">5&apos; 0&quot;</SelectItem>
                                <SelectItem value="5-5">5&apos; 5&quot;</SelectItem>
                                <SelectItem value="6-0">6&apos; 0&quot;</SelectItem>
                                {/* Add more options */}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Marital Status</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="single">Single (Never Married)</SelectItem>
                                <SelectItem value="divorced">Divorced</SelectItem>
                                <SelectItem value="widowed">Widowed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Religious & Cultural Details</CardTitle>
                    <CardDescription>Help us find a compatible match based on your values.</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Sect</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select sect" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="sunni">Sunni</SelectItem>
                                <SelectItem value="shia">Shia</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Prayer Frequency</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="always">Always (5 times)</SelectItem>
                                <SelectItem value="usually">Usually</SelectItem>
                                <SelectItem value="sometimes">Sometimes</SelectItem>
                                <SelectItem value="rarely">Rarely</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Ethnicity</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select ethnicity" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="arab">Arab</SelectItem>
                                <SelectItem value="south-asian">South Asian</SelectItem>
                                <SelectItem value="african">African</SelectItem>
                                <SelectItem value="caucasian">Caucasian</SelectItem>
                                <SelectItem value="asian">Asian</SelectItem>
                                <SelectItem value="mixed">Mixed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Wali (Guardian) Contact</label>
                        <Input placeholder="Optional: Father/Brother's number" />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button size="lg">Save & Continue</Button>
            </div>
        </div>
    )
}
