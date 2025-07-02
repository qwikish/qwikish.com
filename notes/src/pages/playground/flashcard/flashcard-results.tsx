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
    BookOpen,
    Brain,
    Zap,
    Calendar,
    Users,
    BarChart3,
    TrendingDown,
    Eye,
    FileText,
    Lightbulb,
    ArrowRight,
    PlayCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface QuizResult {
    score: number
    timeSpent: number
    totalQuestions: number
    correctAnswers: number
    answers: Record<string, string | string[]>
    passed: boolean
    rank?: number
    percentile?: number
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
    timeSpent?: number
    difficulty: "Easy" | "Medium" | "Hard"
    topic: string
}

interface StudyRecommendation {
    title: string
    description: string
    type: "quiz" | "flashcard" | "reading" | "video"
    difficulty: string
    estimatedTime: number
    priority: "high" | "medium" | "low"
}

export default function QuizResults() {
    const navigate = useNavigate()
    const { quizId } = useParams()
    const location = useLocation()
    const [showConfetti, setShowConfetti] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null)

    // Get results from navigation state or mock data
    const resultData: QuizResult = location.state || {
        score: 85,
        timeSpent: 1245, // seconds
        totalQuestions: 10,
        correctAnswers: 8,
        answers: {
            "1": "1",
            "2": "1",
            "3": "false",
            "4": "Sample answer",
            "5": "2",
            "6": "true",
            "7": "0",
            "8": "Another answer",
            "9": "1",
            "10": "false",
        },
        passed: true,
        rank: 3,
        percentile: 87,
    }

    // Enhanced quiz data with detailed results
    const quizData = {
        id: quizId || "1",
        title: "Advanced React Patterns",
        description: "Test your knowledge of advanced React concepts and patterns",
        passingScore: 70,
        difficulty: "Hard",
        category: "React",
        totalAttempts: 1247,
        averageScore: 73,
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
                    "React.memo() is a higher-order component that prevents unnecessary re-renders by memoizing the result and only re-rendering when props change.",
                points: 2,
                userAnswer: resultData.answers["1"],
                isCorrect: resultData.answers["1"] === "1",
                timeSpent: 45,
                difficulty: "Medium" as const,
                topic: "Performance Optimization",
            },
            {
                id: "2",
                type: "multiple-choice" as const,
                question: "Which hook would you use to perform side effects in functional components?",
                options: ["useState", "useEffect", "useContext", "useReducer"],
                correctAnswer: "1",
                explanation:
                    "useEffect is specifically designed for handling side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.",
                points: 1,
                userAnswer: resultData.answers["2"],
                isCorrect: resultData.answers["2"] === "1",
                timeSpent: 23,
                difficulty: "Easy" as const,
                topic: "React Hooks",
            },
            {
                id: "3",
                type: "true-false" as const,
                question: "React components must always return a single JSX element.",
                correctAnswer: "false",
                explanation:
                    "React components can return fragments, arrays, or multiple elements wrapped in React.Fragment (<>...</>), not just single elements.",
                points: 1,
                userAnswer: resultData.answers["3"],
                isCorrect: resultData.answers["3"] === "false",
                timeSpent: 18,
                difficulty: "Easy" as const,
                topic: "JSX Fundamentals",
            },
            {
                id: "4",
                type: "short-answer" as const,
                question: "What is the difference between controlled and uncontrolled components in React?",
                correctAnswer:
                    "Controlled components have their state managed by React through props and callbacks, while uncontrolled components manage their own state internally using refs.",
                points: 3,
                userAnswer: resultData.answers["4"],
                isCorrect: false,
                timeSpent: 120,
                difficulty: "Hard" as const,
                topic: "Component Patterns",
            },
            {
                id: "5",
                type: "multiple-choice" as const,
                question: "What is the purpose of the useCallback hook?",
                options: [
                    "To memoize expensive calculations",
                    "To memoize function references",
                    "To handle component lifecycle",
                    "To manage component state",
                ],
                correctAnswer: "1",
                explanation:
                    "useCallback memoizes function references to prevent unnecessary re-renders of child components that depend on those functions.",
                points: 2,
                userAnswer: resultData.answers["5"],
                isCorrect: resultData.answers["5"] === "1",
                timeSpent: 67,
                difficulty: "Medium" as const,
                topic: "Performance Optimization",
            },
            {
                id: "6",
                type: "true-false" as const,
                question: "The useEffect hook runs after every render by default.",
                correctAnswer: "true",
                explanation:
                    "useEffect runs after every completed render, but you can control when it runs using the dependency array.",
                points: 1,
                userAnswer: resultData.answers["6"],
                isCorrect: resultData.answers["6"] === "true",
                timeSpent: 15,
                difficulty: "Easy" as const,
                topic: "React Hooks",
            },
            {
                id: "7",
                type: "multiple-choice" as const,
                question: "Which of the following is NOT a valid way to handle forms in React?",
                options: [
                    "Controlled components with useState",
                    "Uncontrolled components with useRef",
                    "Using form libraries like Formik",
                    "Direct DOM manipulation with getElementById",
                ],
                correctAnswer: "3",
                explanation:
                    "Direct DOM manipulation goes against React's declarative paradigm and should be avoided in favor of React's state management approaches.",
                points: 2,
                userAnswer: resultData.answers["7"],
                isCorrect: resultData.answers["7"] === "3",
                timeSpent: 89,
                difficulty: "Medium" as const,
                topic: "Forms & Input Handling",
            },
            {
                id: "8",
                type: "short-answer" as const,
                question: "Explain the concept of 'lifting state up' in React.",
                correctAnswer:
                    "Lifting state up means moving state from child components to their common parent component when multiple components need to share the same state.",
                points: 3,
                userAnswer: resultData.answers["8"],
                isCorrect: true,
                timeSpent: 95,
                difficulty: "Medium" as const,
                topic: "State Management",
            },
            {
                id: "9",
                type: "multiple-choice" as const,
                question: "What is the virtual DOM?",
                options: [
                    "A lightweight copy of the real DOM kept in memory",
                    "A browser API for DOM manipulation",
                    "A React component lifecycle method",
                    "A state management library",
                ],
                correctAnswer: "0",
                explanation:
                    "The virtual DOM is a lightweight JavaScript representation of the real DOM that React uses to optimize rendering performance.",
                points: 2,
                userAnswer: resultData.answers["9"],
                isCorrect: resultData.answers["9"] === "0",
                timeSpent: 34,
                difficulty: "Easy" as const,
                topic: "React Fundamentals",
            },
            {
                id: "10",
                type: "true-false" as const,
                question: "React keys should be unique among siblings but don't need to be globally unique.",
                correctAnswer: "true",
                explanation: "Keys only need to be unique among siblings in the same array, not across the entire application.",
                points: 1,
                userAnswer: resultData.answers["10"],
                isCorrect: resultData.answers["10"] === "true",
                timeSpent: 12,
                difficulty: "Easy" as const,
                topic: "Lists & Keys",
            },
        ],
    }

    // Study recommendations based on performance
    const studyRecommendations: StudyRecommendation[] = [
        {
            title: "Component Patterns Deep Dive",
            description: "Master controlled vs uncontrolled components with hands-on examples",
            type: "quiz",
            difficulty: "Medium",
            estimatedTime: 25,
            priority: "high",
        },
        {
            title: "React Performance Optimization",
            description: "Learn advanced techniques for optimizing React applications",
            type: "reading",
            difficulty: "Hard",
            estimatedTime: 45,
            priority: "high",
        },
        {
            title: "Forms & Input Handling Flashcards",
            description: "Practice form handling patterns and best practices",
            type: "flashcard",
            difficulty: "Medium",
            estimatedTime: 15,
            priority: "medium",
        },
        {
            title: "React Hooks Masterclass",
            description: "Video series covering all React hooks in detail",
            type: "video",
            difficulty: "Medium",
            estimatedTime: 60,
            priority: "medium",
        },
    ]

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600"
        if (score >= 80) return "text-blue-600"
        if (score >= 70) return "text-yellow-600"
        return "text-red-600"
    }

    const getScoreBadge = (score: number) => {
        if (score >= 90)
            return {
                text: "Excellent",
                color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
                icon: Trophy,
            }
        if (score >= 80)
            return { text: "Good", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300", icon: Star }
        if (score >= 70)
            return {
                text: "Pass",
                color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
                icon: CheckCircle,
            }
        return {
            text: "Needs Improvement",
            color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
            icon: AlertCircle,
        }
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "text-green-600"
            case "Medium":
                return "text-yellow-600"
            case "Hard":
                return "text-red-600"
            default:
                return "text-gray-600"
        }
    }

    const getTopicPerformance = () => {
        const topics: Record<string, { correct: number; total: number; questions: Question[] }> = {}

        quizData.questions.forEach((question) => {
            if (!topics[question.topic]) {
                topics[question.topic] = { correct: 0, total: 0, questions: [] }
            }
            topics[question.topic].total += 1
            topics[question.topic].questions.push(question)
            if (question.isCorrect) {
                topics[question.topic].correct += 1
            }
        })

        return Object.entries(topics)
            .map(([topic, data]) => ({
                topic,
                accuracy: Math.round((data.correct / data.total) * 100),
                correct: data.correct,
                total: data.total,
                questions: data.questions,
            }))
            .sort((a, b) => a.accuracy - b.accuracy)
    }

    const scoreBadge = getScoreBadge(resultData.score)
    const topicPerformance = getTopicPerformance()
    const averageTimePerQuestion = Math.round(resultData.timeSpent / resultData.totalQuestions)

    useEffect(() => {
        if (resultData.passed && resultData.score >= 90) {
            setShowConfetti(true)
            setTimeout(() => setShowConfetti(false), 3000)
        }
    }, [resultData.passed, resultData.score])

    return (
        <div className="min-h-screen bg-background">
            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 via-transparent to-transparent animate-pulse" />
                    {/* Add more confetti elements here */}
                </div>
            )}

            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
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
                            Share Results
                        </Button>
                        <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download Report
                        </Button>
                        <Button onClick={() => navigate(`/playground/quizzes/${quizId}`)}>
                            <RotateCcw className="h-4 w-4 mr-2" />
                            Retake Quiz
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6 space-y-6">
                {/* Score Overview */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Main Score Card */}
                    <Card
                        className={`lg:col-span-2 ${resultData.passed ? "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20" : "bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20"}`}
                    >
                        <CardHeader className="text-center">
                            <div className="flex items-center justify-center mb-4">
                                <div
                                    className={`p-4 rounded-full ${resultData.passed ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"}`}
                                >
                                    <scoreBadge.icon className={`h-8 w-8 ${resultData.passed ? "text-green-600" : "text-red-600"}`} />
                                </div>
                            </div>
                            <CardTitle className="text-5xl font-bold mb-2">
                                <span className={getScoreColor(resultData.score)}>{resultData.score}%</span>
                            </CardTitle>
                            <div className="space-y-3">
                                <Badge className={scoreBadge.color} variant="secondary">
                                    {scoreBadge.text}
                                </Badge>
                                <p className="text-lg text-muted-foreground">
                                    {resultData.passed ? "🎉 Congratulations! You passed!" : "📚 Keep studying and try again!"}
                                </p>
                                {resultData.rank && (
                                    <p className="text-sm text-muted-foreground">
                                        Ranked #{resultData.rank} • Top {resultData.percentile}% of all attempts
                                    </p>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
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
                                <div>
                                    <div className="text-2xl font-bold text-blue-600">{formatTime(resultData.timeSpent)}</div>
                                    <div className="text-sm text-muted-foreground">Total Time</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-purple-600">{formatTime(averageTimePerQuestion)}</div>
                                    <div className="text-sm text-muted-foreground">Avg/Question</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <BarChart3 className="h-5 w-5 text-blue-500" />
                                    Performance Breakdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Accuracy Rate</span>
                                    <span className="font-semibold">
                                        {Math.round((resultData.correctAnswers / resultData.totalQuestions) * 100)}%
                                    </span>
                                </div>
                                <Progress value={(resultData.correctAnswers / resultData.totalQuestions) * 100} className="h-2" />

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Speed Score</span>
                                    <span className="font-semibold">85%</span>
                                </div>
                                <Progress value={85} className="h-2" />

                                <div className="flex justify-between items-center">
                                    <span className="text-sm">Difficulty Handling</span>
                                    <span className="font-semibold">78%</span>
                                </div>
                                <Progress value={78} className="h-2" />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="pb-3">
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <Users className="h-5 w-5 text-green-500" />
                                    Comparison
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">{quizData.averageScore}%</div>
                                    <div className="text-sm text-muted-foreground">Average Score</div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Your Score</span>
                                    <span className={`font-semibold ${getScoreColor(resultData.score)}`}>{resultData.score}%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span>Difference</span>
                                    <span
                                        className={`font-semibold ${resultData.score >= quizData.averageScore ? "text-green-600" : "text-red-600"}`}
                                    >
                                        {resultData.score >= quizData.averageScore ? "+" : ""}
                                        {resultData.score - quizData.averageScore}%
                                    </span>
                                </div>
                                <div className="text-xs text-muted-foreground text-center">
                                    Based on {quizData.totalAttempts.toLocaleString()} attempts
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Detailed Analysis Tabs */}
                <Tabs defaultValue="questions" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="questions">Question Review</TabsTrigger>
                        <TabsTrigger value="topics">Topic Analysis</TabsTrigger>
                        <TabsTrigger value="insights">Performance Insights</TabsTrigger>
                        <TabsTrigger value="recommendations">Study Plan</TabsTrigger>
                    </TabsList>

                    <TabsContent value="questions" className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Detailed Question Review</h3>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    <Eye className="h-4 w-4 mr-2" />
                                    Show All
                                </Button>
                                <Button variant="outline" size="sm">
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Incorrect Only
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {quizData.questions.map((question, index) => (
                                <Card
                                    key={question.id}
                                    className={`transition-all duration-200 ${question.isCorrect ? "border-green-200 dark:border-green-800" : "border-red-200 dark:border-red-800"
                                        } ${selectedQuestion === question.id ? "ring-2 ring-primary" : ""}`}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline">Question {index + 1}</Badge>
                                                    <Badge variant="outline">{question.points} pts</Badge>
                                                    <Badge className={`${getDifficultyColor(question.difficulty)} bg-transparent border`}>
                                                        {question.difficulty}
                                                    </Badge>
                                                    <Badge variant="secondary">{question.topic}</Badge>
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
                                                <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Clock className="h-4 w-4" />
                                                <span>{formatTime(question.timeSpent || 0)}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {question.type === "multiple-choice" && question.options && (
                                            <div className="space-y-2">
                                                {question.options.map((option, optionIndex) => {
                                                    const isCorrect = optionIndex.toString() === question.correctAnswer
                                                    const isUserAnswer = optionIndex.toString() === question.userAnswer

                                                    return (
                                                        <div
                                                            key={optionIndex}
                                                            className={`p-3 rounded-lg border transition-colors ${isCorrect
                                                                    ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                                                    : isUserAnswer && !isCorrect
                                                                        ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                                                                        : "bg-muted/50 hover:bg-muted"
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isCorrect
                                                                            ? "border-green-500 bg-green-500"
                                                                            : isUserAnswer
                                                                                ? "border-red-500 bg-red-500"
                                                                                : "border-gray-300"
                                                                        }`}
                                                                >
                                                                    {isCorrect && <CheckCircle className="h-4 w-4 text-white" />}
                                                                    {isUserAnswer && !isCorrect && <XCircle className="h-4 w-4 text-white" />}
                                                                    {!isCorrect && !isUserAnswer && (
                                                                        <span className="text-xs font-medium">{String.fromCharCode(65 + optionIndex)}</span>
                                                                    )}
                                                                </div>
                                                                <span className={`flex-1 ${isUserAnswer ? "font-medium" : ""}`}>{option}</span>
                                                                {isUserAnswer && (
                                                                    <Badge variant="outline" className="text-xs">
                                                                        Your Answer
                                                                    </Badge>
                                                                )}
                                                                {isCorrect && (
                                                                    <Badge variant="outline" className="text-xs text-green-600">
                                                                        Correct
                                                                    </Badge>
                                                                )}
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
                                                            <div className="flex items-center gap-3">
                                                                <div
                                                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isCorrect
                                                                            ? "border-green-500 bg-green-500"
                                                                            : isUserAnswer
                                                                                ? "border-red-500 bg-red-500"
                                                                                : "border-gray-300"
                                                                        }`}
                                                                >
                                                                    {isCorrect && <CheckCircle className="h-4 w-4 text-white" />}
                                                                    {isUserAnswer && !isCorrect && <XCircle className="h-4 w-4 text-white" />}
                                                                </div>
                                                                <span className={`capitalize flex-1 ${isUserAnswer ? "font-medium" : ""}`}>
                                                                    {option}
                                                                </span>
                                                                {isUserAnswer && (
                                                                    <Badge variant="outline" className="text-xs">
                                                                        Your Answer
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}

                                        {(question.type === "short-answer" || question.type === "essay" as "short-answer" | "essay" | "multiple-choice") && (
                                            <div className="space-y-4">
                                                <div>
                                                    <div className="text-sm font-medium mb-2 flex items-center gap-2">
                                                        <FileText className="h-4 w-4" />
                                                        Your Answer:
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-muted/50 border">
                                                        {question.userAnswer || "No answer provided"}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium mb-2 flex items-center gap-2">
                                                        <Lightbulb className="h-4 w-4 text-green-600" />
                                                        Model Answer:
                                                    </div>
                                                    <div className="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
                                                        {question.correctAnswer}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {question.explanation && (
                                            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                                                <Lightbulb className="h-4 w-4 text-blue-600" />
                                                <AlertDescription className="text-blue-800 dark:text-blue-200">
                                                    <strong>Explanation:</strong> {question.explanation}
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="topics" className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Performance by Topic</h3>
                            <p className="text-muted-foreground">Identify your strengths and areas for improvement</p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {topicPerformance.map((topic) => (
                                <Card key={topic.topic} className="hover:shadow-md transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-lg">{topic.topic}</CardTitle>
                                            <Badge
                                                className={`${topic.accuracy >= 80 ? "bg-green-100 text-green-800" : topic.accuracy >= 60 ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}
                                            >
                                                {topic.accuracy}%
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span>Accuracy</span>
                                                <span>
                                                    {topic.correct}/{topic.total} correct
                                                </span>
                                            </div>
                                            <Progress value={topic.accuracy} className="h-2" />
                                        </div>

                                        <div className="space-y-2">
                                            <div className="text-sm font-medium">Questions in this topic:</div>
                                            {topic.questions.map((q, idx) => (
                                                <div key={q.id} className="flex items-center justify-between text-sm p-2 rounded bg-muted/50">
                                                    <span>
                                                        Q{quizData.questions.findIndex((question) => question.id === q.id) + 1}:{" "}
                                                        {q.question.substring(0, 50)}...
                                                    </span>
                                                    {q.isCorrect ? (
                                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                                    ) : (
                                                        <XCircle className="h-4 w-4 text-red-600" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {topic.accuracy < 70 && (
                                            <Alert>
                                                <AlertCircle className="h-4 w-4" />
                                                <AlertDescription>
                                                    This topic needs more practice. Consider reviewing the study materials.
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="insights" className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Performance Insights</h3>
                            <p className="text-muted-foreground">Detailed analysis of your quiz performance</p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {/* Time Analysis */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Clock className="h-5 w-5 text-blue-500" />
                                        Time Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold">{formatTime(resultData.timeSpent)}</div>
                                            <div className="text-sm text-muted-foreground">Total Time</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold">{formatTime(averageTimePerQuestion)}</div>
                                            <div className="text-sm text-muted-foreground">Avg per Question</div>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span>Fastest Question</span>
                                            <span>{formatTime(Math.min(...quizData.questions.map((q) => q.timeSpent || 0)))}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Slowest Question</span>
                                            <span>{formatTime(Math.max(...quizData.questions.map((q) => q.timeSpent || 0)))}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Time Efficiency</span>
                                            <span className="text-green-600">Good</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Difficulty Analysis */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Target className="h-5 w-5 text-orange-500" />
                                        Difficulty Breakdown
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {["Easy", "Medium", "Hard"].map((difficulty) => {
                                        const difficultyQuestions = quizData.questions.filter((q) => q.difficulty === difficulty)
                                        const correctCount = difficultyQuestions.filter((q) => q.isCorrect).length
                                        const accuracy =
                                            difficultyQuestions.length > 0 ? Math.round((correctCount / difficultyQuestions.length) * 100) : 0

                                        return (
                                            <div key={difficulty} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className={`font-medium ${getDifficultyColor(difficulty)}`}>{difficulty}</span>
                                                    <span className="text-sm">
                                                        {correctCount}/{difficultyQuestions.length} ({accuracy}%)
                                                    </span>
                                                </div>
                                                <Progress value={accuracy} className="h-2" />
                                            </div>
                                        )
                                    })}
                                </CardContent>
                            </Card>

                            {/* Strengths & Weaknesses */}
                            <Card className="lg:col-span-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <TrendingUp className="h-5 w-5 text-green-500" />
                                        Strengths & Areas for Improvement
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                                                <Trophy className="h-4 w-4" />
                                                Strengths
                                            </h4>
                                            <div className="space-y-2">
                                                {topicPerformance
                                                    .filter((t) => t.accuracy >= 80)
                                                    .map((topic) => (
                                                        <div
                                                            key={topic.topic}
                                                            className="flex items-center gap-2 p-2 rounded bg-green-50 dark:bg-green-900/20"
                                                        >
                                                            <CheckCircle className="h-4 w-4 text-green-600" />
                                                            <span className="text-sm">
                                                                {topic.topic} ({topic.accuracy}%)
                                                            </span>
                                                        </div>
                                                    ))}
                                                {topicPerformance.filter((t) => t.accuracy >= 80).length === 0 && (
                                                    <p className="text-sm text-muted-foreground">Keep practicing to build your strengths!</p>
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                                                <TrendingDown className="h-4 w-4" />
                                                Areas for Improvement
                                            </h4>
                                            <div className="space-y-2">
                                                {topicPerformance
                                                    .filter((t) => t.accuracy < 70)
                                                    .map((topic) => (
                                                        <div
                                                            key={topic.topic}
                                                            className="flex items-center gap-2 p-2 rounded bg-red-50 dark:bg-red-900/20"
                                                        >
                                                            <AlertCircle className="h-4 w-4 text-red-600" />
                                                            <span className="text-sm">
                                                                {topic.topic} ({topic.accuracy}%)
                                                            </span>
                                                        </div>
                                                    ))}
                                                {topicPerformance.filter((t) => t.accuracy < 70).length === 0 && (
                                                    <p className="text-sm text-muted-foreground">Great job! No major weak areas identified.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="recommendations" className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Personalized Study Plan</h3>
                            <p className="text-muted-foreground">Recommendations based on your performance</p>
                        </div>

                        <div className="grid gap-4">
                            {studyRecommendations.map((rec, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge
                                                        className={`${rec.priority === "high" ? "bg-red-100 text-red-800" : rec.priority === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                                                    >
                                                        {rec.priority} priority
                                                    </Badge>
                                                    <Badge variant="outline">{rec.type}</Badge>
                                                    <Badge variant="outline">{rec.difficulty}</Badge>
                                                </div>
                                                <h4 className="font-semibold text-lg mb-1">{rec.title}</h4>
                                                <p className="text-muted-foreground mb-3">{rec.description}</p>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{rec.estimatedTime} min</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        {rec.type === "quiz" && <Brain className="h-4 w-4" />}
                                                        {rec.type === "flashcard" && <Zap className="h-4 w-4" />}
                                                        {rec.type === "reading" && <BookOpen className="h-4 w-4" />}
                                                        {rec.type === "video" && <PlayCircle className="h-4 w-4" />}
                                                        <span className="capitalize">{rec.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="ml-4">
                                                Start Learning
                                                <ArrowRight className="h-4 w-4 ml-2" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                                        <Calendar className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-lg mb-1">Create Study Schedule</h4>
                                        <p className="text-muted-foreground">
                                            Set up a personalized study schedule based on your performance and goals.
                                        </p>
                                    </div>
                                    <Button variant="outline">Create Schedule</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
