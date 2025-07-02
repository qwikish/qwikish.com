"use client"

import { useEffect, useState } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import {
    Trophy,
    Clock,
    Target,
    TrendingUp,
    RotateCcw,
    Share2,
    Download,
    ChevronRight,
    CheckCircle,
    XCircle,
    AlertCircle,
    Star,
    Award,
    BookOpen,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface QuizResult {
    score: number
    timeSpent: number
    totalQuestions: number
    correctAnswers: number
    answers: Record<string, string | string[]>
    passed: boolean
}

enum QuestionType {
    MultipleChoice = "multiple-choice",
    TrueFalse = "true-false",
    ShortAnswer = "short-answer",
    Essay = "essay",
}

interface Question {
    id: string
    type: "multiple-choice" | "true-false" | "short-answer" | "essay"
    question: string
    options?: string[]
    correctAnswer: string | string[]
    explanation?: string
    points: number
    userAnswer?: string | string[]
    isCorrect?: boolean
}

export default function QuizResults() {
    const navigate = useNavigate()
    const { quizId, noteId } = useParams()
    const location = useLocation()
    const [showConfetti, setShowConfetti] = useState(false)

    // Get results from navigation state or mock data
    const resultData: QuizResult = location.state || {
        score: 85,
        timeSpent: 1245, // seconds
        totalQuestions: 4,
        correctAnswers: 3,
        answers: { "1": "1", "2": "1", "3": "false", "4": "Sample answer" },
        passed: true,
    }

    // Sample quiz data with results
    const quizData = {
        id: quizId || "1",
        title: "Advanced React Patterns",
        description: "Test your knowledge of advanced React concepts and patterns",
        passingScore: 70,
        difficulty: "Hard",
        category: "React",
        questions: [
            {
                id: "1",
                type: "multiple-choice" as const,
                question: "What is the primary purpose of React.memo()?",
                options: [
                    "To memoize component state",
                    "To prevent unnecessary re-renders of functional components",
                    "To cache API responses",
                    "To optimize component mounting",
                ],
                correctAnswer: "1",
                explanation:
                    "React.memo() is a higher-order component that prevents unnecessary re-renders by memoizing the result.",
                points: 2,
                userAnswer: resultData.answers["1"],
                isCorrect: resultData.answers["1"] === "1",
            },
            {
                id: "2",
                type: "multiple-choice" as const,
                question: "Which hook would you use to perform side effects in functional components?",
                options: ["useState", "useEffect", "useContext", "useReducer"],
                correctAnswer: "1",
                explanation: "useEffect is specifically designed for handling side effects in functional components.",
                points: 1,
                userAnswer: resultData.answers["2"],
                isCorrect: resultData.answers["2"] === "1",
            },
            {
                id: "3",
                type: "true-false" as const,
                question: "React components must always return a single JSX element.",
                correctAnswer: "false",
                explanation: "React components can return fragments, arrays, or multiple elements wrapped in React.Fragment.",
                points: 1,
                userAnswer: resultData.answers["3"],
                isCorrect: resultData.answers["3"] === "false",
            },
            {
                id: "4",
                type: "short-answer" as const,
                question: "What is the difference between controlled and uncontrolled components in React?",
                correctAnswer:
                    "Controlled components have their state managed by React, while uncontrolled components manage their own state internally.",
                points: 3,
                userAnswer: resultData.answers["4"],
                isCorrect: false, // For demo purposes
            },
        ],
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600"
        if (score >= 70) return "text-blue-600"
        if (score >= 50) return "text-yellow-600"
        return "text-red-600"
    }

    const getScoreBadge = (score: number) => {
        if (score >= 90) return { text: "Excellent", color: "bg-green-100 text-green-800" }
        if (score >= 70) return { text: "Good", color: "bg-blue-100 text-blue-800" }
        if (score >= 50) return { text: "Fair", color: "bg-yellow-100 text-yellow-800" }
        return { text: "Needs Improvement", color: "bg-red-100 text-red-800" }
    }

    const scoreBadge = getScoreBadge(resultData.score)

    useEffect(() => {
        if (resultData.passed && resultData.score >= 90) {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 3000)
        }
    }, [resultData.passed, resultData.score])

    return (
        <div className="h-screen bg-background flex flex-col">
            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 via-transparent to-transparent animate-pulse" />
                </div>
            )}

            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate("/playground/quizzes")}>
                            <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
                            Back to Quizzes
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold">Quiz Results</h1>
                            <p className="text-muted-foreground">{quizData.title}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                        </Button>
                        <Button onClick={() => navigate(noteId ? `/playground/${noteId}/quizzes/${quizId}` : `/playground/quizzes/${quizId}`)}>
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Retake Quiz
                        </Button>
                    </div>
                </div>
            </div>
            <div className="h-full flex-1 overflow-y-auto w-full">

                <div className="max-w-6xl mx-auto p-6 space-y-6 ">
                    {/* Score Overview */}
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Main Score Card */}
                        <Card
                            className={`${resultData.passed ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20" : "bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20"}`}
                        >
                            <CardHeader className="text-center">
                                <div className="flex items-center justify-center mb-4">
                                    {resultData.passed ? (
                                        <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30">
                                            <Trophy className="h-8 w-8 text-green-600" />
                                        </div>
                                    ) : (
                                        <div className="p-4 rounded-full bg-red-100 dark:bg-red-900/30">
                                            <AlertCircle className="h-8 w-8 text-red-600" />
                                        </div>
                                    )}
                                </div>
                                <CardTitle className="text-4xl font-bold mb-2">
                                    <span className={getScoreColor(resultData.score)}>{resultData.score}%</span>
                                </CardTitle>
                                <div className="space-y-2">
                                    <Badge className={scoreBadge.color}>{scoreBadge.text}</Badge>
                                    <p className="text-muted-foreground">
                                        {resultData.passed ? "Congratulations! You passed!" : "Keep studying and try again!"}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Your Score</span>
                                            <span>{resultData.score}%</span>
                                        </div>
                                        <Progress value={resultData.score} className="h-3" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-green-600">{resultData.correctAnswers}</div>
                                            <div className="text-sm text-muted-foreground">Correct</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-red-600">
                                                {resultData.totalQuestions - resultData.correctAnswers}
                                            </div>
                                            <div className="text-sm text-muted-foreground">Incorrect</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Stats Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5" />
                                    Performance Stats
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 rounded-lg bg-muted/50">
                                        <Clock className="h-6 w-6 mx-auto mb-2 text-blue-500" />
                                        <div className="text-lg font-semibold">{formatTime(resultData.timeSpent)}</div>
                                        <div className="text-sm text-muted-foreground">Time Spent</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-muted/50">
                                        <BookOpen className="h-6 w-6 mx-auto mb-2 text-purple-500" />
                                        <div className="text-lg font-semibold">{resultData.totalQuestions}</div>
                                        <div className="text-sm text-muted-foreground">Questions</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-muted/50">
                                        <Award className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                                        <div className="text-lg font-semibold">{quizData.passingScore}%</div>
                                        <div className="text-sm text-muted-foreground">Passing Score</div>
                                    </div>
                                    <div className="text-center p-3 rounded-lg bg-muted/50">
                                        <Star className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                                        <div className="text-lg font-semibold">{quizData.difficulty}</div>
                                        <div className="text-sm text-muted-foreground">Difficulty</div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm">Accuracy Rate</span>
                                        <span className="text-sm font-medium">
                                            {Math.round((resultData.correctAnswers / resultData.totalQuestions) * 100)}%
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm">Average Time per Question</span>
                                        <span className="text-sm font-medium">
                                            {formatTime(Math.round(resultData.timeSpent / resultData.totalQuestions))}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Detailed Results */}
                    <Tabs defaultValue="review" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="review">Question Review</TabsTrigger>
                            <TabsTrigger value="analysis">Performance Analysis</TabsTrigger>
                            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                        </TabsList>

                        <TabsContent value="review" className="space-y-4">
                            <div className="space-y-4">
                                {quizData.questions.map((question, index) => (
                                    <Card
                                        key={question.id}
                                        className={`${question.isCorrect ? "border-green-200 dark:border-green-800" : "border-red-200 dark:border-red-800"}`}
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge variant="outline">Question {index + 1}</Badge>
                                                        <Badge variant="outline">
                                                            {question.points} point{question.points !== 1 ? "s" : ""}
                                                        </Badge>
                                                        {question.isCorrect ? (
                                                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                                                                <CheckCircle className="h-3 w-3 mr-1" />
                                                                Correct
                                                            </Badge>
                                                        ) : (
                                                            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                                                                <XCircle className="h-3 w-3 mr-1" />
                                                                Incorrect
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <CardTitle className="text-lg">{question.question}</CardTitle>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {question.type === "multiple-choice" && (
                                                <div className="space-y-2">
                                                    {question.options?.map((option, optionIndex) => {
                                                        const isCorrect = optionIndex.toString() === question.correctAnswer
                                                        const isUserAnswer = optionIndex.toString() === question.userAnswer

                                                        return (
                                                            <div
                                                                key={optionIndex}
                                                                className={`p-3 rounded-lg border ${isCorrect
                                                                    ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                                                    : isUserAnswer && !isCorrect
                                                                        ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                                                                        : "bg-muted/50"
                                                                    }`}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    {isCorrect && <CheckCircle className="h-4 w-4 text-green-600" />}
                                                                    {isUserAnswer && !isCorrect && <XCircle className="h-4 w-4 text-red-600" />}
                                                                    <span className={isUserAnswer ? "font-medium" : ""}>{option}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )}

                                            {question.type === "true-false" && (
                                                <div className="space-y-2">
                                                    {["true", "false"].map((option) => {
                                                        const isCorrect = option === question.correctAnswer
                                                        const isUserAnswer = option === question.userAnswer

                                                        return (
                                                            <div
                                                                key={option}
                                                                className={`p-3 rounded-lg border ${isCorrect
                                                                    ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                                                    : isUserAnswer && !isCorrect
                                                                        ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                                                                        : "bg-muted/50"
                                                                    }`}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    {isCorrect && <CheckCircle className="h-4 w-4 text-green-600" />}
                                                                    {isUserAnswer && !isCorrect && <XCircle className="h-4 w-4 text-red-600" />}
                                                                    <span className={`capitalize ${isUserAnswer ? "font-medium" : ""}`}>{option}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )}

                                            {(question.type === "short-answer" || question.type === "essay" as QuestionType) && (
                                                <div className="space-y-3">
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">Your Answer:</div>
                                                        <div className="p-3 rounded-lg bg-muted/50 border">
                                                            {question.userAnswer || "No answer provided"}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium mb-2">Sample Answer:</div>
                                                        <div className="p-3 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
                                                            {question.correctAnswer}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {question.explanation && (
                                                <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
                                                    <div className="text-sm font-medium mb-2 text-blue-800 dark:text-blue-300">Explanation:</div>
                                                    <p className="text-sm text-blue-700 dark:text-blue-200">{question.explanation}</p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        <TabsContent value="analysis" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Score Breakdown</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>Multiple Choice</span>
                                                    <span>2/3 correct</span>
                                                </div>
                                                <Progress value={67} className="h-2" />
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>True/False</span>
                                                    <span>1/1 correct</span>
                                                </div>
                                                <Progress value={100} className="h-2" />
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span>Short Answer</span>
                                                    <span>0/1 correct</span>
                                                </div>
                                                <Progress value={0} className="h-2" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Time Analysis</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="text-center">
                                                <div className="text-2xl font-bold">{formatTime(resultData.timeSpent)}</div>
                                                <div className="text-sm text-muted-foreground">Total Time</div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Average per question</span>
                                                    <span>{formatTime(Math.round(resultData.timeSpent / resultData.totalQuestions))}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span>Fastest question</span>
                                                    <span>0:45</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span>Slowest question</span>
                                                    <span>8:32</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        <TabsContent value="recommendations" className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <TrendingUp className="h-5 w-5 text-blue-500" />
                                            Areas for Improvement
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="p-3 rounded-lg border">
                                                <div className="font-medium">Short Answer Questions</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Practice explaining concepts in your own words
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-lg border">
                                                <div className="font-medium">React Hooks</div>
                                                <div className="text-sm text-muted-foreground">Review useEffect and custom hooks</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <BookOpen className="h-5 w-5 text-green-500" />
                                            Recommended Study Materials
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <Button variant="outline" className="w-full justify-start">
                                                <BookOpen className="h-4 w-4 mr-2" />
                                                React Hooks Documentation
                                            </Button>
                                            <Button variant="outline" className="w-full justify-start">
                                                <BookOpen className="h-4 w-4 mr-2" />
                                                Advanced React Patterns
                                            </Button>
                                            <Button variant="outline" className="w-full justify-start">
                                                <BookOpen className="h-4 w-4 mr-2" />
                                                Practice Quiz: React Fundamentals
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>

    )
}
