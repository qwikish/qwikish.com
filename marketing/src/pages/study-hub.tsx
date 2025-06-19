"use client"

import { CTACard } from "@/components/shared/dashboard/cta-card"
import StudySessionCard from "@/components/shared/dashboard/study/study-session-card"
import StudyMaterialCard from "@/components/shared/dashboard/study/study-material-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
    BookOpen,
    Clock,
    Target,
    ChevronDown,
    ChevronUp,
    Search,
    Filter,
    Plus,
    Calendar,
    Brain,
    Timer,
    Award,
    Flame,
    BarChart3,
} from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import ComingSoon from "@/components/shared/dashboard/comming-soon"

const StudyHubPage = () => {


    // For now make it comming soon
    
        return <ComingSoon title="Study Hub" description="An AI powered study hub app with rich features" version="v2"
            onNotifyMe={() => { }}
            expectedDate="August 2025"
            progress={0}
            key={1}
            features={[
                { name: "Study Material", description: "Access a wide range of study materials", status: "planned" },
                { name: "Study Sessions", description: "Create and manage study sessions", status: "planned" },
                { name: "Study Planner", description: "Plan your study schedule", status: "planned" },
                { name: "Study Summary", description: "Get a summary of your study progress", status: "planned" },
                { name: "Study Analytics", description: "Track your study progress", status: "planned" },
                { name: "Study Recommendations", description: "Get personalized study recommendations", status: "planned" },
                { name: "Study Notifications", description: "Get notifications about your study progress", status: "planned" },
                { name: "Study Resources", description: "Access a wide range of study resources", status: "planned" },
                { name: "Study Tools", description: "Use a wide range of study tools", status: "planned" },
                { name: "Study Community", description: "Join a community of study enthusiasts", status: "planned" },
                { name: "Study Challenges", description: "Participate in study challenges", status: "planned" },
                { name: "Study Quiz", description: "Take a study quiz", status: "planned" },
                
            ]}
        />
    


    const [showAllSessions, setShowAllSessions] = useState(false)
    const [showAllMaterials, setShowAllMaterials] = useState(false)
    const router = useNavigate()

    const data = {
        stats: [
            {
                title: "Study Hours This Week",
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: "24.5h",
                change: "+3.2h from last week",
                color: "chart-1",
                progress: 82,
            },
            {
                title: "Study Streak",
                icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: "12 days",
                change: "Personal best!",
                color: "chart-2",
                progress: 100,
            },
            {
                title: "Completed Sessions",
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 18,
                change: "+5 this week",
                color: "chart-3",
                progress: 75,
            },
            {
                title: "Average Focus Score",
                icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: "87%",
                change: "+12% improvement",
                color: "chart-4",
                progress: 87,
            },
        ],
        weeklyGoal: {
            target: 30,
            current: 24.5,
            percentage: 82,
        },
        studySessions: [
            {
                id: 1,
                title: "Advanced React Patterns",
                subject: "Web Development",
                duration: 120,
                completedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
                focusScore: 92,
                status: "completed",
                type: "deep-focus",
                notes: "Covered HOCs, render props, and compound components",
                tags: ["React", "JavaScript", "Patterns"],
            },
            {
                id: 2,
                title: "Machine Learning Fundamentals",
                subject: "Data Science",
                duration: 90,
                completedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
                focusScore: 88,
                status: "completed",
                type: "lecture",
                notes: "Linear regression and gradient descent concepts",
                tags: ["ML", "Python", "Mathematics"],
            },
            {
                id: 3,
                title: "System Design Interview Prep",
                subject: "Computer Science",
                duration: 150,
                scheduledFor: new Date(Date.now() + 2 * 60 * 60 * 1000),
                status: "scheduled",
                type: "practice",
                notes: "Focus on scalability and load balancing",
                tags: ["System Design", "Architecture", "Interview"],
            },
            {
                id: 4,
                title: "Spanish Vocabulary Review",
                subject: "Languages",
                duration: 45,
                completedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
                focusScore: 95,
                status: "completed",
                type: "flashcards",
                notes: "Reviewed 50 new words, 90% retention rate",
                tags: ["Spanish", "Vocabulary", "Memory"],
            },
            {
                id: 5,
                title: "Database Optimization Techniques",
                subject: "Backend Development",
                duration: 105,
                scheduledFor: new Date(Date.now() + 24 * 60 * 60 * 1000),
                status: "scheduled",
                type: "hands-on",
                notes: "Practice with indexing and query optimization",
                tags: ["Database", "SQL", "Performance"],
            },
        ],
        studyMaterials: [
            {
                id: 1,
                title: "React Documentation Deep Dive",
                type: "documentation",
                subject: "Web Development",
                progress: 75,
                totalPages: 120,
                currentPage: 90,
                lastAccessed: new Date(Date.now() - 2 * 60 * 60 * 1000),
                difficulty: "intermediate",
                estimatedTime: "4 hours",
                tags: ["React", "Documentation", "Frontend"],
                bookmarked: true,
            },
            {
                id: 2,
                title: "Machine Learning Course - Stanford",
                type: "video-course",
                subject: "Data Science",
                progress: 45,
                totalLessons: 22,
                completedLessons: 10,
                lastAccessed: new Date(Date.now() - 24 * 60 * 60 * 1000),
                difficulty: "advanced",
                estimatedTime: "12 weeks",
                tags: ["ML", "Stanford", "Mathematics"],
                bookmarked: true,
            },
            {
                id: 3,
                title: "System Design Primer",
                type: "article-series",
                subject: "Computer Science",
                progress: 30,
                totalArticles: 15,
                completedArticles: 4,
                lastAccessed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
                difficulty: "intermediate",
                estimatedTime: "6 hours",
                tags: ["System Design", "Architecture", "Scalability"],
                bookmarked: false,
            },
            {
                id: 4,
                title: "Spanish Grammar Workbook",
                type: "interactive-book",
                subject: "Languages",
                progress: 60,
                totalExercises: 200,
                completedExercises: 120,
                lastAccessed: new Date(Date.now() - 12 * 60 * 60 * 1000),
                difficulty: "beginner",
                estimatedTime: "8 weeks",
                tags: ["Spanish", "Grammar", "Exercises"],
                bookmarked: true,
            },
            {
                id: 5,
                title: "Database Design Patterns",
                type: "ebook",
                subject: "Backend Development",
                progress: 20,
                totalChapters: 12,
                completedChapters: 2,
                lastAccessed: new Date(Date.now() - 48 * 60 * 60 * 1000),
                difficulty: "advanced",
                estimatedTime: "10 hours",
                tags: ["Database", "Design Patterns", "Architecture"],
                bookmarked: false,
            },
            {
                id: 6,
                title: "JavaScript Algorithms & Data Structures",
                type: "practice-problems",
                subject: "Programming",
                progress: 85,
                totalProblems: 150,
                solvedProblems: 128,
                lastAccessed: new Date(Date.now() - 6 * 60 * 60 * 1000),
                difficulty: "intermediate",
                estimatedTime: "3 months",
                tags: ["JavaScript", "Algorithms", "Problem Solving"],
                bookmarked: true,
            },
        ],
    }

    const visibleSessions = showAllSessions ? data.studySessions : data.studySessions.slice(0, 4)
    const visibleMaterials = showAllMaterials ? data.studyMaterials : data.studyMaterials.slice(0, 6)

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
            <div className="p-4 sm:p-6 space-y-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                                Study Hub
                            </h1>
                            <p className="text-muted-foreground text-lg">Track your learning journey and stay focused</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" size="sm" className="gap-2">
                                <Filter className="w-4 h-4" />
                                Filter
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Calendar className="w-4 h-4" />
                                Schedule
                            </Button>
                            <Button size="sm" className="gap-2">
                                <Plus className="w-4 h-4" />
                                New Session
                            </Button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search sessions, materials..."
                            className="pl-10 bg-card/70 backdrop-blur-sm border-border focus:border-primary/50 focus:ring-primary/20"
                        />
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.stats.map((stat, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div
                                className={`absolute inset-0 bg-${stat.color}/5 group-hover:bg-${stat.color}/10 transition-colors`}
                            />
                            <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0 relative z-10">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                                <div className={`p-2 rounded-lg bg-${stat.color} text-primary-foreground shadow-lg`}>{stat.icon}</div>
                            </CardHeader>
                            <CardContent className="relative z-10 space-y-3">
                                <div className="space-y-1">
                                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">{stat.change}</p>
                                </div>
                                {stat.progress && (
                                    <div className="space-y-1">
                                        <Progress value={stat.progress} className="h-2" />
                                        <p className="text-xs text-muted-foreground text-right">{stat.progress}%</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Weekly Goal Progress */}
                <Card className="bg-card/80 backdrop-blur-sm border-border shadow-lg">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-chart-1" />
                                <CardTitle>Weekly Study Goal</CardTitle>
                            </div>
                            <Badge variant="outline" className="bg-chart-1/10 text-chart-1 border-chart-1/20">
                                {data.weeklyGoal.current}h / {data.weeklyGoal.target}h
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Progress value={data.weeklyGoal.percentage} className="h-3" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                            <span>You're {data.weeklyGoal.target - data.weeklyGoal.current}h away from your goal</span>
                            <span>{data.weeklyGoal.percentage}% complete</span>
                        </div>
                    </CardContent>
                </Card>

                {/* Study Hub CTA */}
                <CTACard
                    icon={Brain}
                    title="Study Hub Pro"
                    description="Advanced analytics, AI-powered recommendations, and premium study tools"
                    buttonText="Upgrade Now"
                    gradientFrom="from-purple-50/80"
                    gradientTo="to-indigo-50/80"
                    onClick={() => router("/app/study/upgrade")}
                />

                {/* Recent Study Sessions */}
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl border-border shadow-xl p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Recent Study Sessions</h2>
                            <p className="text-muted-foreground">Your latest learning activities and upcoming sessions</p>
                        </div>
                        {data.studySessions.length > 4 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAllSessions(!showAllSessions)}
                                className="mt-4 sm:mt-0 hover:bg-accent hover:text-accent-foreground"
                            >
                                {showAllSessions ? (
                                    <>
                                        <ChevronUp className="mr-2 h-4 w-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                        Show All ({data.studySessions.length})
                                    </>
                                )}
                            </Button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {visibleSessions.map((session) => (
                            <StudySessionCard key={session.id}
                                id={session.id}
                                duration={session.duration}
                                title={session.title}
                                subject={session.subject}
                                completedAt={session.completedAt}
                                scheduledFor={session.scheduledFor}
                                focusScore={session.focusScore}
                                status={session.status as "completed" | "scheduled" | "in-progress"}
                                type={session.type as "deep-focus" | "lecture" | "practice" | "flashcards" | "hands-on"}
                                notes={session.notes}
                                tags={session.tags}
                            />
                        ))}
                    </div>
                </div>

                {/* Study Materials */}
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl border-border shadow-xl p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Study Materials</h2>
                            <p className="text-muted-foreground">Your learning resources and reading progress</p>
                        </div>
                        {data.studyMaterials.length > 6 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAllMaterials(!showAllMaterials)}
                                className="mt-4 sm:mt-0 hover:bg-accent hover:text-accent-foreground"
                            >
                                {showAllMaterials ? (
                                    <>
                                        <ChevronUp className="mr-2 h-4 w-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                        Show All ({data.studyMaterials.length})
                                    </>
                                )}
                            </Button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleMaterials.map((material) => (
                            <StudyMaterialCard
                                key={material.id}
                                id={material.id}
                                title={material.title}
                                subject={material.subject}
                                type={material.type as "documentation" | "video-course" | "article-series" | "interactive-book" | "ebook" | "practice-problems"}
                                progress={material.progress}
                                bookmarked={material.bookmarked}
                                difficulty={material.difficulty as "beginner" | "intermediate" | "advanced"}
                                estimatedTime={material.estimatedTime}
                                tags={material.tags}
                                lastAccessed={material.lastAccessed}
                                totalPages={material.totalPages}
                                currentPage={material.currentPage}
                                totalLessons={material.totalLessons}
                                completedLessons={material.completedLessons}
                                totalArticles={material.totalArticles}
                                completedArticles={material.completedArticles}
                                totalExercises={material.totalExercises}
                                completedExercises={material.completedExercises}
                                totalChapters={material.totalChapters}
                                completedChapters={material.completedChapters}
                                totalProblems={material.totalProblems}
                                solvedProblems={material.solvedProblems}
                            />
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardContent className="p-6 text-center space-y-3">
                            <div className="p-3 rounded-full bg-chart-1/10 w-fit mx-auto group-hover:bg-chart-1/20 transition-colors">
                                <Timer className="w-6 h-6 text-chart-1" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Start Focus Session</h3>
                                <p className="text-sm text-muted-foreground">Begin a timed study session</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardContent className="p-6 text-center space-y-3">
                            <div className="p-3 rounded-full bg-chart-2/10 w-fit mx-auto group-hover:bg-chart-2/20 transition-colors">
                                <BookOpen className="w-6 h-6 text-chart-2" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Add Material</h3>
                                <p className="text-sm text-muted-foreground">Upload or link study resources</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardContent className="p-6 text-center space-y-3">
                            <div className="p-3 rounded-full bg-chart-3/10 w-fit mx-auto group-hover:bg-chart-3/20 transition-colors">
                                <BarChart3 className="w-6 h-6 text-chart-3" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">View Analytics</h3>
                                <p className="text-sm text-muted-foreground">Check your study statistics</p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/80 backdrop-blur-sm border-border hover:shadow-lg transition-shadow cursor-pointer group">
                        <CardContent className="p-6 text-center space-y-3">
                            <div className="p-3 rounded-full bg-chart-4/10 w-fit mx-auto group-hover:bg-chart-4/20 transition-colors">
                                <Award className="w-6 h-6 text-chart-4" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">Achievements</h3>
                                <p className="text-sm text-muted-foreground">View your study milestones</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default StudyHubPage
