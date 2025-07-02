"use client"

import { useState } from "react"
import { BrainCircuit, Clock, Trophy, Zap, BookOpen, Plus, ChevronRight, TrendingUp, Calendar, Target, Filter, Search, MoreHorizontal, Play, Edit, Trash2, Star, Users, BarChart3, PieChart, Activity, Flame, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate, useParams } from "react-router-dom"

export default function QuizPage() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")
    const {noteId} = useParams<{ noteId: string }>()

    // Enhanced sample data
    const stats = [
        { title: "Total Quizzes", value: 156, icon: BrainCircuit, change: "+12 this week", trend: "up" },
        { title: "Average Score", value: "87%", icon: Trophy, change: "+5% from last month", trend: "up" },
        { title: "Study Streak", value: "23 days", icon: Flame, change: "Personal best!", trend: "up" },
        { title: "Time Saved", value: "45h", icon: Clock, change: "vs traditional study", trend: "neutral" },
    ]

    const achievements = [
        { title: "Quiz Master", description: "Completed 100 quizzes", icon: Trophy, unlocked: true },
        { title: "Perfect Score", description: "Got 100% on 10 quizzes", icon: Star, unlocked: true },
        { title: "Speed Demon", description: "Complete quiz in under 1 minute", icon: Zap, unlocked: false },
        { title: "Consistent Learner", description: "30-day study streak", icon: Calendar, unlocked: false },
    ]

    const recentQuizzes = [
        {
            id: 1,
            title: "Advanced React Patterns",
            score: 94,
            date: "2024-01-15",
            topic: "React",
            difficulty: "Hard",
            questions: 25,
            timeSpent: "12:34",
            status: "completed",
        },
        {
            id: 2,
            title: "JavaScript ES6+ Features",
            score: 88,
            date: "2024-01-14",
            topic: "JavaScript",
            difficulty: "Medium",
            questions: 20,
            timeSpent: "8:45",
            status: "completed",
        },
        {
            id: 3,
            title: "CSS Grid & Flexbox",
            score: 0,
            date: "2024-01-13",
            topic: "CSS",
            difficulty: "Easy",
            questions: 15,
            timeSpent: "0:00",
            status: "draft",
        },
        {
            id: 4,
            title: "Node.js Fundamentals",
            score: 76,
            date: "2024-01-12",
            topic: "Backend",
            difficulty: "Medium",
            questions: 18,
            timeSpent: "15:22",
            status: "completed",
        },
    ]

    const studyTopics = [
        { name: "React Hooks", progress: 85, totalQuizzes: 12, completed: 10, avgScore: 89 },
        { name: "TypeScript", progress: 72, totalQuizzes: 8, completed: 6, avgScore: 82 },
        { name: "GraphQL", progress: 45, totalQuizzes: 6, completed: 3, avgScore: 78 },
        { name: "Next.js", progress: 60, totalQuizzes: 10, completed: 6, avgScore: 85 },
    ]

    const weeklyProgress = [
        { day: "Mon", quizzes: 3, score: 85 },
        { day: "Tue", quizzes: 2, score: 92 },
        { day: "Wed", quizzes: 4, score: 78 },
        { day: "Thu", quizzes: 1, score: 95 },
        { day: "Fri", quizzes: 3, score: 88 },
        { day: "Sat", quizzes: 2, score: 90 },
        { day: "Sun", quizzes: 1, score: 87 },
    ]

    const leaderboard = [
        { rank: 1, name: "Alex Chen", score: 2847, avatar: "/placeholder.svg?height=32&width=32" },
        { rank: 2, name: "Sarah Kim", score: 2756, avatar: "/placeholder.svg?height=32&width=32" },
        { rank: 3, name: "You", score: 2634, avatar: "/placeholder.svg?height=32&width=32" },
        { rank: 4, name: "Mike Johnson", score: 2598, avatar: "/placeholder.svg?height=32&width=32" },
        { rank: 5, name: "Emma Davis", score: 2543, avatar: "/placeholder.svg?height=32&width=32" },
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
            case "draft":
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
            case "in-progress":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
        }
    }

    return (
        <div className="h-screen ">
            <div className="bg-background p-4 sm:p-6 max-w-7xl w-full mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Quiz Dashboard</h1>
                        <p className="text-muted-foreground">Master your knowledge, track your progress</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" onClick={() => navigate("/playground/quizzes/analytics")}>
                            <BarChart3 className="mr-2 h-4 w-4" />
                            Analytics
                        </Button>
                        <Button onClick={() => navigate(noteId ? `/playground/${noteId}/quizzes/new` : "/quizzes/new")}>
                            <Plus className="mr-2 h-4 w-4" />
                            Create Quiz
                        </Button>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, i) => (
                        <Card key={i} className="hover:shadow-md transition-all duration-200">
                            <CardHeader className="flex flex-row justify-between items-center pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <stat.icon className="h-4 w-4 text-primary" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="flex items-center gap-1 mt-1">
                                    {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-green-500" />}
                                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Main Content Tabs */}
                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="quizzes">My Quizzes</TabsTrigger>
                        <TabsTrigger value="progress">Progress</TabsTrigger>
                        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                        <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid gap-6 lg:grid-cols-3">
                            {/* Left Column - Recent Activity */}
                            <div className="space-y-6 lg:col-span-2">
                                {/* Weekly Progress Chart */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Activity className="h-5 w-5 text-blue-500" />
                                            Weekly Progress
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {weeklyProgress.map((day) => (
                                                <div key={day.day} className="flex items-center gap-4">
                                                    <div className="w-12 text-sm font-medium">{day.day}</div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between text-sm mb-1">
                                                            <span>{day.quizzes} quizzes</span>
                                                            <span className="text-muted-foreground">{day.score}% avg</span>
                                                        </div>
                                                        <Progress value={day.score} className="h-2" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Recent Quizzes */}
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            <BrainCircuit className="h-5 w-5 text-purple-500" />
                                            Recent Quizzes
                                        </CardTitle>
                                        <Button variant="ghost" size="sm">
                                            View All
                                            <ChevronRight className="ml-1 h-4 w-4" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {recentQuizzes.slice(0, 4).map((quiz) => (
                                                <div
                                                    key={quiz.id}
                                                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                                                    onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <h3 className="font-medium">{quiz.title}</h3>
                                                            <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                                                            <Badge className={getStatusColor(quiz.status)}>{quiz.status}</Badge>
                                                        </div>
                                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                            <span>{quiz.questions} questions</span>
                                                            <span>{quiz.timeSpent}</span>
                                                            {quiz.status === "completed" && (
                                                                <span className="font-semibold text-foreground">Score: {quiz.score}%</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <DropdownMenu>
                                                            <DropdownMenuTrigger asChild>
                                                                <Button variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                                                                    <MoreHorizontal className="h-4 w-4" />
                                                                </Button>
                                                            </DropdownMenuTrigger>
                                                            <DropdownMenuContent align="end">
                                                                <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}>
                                                                    <Play className="mr-2 h-4 w-4" />
                                                                    {quiz.status === "completed" ? "Retake" : "Continue"}
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}>
                                                                    <Edit className="mr-2 h-4 w-4" />
                                                                    Edit
                                                                </DropdownMenuItem>
                                                                <DropdownMenuItem className="text-red-600">
                                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                                    Delete
                                                                </DropdownMenuItem>
                                                            </DropdownMenuContent>
                                                        </DropdownMenu>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column - Study Topics & Quick Actions */}
                            <div className="space-y-6">
                                {/* Study Topics */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Target className="h-5 w-5 text-green-500" />
                                            Study Topics
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {studyTopics.map((topic) => (
                                                <div key={topic.name} className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-medium">{topic.name}</span>
                                                        <span className="text-sm text-muted-foreground">
                                                            {topic.completed}/{topic.totalQuizzes}
                                                        </span>
                                                    </div>
                                                    <Progress value={topic.progress} className="h-2" />
                                                    <div className="flex justify-between text-xs text-muted-foreground">
                                                        <span>{topic.progress}% complete</span>
                                                        <span>Avg: {topic.avgScore}%</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Quick Actions */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Zap className="h-5 w-5 text-yellow-500" />
                                            Quick Actions
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="grid grid-cols-2 gap-3">
                                        <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                            <Play className="h-5 w-5" />
                                            <span className="text-xs">Random Quiz</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                            <Clock className="h-5 w-5" />
                                            <span className="text-xs">Timed Challenge</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                            <BookOpen className="h-5 w-5" />
                                            <span className="text-xs">Study Mode</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                            <Users className="h-5 w-5" />
                                            <span className="text-xs">Multiplayer</span>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="quizzes" className="space-y-6">
                        {/* Search and Filter */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search quizzes..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filter
                                </Button>
                                <Button variant="outline" size="sm">
                                    Sort by Date
                                </Button>
                            </div>
                        </div>

                        {/* Quiz Grid */}
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {recentQuizzes.map((quiz) => (
                                <Card key={quiz.id} className="hover:shadow-md transition-all duration-200">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <CardTitle className="text-lg">{quiz.title}</CardTitle>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}`)}>
                                                        <Play className="mr-2 h-4 w-4" />
                                                        Start Quiz
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/quizzes/${quiz.id}/edit`)}>
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex gap-2">
                                                <Badge variant="secondary">{quiz.topic}</Badge>
                                                <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                                            </div>
                                            <div className="text-sm text-muted-foreground space-y-1">
                                                <div className="flex justify-between">
                                                    <span>Questions:</span>
                                                    <span>{quiz.questions}</span>
                                                </div>
                                                {quiz.status === "completed" && (
                                                    <>
                                                        <div className="flex justify-between">
                                                            <span>Score:</span>
                                                            <span className="font-semibold text-foreground">{quiz.score}%</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Time:</span>
                                                            <span>{quiz.timeSpent}</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <Button
                                                className="w-full"
                                                variant={quiz.status === "completed" ? "outline" : "default"}
                                                onClick={() => navigate(`/playground/quizzes/${quiz.id}`)}
                                            >
                                                {quiz.status === "completed" ? "Retake Quiz" : "Start Quiz"}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="progress" className="space-y-6">
                        <div className="grid gap-6 lg:grid-cols-2">
                            {/* Performance Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <PieChart className="h-5 w-5 text-blue-500" />
                                        Performance Overview
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-green-600">87%</div>
                                            <div className="text-sm text-muted-foreground">Average Score</div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Excellent (90-100%)</span>
                                                <span className="text-sm font-medium">45%</span>
                                            </div>
                                            <Progress value={45} className="h-2" />
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Good (80-89%)</span>
                                                <span className="text-sm font-medium">35%</span>
                                            </div>
                                            <Progress value={35} className="h-2" />
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Fair (70-79%)</span>
                                                <span className="text-sm font-medium">15%</span>
                                            </div>
                                            <Progress value={15} className="h-2" />
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Needs Improvement (&lt;70%)</span>
                                                <span className="text-sm font-medium">5%</span>
                                            </div>
                                            <Progress value={5} className="h-2" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Study Streak */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Flame className="h-5 w-5 text-orange-500" />
                                        Study Streak
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center space-y-4">
                                        <div className="text-4xl font-bold text-orange-500">23</div>
                                        <div className="text-sm text-muted-foreground">Days in a row</div>
                                        <div className="grid grid-cols-7 gap-1 mt-4">
                                            {Array.from({ length: 28 }, (_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-6 h-6 rounded-sm ${i < 23
                                                        ? "bg-orange-500"
                                                        : i === 23
                                                            ? "bg-orange-200 dark:bg-orange-900"
                                                            : "bg-gray-200 dark:bg-gray-700"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <div className="text-xs text-muted-foreground">Keep it up! You're on fire! 🔥</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="leaderboard" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-5 w-5 text-yellow-500" />
                                    Global Leaderboard
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {leaderboard.map((user) => (
                                        <div
                                            key={user.rank}
                                            className={`flex items-center gap-4 p-3 rounded-lg ${user.name === "You" ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"
                                                }`}
                                        >
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted font-bold text-sm">
                                                {user.rank}
                                            </div>
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={user.avatar || "/placeholder.svg"} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="font-medium">{user.name}</div>
                                                <div className="text-sm text-muted-foreground">{user.score} points</div>
                                            </div>
                                            {user.rank <= 3 && (
                                                <Trophy
                                                    className={`h-5 w-5 ${user.rank === 1 ? "text-yellow-500" : user.rank === 2 ? "text-gray-400" : "text-amber-600"
                                                        }`}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="achievements" className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {achievements.map((achievement) => (
                                <Card
                                    key={achievement.title}
                                    className={`${achievement.unlocked
                                        ? "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                                        : "opacity-60"
                                        }`}
                                >
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`p-3 rounded-full ${achievement.unlocked ? "bg-yellow-500 text-white" : "bg-muted"}`}
                                            >
                                                <achievement.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                                                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        {achievement.unlocked ? (
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle2 className="h-4 w-4" />
                                                <span className="text-sm font-medium">Unlocked!</span>
                                            </div>
                                        ) : (
                                            <div className="text-sm text-muted-foreground">Keep studying to unlock this achievement</div>
                                        )}
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
