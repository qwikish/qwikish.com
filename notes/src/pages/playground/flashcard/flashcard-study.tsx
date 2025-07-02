"use client"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
    ArrowLeft,
    RotateCcw,
    Eye,
    EyeOff,
    Clock,
    Brain,
    CheckCircle,
    XCircle,
    Star,
    Pause,
    Play,
    SkipForward,
    Volume2,
    Settings,
    Target,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface Flashcard {
    id: string
    front: string
    back: string
    difficulty: "Easy" | "Medium" | "Hard"
    tags: string[]
    notes?: string
    lastReviewed?: string
    nextReview?: string
    interval: number
    easeFactor: number
    repetitions: number
}

interface StudySession {
    deckId: string
    deckTitle: string
    totalCards: number
    newCards: Flashcard[]
    reviewCards: Flashcard[]
    currentCardIndex: number
    isFlipped: boolean
    startTime: Date
    responses: Array<{
        cardId: string
        response: "again" | "hard" | "good" | "easy"
        timeSpent: number
    }>
}

export default function FlashcardStudy() {
    const navigate = useNavigate()
    const { deckId } = useParams()
    const [session, setSession] = useState<StudySession | null>(null)
    const [isFlipped, setIsFlipped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [timeSpent, setTimeSpent] = useState(0)
    const [showSettings, setShowSettings] = useState(false)

    // Sample deck data
    const deckData = {
        id: deckId || "1",
        title: "JavaScript Fundamentals",
        description: "Core JavaScript concepts and syntax",
        newCards: [
            {
                id: "1",
                front: "What is a closure in JavaScript?",
                back: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.",
                difficulty: "Medium" as const,
                tags: ["functions", "scope"],
                interval: 0,
                easeFactor: 2.5,
                repetitions: 0,
            },
            {
                id: "2",
                front: "What is the difference between let and var?",
                back: "let has block scope and cannot be redeclared in the same scope, while var has function scope and can be redeclared.",
                difficulty: "Easy" as const,
                tags: ["variables", "scope"],
                interval: 0,
                easeFactor: 2.5,
                repetitions: 0,
            },
        ],
        reviewCards: [
            {
                id: "3",
                front: "What is event bubbling?",
                back: "Event bubbling is when an event starts from the target element and bubbles up to the parent elements.",
                difficulty: "Hard" as const,
                tags: ["events", "DOM"],
                interval: 1,
                easeFactor: 2.3,
                repetitions: 2,
                lastReviewed: "2024-01-14",
                nextReview: "2024-01-15",
            },
        ],
    }

    useEffect(() => {
        // Initialize study session
        const allCards = [...deckData.newCards, ...deckData.reviewCards]
        setSession({
            deckId: deckData.id,
            deckTitle: deckData.title,
            totalCards: allCards.length,
            newCards: deckData.newCards,
            reviewCards: deckData.reviewCards,
            currentCardIndex: 0,
            isFlipped: false,
            startTime: new Date(),
            responses: [],
        })
    }, [deckId])

    // Timer effect
    useEffect(() => {
        if (!isPaused && session) {
            const timer = setInterval(() => {
                setTimeSpent((prev) => prev + 1)
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [isPaused, session])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const getCurrentCard = () => {
        if (!session) return null
        const allCards = [...session.newCards, ...session.reviewCards]
        return allCards[session.currentCardIndex]
    }

    const handleResponse = (response: "again" | "hard" | "good" | "easy") => {
        if (!session) return

        const currentCard = getCurrentCard()
        if (!currentCard) return

        // Record response
        const newResponse = {
            cardId: currentCard.id,
            response,
            timeSpent: timeSpent,
        }

        const updatedSession = {
            ...session,
            responses: [...session.responses, newResponse],
        }

        // Move to next card or finish session
        if (session.currentCardIndex < session.totalCards - 1) {
            updatedSession.currentCardIndex += 1
            setSession(updatedSession)
            setIsFlipped(false)
            setTimeSpent(0)
        } else {
            // Session complete
            finishSession(updatedSession)
        }
    }

    const finishSession = (finalSession: StudySession) => {
        // Calculate session stats and navigate to results
        const totalTime = Math.floor((new Date().getTime() - finalSession.startTime.getTime()) / 1000)
        navigate(`/playground/flashcards/${deckId}/results`, {
            state: {
                session: finalSession,
                totalTime,
                cardsStudied: finalSession.responses.length,
            },
        })
    }

    const skipCard = () => {
        handleResponse("again")
    }

    const currentCard = getCurrentCard()
    const progress = session ? ((session.currentCardIndex + 1) / session.totalCards) * 100 : 0

    if (!session || !currentCard) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <Brain className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h2 className="text-xl font-semibold mb-2">Loading Study Session...</h2>
                    <p className="text-muted-foreground">Preparing your flashcards</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-4xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate("/playground/flashcards")}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Decks
                        </Button>
                        <div>
                            <h1 className="text-lg font-semibold">{session.deckTitle}</h1>
                            <p className="text-sm text-muted-foreground">Study Session</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span>{formatTime(timeSpent)}</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsPaused(!isPaused)}
                            className={isPaused ? "text-green-600" : ""}
                        >
                            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => setShowSettings(!showSettings)}>
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-6 space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span>
                            Card {session.currentCardIndex + 1} of {session.totalCards}
                        </span>
                        <span>{Math.round(progress)}% complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Flashcard */}
                <div className="flex justify-center">
                    <Card className="w-full max-w-2xl">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline">{currentCard.difficulty}</Badge>
                                    {currentCard.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsFlipped(!isFlipped)}
                                    className="flex items-center gap-2"
                                >
                                    {isFlipped ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    {isFlipped ? "Hide Answer" : "Show Answer"}
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div
                                className={`min-h-[300px] p-8 rounded-lg border-2 transition-all duration-300 cursor-pointer ${isFlipped
                                        ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                                        : "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                    }`}
                                onClick={() => setIsFlipped(!isFlipped)}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                    <Badge variant="outline" className="mb-2">
                                        {isFlipped ? "Answer" : "Question"}
                                    </Badge>
                                    <div className="text-xl leading-relaxed">{isFlipped ? currentCard.back : currentCard.front}</div>
                                    {!isFlipped && <p className="text-sm text-muted-foreground">Click to reveal answer</p>}
                                </div>
                            </div>

                            {currentCard.notes && isFlipped && (
                                <div className="mt-4 p-4 rounded-lg bg-yellow-50 border border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800">
                                    <div className="text-sm font-medium mb-1 text-yellow-800 dark:text-yellow-300">Notes:</div>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-200">{currentCard.notes}</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Response Buttons */}
                {isFlipped && (
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
                            <Button
                                variant="outline"
                                className="h-16 flex flex-col gap-1 text-red-600 border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20"
                                onClick={() => handleResponse("again")}
                            >
                                <XCircle className="h-5 w-5" />
                                <span className="text-xs">Again</span>
                                <span className="text-xs text-muted-foreground">&lt;1m</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-16 flex flex-col gap-1 text-orange-600 border-orange-200 hover:bg-orange-50 dark:border-orange-800 dark:hover:bg-orange-900/20"
                                onClick={() => handleResponse("hard")}
                            >
                                <Target className="h-5 w-5" />
                                <span className="text-xs">Hard</span>
                                <span className="text-xs text-muted-foreground">6m</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-16 flex flex-col gap-1 text-green-600 border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/20"
                                onClick={() => handleResponse("good")}
                            >
                                <CheckCircle className="h-5 w-5" />
                                <span className="text-xs">Good</span>
                                <span className="text-xs text-muted-foreground">10m</span>
                            </Button>
                            <Button
                                variant="outline"
                                className="h-16 flex flex-col gap-1 text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/20"
                                onClick={() => handleResponse("easy")}
                            >
                                <Star className="h-5 w-5" />
                                <span className="text-xs">Easy</span>
                                <span className="text-xs text-muted-foreground">4d</span>
                            </Button>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-center gap-3">
                    <Button variant="outline" onClick={skipCard}>
                        <SkipForward className="h-4 w-4 mr-2" />
                        Skip
                    </Button>
                    <Button variant="outline">
                        <Volume2 className="h-4 w-4 mr-2" />
                        Audio
                    </Button>
                    <Button variant="outline" onClick={() => setIsFlipped(!isFlipped)}>
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Flip Card
                    </Button>
                </div>

                {/* Session Stats */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold text-green-600">{session.responses.length}</div>
                                <div className="text-sm text-muted-foreground">Cards Studied</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-blue-600">
                                    {session.responses.filter((r) => r.response === "good" || r.response === "easy").length}
                                </div>
                                <div className="text-sm text-muted-foreground">Correct</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-orange-600">
                                    {session.responses.filter((r) => r.response === "again" || r.response === "hard").length}
                                </div>
                                <div className="text-sm text-muted-foreground">Need Review</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <Card className="w-full max-w-md">
                        <CardHeader>
                            <CardTitle>Study Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Auto-flip cards</div>
                                    <div className="text-sm text-muted-foreground">Automatically show answer after 3 seconds</div>
                                </div>
                                <Button variant="outline" size="sm">
                                    Off
                                </Button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Audio feedback</div>
                                    <div className="text-sm text-muted-foreground">Play sounds for responses</div>
                                </div>
                                <Button variant="outline" size="sm">
                                    On
                                </Button>
                            </div>
                            <Separator />
                            <div className="flex gap-3">
                                <Button variant="outline" onClick={() => setShowSettings(false)} className="flex-1">
                                    Cancel
                                </Button>
                                <Button onClick={() => setShowSettings(false)} className="flex-1">
                                    Save
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    )
}
