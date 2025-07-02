"use client"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Clock, ChevronLeft, ChevronRight, Flag, AlertCircle, Play, Pause } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface Question {
    id: string
    type: "multiple-choice" | "true-false" | "short-answer" | "essay"
    question: string
    options?: string[]
    correctAnswer: string | string[]
    explanation?: string
    points: number
    timeLimit?: number
}

interface QuizData {
    id: string
    title: string
    description: string
    questions: Question[]
    timeLimit: number
    passingScore: number
    difficulty: string
    category: string
}

export default function QuizTaking() {
    const navigate = useNavigate()
    const { quizId, noteId } = useParams()
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
    const [timeRemaining, setTimeRemaining] = useState(1800) // 30 minutes in seconds
    const [isStarted, setIsStarted] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set())
    const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)

    // Sample quiz data
    const quizData: QuizData = {
        id: quizId || "1",
        title: "Advanced React Patterns",
        description: "Test your knowledge of advanced React concepts and patterns",
        timeLimit: 30,
        passingScore: 70,
        difficulty: "Hard",
        category: "React",
        questions: [
            {
                id: "1",
                type: "multiple-choice",
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
            },
            {
                id: "2",
                type: "multiple-choice",
                question: "Which hook would you use to perform side effects in functional components?",
                options: ["useState", "useEffect", "useContext", "useReducer"],
                correctAnswer: "1",
                explanation: "useEffect is specifically designed for handling side effects in functional components.",
                points: 1,
            },
            {
                id: "3",
                type: "true-false",
                question: "React components must always return a single JSX element.",
                correctAnswer: "false",
                explanation: "React components can return fragments, arrays, or multiple elements wrapped in React.Fragment.",
                points: 1,
            },
            {
                id: "4",
                type: "short-answer",
                question: "What is the difference between controlled and uncontrolled components in React?",
                correctAnswer:
                    "Controlled components have their state managed by React, while uncontrolled components manage their own state internally.",
                points: 3,
            },
        ],
    }

    const currentQuestion = quizData.questions[currentQuestionIndex]
    const totalQuestions = quizData.questions.length
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

    // Timer effect
    useEffect(() => {
        if (!isStarted || isPaused) return

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    handleSubmitQuiz()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isStarted, isPaused])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    const handleAnswerChange = (questionId: string, answer: string | string[]) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleFlagQuestion = (questionId: string) => {
        setFlaggedQuestions((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(questionId)) {
                newSet.delete(questionId)
            } else {
                newSet.add(questionId)
            }
            return newSet
        })
    }

    const handleSubmitQuiz = () => {
        // Calculate score and navigate to results
        const score = calculateScore()
        navigate(noteId ? `/playground/${noteId}/quizzes/${quizId}/results`: `/playground/quizzes/${quizId}/results`, {
            state: { answers, score, timeSpent: quizData.timeLimit * 60 - timeRemaining },
        })
    }

    const calculateScore = () => {
        let totalPoints = 0
        let earnedPoints = 0

        quizData.questions.forEach((question) => {
            totalPoints += question.points
            const userAnswer = answers[question.id]
            if (userAnswer === question.correctAnswer) {
                earnedPoints += question.points
            }
        })

        return Math.round((earnedPoints / totalPoints) * 100)
    }

    const getAnsweredCount = () => {
        return Object.keys(answers).length
    }

    const startQuiz = () => {
        setIsStarted(true)
        setTimeRemaining(quizData.timeLimit * 60)
    }

    if (!isStarted) {
        return (
            <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
                <Card className="w-full max-w-2xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl mb-2">{quizData.title}</CardTitle>
                        <p className="text-muted-foreground">{quizData.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                                <div className="text-2xl font-bold">{totalQuestions}</div>
                                <div className="text-sm text-muted-foreground">Questions</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{quizData.timeLimit}m</div>
                                <div className="text-sm text-muted-foreground">Time Limit</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{quizData.passingScore}%</div>
                                <div className="text-sm text-muted-foreground">Passing Score</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{quizData.difficulty}</div>
                                <div className="text-sm text-muted-foreground">Difficulty</div>
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Instructions</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Read each question carefully before answering</li>
                                <li>• You can navigate between questions using the navigation buttons</li>
                                <li>• Flag questions you want to review later</li>
                                <li>• Make sure to submit your quiz before time runs out</li>
                                <li>• You can pause the quiz if needed</li>
                            </ul>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button variant="outline" onClick={() => navigate("/playground/quizzes")} className="flex-1">
                                Cancel
                            </Button>
                            <Button onClick={startQuiz} className="flex-1">
                                <Play className="mr-2 h-4 w-4" />
                                Start Quiz
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 px-4 py-3 sticky top-0 z-10">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <h1 className="text-lg font-semibold">{quizData.title}</h1>
                        <Badge variant="outline">{quizData.category}</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4" />
                            <span className={timeRemaining < 300 ? "text-red-500 font-medium" : ""}>{formatTime(timeRemaining)}</span>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsPaused(!isPaused)}
                            className={isPaused ? "text-green-600" : ""}
                        >
                            {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-4 grid gap-6 lg:grid-cols-4">
                {/* Question Navigation Sidebar */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-sm">Question Navigation</CardTitle>
                            <div className="text-xs text-muted-foreground">
                                {getAnsweredCount()}/{totalQuestions} answered
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-5 gap-2">
                                {quizData.questions.map((question, index) => {
                                    const isAnswered = answers[question.id] !== undefined
                                    const isCurrent = index === currentQuestionIndex
                                    const isFlagged = flaggedQuestions.has(question.id)

                                    return (
                                        <Button
                                            key={question.id}
                                            variant={isCurrent ? "default" : isAnswered ? "secondary" : "outline"}
                                            size="sm"
                                            className={`relative h-10 w-10 p-0 ${isFlagged ? "ring-2 ring-yellow-500" : ""}`}
                                            onClick={() => setCurrentQuestionIndex(index)}
                                        >
                                            {index + 1}
                                            {isFlagged && <Flag className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 fill-current" />}
                                        </Button>
                                    )
                                })}
                            </div>
                            <div className="mt-4 space-y-2 text-xs">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-primary rounded" />
                                    <span>Current</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-secondary rounded" />
                                    <span>Answered</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 border rounded" />
                                    <span>Not answered</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Flag className="w-3 h-3 text-yellow-500 fill-current" />
                                    <span>Flagged</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Question Area */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>
                                Question {currentQuestionIndex + 1} of {totalQuestions}
                            </span>
                            <span>{Math.round(progress)}% complete</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                    </div>

                    {/* Question Card */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant="outline">{currentQuestion.type.replace("-", " ")}</Badge>
                                        <Badge variant="secondary">
                                            {currentQuestion.points} point{currentQuestion.points !== 1 ? "s" : ""}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl leading-relaxed">{currentQuestion.question}</CardTitle>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleFlagQuestion(currentQuestion.id)}
                                    className={flaggedQuestions.has(currentQuestion.id) ? "text-yellow-500" : ""}
                                >
                                    <Flag className={`h-4 w-4 ${flaggedQuestions.has(currentQuestion.id) ? "fill-current" : ""}`} />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {currentQuestion.type === "multiple-choice" && (
                                <RadioGroup
                                    value={(answers[currentQuestion.id] as string) || ""}
                                    onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                                >
                                    <div className="space-y-3">
                                        {currentQuestion.options?.map((option, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                                            >
                                                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                                                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                </RadioGroup>
                            )}

                            {currentQuestion.type === "true-false" && (
                                <RadioGroup
                                    value={(answers[currentQuestion.id] as string) || ""}
                                    onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                                            <RadioGroupItem value="true" id="true" />
                                            <Label htmlFor="true" className="flex-1 cursor-pointer">
                                                True
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                                            <RadioGroupItem value="false" id="false" />
                                            <Label htmlFor="false" className="flex-1 cursor-pointer">
                                                False
                                            </Label>
                                        </div>
                                    </div>
                                </RadioGroup>
                            )}

                            {(currentQuestion.type === "short-answer" || currentQuestion.type === "essay") && (
                                <Textarea
                                    placeholder="Enter your answer here..."
                                    value={(answers[currentQuestion.id] as string) || ""}
                                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                                    className="min-h-[120px]"
                                />
                            )}
                        </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                        <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Previous
                        </Button>

                        <div className="flex items-center gap-2">
                            {flaggedQuestions.size > 0 && (
                                <Alert className="w-auto">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription className="text-sm">
                                        {flaggedQuestions.size} question{flaggedQuestions.size !== 1 ? "s" : ""} flagged for review
                                    </AlertDescription>
                                </Alert>
                            )}
                        </div>

                        {currentQuestionIndex === totalQuestions - 1 ? (
                            <Button onClick={() => setShowConfirmSubmit(true)} className="bg-green-600 hover:bg-green-700">
                                Submit Quiz
                            </Button>
                        ) : (
                            <Button onClick={handleNextQuestion}>
                                Next
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        )}
                    </div>

                    {/* Submit Confirmation Modal */}
                    {showConfirmSubmit && (
                        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                            <Card className="w-full max-w-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <AlertCircle className="h-5 w-5 text-yellow-500" />
                                        Submit Quiz?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Are you sure you want to submit your quiz? You won't be able to change your answers after
                                        submission.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <div className="font-medium">Answered:</div>
                                            <div className="text-muted-foreground">
                                                {getAnsweredCount()}/{totalQuestions} questions
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-medium">Time remaining:</div>
                                            <div className="text-muted-foreground">{formatTime(timeRemaining)}</div>
                                        </div>
                                    </div>
                                    {getAnsweredCount() < totalQuestions && (
                                        <Alert>
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                You have {totalQuestions - getAnsweredCount()} unanswered question
                                                {totalQuestions - getAnsweredCount() !== 1 ? "s" : ""}.
                                            </AlertDescription>
                                        </Alert>
                                    )}
                                    <div className="flex gap-3">
                                        <Button variant="outline" onClick={() => setShowConfirmSubmit(false)} className="flex-1">
                                            Continue Quiz
                                        </Button>
                                        <Button onClick={handleSubmitQuiz} className="flex-1 bg-green-600 hover:bg-green-700">
                                            Submit Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
