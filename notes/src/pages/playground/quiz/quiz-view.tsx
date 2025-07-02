"use client"

import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
    ArrowLeft,
    Plus,
    Search,
    Filter,
    MoreHorizontal,
    Play,
    Edit,
    Trash2,
    Clock,
    Users,
    Target,
    BookOpen,
    Star,
    Calendar,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function QuizView() {
    const navigate = useNavigate()
    const { noteId } = useParams()
    const [searchQuery, setSearchQuery] = useState("")

    // Sample quizzes for this note
    const noteQuizzes = [
        {
            id: "1",
            title: "React Fundamentals Quiz",
            description: "Test your understanding of basic React concepts",
            questions: 15,
            difficulty: "Easy",
            timeLimit: 20,
            attempts: 3,
            bestScore: 92,
            lastAttempt: "2024-01-15",
            status: "completed",
            category: "React",
        },
        {
            id: "2",
            title: "Advanced Hooks Quiz",
            description: "Deep dive into React hooks and custom hooks",
            questions: 12,
            difficulty: "Hard",
            timeLimit: 25,
            attempts: 1,
            bestScore: 78,
            lastAttempt: "2024-01-10",
            status: "completed",
            category: "React",
        },
        {
            id: "3",
            title: "Component Patterns Quiz",
            description: "Test your knowledge of React component patterns",
            questions: 18,
            difficulty: "Medium",
            timeLimit: 30,
            attempts: 0,
            bestScore: null,
            lastAttempt: null,
            status: "not-started",
            category: "React",
        },
    ]

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
            case "Medium":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
            case "Hard":
                return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
            case "in-progress":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            case "not-started":
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
        }
    }

    const getScoreColor = (score: number) => {
        if (score >= 90) return "text-green-600"
        if (score >= 70) return "text-blue-600"
        if (score >= 50) return "text-yellow-600"
        return "text-red-600"
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate(`/playground/${noteId}`)}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Note
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold">Note Quizzes</h1>
                            <p className="text-muted-foreground">Quizzes generated from your note content</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Study Guide
                        </Button>
                        <Button onClick={() => navigate(`/playground/${noteId}/quizzes/new`)}>
                            <Plus className="h-4 w-4 mr-2" />
                            Create Quiz
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-6 space-y-6">
                {/* Stats Overview */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{noteQuizzes.length}</div>
                            <p className="text-xs text-muted-foreground">Available for this note</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Completed</CardTitle>
                            <Target className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{noteQuizzes.filter((q) => q.status === "completed").length}</div>
                            <p className="text-xs text-muted-foreground">Quizzes finished</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                            <Star className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">85%</div>
                            <p className="text-xs text-muted-foreground">Across all attempts</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">2.5h</div>
                            <p className="text-xs text-muted-foreground">Total time spent</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="all" className="space-y-6">
                    <div className="flex items-center justify-between">
                        <TabsList>
                            <TabsTrigger value="all">All Quizzes</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                            <TabsTrigger value="pending">Pending</TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search quizzes..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 w-64"
                                />
                            </div>
                            <Button variant="outline" size="sm">
                                <Filter className="h-4 w-4 mr-2" />
                                Filter
                            </Button>
                        </div>
                    </div>

                    <TabsContent value="all" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {noteQuizzes.map((quiz) => (
                                <Card key={quiz.id} className="hover:shadow-md transition-all duration-200">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                                                <p className="text-sm text-muted-foreground">{quiz.description}</p>
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}>
                                                        <Play className="mr-2 h-4 w-4" />
                                                        {quiz.status === "completed" ? "Retake" : "Start"} Quiz
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}/edit`)}>
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit Quiz
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete Quiz
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="secondary">{quiz.category}</Badge>
                                            <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                                            <Badge className={getStatusColor(quiz.status)}>
                                                {quiz.status === "not-started" ? "Not Started" : quiz.status}
                                            </Badge>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <BookOpen className="h-4 w-4 text-muted-foreground" />
                                                <span>{quiz.questions} questions</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-muted-foreground" />
                                                <span>{quiz.timeLimit} min</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span>
                                                    {quiz.attempts} attempt{quiz.attempts !== 1 ? "s" : ""}
                                                </span>
                                            </div>
                                            {quiz.bestScore && (
                                                <div className="flex items-center gap-2">
                                                    <Star className="h-4 w-4 text-muted-foreground" />
                                                    <span className={getScoreColor(quiz.bestScore)}>Best: {quiz.bestScore}%</span>
                                                </div>
                                            )}
                                        </div>

                                        {quiz.lastAttempt && (
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <Calendar className="h-3 w-3" />
                                                <span>Last attempt: {new Date(quiz.lastAttempt).toLocaleDateString()}</span>
                                            </div>
                                        )}

                                        <Button
                                            className="w-full"
                                            variant={quiz.status === "completed" ? "outline" : "default"}
                                            onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}
                                        >
                                            {quiz.status === "completed" ? "Retake Quiz" : "Start Quiz"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {noteQuizzes.length === 0 && (
                            <Card className="p-8 text-center">
                                <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">No quizzes yet</h3>
                                <p className="text-muted-foreground mb-4">Create your first quiz from this note's content</p>
                                <Button onClick={() => navigate(`/playground/${noteId}/quizzes/new`)}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create First Quiz
                                </Button>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="completed" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {noteQuizzes
                                .filter((quiz) => quiz.status === "completed")
                                .map((quiz) => (
                                    <Card key={quiz.id} className="hover:shadow-md transition-all duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{quiz.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{quiz.description}</p>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex gap-2">
                                                <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                                                    Completed
                                                </Badge>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Best Score:</span>
                                                    <span className={`font-semibold ${getScoreColor(quiz.bestScore!)}`}>{quiz.bestScore}%</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span>Attempts:</span>
                                                    <span>{quiz.attempts}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span>Last Attempt:</span>
                                                    <span>{new Date(quiz.lastAttempt!).toLocaleDateString()}</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}/results`)}
                                                >
                                                    View Results
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}
                                                >
                                                    Retake
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="pending" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {noteQuizzes
                                .filter((quiz) => quiz.status === "not-started")
                                .map((quiz) => (
                                    <Card key={quiz.id} className="hover:shadow-md transition-all duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{quiz.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{quiz.description}</p>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex gap-2">
                                                <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                                                <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300">
                                                    Not Started
                                                </Badge>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                                                    <span>{quiz.questions} questions</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                                    <span>{quiz.timeLimit} min</span>
                                                </div>
                                            </div>

                                            <Button className="w-full" onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}>
                                                <Play className="h-4 w-4 mr-2" />
                                                Start Quiz
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
