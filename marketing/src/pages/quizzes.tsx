import { BrainCircuit, Clock, Trophy, Zap, BookOpen, Plus, ChevronRight } from "lucide-react"
import { CTACard } from "@/components/shared/dashboard/cta-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function QuizzesDashboard() {
    // Sample data
    const stats = [
        { title: "Total Quizzes", value: 24, icon: BrainCircuit, change: "+5 this month" },
        { title: "High Scores", value: 18, icon: Trophy, change: "3 new records" },
        { title: "Avg. Time", value: "2:45", icon: Clock, change: "Faster by 15s" },
        { title: "Mastery", value: "78%", icon: Zap, change: "+8% this week" }
    ]

    const recentQuizzes = [
        { id: 1, title: "JavaScript Fundamentals", score: 92, date: "2023-11-15", topic: "Programming" },
        { id: 2, title: "React Advanced Patterns", score: 85, date: "2023-11-10", topic: "Web Dev" },
        { id: 3, title: "TypeScript Quiz", score: 88, date: "2023-11-05", topic: "Programming" }
    ]

    const recommendedTopics = [
        { name: "CSS Grid", progress: 65 },
        { name: "Node.js", progress: 42 },
        { name: "GraphQL", progress: 38 }
    ]

    return (
        <div className="min-h-screen bg-background">
          <div className="min-h-screen bg-background p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Quiz Center</h1>
                    <p className="text-muted-foreground">Test your knowledge and track your progress</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Quiz
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
                icon={BrainCircuit}
                title="Qwikish Quizzes"
                description="Get started with Qwikish quizzes and improve your knowledge."
                buttonText="Open Quizzes"
                gradientFrom="from-indigo-50/80"
                gradientTo="to-blue-50/80"
                onClick={() => console.log("Navigate to quizzes page")}
            />

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Recent Quizzes */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BrainCircuit className="h-5 w-5 text-blue-500" />
                                Recent Quizzes
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recentQuizzes.map((quiz) => (
                                    <div key={quiz.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                                        <div>
                                            <h3 className="font-medium">{quiz.title}</h3>
                                            <div className="flex gap-2 mt-1">
                                                <Badge variant="secondary">{quiz.topic}</Badge>
                                                <span className="text-sm text-muted-foreground">
                                                    Score: <span className="font-semibold text-foreground">{quiz.score}%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-muted-foreground">
                                                {new Date(quiz.date).toLocaleDateString()}
                                            </span>
                                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Create New Quiz */}
                    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Plus className="h-5 w-5 text-green-600 dark:text-green-300" />
                                Create Custom Quiz
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                Build your own quiz from your notes or select topics
                            </p>
                            <div className="flex gap-3">
                                <Button variant="secondary" className="flex-1">
                                    From Notes
                                </Button>
                                <Button className="flex-1">
                                    Select Topics
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Recommended Topics */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="h-5 w-5 text-yellow-500" />
                                Recommended Topics
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recommendedTopics.map((topic) => (
                                    <div key={topic.name}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>{topic.name}</span>
                                            <span className="text-muted-foreground">{topic.progress}%</span>
                                        </div>
                                        <Progress value={topic.progress} className="h-2" />
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
                                Quick Actions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <Trophy className="h-6 w-6" />
                                <span>Leaderboard</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <Clock className="h-6 w-6" />
                                <span>Timed Quiz</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <BookOpen className="h-6 w-6" />
                                <span>Flashcards</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex flex-col gap-2">
                                <BrainCircuit className="h-6 w-6" />
                                <span>Challenge</span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        </div>
    )
}