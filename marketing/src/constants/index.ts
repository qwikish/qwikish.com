import { Book, BookOpenText, Group, List, ListTodo, Notebook, Option, Route, StickyNoteIcon, VideoIcon, Waypoints } from "lucide-react";

export const _hero_nav_items = [
    {
        title: 'Notes',
        href: '/notes',
        icon: Notebook,
        discription: 'An AI powered note taking app with rich features',
        isAvailable: true
    }, {
        title: 'Quizzes',
        href: '/quizzes',
        icon: Option,
        discription: 'An AI powered quiz app with rich features',
        isAvailable: true
    }, {
        title: 'Flashcards',
        href: '/flashcards',
        icon: StickyNoteIcon,
        discription: 'An AI powered flashcard app with rich features',
        isAvailable: true
    },
    {
        title: "Mindmaps",
        href: "/mindmaps",
        icon: Route,
        discription: "An AI powered mindmap app with rich features",
        isAvailable: true
    }, {
        title: "Task & To-Do manager",
        href: "/task-manager",
        icon: ListTodo,
        discription: "An AI powered task manager app with rich features",
        isAvailable: true
    }, {
        title: "Roadmaps",
        href: "/roadmaps",
        icon: Waypoints,
        discription: "An AI powered roadmap app with rich features",
        isAvailable: true
    }, {
        title: "Community",
        href: "/community",
        icon: Group,
        discription: "An Peer to Peer community app that connects you to like minded people",
        isAvailable: false
    }, {
        title: "Job Board",
        href: "/job-board",
        icon: List,
        discription: "An AI powered job board app with rich features",
        isAvailable: false
    }
]

export const _hero_nav_resources = [
    {
        title: "Blog",
        href: "/blog",
        icon: Book,
        discription: "Blog posts on Qwikish.com",
        isAvailable: false
    },
    {
        title: "Docs",
        href: "/docs",
        icon: BookOpenText,
        discription: "Documentation for Qwikish.com",
        isAvailable: false
    },
    {
        title: "Tutorials",
        href: "/tutorials",
        icon: VideoIcon,
        discription: "Tutorials for Qwikish.com",
        isAvailable: true
    }
]

export const howItWorksSteps = [
    {
        step: "1",
        title: "Take Notes or Upload PDFs",
        description: "Write directly or import content to get started quickly.",
        icon: "📝",
        bgColor: "bg-purple-500/10",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600"
    },
    {
        step: "2",
        title: "Use AI to Simplify & Learn",
        description: "Generate quizzes, flashcards, summaries, and mind maps instantly.",
        icon: "🤖",
        bgColor: "bg-blue-500/10",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600"
    },
    {
        step: "3",
        title: "Track Your Progress",
        description: "Plan your week, check off tasks, and see how far you've come.",
        icon: "📊",
        bgColor: "bg-green-500/10",
        iconBg: "bg-green-100",
        iconColor: "text-green-600"
    },
    {
        step: "4",
        title: "Connect & Grow",
        description: "Engage with peers, find jobs, and follow your personalized roadmap.",
        icon: "🤝",
        bgColor: "bg-orange-500/10",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-600"
    }
];

export const testimonials = [
    {
        name: "Priya S.",
        role: "Engineering Student",
        quote: "I never thought studying could be this easy. The AI features feel like magic.",
        avatar: "👩‍💻",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200"
    },
    {
        name: "Arjun K.",
        role: "UPSC Aspirant",
        quote: "Quizzes from notes and roadmaps keep me consistent and motivated.",
        avatar: "👨‍🎓",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200"
    },
    {
        name: "Aisha R.",
        role: "Design Student",
        quote: "Qwikish makes learning visual and fun. I love the flashcards and mind maps!",
        avatar: "👩‍🎨",
        bgColor: "bg-green-50",
        borderColor: "border-green-200"
    }
];

export const pricingPlans = [
    {
        name: "Starter",
        price: "Free",
        features: ["✍️ Basic Notes", "✅ Task Tracker", "🔄 Flashcards", "🧠 Mind Maps"],
        buttonText: "Start Free",
        buttonVariant: "outline",
        popular: false
    },
    {
        name: "Pro",
        price: "₹99/mo",
        features: ["🔓 Unlock AI Notes", "❓ Quizzes", "🛣️ Roadmaps", "💬 Community Access"],
        buttonText: "Upgrade to Pro",
        buttonVariant: "default",
        popular: true
    },
    {
        name: "Ultimate",
        price: "₹199/mo",
        features: ["💼 Job Board", "📄 Resume Builder", "🎯 Interview Prep", "🧪 Mock Tests", "AI Buddy"],
        buttonText: "Unlock Everything",
        buttonVariant: "outline",
        popular: false
    }
];



