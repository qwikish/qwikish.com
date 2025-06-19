"use client"

import { CTACard } from "@/components/shared/dashboard/cta-card"
import RoadmapCard from "@/components/shared/dashboard/roadmap/roadmap-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Map, Target, CheckCircle, Clock, ChevronDown, ChevronUp, TrendingUp, Calendar, Flag } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const RoadmapPage = () => {
    const [showAllRoadmaps, setShowAllRoadmaps] = useState(false)
    const router = useNavigate()

    const data = {
        stats: [
            {
                title: "Active Roadmaps",
                icon: <Map className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 8,
            },
            {
                title: "Completed Milestones",
                icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 24,
            },
            {
                title: "In Progress",
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 12,
            },
            {
                title: "Overall Progress",
                icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: "67%",
            },
        ],
        roadmaps: [
            {
                title: "Frontend Development Mastery",
                description:
                    "Complete roadmap to become a proficient frontend developer covering React, TypeScript, and modern tools...",
                progress: 75,
                totalMilestones: 20,
                completedMilestones: 15,
                category: "Development",
                priority: "high",
                dueDate: new Date(2024, 11, 31),
                tags: ["React", "TypeScript", "CSS"],
                starred: true,
                status: "in-progress",
            },
            {
                title: "Backend Engineering Path",
                description: "Comprehensive backend development roadmap including Node.js, databases, and system design...",
                progress: 45,
                totalMilestones: 25,
                completedMilestones: 11,
                category: "Development",
                priority: "high",
                dueDate: new Date(2025, 2, 15),
                tags: ["Node.js", "Database", "API"],
                starred: true,
                status: "in-progress",
            },
            {
                title: "DevOps & Cloud Infrastructure",
                description: "Learn cloud platforms, containerization, CI/CD pipelines, and infrastructure as code...",
                progress: 30,
                totalMilestones: 18,
                completedMilestones: 5,
                category: "DevOps",
                priority: "medium",
                dueDate: new Date(2025, 5, 30),
                tags: ["AWS", "Docker", "Kubernetes"],
                starred: false,
                status: "in-progress",
            },
            {
                title: "Machine Learning Fundamentals",
                description: "Foundation in ML concepts, algorithms, and practical implementation with Python...",
                progress: 60,
                totalMilestones: 15,
                completedMilestones: 9,
                category: "AI/ML",
                priority: "medium",
                dueDate: new Date(2024, 10, 20),
                tags: ["Python", "ML", "Data Science"],
                starred: true,
                status: "in-progress",
            },
            {
                title: "Mobile App Development",
                description: "Cross-platform mobile development using React Native and Flutter...",
                progress: 20,
                totalMilestones: 22,
                completedMilestones: 4,
                category: "Mobile",
                priority: "low",
                dueDate: new Date(2025, 8, 15),
                tags: ["React Native", "Flutter", "Mobile"],
                starred: false,
                status: "planning",
            },
            {
                title: "System Design & Architecture",
                description: "Learn to design scalable systems, microservices, and distributed architectures...",
                progress: 85,
                totalMilestones: 12,
                completedMilestones: 10,
                category: "Architecture",
                priority: "high",
                dueDate: new Date(2024, 9, 30),
                tags: ["System Design", "Architecture", "Scalability"],
                starred: true,
                status: "near-completion",
            },
            {
                title: "Cybersecurity Essentials",
                description: "Comprehensive security roadmap covering web security, penetration testing, and best practices...",
                progress: 40,
                totalMilestones: 16,
                completedMilestones: 6,
                category: "Security",
                priority: "medium",
                dueDate: new Date(2025, 3, 10),
                tags: ["Security", "Penetration Testing", "OWASP"],
                starred: false,
                status: "in-progress",
            },
            {
                title: "Data Engineering Pipeline",
                description: "Build expertise in data pipelines, ETL processes, and big data technologies...",
                progress: 55,
                totalMilestones: 14,
                completedMilestones: 8,
                category: "Data",
                priority: "medium",
                dueDate: new Date(2025, 1, 28),
                tags: ["Data Engineering", "ETL", "Big Data"],
                starred: true,
                status: "in-progress",
            },
        ],
    }

    const visibleRoadmaps = showAllRoadmaps ? data.roadmaps : data.roadmaps.slice(0, 6)
    const overallProgress = Math.round(
        data.roadmaps.reduce((acc, roadmap) => acc + roadmap.progress, 0) / data.roadmaps.length,
    )

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">Learning Roadmaps</h1>
                        <p className="text-muted-foreground">Track your progress across multiple learning paths</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Updated today</span>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.stats.map((stat, index) => (
                        <Card key={index} className="hover:shadow-sm transition-shadow">
                            <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                                <div className="text-muted-foreground">{stat.icon}</div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2">
                                    <p className="text-3xl font-bold">{stat.value}</p>
                                    {stat.title === "Overall Progress" && (
                                        <div className="flex-1">
                                            <Progress value={overallProgress} className="h-2" />
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Roadmap App CTA */}
                <CTACard
                    icon={Target}
                    title="Learning Roadmaps"
                    description="Structured learning paths to master new skills and technologies"
                    buttonText="View All Roadmaps"
                    gradientFrom="from-green-50/80"
                    gradientTo="to-emerald-50/80"
                    onClick={() => router("/app/roadmaps/dashboard")}
                />

                {/* Quick Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border-l-4 border-l-green-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">High Priority</p>
                                    <p className="text-2xl font-bold">{data.roadmaps.filter((r) => r.priority === "high").length}</p>
                                </div>
                                <Flag className="w-8 h-8 text-green-500" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-blue-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Near Completion</p>
                                    <p className="text-2xl font-bold">{data.roadmaps.filter((r) => r.progress >= 80).length}</p>
                                </div>
                                <CheckCircle className="w-8 h-8 text-blue-500" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-orange-500">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Milestones</p>
                                    <p className="text-2xl font-bold">{data.roadmaps.reduce((acc, r) => acc + r.totalMilestones, 0)}</p>
                                </div>
                                <Target className="w-8 h-8 text-orange-500" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Featured Roadmaps */}
                <div className="rounded-lg border p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Your Learning Paths</h2>
                            <p className="text-sm text-muted-foreground">Active roadmaps and progress tracking</p>
                        </div>
                        {data.roadmaps.length > 6 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAllRoadmaps(!showAllRoadmaps)}
                                className="mt-2 sm:mt-0"
                            >
                                {showAllRoadmaps ? (
                                    <>
                                        <ChevronUp className="mr-2 h-4 w-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                        Show All ({data.roadmaps.length})
                                    </>
                                )}
                            </Button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleRoadmaps.map((roadmap, index) => (
                            <RoadmapCard key={index} category={roadmap.category} title={roadmap.title}
                                progress={roadmap.progress} totalMilestones={roadmap.totalMilestones}
                                completedMilestones={roadmap.completedMilestones} priority={roadmap.priority as "high" | "medium" | "low"}
                                dueDate={roadmap.dueDate} tags={roadmap.tags} starred={roadmap.starred}
                                status={roadmap.status as "planning" | "in-progress" | "near-completion" | "completed"}
                                description={roadmap.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadmapPage
