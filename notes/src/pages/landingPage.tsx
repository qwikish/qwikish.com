/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { NotebookIcon, FileQuestionIcon, LayersIcon, LightbulbIcon, BookOpenIcon, BrainIcon, CheckIcon, Menu, X, FileTextIcon, Star, Sparkles, Zap, ArrowRight, Play, Users, Award, PenTool, Eye, BarChart3, Rocket, Crown, Gift, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Link } from 'react-router-dom';
// Simple theme toggle component
const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
    );
};

const LandingPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [email, setEmail] = useState('');

    const navItems = [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" }
    ];

    const coreFeatures = [
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "AI-Powered Smart Notes",
            description: "Write naturally while AI automatically formats, structures, and organizes your content with intelligent tagging and categorization.",
            gradient: "from-purple-500 to-blue-600",
            bgGradient: "from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20",
            borderColor: "border-purple-200 dark:border-purple-800",
            features: ["Auto-formatting", "Smart tagging", "Content structuring", "Quick search"]
        },
        {
            icon: <LayersIcon className="w-8 h-8" />,
            title: "Instant Flashcards",
            description: "Transform any note into interactive flashcards with spaced repetition algorithms for maximum retention and efficient learning.",
            gradient: "from-green-500 to-emerald-600",
            bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
            borderColor: "border-green-200 dark:border-green-800",
            features: ["Auto-generation", "Spaced repetition", "Progress tracking", "Performance analytics"]
        },
        {
            icon: <LightbulbIcon className="w-8 h-8" />,
            title: "Visual Mind Maps",
            description: "Convert complex topics into beautiful, interactive mind maps that help you understand connections and relationships between concepts.",
            gradient: "from-orange-500 to-red-600",
            bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
            borderColor: "border-orange-200 dark:border-orange-800",
            features: ["Auto mind mapping", "Interactive nodes", "Concept linking", "Visual learning"]
        },
        {
            icon: <FileQuestionIcon className="w-8 h-8" />,
            title: "Smart Quizzes",
            description: "Generate personalized quizzes from your notes with multiple question types and adaptive difficulty based on your performance.",
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
            borderColor: "border-blue-200 dark:border-blue-800",
            features: ["Auto quiz generation", "Multiple formats", "Adaptive difficulty", "Instant feedback"]
        },
        {
            icon: <BookOpenIcon className="w-8 h-8" />,
            title: "Mock Tests",
            description: "Simulate real exam conditions with comprehensive mock tests generated from your study materials and track detailed performance analytics.",
            gradient: "from-rose-500 to-pink-600",
            bgGradient: "from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20",
            borderColor: "border-rose-200 dark:border-rose-800",
            features: ["Exam simulation", "Time management", "Performance analysis", "Weakness identification"]
        },
        {
            icon: <FileTextIcon className="w-8 h-8" />,
            title: "PDF Chat",
            description: "Upload PDFs and chat with them naturally. Ask questions, get summaries, and extract key information from any document instantly.",
            gradient: "from-yellow-500 to-amber-600",
            bgGradient: "from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20",
            borderColor: "border-yellow-200 dark:border-yellow-800",
            features: ["Document chat", "Smart summaries", "Key extraction", "Question answering"]
        }
    ];

    const studyWorkflow = [
        {
            step: "01",
            title: "Create Smart Notes",
            description: "Write or paste your content. Our AI instantly formats, structures, and organizes it with intelligent tags.",
            icon: <PenTool className="w-6 h-6" />,
            color: "text-purple-600 dark:text-purple-400"
        },
        {
            step: "02",
            title: "Generate Study Tools",
            description: "One click transforms your notes into flashcards, quizzes, mind maps, and mock tests automatically.",
            icon: <Zap className="w-6 h-6" />,
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            step: "03",
            title: "Learn Actively",
            description: "Use spaced repetition, take adaptive quizzes, explore mind maps, and chat with your documents.",
            icon: <BrainIcon className="w-6 h-6" />,
            color: "text-green-600 dark:text-green-400"
        },
        {
            step: "04",
            title: "Track Progress",
            description: "Monitor your learning with detailed analytics, performance insights, and personalized recommendations.",
            icon: <BarChart3 className="w-6 h-6" />,
            color: "text-orange-600 dark:text-orange-400"
        }
    ];

    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Medical Student, AIIMS",
            avatar: "/api/placeholder/40/40",
            quote: "Qwikish Notes revolutionized my NEET prep. The AI-generated flashcards and mock tests helped me improve my scores by 40%. The mind maps make complex anatomy so much easier to understand!",
            rating: 5,
            subject: "Medicine"
        },
        {
            name: "Arjun Patel",
            role: "JEE Aspirant",
            avatar: "/api/placeholder/40/40",
            quote: "The PDF chat feature is incredible! I can upload my physics textbooks and get instant explanations for difficult concepts. It's like having a personal tutor 24/7.",
            rating: 5,
            subject: "Engineering"
        },
        {
            name: "Sneha Reddy",
            role: "CA Final Student",
            avatar: "/api/placeholder/40/40",
            quote: "Smart notes saved me countless hours during CA prep. The automatic organization and quiz generation from my study materials helped me pass with distinction!",
            rating: 5,
            subject: "Commerce"
        }
    ];

    const plans = [
        {
            name: "Free Plan",
            description: "Perfect for getting started with AI-powered learning",
            monthlyPrice: 0,
            annualPrice: 0,
            monthlyPriceUSD: "Free",
            annualPriceUSD: "Free",
            icon: <Gift className="w-6 h-6" />,
            bgColor: "bg-slate-500/10 dark:bg-slate-500/20",
            borderColor: "border-slate-200 dark:border-slate-800",
            iconBg: "bg-slate-100 dark:bg-slate-900/50",
            iconColor: "text-slate-600 dark:text-slate-400",
            buttonColor: "bg-slate-600 hover:bg-slate-700 dark:bg-slate-500 dark:hover:bg-slate-600",
            version: "V1",
            features: [
                { name: "AI-powered notes (limited requests/day)", included: true, version: "V1" },
                { name: "Create/edit flashcards & mind maps", included: true, version: "V1" },
                { name: "Generate quizzes from notes (daily limit)", included: true, version: "V1" },
                { name: "Task and time manager", included: true, version: "V1" },
                { name: "Access public skill roadmaps", included: true, version: "V1" },
                { name: "Resume builder (basic version)", included: true, version: "V2", comingSoon: true },
                { name: "Read-only access to community", included: true, version: "V2", comingSoon: true }
            ]
        },
        {
            name: "Starter Plan",
            description: "For students who need more than free at a pocket-friendly cost",
            monthlyPrice: 79,
            annualPrice: 799,
            monthlyPriceUSD: "$1",
            annualPriceUSD: "$10",
            icon: <Zap className="w-6 h-6" />,
            bgColor: "bg-green-500/10 dark:bg-green-500/20",
            borderColor: "border-green-200 dark:border-green-800",
            iconBg: "bg-green-100 dark:bg-green-900/50",
            iconColor: "text-green-600 dark:text-green-400",
            buttonColor: "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
            version: "V1 → V2",
            features: [
                { name: "Everything in Free, plus:", included: true, version: "" },
                { name: "More AI note requests per day", included: true, version: "V1" },
                { name: "Unlock flashcard review scheduling", included: true, version: "V1" },
                { name: "Daily smart quiz (1 topic/day)", included: true, version: "V1" },
                { name: "Save custom roadmaps", included: true, version: "V2", comingSoon: true },
                { name: "Access to community feed & reply", included: true, version: "V2", comingSoon: true }
            ]
        },
        {
            name: "Pro Plan",
            description: "Complete learning toolkit with unlimited AI features",
            monthlyPrice: 149,
            annualPrice: 1499,
            monthlyPriceUSD: "$3.49",
            annualPriceUSD: "$30",
            icon: <Crown className="w-6 h-6" />,
            bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
            borderColor: "border-blue-200 dark:border-blue-800",
            iconBg: "bg-blue-100 dark:bg-blue-900/50",
            iconColor: "text-blue-600 dark:text-blue-400",
            buttonColor: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
            popular: true,
            version: "V1 → V2",
            features: [
                { name: "Everything in Starter, plus:", included: true, version: "" },
                { name: "Unlimited AI note usage", included: true, version: "V1" },
                { name: "Full quiz generation (custom notes/topics)", included: true, version: "V1" },
                { name: "AI-personalized roadmaps", included: true, version: "V2", comingSoon: true },
                { name: "Flashcards with spaced repetition", included: true, version: "V1" },
                { name: "Smart task suggestions", included: true, version: "V2", comingSoon: true },
                { name: "Resume export with templates", included: true, version: "V2", comingSoon: true },
                { name: "Post/comment in community", included: true, version: "V2", comingSoon: true },
                { name: "Early access to job board", included: true, version: "V2", comingSoon: true }
            ]
        },
        {
            name: "Elite Plan",
            description: "Advanced AI tools and premium career support",
            monthlyPrice: 249,
            annualPrice: 2499,
            monthlyPriceUSD: "$5.99",
            annualPriceUSD: "$49",
            icon: <Rocket className="w-6 h-6" />,
            bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
            borderColor: "border-purple-200 dark:border-purple-800",
            iconBg: "bg-purple-100 dark:bg-purple-900/50",
            iconColor: "text-purple-600 dark:text-purple-400",
            buttonColor: "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600",
            version: "V2 → V3",
            features: [
                { name: "Everything in Pro, plus:", included: true, version: "" },
                { name: "AI Mock Tests", included: true, version: "V3", comingSoon: true },
                { name: "AI Roadmap Buddy (LLM assistant)", included: true, version: "V3", comingSoon: true },
                { name: "Smart video recommendations", included: true, version: "V3", comingSoon: true },
                { name: "Group study tools (shared notes/quizzes)", included: true, version: "V3", comingSoon: true },
                { name: "Private study groups & community badges", included: true, version: "V3", comingSoon: true },
                { name: "Custom reminders & streak tracking", included: true, version: "V2 → V3", comingSoon: true },
                { name: "AI resume review & optimization", included: true, version: "V3", comingSoon: true }
            ]
        }
    ];

    const stats = [
        { number: "50K+", label: "Active Students", icon: <Users className="w-5 h-5" /> },
        { number: "1M+", label: "Notes Created", icon: <NotebookIcon className="w-5 h-5" /> },
        { number: "5M+", label: "Flashcards Generated", icon: <LayersIcon className="w-5 h-5" /> },
        { number: "98%", label: "Success Rate", icon: <Award className="w-5 h-5" /> }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % coreFeatures.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-3">
                            <Link to="https://qwikish.com">
                                <span className="text-2xl font-bold text-foreground hover:text-primary duration-200 ">Qwikish</span>
                                <span className="text-sm text-primary font-medium ml-1">Notes</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-muted-foreground hover:text-primary font-medium transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                            <ThemeToggle />
                            <Button variant="ghost" className="text-muted-foreground">
                                Sign In
                            </Button>
                            <Button className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90">
                                Start Free Trial
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-background border-t border-border">
                        <div className="px-4 py-2 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-muted-foreground hover:text-primary font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 pb-2 space-y-2">
                                <Button variant="ghost" className="w-full justify-start">
                                    Sign In
                                </Button>
                                <Button className="w-full bg-gradient-to-r from-primary to-chart-2">
                                    Start Free Trial
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Badge className="bg-accent text-accent-foreground border-accent-foreground/20">
                                <Sparkles className="w-3 h-3 mr-1" />
                                AI-Powered Study Platform
                            </Badge>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
                            Transform Your
                            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> Notes </span>
                            Into Smart
                            <span className="bg-gradient-to-r from-chart-4 to-chart-5 bg-clip-text text-transparent"> Study Tools</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            Create, organize, and master your knowledge with AI-powered notes that automatically
                            generate flashcards, quizzes, mind maps, and mock tests. Study smarter, not harder.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button size="lg" className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 px-8 py-4 text-lg">
                                <Play className="w-5 h-5 mr-2" />
                                Start Learning Free
                            </Button>
                            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 hover:bg-accent">
                                <Eye className="w-5 h-5 mr-2" />
                                Watch Demo
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-accent-foreground">
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Everything You Need to Study
                            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> Effectively</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our AI-powered platform transforms your notes into a complete study ecosystem
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {coreFeatures.map((feature, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 bg-card border-2 hover:border-primary/20"
                                onClick={() => setActiveFeature(index)}
                            >
                                <CardHeader className="pb-4">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {feature.features.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckIcon className="w-4 h-4 text-chart-5" />
                                                <span className="text-sm text-muted-foreground">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button
                                        variant="outline"
                                        className="w-full mt-4 group-hover:bg-accent group-hover:shadow-md transition-all"
                                    >
                                        Try Feature
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Your Study Workflow
                            <span className="bg-gradient-to-r from-chart-4 to-chart-5 bg-clip-text text-transparent"> Simplified</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            From note-taking to mastery in four simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {studyWorkflow.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center">
                                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center ${step.color}`}>
                                        {step.icon}
                                    </div>
                                    <div className="text-sm font-bold text-muted-foreground mb-2">STEP {step.step}</div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                                {index < studyWorkflow.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-20 bg-gradient-to-br from-accent/30 to-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Loved by Students
                            <span className="bg-gradient-to-r from-chart-5 to-chart-3 bg-clip-text text-transparent"> Across India</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Join thousands of successful students who transformed their study habits
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-card hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-bold text-card-foreground">{testimonial.name}</div>
                                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-4">
                                        <Badge variant="outline" className="bg-accent text-accent-foreground border-accent-foreground/20">
                                            {testimonial.subject}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`}
                                            />
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Simple,
                            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> Affordable </span>
                            Pricing
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Choose the perfect plan for your study needs. Cancel anytime.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {plans.map((plan, index) => (
                            <Card
                                key={index}
                                className={`border-2 ${plan.popular ? 'ring-2 ring-primary relative' : 'border-border'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-primary text-primary-foreground">
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className={`w-12 h-12 rounded-lg ${plan.iconBg} flex items-center justify-center ${plan.iconColor}`}>
                                            {plan.icon}
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {plan.version}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-card-foreground">{plan.name}</CardTitle>
                                    <CardDescription>{plan.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="mb-6">
                                        <div className="text-3xl font-bold text-card-foreground mb-1">
                                            ₹{plan.monthlyPrice}
                                            <span className="text-base font-normal text-muted-foreground">/month</span>
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            or ₹{plan.annualPrice} billed annually ({plan.annualPriceUSD})
                                        </div>
                                    </div>
                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                {feature.included ? (
                                                    <CheckIcon className="w-4 h-4 text-chart-5 mt-0.5 flex-shrink-0" />
                                                ) : (
                                                    <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                                )}
                                                <span className="text-sm text-muted-foreground">
                                                    {feature.name}
                                                    {feature.comingSoon && (
                                                        <Badge variant="outline" className="ml-2 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800">
                                                            Coming Soon
                                                        </Badge>
                                                    )}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className={`w-full ${plan.buttonColor} text-white`}>
                                        Get Started
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-chart-2">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                        Ready to Transform Your Study Habits?
                    </h2>
                    <p className="text-xl text-primary-foreground/80 mb-8">
                        Join thousands of students who are studying smarter with Qwikish Notes
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-bold"
                        >
                            Start 7-Day Free Trial
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-foreground border-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
                        >
                            Talk to Sales
                        </Button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-foreground mb-4">
                            Frequently Asked
                            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent"> Questions</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to know about Qwikish Notes
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {[
                            {
                                question: "How does the AI convert my notes into study tools?",
                                answer: "Our AI analyzes your notes using natural language processing to identify key concepts, relationships, and important information. It then automatically structures this into flashcards, quizzes, and mind maps based on proven learning science principles."
                            },
                            {
                                question: "Is my data private and secure?",
                                answer: "Absolutely. We use end-to-end encryption for all your notes and study materials. Your data is never sold or shared with third parties. You can also enable local-only processing if you prefer."
                            },
                            {
                                question: "What subjects does Qwikish Notes work best for?",
                                answer: "Our platform is designed to work with any subject - from STEM fields like medicine and engineering to humanities and language learning. The AI adapts to different content types and learning styles."
                            },
                            {
                                question: "Can I collaborate with classmates?",
                                answer: "Yes! Our upcoming V3 release will include shared notes, group study features, and collaborative learning tools. You can join the waitlist to get early access."
                            }
                        ].map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                                <AccordionTrigger className="hover:no-underline py-4">
                                    <h3 className="text-lg font-medium text-left">{item.question}</h3>
                                </AccordionTrigger>
                                <AccordionContent className="pb-4 text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-xl flex items-center justify-center">
                                    <NotebookIcon className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div>
                                    <span className="text-xl font-bold text-card-foreground">Qwikish</span>
                                    <span className="text-sm text-primary font-medium ml-1">Notes</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                AI-powered study tools to help you learn faster and remember longer.
                            </p>
                            <div className="flex gap-4">
                                <Button variant="ghost" size="icon">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Button>
                                <Button variant="ghost" size="icon">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-4">Product</h3>
                            <ul className="space-y-2">
                                {['Features', 'How It Works', 'Pricing', 'Roadmap', 'Changelog'].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-4">Resources</h3>
                            <ul className="space-y-2">
                                {['Blog', 'Guides', 'Help Center', 'Tutorials', 'Community'].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-card-foreground mb-4">Company</h3>
                            <ul className="space-y-2">
                                {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground mb-4 md:mb-0">
                            © 2023 Qwikish Notes. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