export const testimonialsRow1 = [
    {
        name: "Priya S.",
        role: "Engineering Student",
        quote: "I never thought studying could be this easy. The AI features feel like magic.",
        avatar: "👩‍💻",
        bgColor: "bg-purple-50 dark:bg-purple-950/20",
        borderColor: "border-purple-200 dark:border-purple-800",
        avatarBg: "bg-gradient-to-r from-purple-400 to-purple-600"
    },
    {
        name: "Arjun K.",
        role: "UPSC Aspirant",
        quote: "Quizzes from notes and roadmaps keep me consistent and motivated.",
        avatar: "👨‍🎓",
        bgColor: "bg-blue-50 dark:bg-blue-950/20",
        borderColor: "border-blue-200 dark:border-blue-800",
        avatarBg: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    {
        name: "Aisha R.",
        role: "Design Student",
        quote: "Qwikish makes learning visual and fun. I love the flashcards and mind maps!",
        avatar: "👩‍🎨",
        bgColor: "bg-green-50 dark:bg-green-950/20",
        borderColor: "border-green-200 dark:border-green-800",
        avatarBg: "bg-gradient-to-r from-green-400 to-green-600"
    },
    {
        name: "Rohit M.",
        role: "Medical Student",
        quote: "The AI roadmaps help me navigate complex medical topics with ease.",
        avatar: "👨‍⚕️",
        bgColor: "bg-red-50 dark:bg-red-950/20",
        borderColor: "border-red-200 dark:border-red-800",
        avatarBg: "bg-gradient-to-r from-red-400 to-red-600"
    },
    {
        name: "Sneha T.",
        role: "MBA Student",
        quote: "Time tracking and Pomodoro timers transformed my productivity completely.",
        avatar: "👩‍💼",
        bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
        borderColor: "border-indigo-200 dark:border-indigo-800",
        avatarBg: "bg-gradient-to-r from-indigo-400 to-indigo-600"
    },
    {
        name: "Karan V.",
        role: "CS Student",
        quote: "Auto-generated quizzes from my coding notes are incredibly helpful!",
        avatar: "👨‍💻",
        bgColor: "bg-teal-50 dark:bg-teal-950/20",
        borderColor: "border-teal-200 dark:border-teal-800",
        avatarBg: "bg-gradient-to-r from-teal-400 to-teal-600"
    }
];

export const testimonialsRow2 = [
    {
        name: "Meera J.",
        role: "Law Student",
        quote: "Mind maps help me understand complex legal concepts visually.",
        avatar: "👩‍⚖️",
        bgColor: "bg-orange-50 dark:bg-orange-950/20",
        borderColor: "border-orange-200 dark:border-orange-800",
        avatarBg: "bg-gradient-to-r from-orange-400 to-orange-600"
    },
    {
        name: "Vikram P.",
        role: "CA Student",
        quote: "Flashcard mastery tracking keeps me motivated for my CA exams.",
        avatar: "👨‍💰",
        bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
        avatarBg: "bg-gradient-to-r from-yellow-400 to-yellow-600"
    },
    {
        name: "Ananya D.",
        role: "Literature Student",
        quote: "AI summaries of long texts save me hours of reading time.",
        avatar: "👩‍📚",
        bgColor: "bg-pink-50 dark:bg-pink-950/20",
        borderColor: "border-pink-200 dark:border-pink-800",
        avatarBg: "bg-gradient-to-r from-pink-400 to-pink-600"
    },
    {
        name: "Rahul N.",
        role: "Architecture Student",
        quote: "The visual learning tools perfectly complement my design studies.",
        avatar: "👨‍🏗️",
        bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
        borderColor: "border-cyan-200 dark:border-cyan-800",
        avatarBg: "bg-gradient-to-r from-cyan-400 to-cyan-600"
    },
    {
        name: "Pooja K.",
        role: "Psychology Student",
        quote: "Task tracking helps me balance multiple research projects effectively.",
        avatar: "👩‍🔬",
        bgColor: "bg-violet-50 dark:bg-violet-950/20",
        borderColor: "border-violet-200 dark:border-violet-800",
        avatarBg: "bg-gradient-to-r from-violet-400 to-violet-600"
    },
    {
        name: "Amit S.",
        role: "Commerce Student",
        quote: "Smart highlighting in notes makes revision so much more efficient.",
        avatar: "👨‍📊",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
        borderColor: "border-emerald-200 dark:border-emerald-800",
        avatarBg: "bg-gradient-to-r from-emerald-400 to-emerald-600"
    }
];
