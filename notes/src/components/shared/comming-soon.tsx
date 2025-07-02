"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {  Clock, Rocket, Sparkles, Calendar as CalendarIcon,  ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"

interface Feature {
    name: string
    description: string
    status: 'planned' | 'in-progress' | 'completed'
}

interface ComingSoonProps {
    title: string
    description?: string
    version: "v2" | "v3" | "v4" | "v5"
    expectedDate?: string
    progress?: number
    features?: Feature[]
    onNotifyMe?: (email?: string) => void
}

const ComingSoon = ({
    title,
    description,
    version,
    expectedDate,
    progress = 0,
    features = [],
    onNotifyMe
}: ComingSoonProps) => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [showAllFeatures, setShowAllFeatures] = useState(false)

    const friendlyMessages = [
        "We're working hard to bring this to you! 🚀",
        "Something awesome is cooking in our labs! ✨",
        "This feature is on our roadmap and coming soon! 🎯",
        "Great things take time, and this will be worth the wait! ⏰",
        "We're putting the finishing touches on something special! 🎨",
        "Your patience will be rewarded with an amazing experience! 🌟",
        "Innovation takes time, but it's coming your way! 💡",
        "We're crafting this feature with love and attention! ❤️",
        "Stay tuned - you're going to love what we're building! 🔥",
        "Good things are coming to those who wait! 🎁",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % friendlyMessages.length)
        }, 3500)

        return () => clearInterval(interval)
    }, [friendlyMessages.length])

    const handleSubscribe = () => {
        if (email && !email.includes("@")) {
            toast.error("Please enter a valid email address")
            return
        }

        onNotifyMe?.(email)
        setIsSubscribed(true)
        toast.success("You're on the list! We'll notify you when this launches.")
        setEmail("")
    }

    const getStatusBadge = (status: Feature['status']) => {
        switch (status) {
            case 'planned':
                return <Badge variant="outline">Planned</Badge>
            case 'in-progress':
                return <Badge variant="secondary">In Progress</Badge>
            case 'completed':
                return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
            default:
                return <Badge variant="outline">Planned</Badge>
        }
    }

    const displayedFeatures = showAllFeatures ? features : features.slice(0, 3)

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <Card className="w-full max-w-2xl bg-card border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 space-y-6">
                    {/* Header with version badge */}
                    <div className="flex justify-between items-start">
                        <Badge variant="secondary" className="text-sm px-3 py-1 flex items-center gap-1">
                            <Rocket className="h-3 w-3" />
                            Coming in {version.toUpperCase()}
                        </Badge>

                        {expectedDate && (
                            <Badge variant="outline" className="text-sm px-3 py-1 flex items-center gap-1">
                                <CalendarIcon className="h-3 w-3" />
                                Target: {expectedDate}
                            </Badge>
                        )}
                    </div>

                    {/* Title and description */}
                    <div className="space-y-3 text-center">
                        <div className="flex justify-center">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
                        {description && (
                            <p className="text-muted-foreground">{description}</p>
                        )}
                    </div>

                    {/* Progress indicator */}
                    {progress > 0 && (
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Development Progress</span>
                                <span>{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                        </div>
                    )}

                    {/* Features section */}
                    {features.length > 0 && (
                        <div className="space-y-3">
                            <div className="rounded-lg border divide-y">
                                {displayedFeatures.map((feature, index) => (
                                    <div key={index} className="p-4">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-medium">{feature.name}</h3>
                                                <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                {getStatusBadge(feature.status)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {features.length > 3 && (
                                <Button
                                    variant="ghost"
                                    className="w-full"
                                    onClick={() => setShowAllFeatures(!showAllFeatures)}
                                >
                                    {showAllFeatures ? (
                                        <>
                                            <ChevronUp className="mr-2 h-4 w-4" />
                                            Show less
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown className="mr-2 h-4 w-4" />
                                            See all {features.length} features
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>
                    )}

                    {/* Interactive message box */}
                    <div
                        className="bg-muted/50 rounded-lg p-4 border selection:bg-transparent border-border hover:bg-muted transition-colors cursor-pointer"
                        onClick={() => setCurrentMessageIndex((prev) => (prev + 1) % friendlyMessages.length)}
                    >
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Clock className="h-4 w-4" />
                            <span className="text-xs">Click to cycle messages</span>
                        </div>
                        <p className="text-foreground transition-all duration-300 ease-in-out">
                            {friendlyMessages[currentMessageIndex]}
                        </p>
                    </div>

                    

                    {/* Additional call-to-action */}
                    <Button variant="link" className="w-full text-muted-foreground">
                        Learn more about our roadmap →
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ComingSoon
