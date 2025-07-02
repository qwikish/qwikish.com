"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Plus, Settings, Share2,  Clock,ArrowRight } from "lucide-react";

interface Roadmap {
    id: string;
    title: string;
    description: string;
    category: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    steps: number;
    completedSteps: number;
    estimatedTime: string;
    isFeatured: boolean;
    isNew: boolean;
}

const roadmaps: Roadmap[] = [
    {
        id: "1",
        title: "Frontend Developer Roadmap",
        description: "Master modern frontend development from basics to advanced concepts",
        category: "Development",
        difficulty: "Beginner",
        steps: 24,
        completedSteps: 8,
        estimatedTime: "3 months",
        isFeatured: true,
        isNew: false
    },
    {
        id: "2",
        title: "Machine Learning Fundamentals",
        description: "Learn the core concepts of ML and AI with practical projects",
        category: "Data Science",
        difficulty: "Intermediate",
        steps: 18,
        completedSteps: 0,
        estimatedTime: "4 months",
        isFeatured: true,
        isNew: true
    },
    {
        id: "3",
        title: "DevOps Engineering Path",
        description: "From CI/CD to cloud infrastructure and monitoring",
        category: "DevOps",
        difficulty: "Advanced",
        steps: 32,
        completedSteps: 12,
        estimatedTime: "6 months",
        isFeatured: false,
        isNew: false
    },
    {
        id: "4",
        title: "UX Design Mastery",
        description: "Become a professional UX designer with this comprehensive guide",
        category: "Design",
        difficulty: "Beginner",
        steps: 16,
        completedSteps: 0,
        estimatedTime: "2 months",
        isFeatured: false,
        isNew: true
    },
    {
        id: "5",
        title: "Blockchain Developer",
        description: "Learn smart contracts, DApps, and blockchain fundamentals",
        category: "Development",
        difficulty: "Intermediate",
        steps: 22,
        completedSteps: 5,
        estimatedTime: "5 months",
        isFeatured: true,
        isNew: false
    },
    {
        id: "6",
        title: "Data Visualization with D3.js",
        description: "Create stunning data visualizations for the web",
        category: "Data Science",
        difficulty: "Advanced",
        steps: 14,
        completedSteps: 0,
        estimatedTime: "2 months",
        isFeatured: false,
        isNew: false
    }
];

const categories = [
    { id: "all", name: "All Roadmaps" },
    { id: "development", name: "Development" },
    { id: "data-science", name: "Data Science" },
    { id: "devops", name: "DevOps" },
    { id: "design", name: "Design" },
    { id: "business", name: "Business" }
];

