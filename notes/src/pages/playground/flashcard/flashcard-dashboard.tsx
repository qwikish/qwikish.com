"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    BookOpen,
    Clock,
    Trophy,
    Zap,
    Plus,
    ChevronRight,
    TrendingUp,
    Target,
    Filter,
    Search,
    MoreHorizontal,
    Play,
    Edit,
    Trash2,
    Star,
    BarChart3,
    Brain,
    Activity,
    Flame,
    CheckCircle2,
    RotateCcw,
    Eye,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function FlashcardDashboard() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")

    // Enhanced sample data
    const stats = [
        { title: "Total Decks", value: 24, icon: BookOpen, change: "+3 this week", trend: "up" },
        { title: "Cards Studied", value: 1247, icon: Brain, change: "+89 today", trend: "up" },
        { title: "Study Streak", value: "15 days", icon: Flame, change: "Keep it up!", trend: "up" },
        { title: "Mastery Rate", value: "78%", icon: Trophy, change: "+12% this month", trend: "up" },
    ]

    const achievements = [
        { title: "Deck Master", description: "Created 10 flashcard decks", icon: BookOpen, unlocked: true },
        { title: "Study Streak", description: "15-day study streak", icon: Flame, unlocked: true },
        { title: "Speed Learner", description: "Study 100 cards in one session", icon: Zap, unlocked: false },
        { title: "Perfect Memory", description: "100% accuracy on 5 decks", icon: Trophy, unlocked: false },
    ]

    const recentDecks = [
        {
            id: "1",
            title: "JavaScript Fundamentals",
            description: "Core JavaScript concepts and syntax",
            cardCount: 45,
            category: "Programming",
            difficulty: "Medium",
            studyProgress: 78,
            lastStudied: "2024-01-15",
            mastered: 35,
            learning: 8,
            new: 2,
            status: "active",
            creator: "You",
        },
        {
            id: "2",
            title: "React Hooks",
            description: "useState, useEffect, and custom hooks",
            cardCount: 28,
            category: "React",
            difficulty: "Hard",
            studyProgress: 92,
            lastStudied: "2024-01-14",
            mastered: 26,
            learning: 2,
            new: 0,
            status: "completed",
            creator: "You",
        },
        {
            id: "3",
            title: "CSS Grid & Flexbox",
            description: "Modern CSS layout techniques",
            cardCount: 32,
            category: "CSS",
            difficulty: "Easy",
            studyProgress: 45,
            lastStudied: "2024-01-12",
            mastered: 14,
            learning: 12,
            new: 6,
            status: "active",
            creator: "Sarah Kim",
        },
        {
            id: "4",
            title: "Node.js APIs",
            description: "Building REST APIs with Node.js",
            cardCount: 38,
            category: "Backend",
            difficulty: "Hard",
            studyProgress: 0,
            lastStudied: null,
            mastered: 0,
            learning: 0,
            new: 38,
            status: "new",
            creator: "You",
        },
    ]

    const studyStats = [
        { day: "Mon", cardsStudied: 45, accuracy: 85 },
        { day: "Tue", cardsStudied: 32, accuracy: 92 },
        { day: "Wed", cardsStudied: 58, accuracy: 78 },
        { day: "Thu", cardsStudied: 41, accuracy: 88 },
        { day: "Fri", cardsStudied: 67, accuracy: 91 },
        { day: "Sat", cardsStudied: 23, accuracy: 95 },
        { day: "Sun", cardsStudied: 39, accuracy: 87 },
    ]

    const categories = [
        { name: "Programming", decks: 8, progress: 72 },
        { name: "React", decks: 5, progress: 89 },
        { name: "CSS", decks: 4, progress: 65 },
        { name: "Backend", decks: 3, progress: 45 },
        { name: "Design", decks: 2, progress: 90 },
        { name: "Other", decks: 2, progress: 55 },
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
            case "active":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            case "new":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
        }
    }

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6 w-full mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Flashcard Dashboard</h1>
                    <p className="text-muted-foreground">Master concepts through spaced repetition</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Analytics
                    </Button>
                    <Button onClick={() => navigate("/playground/flashcards/new")}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Deck
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
                    <TabsTrigger value="decks">My Decks</TabsTrigger>
                    <TabsTrigger value="study">Study Session</TabsTrigger>
                    <TabsTrigger value="progress">Progress</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {/* Left Column - Recent Activity */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Weekly Study Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Activity className="h-5 w-5 text-blue-500" />
                                        Weekly Study Activity
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {studyStats.map((day) => (
                                            <div key={day.day} className="flex items-center gap-4">
                                                <div className="w-12 text-sm font-medium">{day.day}</div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between text-sm mb-1">
                                                        <span>{day.cardsStudied} cards</span>
                                                        <span className="text-muted-foreground">{day.accuracy}% accuracy</span>
                                                    </div>
                                                    <Progress value={day.accuracy} className="h-2" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Decks */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5 text-purple-500" />
                                        Recent Decks
                                    </CardTitle>
                                    <Button variant="ghost" size="sm">
                                        View All
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {recentDecks.slice(0, 4).map((deck) => (
                                            <div
                                                key={deck.id}
                                                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                                                onClick={() => navigate(`/playground/flashcards/${deck.id}`)}
                                            >
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h3 className="font-medium">{deck.title}</h3>
                                                        <Badge className={getDifficultyColor(deck.difficulty)}>{deck.difficulty}</Badge>
                                                        <Badge className={getStatusColor(deck.status)}>{deck.status}</Badge>
                                                    </div>
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                        <span>{deck.cardCount} cards</span>
                                                        <span>{deck.studyProgress}% progress</span>
                                                        {deck.lastStudied && <span>Last: {new Date(deck.lastStudied).toLocaleDateString()}</span>}
                                                    </div>
                                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                                                        <span className="text-green-600">✓ {deck.mastered} mastered</span>
                                                        <span className="text-yellow-600">📚 {deck.learning} learning</span>
                                                        <span className="text-blue-600">✨ {deck.new} new</span>
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
                                                            <DropdownMenuItem onClick={() => navigate(`/playground/flashcards/${deck.id}`)}>
                                                                <Play className="mr-2 h-4 w-4" />
                                                                Study Now
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem onClick={() => navigate(`/playground/flashcards/${deck.id}/edit`)}>
                                                                <Edit className="mr-2 h-4 w-4" />
                                                                Edit Deck
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Eye className="mr-2 h-4 w-4" />
                                                                Preview
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

                        {/* Right Column - Categories & Quick Actions */}
                        <div className="space-y-6">
                            {/* Study Categories */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Target className="h-5 w-5 text-green-500" />
                                        Study Categories
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {categories.map((category) => (
                                            <div key={category.name} className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="font-medium">{category.name}</span>
                                                    <span className="text-sm text-muted-foreground">{category.decks} decks</span>
                                                </div>
                                                <Progress value={category.progress} className="h-2" />
                                                <div className="text-xs text-muted-foreground text-right">{category.progress}% mastered</div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Study Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Zap className="h-5 w-5 text-yellow-500" />
                                        Quick Study
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 gap-3">
                                    <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                        <Brain className="h-5 w-5" />
                                        <span className="text-xs">Review Due</span>
                                    </Button>
                                    <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                        <Star className="h-5 w-5" />
                                        <span className="text-xs">Favorites</span>
                                    </Button>
                                    <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                        <RotateCcw className="h-5 w-5" />
                                        <span className="text-xs">Difficult Cards</span>
                                    </Button>
                                    <Button variant="outline" className="h-20 flex flex-col gap-2 hover:bg-primary/5">
                                        <Clock className="h-5 w-5" />
                                        <span className="text-xs">Timed Study</span>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="decks" className="space-y-6">
                    {/* Search and Filter */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search decks..."
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
                                Sort by Progress
                            </Button>
                        </div>
                    </div>

                    {/* Deck Grid */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {recentDecks.map((deck) => (
                            <Card key={deck.id} className="hover:shadow-md transition-all duration-200">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg mb-1">{deck.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{deck.description}</p>
                                        </div>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="sm">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => navigate(`/playground/flashcards/${deck.id}`)}>
                                                    <Play className="mr-2 h-4 w-4" />
                                                    Study Deck
                                                </DropdownMenuItem>
                                                <DropdownMenuItem onClick={() => navigate(`/playground/flashcards/${deck.id}/edit`)}>
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
                                    <div className="space-y-4">
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="secondary">{deck.category}</Badge>
                                            <Badge className={getDifficultyColor(deck.difficulty)}>{deck.difficulty}</Badge>
                                            <Badge className={getStatusColor(deck.status)}>{deck.status}</Badge>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Progress</span>
                                                <span>{deck.studyProgress}%</span>
                                            </div>
                                            <Progress value={deck.studyProgress} className="h-2" />
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 text-xs">
                                            <div className="text-center p-2 rounded bg-green-50 dark:bg-green-900/20">
                                                <div className="font-semibold text-green-600">{deck.mastered}</div>
                                                <div className="text-green-600">Mastered</div>
                                            </div>
                                            <div className="text-center p-2 rounded bg-yellow-50 dark:bg-yellow-900/20">
                                                <div className="font-semibold text-yellow-600">{deck.learning}</div>
                                                <div className="text-yellow-600">Learning</div>
                                            </div>
                                            <div className="text-center p-2 rounded bg-blue-50 dark:bg-blue-900/20">
                                                <div className="font-semibold text-blue-600">{deck.new}</div>
                                                <div className="text-blue-600">New</div>
                                            </div>
                                        </div>

                                        <Button className="w-full" onClick={() => navigate(`/playground/flashcards/${deck.id}`)}>
                                            <Play className="h-4 w-4 mr-2" />
                                            Study Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="study" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-blue-500" />
                                    Due for Review
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center space-y-4">
                                    <div className="text-3xl font-bold text-blue-600">23</div>
                                    <div className="text-sm text-muted-foreground">Cards ready for review</div>
                                    <Button className="w-full">
                                        <Brain className="h-4 w-4 mr-2" />
                                        Start Review Session
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    New Cards
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center space-y-4">
                                    <div className="text-3xl font-bold text-yellow-600">12</div>
                                    <div className="text-sm text-muted-foreground">New cards to learn</div>
                                    <Button variant="outline" className="w-full">
                                        <Plus className="h-4 w-4 mr-2" />
                                        Learn New Cards
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Study Recommendations</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentDecks.slice(0, 3).map((deck) => (
                                    <div key={deck.id} className="flex items-center justify-between p-3 rounded-lg border">
                                        <div className="flex-1">
                                            <div className="font-medium">{deck.title}</div>
                                            <div className="text-sm text-muted-foreground">
                                                {deck.learning + deck.new} cards need attention
                                            </div>
                                        </div>
                                        <Button size="sm" onClick={() => navigate(`/playground/flashcards/${deck.id}`)}>
                                            Study
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="progress" className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Overall Progress */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-5 w-5 text-yellow-500" />
                                    Overall Progress
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-green-600">78%</div>
                                        <div className="text-sm text-muted-foreground">Average Mastery</div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">Mastered Cards</span>
                                            <span className="text-sm font-medium">892</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">Learning Cards</span>
                                            <span className="text-sm font-medium">234</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">New Cards</span>
                                            <span className="text-sm font-medium">121</span>
                                        </div>
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
                                    <div className="text-4xl font-bold text-orange-500">15</div>
                                    <div className="text-sm text-muted-foreground">Days in a row</div>
                                    <div className="grid grid-cols-7 gap-1 mt-4">
                                        {Array.from({ length: 21 }, (_, i) => (
                                            <div
                                                key={i}
                                                className={`w-6 h-6 rounded-sm ${i < 15
                                                        ? "bg-orange-500"
                                                        : i === 15
                                                            ? "bg-orange-200 dark:bg-orange-900"
                                                            : "bg-gray-200 dark:bg-gray-700"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-xs text-muted-foreground">Great consistency! 🔥</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
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
    )
}
