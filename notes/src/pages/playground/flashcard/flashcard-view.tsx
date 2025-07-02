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
    Brain,
    Target,
    BookOpen,
    Calendar,
    TrendingUp,
    Eye,
    Download,
    Share2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FlashcardView() {
    const navigate = useNavigate()
    const { noteId } = useParams()
    const [searchQuery, setSearchQuery] = useState("")

    // Sample flashcard decks for this note
    const noteDecks = [
        {
            id: "1",
            title: "React Hooks Fundamentals",
            description: "Master useState, useEffect, and custom hooks",
            cardCount: 24,
            difficulty: "Medium",
            studyProgress: 75,
            lastStudied: "2024-01-15",
            mastered: 18,
            learning: 4,
            new: 2,
            status: "active",
            category: "React",
            estimatedTime: 15,
        },
        {
            id: "2",
            title: "Component Lifecycle",
            description: "Understanding React component lifecycle methods",
            cardCount: 16,
            difficulty: "Hard",
            studyProgress: 92,
            lastStudied: "2024-01-14",
            mastered: 15,
            learning: 1,
            new: 0,
            status: "completed",
            category: "React",
            estimatedTime: 10,
        },
        {
            id: "3",
            title: "State Management Patterns",
            description: "Redux, Context API, and state management best practices",
            cardCount: 32,
            difficulty: "Hard",
            studyProgress: 45,
            lastStudied: "2024-01-12",
            mastered: 14,
            learning: 12,
            new: 6,
            status: "active",
            category: "React",
            estimatedTime: 25,
        },
        {
            id: "4",
            title: "React Performance",
            description: "Optimization techniques and performance patterns",
            cardCount: 20,
            difficulty: "Hard",
            studyProgress: 0,
            lastStudied: null,
            mastered: 0,
            learning: 0,
            new: 20,
            status: "new",
            category: "React",
            estimatedTime: 20,
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
            case "active":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
            case "new":
                return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
        }
    }

    const totalCards = noteDecks.reduce((sum, deck) => sum + deck.cardCount, 0)
    const totalMastered = noteDecks.reduce((sum, deck) => sum + deck.mastered, 0)
    const averageProgress = Math.round(noteDecks.reduce((sum, deck) => sum + deck.studyProgress, 0) / noteDecks.length)

    return (
        <div className="min-h-screen h-screen overflow-y-auto bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate(`/playground/${noteId}`)}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Note
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold">Note Flashcards</h1>
                            <p className="text-muted-foreground">Study decks created from your note content</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Study All
                        </Button>
                        <Button onClick={() => navigate(`/playground/${noteId}/flashcards/new`)}>
                            <Plus className="h-4 w-4 mr-2" />
                            Create Deck
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto p-6 space-y-6">
                {/* Stats Overview */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Decks</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{noteDecks.length}</div>
                            <p className="text-xs text-muted-foreground">Available for study</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Cards</CardTitle>
                            <Brain className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalCards}</div>
                            <p className="text-xs text-muted-foreground">Across all decks</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Mastered</CardTitle>
                            <Target className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalMastered}</div>
                            <p className="text-xs text-muted-foreground">Cards learned</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Progress</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{averageProgress}%</div>
                            <p className="text-xs text-muted-foreground">Average completion</p>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="all" className="space-y-6">
                    <div className="flex items-center justify-between">
                        <TabsList>
                            <TabsTrigger value="all">All Decks</TabsTrigger>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                            <TabsTrigger value="new">New</TabsTrigger>
                        </TabsList>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search decks..."
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
                            {noteDecks.map((deck) => (
                                <Card key={deck.id} className="hover:shadow-md transition-all duration-200">
                                    <CardHeader>
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <CardTitle className="text-lg mb-2">{deck.title}</CardTitle>
                                                <p className="text-sm text-muted-foreground">{deck.description}</p>
                                            </div>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}`)}>
                                                        <Play className="mr-2 h-4 w-4" />
                                                        Study Deck
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}/edit`)}
                                                    >
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit Deck
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Eye className="mr-2 h-4 w-4" />
                                                        Preview
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Share2 className="mr-2 h-4 w-4" />
                                                        Share
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Download className="mr-2 h-4 w-4" />
                                                        Export
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="text-red-600">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex gap-2 flex-wrap">
                                            <Badge variant="secondary">{deck.category}</Badge>
                                            <Badge className={getDifficultyColor(deck.difficulty)}>{deck.difficulty}</Badge>
                                            <Badge className={getStatusColor(deck.status)}>
                                                {deck.status === "new" ? "New" : deck.status}
                                            </Badge>
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

                                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>~{deck.estimatedTime} min</span>
                                            </div>
                                            {deck.lastStudied && (
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{new Date(deck.lastStudied).toLocaleDateString()}</span>
                                                </div>
                                            )}
                                        </div>

                                        <Button className="w-full" onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}`)}>
                                            <Play className="h-4 w-4 mr-2" />
                                            Study Now
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {noteDecks.length === 0 && (
                            <Card className="p-8 text-center">
                                <Brain className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">No flashcard decks yet</h3>
                                <p className="text-muted-foreground mb-4">Create your first deck from this note's content</p>
                                <Button onClick={() => navigate(`/playground/${noteId}/flashcards/new`)}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Create First Deck
                                </Button>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="active" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {noteDecks
                                .filter((deck) => deck.status === "active")
                                .map((deck) => (
                                    <Card key={deck.id} className="hover:shadow-md transition-all duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{deck.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{deck.description}</p>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex gap-2">
                                                <Badge className={getDifficultyColor(deck.difficulty)}>{deck.difficulty}</Badge>
                                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                                                    Active
                                                </Badge>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Progress:</span>
                                                    <span className="font-semibold">{deck.studyProgress}%</span>
                                                </div>
                                                <Progress value={deck.studyProgress} className="h-2" />
                                            </div>

                                            <div className="grid grid-cols-3 gap-2 text-xs text-center">
                                                <div>
                                                    <div className="font-semibold text-green-600">{deck.mastered}</div>
                                                    <div className="text-muted-foreground">Mastered</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-yellow-600">{deck.learning}</div>
                                                    <div className="text-muted-foreground">Learning</div>
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-blue-600">{deck.new}</div>
                                                    <div className="text-muted-foreground">New</div>
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full"
                                                onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}`)}
                                            >
                                                Continue Studying
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="completed" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {noteDecks
                                .filter((deck) => deck.status === "completed")
                                .map((deck) => (
                                    <Card key={deck.id} className="hover:shadow-md transition-all duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{deck.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{deck.description}</p>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex gap-2">
                                                <Badge className={getDifficultyColor(deck.difficulty)}>{deck.difficulty}</Badge>
                                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                                                    Completed
                                                </Badge>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span>Mastery:</span>
                                                    <span className="font-semibold text-green-600">{deck.studyProgress}%</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span>Cards Mastered:</span>
                                                    <span>
                                                        {deck.mastered}/{deck.cardCount}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span>Last Studied:</span>
                                                    <span>{deck.lastStudied && new Date(deck.lastStudied).toLocaleDateString()}</span>
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}/results`)}
                                                >
                                                    View Stats
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    className="flex-1"
                                                    onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}`)}
                                                >
                                                    Review
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="new" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {noteDecks
                                .filter((deck) => deck.status === "new")
                                .map((deck) => (
                                    <Card key={deck.id} className="hover:shadow-md transition-all duration-200">
                                        <CardHeader>
                                            <CardTitle className="text-lg">{deck.title}</CardTitle>
                                            <p className="text-sm text-muted-foreground">{deck.description}</p>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex gap-2">
                                                <Badge className={getDifficultyColor(deck.difficulty)}>{deck.difficulty}</Badge>
                                                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300">
                                                    New
                                                </Badge>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Brain className="h-4 w-4 text-muted-foreground" />
                                                    <span>{deck.cardCount} cards</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                                    <span>~{deck.estimatedTime} min</span>
                                                </div>
                                            </div>

                                            <Button
                                                className="w-full"
                                                onClick={() => navigate(`/playground/${noteId}/flashcards/${deck.id}`)}
                                            >
                                                <Play className="h-4 w-4 mr-2" />
                                                Start Learning
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
