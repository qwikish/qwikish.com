"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Utility function for conditional class names
const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

interface Feature {
    title: string;
    description: string;
    details: string[];
    icon: string;
    bgColor: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    hoverColor: string;
    isAvailable: boolean;
}

const features: Feature[] = [
    {
        title: "AI-Powered Notes",
        description: "Organize, summarize, and highlight notes with the help of AI.",
        details: [
            "Smart text formatting & highlighting",
            "Auto-summary of long paragraphs",
            "AI-generated sub-notes & links",
        ],
        icon: "✍️",
        bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
        borderColor: "border-purple-200 dark:border-purple-800",
        iconBg: "bg-purple-100 dark:bg-purple-900/50",
        iconColor: "text-purple-600 dark:text-purple-400",
        hoverColor: "hover:shadow-purple-100 dark:hover:shadow-purple-900/50",
        isAvailable: true,
    },
    {
        title: "Task & Time Tracker",
        description: "Stay on top of your goals with planning and Pomodoro timers.",
        details: [
            "To-do lists with reminders",
            "Daily/weekly planner",
            "Pomodoro timers with progress rings",
        ],
        icon: "✅",
        bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
        borderColor: "border-blue-200 dark:border-blue-800",
        iconBg: "bg-blue-100 dark:bg-blue-900/50",
        iconColor: "text-blue-600 dark:text-blue-400",
        hoverColor: "hover:shadow-blue-100 dark:hover:shadow-blue-900/50",
        isAvailable: true,
    },
    {
        title: "Mind Maps & Flashcards",
        description: "Visual learning and spaced repetition made effortless.",
        details: [
            "Drag-and-drop mind maps",
            "Auto-generate flashcards from notes",
            "Track flashcard mastery over time",
        ],
        icon: "🧠",
        bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
        borderColor: "border-orange-200 dark:border-orange-800",
        iconBg: "bg-orange-100 dark:bg-orange-900/50",
        iconColor: "text-orange-600 dark:text-orange-400",
        hoverColor: "hover:shadow-orange-100 dark:hover:shadow-orange-900/50",
        isAvailable: true,
    },
    {
        title: "Auto-Generated Quizzes",
        description: "Instantly create MCQs and practice questions from your notes.",
        details: [
            "Multiple-choice & short-answer formats",
            "Auto evaluation & review",
            "Difficulty adjustment by AI",
        ],
        icon: "❓",
        bgColor: "bg-rose-500/10 dark:bg-rose-500/20",
        borderColor: "border-rose-200 dark:border-rose-800",
        iconBg: "bg-rose-100 dark:bg-rose-900/50",
        iconColor: "text-rose-600 dark:text-rose-400",
        hoverColor: "hover:shadow-rose-100 dark:hover:shadow-rose-900/50",
        isAvailable: true,
    },
    {
        title: "Personalized AI Roadmaps",
        description: "Your learning journey mapped intelligently — topic by topic.",
        details: [
            "Start from your skill level",
            "Track what you've learned",
            "Visual topic dependencies",
        ],
        icon: "🛣️",
        bgColor: "bg-green-500/10 dark:bg-green-500/20",
        borderColor: "border-green-200 dark:border-green-800",
        iconBg: "bg-green-100 dark:bg-green-900/50",
        iconColor: "text-green-600 dark:text-green-400",
        hoverColor: "hover:shadow-green-100 dark:hover:shadow-green-900/50",
        isAvailable: true,
    },
    {
        title: "Student Community",
        description: "Study groups, questions, and sharing — like Twitter for learners.",
        details: [
            "Post updates and study wins",
            "Join rooms by topic or interest",
            "Comment, react, and follow peers",
        ],
        icon: "💬",
        bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
        borderColor: "border-indigo-200 dark:border-indigo-800",
        iconBg: "bg-indigo-100 dark:bg-indigo-900/50",
        iconColor: "text-indigo-600 dark:text-indigo-400",
        hoverColor: "hover:shadow-indigo-100 dark:hover:shadow-indigo-900/50",
        isAvailable: false,
    },
    {
        title: "Job Board",
        description: "Internships and entry-level jobs collected across platforms.",
        details: [
            "Filter by skills or location",
            "Save and track applications",
            "Get personalized job suggestions",
        ],
        icon: "💼",
        bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
        iconBg: "bg-yellow-100 dark:bg-yellow-900/50",
        iconColor: "text-yellow-600 dark:text-yellow-400",
        hoverColor: "hover:shadow-yellow-100 dark:hover:shadow-yellow-900/50",
        isAvailable: false,
    },
    {
        title: "Resume & Interview Tools",
        description: "Create great resumes and get AI feedback for interviews.",
        details: [
            "Template-based resume builder",
            "Live AI resume score",
            "Mock interviews with AI",
        ],
        icon: "📄",
        bgColor: "bg-slate-500/10 dark:bg-slate-500/20",
        borderColor: "border-slate-200 dark:border-slate-800",
        iconBg: "bg-slate-100 dark:bg-slate-900/50",
        iconColor: "text-slate-600 dark:text-slate-400",
        hoverColor: "hover:shadow-slate-100 dark:hover:shadow-slate-900/50",
        isAvailable: false,
    },
    {
        title: "Mock Tests + AI Buddy",
        description: "Take practice exams and ask questions anytime.",
        details: [
            "Adaptive testing by subject",
            "AI feedback and solutions",
            "24/7 AI chat support while learning",
        ],
        icon: "🧪",
        bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
        borderColor: "border-teal-200 dark:border-teal-800",
        iconBg: "bg-teal-100 dark:bg-teal-900/50",
        iconColor: "text-teal-600 dark:text-teal-400",
        hoverColor: "hover:shadow-teal-100 dark:hover:shadow-teal-900/50",
        isAvailable: false,
    },
];