export default function RoadmapDashboard() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("all");

    const getDifficultyStyles = (difficulty: string) => {
        switch (difficulty) {
            case "Beginner":
                return {
                    bg: "bg-emerald-100 dark:bg-emerald-900/50",
                    text: "text-emerald-800 dark:text-emerald-200",
                    border: "border-emerald-200 dark:border-emerald-800"
                };
            case "Intermediate":
                return {
                    bg: "bg-blue-100 dark:bg-blue-900/50",
                    text: "text-blue-800 dark:text-blue-200",
                    border: "border-blue-200 dark:border-blue-800"
                };
            case "Advanced":
                return {
                    bg: "bg-purple-100 dark:bg-purple-900/50",
                    text: "text-purple-800 dark:text-purple-200",
                    border: "border-purple-200 dark:border-purple-800"
                };
            default:
                return {
                    bg: "bg-muted",
                    text: "text-muted-foreground",
                    border: "border-border"
                };
        }
      };

    return (
        <section className="w-full px-4 py-8 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-foreground mb-4"
                    >
                        Your Learning Journey, Mapped Out
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-3xl mx-auto"
                    >
                        Structured roadmaps to guide you from beginner to expert in any tech field
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                    >
                        <Button size="lg" className="min-w-[180px]">
                            Browse Roadmaps <ArrowRight className="ml-2 h-4 w-4 cursor-pointer" />
                        </Button>
                        <Button variant="outline" size="lg" className="min-w-[180px] text-primary cursor-pointer">
                            Create Your Own
                        </Button>
                    </motion.div>
                </div>

                {/* Categories Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mb-8"
                >
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                size="sm"
                                className={`${activeCategory === category.id ? "bg-primary text-primary-foreground" : "text-muted-foreground"} cursor-pointer`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </div>
                </motion.div>

                {/* Featured Roadmaps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-foreground mb-6">Featured Roadmaps</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {roadmaps.filter(r => r.isFeatured).map((roadmap, index) => {
                            const difficultyStyles = getDifficultyStyles(roadmap.difficulty);
                            return (
                                <motion.div
                                    key={roadmap.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onHoverStart={() => setHoveredCard(index)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    className="group"
                                >
                                    <Card className={cn(
                                        "relative cursor-pointer transition-all duration-300 h-full",
                                        "border-border hover:border-primary/30",
                                        "hover:shadow-md hover:scale-[1.02]",
                                        hoveredCard === index ? "shadow-md scale-[1.02]" : ""
                                    )}>
                                        {/* Status Badges */}
                                        <div className="absolute top-3 right-3 z-20 flex gap-2">
                                            {roadmap.isNew && (
                                                <Badge variant="default">New</Badge>
                                            )}
                                            {roadmap.isFeatured && (
                                                <Badge variant="secondary">Featured</Badge>
                                            )}
                                        </div>

                                        {/* Background */}
                                        <div className={cn(
                                            "absolute inset-0 rounded-lg",
                                            "bg-primary/5 dark:bg-primary/10"
                                        )} />

                                        <CardHeader className="relative z-10 pb-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <CardTitle className="text-xl mb-2 text-foreground">
                                                        {roadmap.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-muted-foreground">
                                                        {roadmap.description}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="relative z-10 pt-0">
                                            {/* Roadmap Meta */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <Badge
                                                    className={cn(
                                                        difficultyStyles.bg,
                                                        difficultyStyles.text,
                                                        difficultyStyles.border
                                                    )}
                                                >
                                                    {roadmap.difficulty}
                                                </Badge>
                                                <Badge variant="outline" className="text-muted-foreground">
                                                    {roadmap.category}
                                                </Badge>
                                            </div>

                                            {/* Progress */}
                                            {roadmap.completedSteps > 0 && (
                                                <div className="mb-4">
                                                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                                                        <span>Progress</span>
                                                        <span>{roadmap.completedSteps}/{roadmap.steps} steps</span>
                                                    </div>
                                                    <Progress
                                                        value={(roadmap.completedSteps / roadmap.steps) * 100}
                                                        className="h-2 bg-muted"
                                                    />
                                                </div>
                                            )}

                                            {/* Stats */}
                                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{roadmap.estimatedTime}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span>{roadmap.steps} steps</span>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "w-full mt-4 transition-all duration-200",
                                                    "text-primary hover:text-primary-foreground",
                                                    "border-primary hover:bg-primary/90"
                                                )}
                                                size="sm"
                                            >
                                                {roadmap.completedSteps > 0 ? "Continue Roadmap" : "Start Roadmap"}
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* All Roadmaps */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-foreground">All Roadmaps</h2>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="text-muted-foreground">
                                <Settings className="mr-2 h-4 w-4" />
                                Sort
                            </Button>
                            <Button variant="outline" size="sm" className="text-muted-foreground">
                                <Share2 className="mr-2 h-4 w-4" />
                                Share
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {roadmaps.map((roadmap, index) => {
                            const difficultyStyles = getDifficultyStyles(roadmap.difficulty);
                            return (
                                <motion.div
                                    key={roadmap.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
                                    onHoverStart={() => setHoveredCard(index + 3)}
                                    onHoverEnd={() => setHoveredCard(null)}
                                    className="group"
                                >
                                    <Card className={cn(
                                        "relative cursor-pointer transition-all duration-300 h-full",
                                        "border-border hover:border-primary/30",
                                        "hover:shadow-md hover:scale-[1.02]",
                                        hoveredCard === index + 3 ? "shadow-md scale-[1.02]" : ""
                                    )}>
                                        {/* Status Badges */}
                                        {roadmap.isNew && (
                                            <div className="absolute top-3 right-3 z-20">
                                                <Badge variant="default">New</Badge>
                                            </div>
                                        )}

                                        <CardHeader className="pb-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg mb-2 text-foreground">
                                                        {roadmap.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-muted-foreground">
                                                        {roadmap.description}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                            {/* Roadmap Meta */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <Badge
                                                    className={cn(
                                                        difficultyStyles.bg,
                                                        difficultyStyles.text,
                                                        difficultyStyles.border
                                                    )}
                                                >
                                                    {roadmap.difficulty}
                                                </Badge>
                                                <Badge variant="outline" className="text-muted-foreground">
                                                    {roadmap.category}
                                                </Badge>
                                            </div>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="h-4 w-4" />
                                                    <span>{roadmap.estimatedTime}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span>{roadmap.steps} steps</span>
                                                </div>
                                            </div>

                                            {/* Action Button */}
                                            <Button
                                                variant="outline"
                                                className="w-full text-muted-foreground hover:text-foreground"
                                                size="sm"
                                            >
                                                View Roadmap <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="mt-16 text-center"
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                Can't find what you're looking for?
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Create your own custom roadmap or request one from our community
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="min-w-[180px]">
                                    <Plus className="mr-2 h-4 w-4" /> Create Roadmap
                                </Button>
                                <Button variant="outline" size="lg" className="min-w-[180px] text-foreground">
                                    Request Roadmap
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}