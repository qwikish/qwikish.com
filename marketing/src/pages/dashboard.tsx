import {
    BookOpen,
    ClipboardList,
    Brain,
    ListTodo,
    Sparkles,
    Clock,
    Zap,
    BarChart2,
    Target,
    Award,
    Settings,
    Bell,
    FileText,
    Timer,
    Video,
    CheckCircle,
    Rocket,
    Lightbulb,
    Clock4,
    TrendingUp,
    Calendar,
    Users
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MinimalDashboard() {
    // Stats data
    const stats = [
        { title: "Notes", value: 18, icon: BookOpen, change: "+3 this week", color: "text-blue-500", bg: "bg-blue-100" },
        { title: "Flashcards", value: 42, icon: ClipboardList, change: "8 reviewed", color: "text-purple-500", bg: "bg-purple-100" },
        { title: "Tasks", value: 12, icon: ListTodo, change: "5 completed", color: "text-green-500", bg: "bg-green-100" },
        { title: "Quizzes", value: 6, icon: Brain, change: "1 new", color: "text-orange-500", bg: "bg-orange-100" },
        { title: "Study Hours", value: 28, icon: Clock4, change: "+5 from last week", color: "text-red-500", bg: "bg-red-100" },
        { title: "Streak", value: 14, icon: Award, change: "3 days to next level", color: "text-yellow-500", bg: "bg-yellow-100" }
    ];

    // Quick actions
    const quickActions = [
        { label: "New Note", icon: BookOpen, color: "bg-blue-500", description: "Create and organize study notes" },
        { label: "Create Quiz", icon: ClipboardList, color: "bg-purple-500", description: "Test your knowledge with custom quizzes" },
        { label: "Add Task", icon: ListTodo, color: "bg-green-500", description: "Track your study goals and deadlines" },
        { label: "New Flashcard", icon: Brain, color: "bg-orange-500", description: "Build flashcard sets for memorization" },
        { label: "Start Pomodoro", icon: Timer, color: "bg-red-500", description: "Focus with timed study sessions" },
        { label: "Record Video", icon: Video, color: "bg-pink-500", description: "Create video notes and tutorials" }
    ];

    // Motivational quote
    const motivationalQuote = {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    };

    // Current features with detailed explanations
    const currentFeatures = {
        version: "1.2",
        features: [
            {
                name: "Smart Note-Taking System",
                description: "Create, organize, and search through your study notes with rich text formatting, tags, and categories. Link related concepts and build a comprehensive knowledge base.",
                icon: BookOpen,
                status: "Available"
            },
            {
                name: "Interactive Flashcard System",
                description: "Build custom flashcard decks with spaced repetition algorithms. Track your progress and focus on cards that need more practice with our intelligent review system.",
                icon: ClipboardList,
                status: "Available"
            },
            {
                name: "Task Management Hub",
                description: "Organize your study goals with priority levels, deadlines, and progress tracking. Set reminders and break down complex projects into manageable tasks.",
                icon: ListTodo,
                status: "Available"
            },
            {
                name: "Custom Quiz Builder",
                description: "Create personalized quizzes from your notes and study materials. Multiple question types, instant feedback, and detailed performance analytics to identify knowledge gaps.",
                icon: Brain,
                status: "Available"
            },
            {
                name: "Study Analytics Dashboard",
                description: "Comprehensive insights into your learning patterns, time spent studying, progress across subjects, and performance trends to optimize your study strategy.",
                icon: BarChart2,
                status: "Available"
            },
            {
                name: "Pomodoro Focus Timer",
                description: "Built-in timer for focused study sessions with customizable work and break intervals. Track your focused time and maintain productivity throughout your study sessions.",
                icon: Timer,
                status: "Available"
            }
        ]
    };

    // Upcoming features roadmap
    const upcomingFeatures = [
        {
            version: "2.0",
            release: "Q4 2025",
            features: [
                {
                    name: "AI-Powered Study Recommendations",
                    description: "Intelligent system that analyzes your learning patterns and suggests personalized study plans, optimal review times, and content recommendations based on your performance data.",
                    icon: Lightbulb,
                    priority: "High"
                },
                {
                    name: "Collaborative Study Groups",
                    description: "Create or join study groups with real-time collaboration features. Share notes, create group quizzes, schedule study sessions, and track collective progress.",
                    icon: Users,
                    priority: "High"
                },
                {
                    name: "Advanced Progress Analytics",
                    description: "Deep learning insights with predictive analytics, knowledge retention curves, and performance forecasting. Identify optimal study schedules and track long-term retention.",
                    icon: TrendingUp,
                    priority: "Medium"
                },
                {
                    name: "Mobile App Integration",
                    description: "Full-featured mobile companion app with offline access, push notifications for study reminders, and seamless synchronization across all your devices.",
                    icon: Target,
                    priority: "High"
                },
                {
                    name: "Enhanced Pomodoro Analytics",
                    description: "Advanced timer analytics with productivity insights, focus pattern analysis, and personalized recommendations for optimal study session lengths.",
                    icon: Clock,
                    priority: "Medium"
                }
            ]
        },
        {
            version: "3.0",
            release: "Q2 2026",
            features: [
                {
                    name: "Gamification & Achievement System",
                    description: "Comprehensive achievement system with badges, leaderboards, study streaks, and progress milestones. Unlock rewards and compete with friends to stay motivated.",
                    icon: Award,
                    priority: "High"
                },
                {
                    name: "Video Note Recording & Annotation",
                    description: "Record video explanations, annotate with timestamps, and create interactive video tutorials. Perfect for visual learners and creating comprehensive study materials.",
                    icon: Video,
                    priority: "Medium"
                },
                {
                    name: "Speech-to-Note Transcription",
                    description: "Convert lectures, discussions, and verbal explanations into searchable text notes using advanced speech recognition. Automatic summarization and key point extraction.",
                    icon: FileText,
                    priority: "Medium"
                },
                {
                    name: "Advanced Spaced Repetition",
                    description: "Sophisticated algorithm that adapts to your individual learning patterns, optimizes review schedules, and maximizes long-term retention across all your study materials.",
                    icon: Brain,
                    priority: "High"
                },
                {
                    name: "Calendar & Scheduler Integration",
                    description: "Seamless integration with Google Calendar, Outlook, and other calendar apps. Automatic scheduling of study sessions, deadline reminders, and optimal study time suggestions.",
                    icon: Calendar,
                    priority: "Medium"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                            Welcome back, <span className="text-primary">Alex</span>! 👋
                        </h1>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                            <span className="text-sm sm:text-base">
                                {new Date().toLocaleDateString('en-US', {
                                    weekday: 'long',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <Badge variant="outline" className="flex items-center gap-1">
                                <Rocket className="h-3 w-3" />
                                <span>Current streak: 14 days</span>
                            </Badge>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Bell className="h-4 w-4" />
                            <span>Notifications</span>
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Settings className="h-4 w-4" />
                            <span>Settings</span>
                        </Button>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                {/* Motivational Quote */}
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10 flex items-start gap-4">
                    <Sparkles className="h-6 w-6 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <p className="text-base font-medium leading-relaxed">"{motivationalQuote.text}"</p>
                        <p className="text-sm text-muted-foreground mt-2">— {motivationalQuote.author}</p>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {stats.map((stat, i) => (
                        <div key={i} className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <p className="text-sm text-muted-foreground font-medium">{stat.title}</p>
                                    <p className="text-3xl font-bold mt-2">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
                                </div>
                                <div className={`h-12 w-12 flex items-center justify-center rounded-lg ${stat.bg}`}>
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Zap className="h-6 w-6 text-yellow-500" />
                        <h2 className="text-xl font-semibold">Quick Actions</h2>
                        <Badge variant="secondary" className="ml-auto">6 Actions Available</Badge>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {quickActions.map((action, i) => (
                            <Button
                                key={i}
                                variant="outline"
                                className="group flex flex-col items-start gap-3 h-auto p-6 text-left hover:shadow-md transition-all"
                            >
                                <div className={`h-12 w-12 rounded-lg ${action.color}/10 flex items-center justify-center group-hover:${action.color}/20 transition-colors`}>
                                    <action.icon className={`h-6 w-6 ${action.color} text-white`} />
                                </div>
                                <div>
                                    <p className="font-semibold text-base">{action.label}</p>
                                    <p className="text-sm text-muted-foreground mt-1">{action.description}</p>
                                </div>
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Current Features */}
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                        <h2 className="text-xl font-semibold">Current Features</h2>
                        <Badge variant="outline" className="ml-auto">Version {currentFeatures.version}</Badge>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {currentFeatures.features.map((feature, i) => (
                            <div key={i} className="rounded-lg border p-6 hover:shadow-sm transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="h-5 w-5 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="font-semibold">{feature.name}</h3>
                                            <Badge variant="outline" className="text-xs text-green-600 border-green-200">
                                                {feature.status}
                                            </Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Features Roadmap */}
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <Rocket className="h-6 w-6 text-blue-500" />
                        <h2 className="text-xl font-semibold">Feature Roadmap</h2>
                        <Badge variant="secondary" className="ml-auto">Coming Soon</Badge>
                    </div>
                    <div className="space-y-8">
                        {upcomingFeatures.map((version, i) => (
                            <div key={i}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <span className="text-sm font-bold text-blue-600">{version.version}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold">Version {version.version}</h3>
                                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                                        Expected {version.release}
                                    </Badge>
                                </div>
                                <div className="grid gap-4 md:grid-cols-2 ml-11">
                                    {version.features.map((feature, j) => (
                                        <div key={j} className="rounded-lg border p-5 hover:shadow-sm transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                                                    <feature.icon className="h-5 w-5 text-blue-500" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <h4 className="font-semibold text-sm">{feature.name}</h4>
                                                        <Badge
                                                            variant={feature.priority === "High" ? "default" : "secondary"}
                                                            className="text-xs"
                                                        >
                                                            {feature.priority} Priority
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center py-6 border-t">
                    <p className="text-sm text-muted-foreground">
                        Stay tuned for exciting updates! Follow our development progress and suggest new features.
                    </p>
                </div>
            </div>
        </div>
    );
}