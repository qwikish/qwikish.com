import {  Clock, Layers, Plus, Zap, ChevronRight, Star, BarChart2 } from "lucide-react"
import { CTACard } from "@/components/shared/dashboard/cta-card"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function FlashcardsDashboard() {
    // Sample data
    const stats = [
        { title: "Total Decks", value: 18, icon: Layers, change: "+3 this week" },
        { title: "Mastered", value: 142, icon: Star, change: "24 today" },
        { title: "Avg. Recall", value: "87%", icon: BarChart2, change: "+5% this week" },
        { title: "Daily Goal", value: "15/20", icon: Clock, change: "5 remaining" }
    ]

    const recentDecks = [
        { id: 1, title: "JavaScript Basics", cards: 42, mastered: 28, lastReviewed: "2023-11-15" },
        { id: 2, title: "React Hooks", cards: 36, mastered: 22, lastReviewed: "2023-11-14" },
        { id: 3, title: "CSS Grid", cards: 25, mastered: 18, lastReviewed: "2023-11-12" }
    ]

    const recommendedDecks = [
        { name: "TypeScript Fundamentals", source: "From your notes", progress: 65 },
        { name: "Node.js Core Concepts", source: "Community deck", progress: 42 },
        { name: "GraphQL Basics", source: "Suggested for you", progress: 38 }
    ]

    return (
        <div className="min-h-screen bg-background">
        <div className="min-h-screen bg-background p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Flashcards</h1>
                    <p className="text-muted-foreground">Active recall and spaced repetition for better learning</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Deck
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <Card key={i} className="hover:shadow-sm transition-shadow">
                        <CardHeader className="flex flex-row justify-between items-center pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* CTA Card */}
            <CTACard
                icon={Layers}
                title="Qwikish Flashcards"
                description="Create flashcards from your Qwikish notes in seconds."
                buttonText="Get Started"
                gradientFrom="from-indigo-50/80"
                gradientTo="to-blue-50/80"
                onClick={() => console.log("Navigate to Qwikish Flashcards")}
            />

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Recent Decks */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Layers className="h-5 w-5 text-blue-500" />
                                Your Recent Decks
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentDecks.map((deck) => (
                                    <div key={deck.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                                        <div>
                                            <h3 className="font-medium">{deck.title}</h3>
                                            <div className="flex gap-4 mt-2">
                                                <span className="text-sm text-muted-foreground">
                                                    Cards: <span className="font-semibold text-foreground">{deck.cards}</span>
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    Mastered: <span className="font-semibold text-foreground">{deck.mastered}</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">
                                                {new Date(deck.lastReviewed).toLocaleDateString()}
                                            </span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Create New Deck */}
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="h-5 w-5 text-green-600 dark:text-green-300" />
                                Create New Flashcard Deck
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Start from scratch or import from your existing materials
                            </p>
                            <div className="flex gap-3">
                                <Button variant="secondary" className="flex-1">
                                    Blank Deck
                                </Button>
                                <Button className="flex-1">
                                    Import Content
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Recommended Decks */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="h-5 w-5 text-yellow-500" />
                                Recommended For You
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recommendedDecks.map((deck) => (
                                    <div key={deck.name} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                                        <h3 className="font-medium">{deck.name}</h3>
                                        <p className="text-sm text-muted-foreground mt-1">{deck.source}</p>
                                        <div className="mt-3">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Completion</span>
                                                <span>{deck.progress}%</span>
                                            </div>
                                            <Progress value={deck.progress} className="h-2" />
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
                                <Zap className="h-5 w-5 text-blue-500" />
                                Quick Study
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <Clock className="h-6 w-6" />
                                <span>5-Min Review</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <Star className="h-6 w-6" />
                                <span>Weakest Cards</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <BarChart2 className="h-6 w-6" />
                                <span>Test Mode</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <Layers className="h-6 w-6" />
                                <span>Mix Decks</span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
      </div>
    )
}