const stats = [
    {
        value: "5",
        label: "Available Features",
        bgColor: "bg-purple-50 dark:bg-purple-950/50",
        borderColor: "border-purple-100 dark:border-purple-900",
        textColor: "text-purple-600 dark:text-purple-400"
    },
    {
        value: "AI",
        label: "Powered Tools",
        bgColor: "bg-blue-50 dark:bg-blue-950/50",
        borderColor: "border-blue-100 dark:border-blue-900",
        textColor: "text-blue-600 dark:text-blue-400"
    },
    {
        value: "24/7",
        label: "Learning Support",
        bgColor: "bg-green-50 dark:bg-green-950/50",
        borderColor: "border-green-100 dark:border-green-900",
        textColor: "text-green-600 dark:text-green-400"
    },
    {
        value: "4+",
        label: "Coming Soon",
        bgColor: "bg-orange-50 dark:bg-orange-950/50",
        borderColor: "border-orange-100 dark:border-orange-900",
        textColor: "text-orange-600 dark:text-orange-400"
    }
];

export default function FeatureDashboard() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Everything You Need to Excel
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive tools designed to enhance your learning journey from note-taking to career success
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                        className="group"
                    >
                        <Card className={cn(
                            "relative cursor-pointer transition-all duration-300 h-full",
                            feature.borderColor,
                            feature.hoverColor,
                            "hover:scale-105 hover:shadow-xl",
                            hoveredCard === index ? "shadow-xl scale-105" : "",
                            !feature.isAvailable ? "opacity-75" : ""
                        )}>
                            {/* Status Badge */}
                            {!feature.isAvailable && (
                                <div className="absolute -top-2 -right-2 z-20">
                                    <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                                        Coming Soon
                                    </Badge>
                                </div>
                            )}

                            {/* Background Gradient */}
                            <div className={cn(
                                "absolute inset-0 rounded-lg opacity-50",
                                feature.bgColor
                            )} />

                            <CardHeader className="relative z-10 pb-4">
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "w-12 h-12 rounded-lg flex items-center justify-center text-2xl shadow-sm",
                                        feature.iconBg,
                                        !feature.isAvailable ? "grayscale" : ""
                                    )}>
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-lg mb-1 flex items-center gap-2">
                                            {feature.title}
                                            {feature.isAvailable && (
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            )}
                                        </CardTitle>
                                        <CardDescription className="text-sm leading-relaxed">
                                            {feature.description}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="relative z-10 pt-0">
                                {/* Feature Details */}
                                <div className="space-y-2 mb-4">
                                    {feature.details.map((detail, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{
                                                opacity: hoveredCard === index ? 1 : 0.7,
                                                x: 0
                                            }}
                                            transition={{ duration: 0.2, delay: i * 0.1 }}
                                            className="flex items-center gap-2 text-sm text-muted-foreground"
                                        >
                                            <div className={cn(
                                                "w-1.5 h-1.5 rounded-full flex-shrink-0",
                                                feature.isAvailable ? "bg-green-500" : "bg-gray-400"
                                            )} />
                                            <span>{detail}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <Button
                                    variant={feature.isAvailable ? "outline" : "secondary"}
                                    className={cn(
                                        "w-full transition-all duration-200",
                                        feature.isAvailable ? feature.iconColor : "text-muted-foreground",
                                        feature.isAvailable ? feature.borderColor : "border-muted",
                                        "hover:bg-opacity-10"
                                    )}
                                    size="sm"
                                    disabled={!feature.isAvailable}
                                >
                                    {feature.isAvailable ? "Explore Feature" : "Coming Soon"}
                                </Button>
                            </CardContent>

                            {/* Hover Effect Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                                className={cn(
                                    "absolute inset-0 rounded-lg",
                                    feature.bgColor.replace('5/10', '5/20').replace('5/20', '5/30')
                                )}
                            />

                            {/* Unavailable Overlay */}
                            {!feature.isAvailable && (
                                <div className="absolute inset-0 bg-background/20 dark:bg-background/10 backdrop-blur-[0.5px] rounded-lg" />
                            )}
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Stats Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
                {stats.map((stat, index) => (
                    <Card key={index} className={cn(
                        "text-center border",
                        stat.borderColor,
                        stat.bgColor
                    )}>
                        <CardContent className="p-6">
                            <div className={cn(
                                "text-2xl font-bold mb-1",
                                stat.textColor
                            )}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>

            {/* Additional CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-12 text-center"
            >
                <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
                    <CardContent className="p-8">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Ready to Transform Your Learning?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Start with our available features and get early access to upcoming tools
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="min-w-[140px]">
                                Get Started Free
                            </Button>
                            <Button variant="outline" size="lg" className="min-w-[140px]">
                                Watch Demo
                            </Button>
                        </div>
                        <div className="flex justify-center gap-4 mt-6 flex-wrap">
                            <Badge variant="secondary">5 Features Available</Badge>
                            <Badge variant="secondary">Free Forever</Badge>
                            <Badge variant="secondary">No Credit Card</Badge>
                            <Badge variant="outline" className="border-orange-200 bg-orange-50 text-orange-800 dark:border-orange-800 dark:bg-orange-950 dark:text-orange-200">
                                4 More Coming Soon
                            </Badge>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
}