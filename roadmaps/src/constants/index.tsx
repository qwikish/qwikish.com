
import { Code, Globe, Brain, BookOpen, Zap, Cloud, Palette, CheckCircle, Shield, Database, Cpu, Gamepad, Link, FileText, Briefcase, Glasses, Server, Users, Award, HardDrive, Terminal, CardSim } from 'lucide-react';



export const _app_layout = {
    externalLinks: [
        {
            title: "Qwikish",
            url: "https://qwikish.com",
            description: "Qwikish.com - The Ultimate Guide to Qwik Framework",
            isAvailable: true
        }, {
            title: "Qwikish Notes",
            url: "https://notes.qwikish.com",
            description: "Qwikish Notes - A Comprehensive notes taking platform by Qwikish",
            isAvailable: true
        }, {
            title: "Qwikish Quizzes",
            url: "https://quizzes.qwikish.com",
            description: "Qwikish Quizzes - Test Your Knowledge with Qwikish Quizzes",
            isAvailable: true
        }, {
            title: "Qwikish Flashcards",
            url: "https://flashcards.qwikish.com",
            description: "Qwikish Flashcards - Learn Qwikish with Easy-to-Read Flashcards",
            isAvailable: true
        }, {
            title: "Task & Time Manager",
            url: "https://task.qwikish.com",
            description: "Task & Time Manager - Organize Your Tasks and Time Effort with Qwikish",
            isAvailable: true
        }, {
            title: "Qwikish Mindmap",
            url: "https://mindmap.qwikish.com",
            description: "Qwikish Mindmap - Visualize Your Knowledge with Qwikish Mindmap",
            isAvailable: false
        }, {
            title: "Qwikish Community",
            url: "https://community.qwikish.com",
            description: "Qwikish Community - Connect with Like-minded Qwikishers",
            isAvailable: false
        }, {
            title: "Qwikish Blog",
            url: "https://blog.qwikish.com",
            description: "Qwikish Blog - Stay Updated with the Latest Qwikish News",
            isAvailable: false
        }, {
            title: "Qwikish Jobs Board",
            url: "https://jobs.qwikish.com",
            description: "Qwikish Jobs Board - Find Your Dream Job with Qwikish",
            isAvailable: false
        }
    ],
    roadmaps: [
        {
            title: "Official Qwikish Roadmaps",
            url: "/roadmaps",
            description: "Qwikish Roadmaps - Learn Qwikish with Step-by-Step Roadmaps",
            isAvailable: true
        }, {
            title: "Community Roadmaps",
            url: "/community/roadmaps",
            description: "Community Roadmaps - Learn Qwikish with Community Roadmaps",
            isAvailable: true
        }, {
            title: "Qwikish AI Roadmaps",
            url: "/ai/roadmaps",
            description: "Qwikish AI Roadmaps - Learn Qwikish with AI-generated Roadmaps",
            isAvailable: false
        }
    ]
}

export const _roadmap_data = {
    customRoadmaps: [
        {
            title: "Complete Full-Stack Development",
            description: "Master frontend, backend, and deployment in 12 months",
            duration: "12 months",
            difficulty: "Intermediate",
            rating: 4.8,
            students: 15420,
            tags: ["React", "Node.js", "MongoDB", "AWS"]
        },
        {
            title: "Data Science Career Path",
            description: "From Python basics to machine learning mastery",
            duration: "10 months",
            difficulty: "Beginner",
            rating: 4.9,
            students: 8950,
            tags: ["Python", "Pandas", "ML", "Statistics"]
        },
        {
            title: "DevOps Engineering Bootcamp",
            description: "Infrastructure, CI/CD, and cloud technologies",
            duration: "8 months",
            difficulty: "Advanced",
            rating: 4.7,
            students: 6780,
            tags: ["Docker", "Kubernetes", "AWS", "Jenkins"]
        },
        {
            title: "Cybersecurity Specialist",
            description: "Ethical hacking to security architecture",
            duration: "14 months",
            difficulty: "Advanced",
            rating: 4.6,
            students: 4320,
            tags: ["PenTesting", "Security+", "CISSP", "Networking"]
        },
        {
            title: "Mobile App Development",
            description: "Build iOS and Android apps from scratch",
            duration: "9 months",
            difficulty: "Intermediate",
            rating: 4.5,
            students: 7650,
            tags: ["Flutter", "React Native", "Swift", "Kotlin"]
        },
        {
            title: "Cloud Architect",
            description: "Master AWS, Azure and GCP",
            duration: "11 months",
            difficulty: "Advanced",
            rating: 4.7,
            students: 5870,
            tags: ["AWS", "Azure", "Terraform", "Cloud Security"]
        },
        {
            title: "UI/UX Design Pro",
            description: "From Figma basics to advanced prototyping",
            duration: "7 months",
            difficulty: "Beginner",
            rating: 4.8,
            students: 6540,
            tags: ["Figma", "Adobe XD", "User Research", "Wireframing"]
        },
        {
            title: "Blockchain Developer",
            description: "Smart contracts to DApp development",
            duration: "10 months",
            difficulty: "Intermediate",
            rating: 4.4,
            students: 3210,
            tags: ["Solidity", "Ethereum", "Web3", "Cryptography"]
        },
        {
            title: "Game Development",
            description: "Create 2D and 3D games with Unity and Unreal",
            duration: "12 months",
            difficulty: "Intermediate",
            rating: 4.3,
            students: 2890,
            tags: ["Unity", "C#", "Unreal", "3D Modeling"]
        },
        {
            title: "AI Engineer",
            description: "Deep learning and neural networks mastery",
            duration: "15 months",
            difficulty: "Advanced",
            rating: 4.9,
            students: 4980,
            tags: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"]
        },
        {
            title: "Technical Writing",
            description: "Documentation to API writing",
            duration: "5 months",
            difficulty: "Beginner",
            rating: 4.2,
            students: 1870,
            tags: ["Markdown", "GitHub", "Technical Docs", "API Docs"]
        },
        {
            title: "QA Automation",
            description: "From manual testing to automation frameworks",
            duration: "6 months",
            difficulty: "Intermediate",
            rating: 4.5,
            students: 2450,
            tags: ["Selenium", "Cypress", "Jest", "TestNG"]
        },
        {
            title: "Product Management",
            description: "Agile to product strategy",
            duration: "8 months",
            difficulty: "Intermediate",
            rating: 4.6,
            students: 3760,
            tags: ["JIRA", "Scrum", "Roadmapping", "User Stories"]
        },
        {
            title: "Digital Marketing Tech",
            description: "SEO to analytics for developers",
            duration: "4 months",
            difficulty: "Beginner",
            rating: 4.3,
            students: 1980,
            tags: ["SEO", "Google Analytics", "AdWords", "Social Media"]
        },
        {
            title: "AR/VR Development",
            description: "Build immersive experiences",
            duration: "10 months",
            difficulty: "Advanced",
            rating: 4.4,
            students: 1560,
            tags: ["Unity", "ARKit", "VR SDKs", "3D Modeling"]
        },
        {
            title: "Linux System Admin",
            description: "Command line to server management",
            duration: "7 months",
            difficulty: "Intermediate",
            rating: 4.7,
            students: 2870,
            tags: ["Bash", "SSH", "Networking", "Security"]
        },
        {
            title: "Database Architect",
            description: "SQL to NoSQL mastery",
            duration: "9 months",
            difficulty: "Intermediate",
            rating: 4.5,
            students: 2340,
            tags: ["PostgreSQL", "MongoDB", "Redis", "Cassandra"]
        },
        {
            title: "Embedded Systems",
            description: "IoT and hardware programming",
            duration: "12 months",
            difficulty: "Advanced",
            rating: 4.6,
            students: 1780,
            tags: ["C++", "Arduino", "Raspberry Pi", "RTOS"]
        },
        {
            title: "Technical Leadership",
            description: "From developer to CTO",
            duration: "18 months",
            difficulty: "Advanced",
            rating: 4.8,
            students: 3210,
            tags: ["Management", "Architecture", "Hiring", "Mentoring"]
        },
        {
            title: "Web3 Development",
            description: "Decentralized applications and protocols",
            duration: "10 months",
            difficulty: "Intermediate",
            rating: 4.5,
            students: 4120,
            tags: ["Solidity", "Hardhat", "IPFS", "DeFi"]
        }
    ],

    roleBasedRoadmaps: [
        { title: "Frontend Developer", icon: <Code className="w-5 h-5" />, count: 45, popular: true },
        { title: "Backend Developer", icon: <Globe className="w-5 h-5" />, count: 38, popular: true },
        { title: "Full-Stack Developer", icon: <BookOpen className="w-5 h-5" />, count: 52, popular: true },
        { title: "DevOps Engineer", icon: <Zap className="w-5 h-5" />, count: 29, popular: false },
        { title: "Data Scientist", icon: <Brain className="w-5 h-5" />, count: 34, popular: true },
        { title: "Mobile Developer", icon: <Code className="w-5 h-5" />, count: 26, popular: false },
        { title: "Cloud Architect", icon: <Cloud className="w-5 h-5" />, count: 22, popular: true },
        { title: "UI/UX Designer", icon: <Palette className="w-5 h-5" />, count: 31, popular: true },
        { title: "QA Engineer", icon: <CheckCircle className="w-5 h-5" />, count: 18, popular: false },
        { title: "Security Engineer", icon: <Shield className="w-5 h-5" />, count: 24, popular: true },
        { title: "Data Engineer", icon: <Database className="w-5 h-5" />, count: 27, popular: true },
        { title: "Machine Learning Engineer", icon: <Cpu className="w-5 h-5" />, count: 23, popular: true },
        { title: "Game Developer", icon: <Gamepad className="w-5 h-5" />, count: 19, popular: false },
        { title: "Blockchain Developer", icon: <Link className="w-5 h-5" />, count: 21, popular: true },
        { title: "Embedded Systems Engineer", icon: <CardSim className="w-5 h-5" />, count: 15, popular: false },
        { title: "Technical Writer", icon: <FileText className="w-5 h-5" />, count: 12, popular: false },
        { title: "Product Manager", icon: <Briefcase className="w-5 h-5" />, count: 28, popular: true },
        { title: "AR/VR Developer", icon: <Glasses className="w-5 h-5" />, count: 14, popular: false },
        { title: "Site Reliability Engineer", icon: <Server className="w-5 h-5" />, count: 17, popular: false },
        { title: "Technical Lead", icon: <Users className="w-5 h-5" />, count: 25, popular: true },
        { title: "CTO", icon: <Award className="w-5 h-5" />, count: 13, popular: false },
        { title: "Database Administrator", icon: <HardDrive className="w-5 h-5" />, count: 16, popular: false },
        { title: "Systems Programmer", icon: <Terminal className="w-5 h-5" />, count: 11, popular: false },
        { title: "Network Engineer", icon: <Globe className="w-5 h-5" />, count: 14, popular: false }
    ],

    skillBasedRoadmaps: [
        { name: "JavaScript Mastery", level: "Beginner to Advanced", duration: "6 months", students: "12.5k" },
        { name: "System Design", level: "Intermediate", duration: "4 months", students: "8.2k" },
        { name: "Algorithm & Data Structures", level: "All Levels", duration: "8 months", students: "18.7k" },
        { name: "Cloud Computing", level: "Intermediate", duration: "5 months", students: "9.8k" },
        { name: "Python Programming", level: "Beginner to Advanced", duration: "7 months", students: "15.2k" },
        { name: "React Deep Dive", level: "Intermediate", duration: "3 months", students: "11.3k" },
        { name: "Linux Administration", level: "Beginner to Advanced", duration: "5 months", students: "7.8k" },
        { name: "Docker & Kubernetes", level: "Intermediate", duration: "4 months", students: "9.1k" },
        { name: "SQL & Database Design", level: "All Levels", duration: "6 months", students: "10.4k" },
        { name: "REST API Design", level: "Intermediate", duration: "3 months", students: "8.7k" },
        { name: "GraphQL Fundamentals", level: "Beginner", duration: "2 months", students: "6.5k" },
        { name: "Web Security", level: "Intermediate", duration: "5 months", students: "7.2k" },
        { name: "Microservices Architecture", level: "Advanced", duration: "6 months", students: "5.9k" },
        { name: "CI/CD Pipelines", level: "Intermediate", duration: "3 months", students: "6.8k" },
        { name: "TypeScript", level: "Beginner to Advanced", duration: "4 months", students: "9.3k" },
        { name: "Functional Programming", level: "Intermediate", duration: "3 months", students: "5.1k" },
        { name: "Machine Learning Basics", level: "Beginner", duration: "5 months", students: "12.7k" },
        { name: "Blockchain Fundamentals", level: "Intermediate", duration: "4 months", students: "4.8k" },
        { name: "Mobile App Architecture", level: "Advanced", duration: "6 months", students: "5.6k" },
        { name: "Web Performance Optimization", level: "Intermediate", duration: "3 months", students: "6.2k" },
        { name: "DevOps Practices", level: "Beginner to Advanced", duration: "7 months", students: "8.9k" },
        { name: "UI/UX Principles", level: "Beginner", duration: "4 months", students: "7.5k" }
    ],

    languageRoadmaps: [
        { lang: "Python", projects: 15, difficulty: "Beginner", color: "bg-yellow-100 text-yellow-800" },
        { lang: "JavaScript", projects: 22, difficulty: "Beginner", color: "bg-orange-100 text-orange-800" },
        { lang: "Java", projects: 18, difficulty: "Intermediate", color: "bg-red-100 text-red-800" },
        { lang: "Go", projects: 12, difficulty: "Intermediate", color: "bg-blue-100 text-blue-800" },
        { lang: "Rust", projects: 9, difficulty: "Advanced", color: "bg-purple-100 text-purple-800" },
        { lang: "TypeScript", projects: 16, difficulty: "Intermediate", color: "bg-indigo-100 text-indigo-800" },
        { lang: "C++", projects: 14, difficulty: "Advanced", color: "bg-blue-100 text-blue-800" },
        { lang: "C#", projects: 13, difficulty: "Intermediate", color: "bg-purple-100 text-purple-800" },
        { lang: "Ruby", projects: 10, difficulty: "Beginner", color: "bg-red-100 text-red-800" },
        { lang: "PHP", projects: 11, difficulty: "Intermediate", color: "bg-indigo-100 text-indigo-800" },
        { lang: "Swift", projects: 8, difficulty: "Intermediate", color: "bg-orange-100 text-orange-800" },
        { lang: "Kotlin", projects: 9, difficulty: "Intermediate", color: "bg-purple-100 text-purple-800" },
        { lang: "Scala", projects: 7, difficulty: "Advanced", color: "bg-red-100 text-red-800" },
        { lang: "Dart", projects: 6, difficulty: "Beginner", color: "bg-blue-100 text-blue-800" },
        { lang: "Elixir", projects: 5, difficulty: "Advanced", color: "bg-purple-100 text-purple-800" },
        { lang: "Clojure", projects: 4, difficulty: "Advanced", color: "bg-green-100 text-green-800" },
        { lang: "Haskell", projects: 5, difficulty: "Advanced", color: "bg-indigo-100 text-indigo-800" },
        { lang: "R", projects: 7, difficulty: "Intermediate", color: "bg-blue-100 text-blue-800" },
        { lang: "Perl", projects: 3, difficulty: "Intermediate", color: "bg-yellow-100 text-yellow-800" },
        { lang: "Lua", projects: 4, difficulty: "Beginner", color: "bg-red-100 text-red-800" },
        { lang: "Julia", projects: 5, difficulty: "Intermediate", color: "bg-purple-100 text-purple-800" },
        { lang: "Zig", projects: 2, difficulty: "Advanced", color: "bg-orange-100 text-orange-800" }
    ],

    frameworkRoadmaps: [
        { name: "React.js", type: "Frontend", popularity: 95, students: "25k+" },
        { name: "Next.js", type: "Full-Stack", popularity: 88, students: "18k+" },
        { name: "Vue.js", type: "Frontend", popularity: 78, students: "12k+" },
        { name: "Django", type: "Backend", popularity: 82, students: "15k+" },
        { name: "Spring Boot", type: "Backend", popularity: 75, students: "11k+" },
        { name: "Flutter", type: "Mobile", popularity: 73, students: "9k+" },
        { name: "Angular", type: "Frontend", popularity: 68, students: "10k+" },
        { name: "Laravel", type: "Backend", popularity: 72, students: "8k+" },
        { name: "Ruby on Rails", type: "Backend", popularity: 65, students: "7k+" },
        { name: "Express.js", type: "Backend", popularity: 85, students: "14k+" },
        { name: "ASP.NET Core", type: "Backend", popularity: 70, students: "9k+" },
        { name: "FastAPI", type: "Backend", popularity: 80, students: "12k+" },
        { name: "Svelte", type: "Frontend", popularity: 77, students: "11k+" },
        { name: "Gin", type: "Backend", popularity: 69, students: "7k+" },
        { name: "Phoenix", type: "Backend", popularity: 63, students: "5k+" },
        { name: "React Native", type: "Mobile", popularity: 84, students: "16k+" },
        { name: "Xamarin", type: "Mobile", popularity: 58, students: "4k+" },
        { name: "NestJS", type: "Backend", popularity: 79, students: "13k+" },
        { name: "Flask", type: "Backend", popularity: 74, students: "10k+" },
        { name: "Symfony", type: "Backend", popularity: 67, students: "6k+" },
        { name: "Ember.js", type: "Frontend", popularity: 55, students: "3k+" },
        { name: "Solid.js", type: "Frontend", popularity: 71, students: "8k+" }
    ],

    topicRoadmaps: [
        { topic: "Machine Learning", roadmaps: 24, totalHours: 120, featured: true },
        { topic: "Cybersecurity", roadmaps: 18, totalHours: 95, featured: true },
        { topic: "Blockchain", roadmaps: 12, totalHours: 80, featured: false },
        { topic: "Game Development", roadmaps: 15, totalHours: 110, featured: true },
        { topic: "Mobile App Development", roadmaps: 21, totalHours: 105, featured: false },
        { topic: "UI/UX Design", roadmaps: 19, totalHours: 75, featured: true },
        { topic: "Cloud Computing", roadmaps: 23, totalHours: 115, featured: true },
        { topic: "Data Engineering", roadmaps: 17, totalHours: 90, featured: true },
        { topic: "DevOps Practices", roadmaps: 20, totalHours: 100, featured: true },
        { topic: "Web Development", roadmaps: 25, totalHours: 85, featured: true },
        { topic: "AI Ethics", roadmaps: 10, totalHours: 60, featured: false },
        { topic: "Quantum Computing", roadmaps: 8, totalHours: 70, featured: false },
        { topic: "AR/VR Development", roadmaps: 14, totalHours: 95, featured: true },
        { topic: "IoT Development", roadmaps: 16, totalHours: 110, featured: true },
        { topic: "Bioinformatics", roadmaps: 9, totalHours: 65, featured: false },
        { topic: "FinTech", roadmaps: 13, totalHours: 75, featured: true },
        { topic: "Digital Marketing", roadmaps: 11, totalHours: 55, featured: false },
        { topic: "Technical Writing", roadmaps: 7, totalHours: 45, featured: false },
        { topic: "Open Source Contribution", roadmaps: 19, totalHours: 80, featured: true },
        { topic: "Freelancing", roadmaps: 15, totalHours: 60, featured: false },
        { topic: "Startup Development", roadmaps: 12, totalHours: 90, featured: true },
        { topic: "Ethical Hacking", roadmaps: 14, totalHours: 100, featured: true }
    ],

    aiGeneratedRoadmaps: [
        {
            title: "Personalized Learning Path",
            description: "AI-curated based on your goals and experience",
            type: "Custom AI",
            generated: "2.3k this week",
            avgRating: 4.6
        },
        {
            title: "Career Transition Assistant",
            description: "Smooth transition roadmaps between tech roles",
            type: "Career AI",
            generated: "1.8k this week",
            avgRating: 4.8
        },
        {
            title: "Skill Gap Analyzer",
            description: "Identifies and fills knowledge gaps automatically",
            type: "Analysis AI",
            generated: "956 this week",
            avgRating: 4.7
        },
        {
            title: "Project-Based Learning",
            description: "Generates roadmap with real-world projects",
            type: "Project AI",
            generated: "1.2k this week",
            avgRating: 4.5
        },
        {
            title: "Interview Preparation",
            description: "Custom study plan for technical interviews",
            type: "Interview AI",
            generated: "1.5k this week",
            avgRating: 4.7
        },
        {
            title: "Competency Benchmark",
            description: "Compares your skills with industry standards",
            type: "Analysis AI",
            generated: "890 this week",
            avgRating: 4.6
        },
        {
            title: "Tech Stack Recommender",
            description: "Suggests optimal technologies for your project",
            type: "Recommendation AI",
            generated: "1.1k this week",
            avgRating: 4.4
        },
        {
            title: "Learning Style Adaptor",
            description: "Adjusts roadmap to your preferred learning style",
            type: "Adaptive AI",
            generated: "780 this week",
            avgRating: 4.8
        },
        {
            title: "Job Market Aligner",
            description: "Aligns skills with current job market demands",
            type: "Career AI",
            generated: "1.4k this week",
            avgRating: 4.7
        },
        {
            title: "Open Source Contributor",
            description: "Roadmap for contributing to open source projects",
            type: "Project AI",
            generated: "920 this week",
            avgRating: 4.5
        },
        {
            title: "Freelance Career Builder",
            description: "Path to successful freelancing career",
            type: "Career AI",
            generated: "650 this week",
            avgRating: 4.6
        },
        {
            title: "Tech Specialization Advisor",
            description: "Recommends niche specializations based on your profile",
            type: "Recommendation AI",
            generated: "830 this week",
            avgRating: 4.5
        },
        {
            title: "Learning Progress Optimizer",
            description: "Adjusts pace based on your progress and retention",
            type: "Adaptive AI",
            generated: "720 this week",
            avgRating: 4.7
        },
        {
            title: "Certification Planner",
            description: "Optimal path for tech certifications",
            type: "Planning AI",
            generated: "1.3k this week",
            avgRating: 4.8
        },
        {
            title: "Startup Tech Stack",
            description: "Ideal technology choices for startups",
            type: "Recommendation AI",
            generated: "580 this week",
            avgRating: 4.4
        },
        {
            title: "Remote Work Readiness",
            description: "Skills needed for remote tech jobs",
            type: "Career AI",
            generated: "950 this week",
            avgRating: 4.6
        },
        {
            title: "Tech Leadership Path",
            description: "From developer to technical leader",
            type: "Career AI",
            generated: "870 this week",
            avgRating: 4.7
        },
        {
            title: "AI Ethics Curriculum",
            description: "Understanding ethical implications of AI",
            type: "Specialized AI",
            generated: "520 this week",
            avgRating: 4.5
        },
        {
            title: "Code Quality Improver",
            description: "Path to writing cleaner, more maintainable code",
            type: "Analysis AI",
            generated: "1.1k this week",
            avgRating: 4.6
        },
        {
            title: "Legacy System Modernization",
            description: "Approaches to updating older codebases",
            type: "Project AI",
            generated: "640 this week",
            avgRating: 4.4
        },
        {
            title: "Accessibility Specialist",
            description: "Becoming an expert in accessible web development",
            type: "Specialized AI",
            generated: "590 this week",
            avgRating: 4.7
        },
        {
            title: "Green Computing",
            description: "Sustainable software development practices",
            type: "Specialized AI",
            generated: "480 this week",
            avgRating: 4.5
        }
    ],

    communityRoadmaps: [
        {
            title: "Open Source Contribution Guide",
            author: "Sarah Chen",
            likes: 1247,
            comments: 89,
            difficulty: "Intermediate",
            recent: true
        },
        {
            title: "Junior to Senior Developer",
            author: "Mike Rodriguez",
            likes: 2156,
            comments: 156,
            difficulty: "All Levels",
            recent: false
        },
        {
            title: "Freelance Developer Success",
            author: "Emma Thompson",
            likes: 892,
            comments: 67,
            difficulty: "Advanced",
            recent: true
        },
        {
            title: "Bootcamp Graduate Survival",
            author: "Alex Johnson",
            likes: 1532,
            comments: 112,
            difficulty: "Beginner",
            recent: true
        },
        {
            title: "Women in Tech Guide",
            author: "Priya Patel",
            likes: 1876,
            comments: 143,
            difficulty: "All Levels",
            recent: false
        },
        {
            title: "Career Changer's Tech Path",
            author: "David Kim",
            likes: 1024,
            comments: 78,
            difficulty: "Beginner",
            recent: true
        },
        {
            title: "Remote Work Mastery",
            author: "Maria Garcia",
            likes: 1357,
            comments: 92,
            difficulty: "Intermediate",
            recent: true
        },
        {
            title: "Tech Interview Unlocked",
            author: "James Wilson",
            likes: 2245,
            comments: 167,
            difficulty: "Intermediate",
            recent: false
        },
        {
            title: "Self-Taught Developer Guide",
            author: "Lucas Brown",
            likes: 1789,
            comments: 124,
            difficulty: "Beginner",
            recent: true
        },
        {
            title: "Developer Portfolio Builder",
            author: "Sophia Lee",
            likes: 987,
            comments: 65,
            difficulty: "Beginner",
            recent: true
        },
        {
            title: "Tech Networking Guide",
            author: "Daniel Smith",
            likes: 765,
            comments: 43,
            difficulty: "All Levels",
            recent: false
        },
        {
            title: "Salary Negotiation for Devs",
            author: "Olivia Martin",
            likes: 1432,
            comments: 97,
            difficulty: "Intermediate",
            recent: true
        },
        {
            title: "Developer Burnout Recovery",
            author: "Ethan Taylor",
            likes: 1123,
            comments: 154,
            difficulty: "All Levels",
            recent: true
        },
        {
            title: "Contributing to Large Codebases",
            author: "Ava Anderson",
            likes: 876,
            comments: 52,
            difficulty: "Advanced",
            recent: false
        },
        {
            title: "Mentorship in Tech",
            author: "Noah Thomas",
            likes: 654,
            comments: 38,
            difficulty: "Intermediate",
            recent: true
        },
        {
            title: "Tech Public Speaking",
            author: "Isabella White",
            likes: 543,
            comments: 29,
            difficulty: "Intermediate",
            recent: false
        },
        {
            title: "Developer Blogging Guide",
            author: "Mason Harris",
            likes: 765,
            comments: 47,
            difficulty: "Beginner",
            recent: true
        },
        {
            title: "Tech Conference Survival",
            author: "Charlotte Clark",
            likes: 432,
            comments: 23,
            difficulty: "Beginner",
            recent: false
        },
        {
            title: "Open Source Maintainer",
            author: "Benjamin Lewis",
            likes: 321,
            comments: 18,
            difficulty: "Advanced",
            recent: true
        },
        {
            title: "Developer Fitness Guide",
            author: "Amelia Walker",
            likes: 987,
            comments: 76,
            difficulty: "All Levels",
            recent: true
        },
        {
            title: "Tech Parenting Guide",
            author: "William Hall",
            likes: 543,
            comments: 42,
            difficulty: "All Levels",
            recent: false
        },
        {
            title: "Developer Mindfulness",
            author: "Mia Young",
            likes: 765,
            comments: 58,
            difficulty: "All Levels",
            recent: true
        }
    ]
};
export interface ResourceItem {
    name: string;
    url: string;
    description?: string;
    author: string;
}

interface Resource {
    video?: ResourceItem[];
    article?: ResourceItem[];
    book?: ResourceItem[];
    other?: ResourceItem[];
}

interface Step {
    title: string;
    description?: string;
    project: string;
    isCompleted: boolean;
    resources?: {
        free?: {
            video?: ResourceItem[];
            article?: ResourceItem[];
            book?: ResourceItem[];
            other?: ResourceItem[];
        };
        paid?: ResourceItem[];
    };
}

interface Milestone {
    title: string;
    description?: string;
    steps: Step[];
}


interface fullStackRoadmapType {
    title: string;
    description: string;
    duration: string;
    difficulty: string;
    rating: number;
    tags: string[];
    progress: {
        started: boolean;
        completed: number;
        currentMilestone: number | null;
    };
    courseRecomendations: {
        free?:{
            title: string;
            url: string;
            author: string;
            rating: number;
        }[],
        paid?:{
            title: string;
            url: string;
            author: string;
            rating: number;
        }[]
    };
    userProgressMap: Record<string, {
        started: boolean;
        completedMilestones: number;
        currentMilestone: number | null;
        completedSteps: Record<number, number[]>;
        lastUpdated: string;
    }>;
    milestones: Milestone[];
}

export const fullStackRoadmap: fullStackRoadmapType = {
    title: "Full-Stack Developer (MERN Stack + DevOps)",
    description: "Master frontend, backend, databases, and deployment",
    duration: "18 months",
    difficulty: "Advanced",
    rating: 4.9,
    tags: ["React", "Node.js", "MongoDB", "AWS", "Docker", "TypeScript"],
    progress: {
        started: false,
        completed: 0,
        currentMilestone: null,
    },
    userProgressMap: {
        // Example structure
        "user123": {
            started: true,
            completedMilestones: 5,
            currentMilestone: 6,
            completedSteps: {
                // milestoneIndex: stepIndexes[]
                "0": [0, 1],          // Milestone 1: steps 0 and 1 completed
                "1": [0, 2, 3],       // Milestone 2: steps 0, 2, and 3 completed
                // ...
            },
            lastUpdated: new Date().toISOString(),
        },
    },
    courseRecomendations:{
        free:[
            {
                title: "Full course Web Development [22 Hours] Mehul- Codedamn",
                url: "https://youtu.be/ZxKM3DCV2kE?si=9v-zJc50mrC_caCc",
                author: "Mehul - Codedamn",
                rating: 4.7
            }      
        ],
        paid:[
            {
                title: "The Complete 2023 Web Development Bootcamp",
                url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
                author: "Dr. Angela Yu",
                rating: 4.7
            },{
                title:"Harkirat Singh's Complete Web Development Bootcamp",
                url:"https://harkirat.classx.co.in/new-courses/15-complete-web-development-cohort",
                author:"Harkirat Singh",
                rating:4.8
            }
        ]
    }
    ,
    milestones: [
        // ► Milestone 1: Web Fundamentals
        {
            title: "1. Web Fundamentals (6 Weeks)",
            steps: [
                {
                    title: "HTML5 & Semantic HTML",
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr",author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners" ,url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5",author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5",author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                                {
                                    name: "HTML5 Fundamentals for Beginners",
                                    url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                    description: "HTML5 Rocks is a great resource for learning HTML5",
                                    author: "Stone River eLearning"
                                }
                        ],
                    },
                    project: "Build a resume page using semantic tags",
                    isCompleted: true
                },
                {
                    title: "CSS Flexbox & Grid",
                    isCompleted: true,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Create a responsive photo gallery",
                },
                {
                    title: "Basic JavaScript (DOM Manipulation)",
                    isCompleted: true,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Create a simple calculator",
                },
                {
                    title: "Browser Developer Tools",
                    isCompleted: true,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Debug a simple web page",
                },
                {
                    title: "Web Accessibility (A11y) Basics",
                    isCompleted: true,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Improve accessibility of the resume page",
                },
                {
                    title: "Git & GitHub Fundamentals",
                    isCompleted: true,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Host your resume page on GitHub Pages",
                },
            ],
        },

        // ► Milestone 2: JavaScript Deep Dive
        {
            title: "2. JavaScript Mastery (8 Weeks)",
            steps: [
                {
                    title: "ES6+ (Arrow Functions, Destructuring, Spread/Rest)",
                    isCompleted: true,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Build a todo app with ES6 features",
                },
                {
                    title: "Asynchronous JS (Promises, Async/Await)",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Fetch data from a public API (e.g., Star Wars API) and display it",
                },
                {
                    title: "Closures & Scope",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement a private counter using closures",
                },
                {
                    title: "Object-Oriented Programming (OOP) in JS",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Create a simple game (e.g., tic-tac-toe) using OOP principles",
                },
                {
                    title: "Functional Programming Concepts",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Refactor a part of the todo app using functional concepts",
                },
                {
                    title: "Error Handling & Debugging",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add robust error handling to the API fetching project",
                },
                {
                    title: "Modules (ESM, CommonJS)",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Organize your existing projects into modules",
                },
                {
                    title: "Higher-Order Functions (map, filter, reduce)",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Process and display data from an array using HOFs",
                },
                {
                    title: "Event Loop & Concurrency Model",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Explain the output of a given snippet involving setTimeout/Promises",
                },
            ],
        },

        // ► Milestone 3: React & Frontend
        {
            title: "3. React Ecosystem (10 Weeks)",
            steps: [
                {
                    title: "React Hooks (useState, useEffect, useRef, useContext)",
                    isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Build a movie search app with a basic movie detail page",
                },
                {
                    title: "State Management (Redux Toolkit, Zustand/Jotai)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add Redux Toolkit to an existing project (e.g., movie app for favorites)",
                },
                {
                    title: "React Router (v6)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement client-side routing in the movie search app",
                },
                {
                    title: "Context API", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Use Context API for theme toggling (light/dark mode)",
                },
                {
                    title: "Component Reusability & Props", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Create a set of reusable UI components (e.g., buttons, input fields)",
                },
                {
                    title: "Styling React Apps (CSS Modules, Styled Components, Tailwind CSS)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Restyle the movie app using a chosen styling solution",
                },
                {
                    title: "Form Handling & Validation (Formik/React Hook Form)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Build a registration/login form with validation",
                },
                {
                    title: "API Integration with React Query/SWR", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Refactor API calls in the movie app using React Query",
                },
                {
                    title: "Performance Optimization (Memo, useCallback, useMemo)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Optimize a slow-rendering component in an existing project",
                },
                {
                    title: "Deploying React Apps (Netlify, Vercel)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Deploy your movie search app online",
                },
            ],
        },

        // ► Milestone 4: Backend with Node.js
        {
            title: "4. Node.js & Express (6 Weeks)",
            steps: [
                {
                    title: "REST API Design Principles", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Build a CRUD API for a blog application (posts, comments)",
                },
                {
                    title: "Middleware (CORS, body-parser, custom middleware)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement custom logging and authentication middleware",
                },
                {
                    title: "Routing & Controllers", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Organize the blog API routes and controllers",
                },
                {
                    title: "Error Handling in Express", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement global error handling for the blog API",
                },
                {
                    title: "Environment Variables & Configuration", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Secure API keys and database credentials using .env",
                },
                {
                    title: "NPM & Project Management", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Set up a new Node.js project from scratch and manage dependencies",
                },
            ],
        },

        // ► Milestone 5: Databases
        {
            title: "5. Databases (SQL & NoSQL) (6 Weeks)",
            steps: [
                {
                    title: "MongoDB & Mongoose (Schema design, CRUD operations)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add MongoDB to your blog API (store posts and comments)",
                },
                {
                    title: "Basic SQL (SELECT, INSERT, UPDATE, DELETE)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Create a simple user management system with a SQL database",
                },
                {
                    title: "PostgreSQL & Sequelize (ORMs)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Migrate the user management system from raw SQL to Sequelize",
                },
                {
                    title: "Database Indexing & Optimization Basics", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Analyze and add indexes to your blog database for better performance",
                },
                {
                    title: "Database Relationships (One-to-many, Many-to-many)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement relationships between posts and comments in the blog API",
                },
                {
                    title: "Cloud Databases (MongoDB Atlas, AWS RDS)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Deploy your blog database to MongoDB Atlas",
                },
            ],
        },

        // ► Milestone 6: Authentication
        {
            title: "6. Auth & Security (4 Weeks)",
            steps: [
                {
                    title: "JWT Authentication", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add login/signup and protected routes to your blog API using JWT",
                },
                {
                    title: "Password Hashing (bcrypt.js)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Securely store user passwords using bcrypt",
                },
                {
                    title: "OAuth 2.0 (Google/Facebook Login)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Integrate Google login into your application",
                },
                {
                    title: "CORS & CSRF Prevention", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Configure CORS for your API and implement CSRF protection",
                },
                {
                    title: "Rate Limiting", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add rate limiting to your API endpoints to prevent abuse",
                },
                {
                    title: "Input Validation (Joi/Zod)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Validate user input for all API endpoints",
                },
            ],
        },

        // ► Milestone 7: TypeScript
        {
            title: "7. TypeScript for Full-Stack (4 Weeks)",
            steps: [
                {
                    title: "TypeScript Fundamentals (Types, Interfaces, Enums)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Convert a small JavaScript project to TypeScript",
                },
                {
                    title: "TypeScript with React", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Refactor your React movie app to use TypeScript",
                },
                {
                    title: "TypeScript with Node.js & Express", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Refactor your Node.js blog API to use TypeScript",
                },
                {
                    title: "Generics & Advanced Types", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement generic functions and interfaces in your projects",
                },
            ],
        },

        // ► Milestone 8: Testing
        {
            title: "8. Testing (4 Weeks)",
            steps: [
                {
                    title: "Unit Testing (Jest)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Write unit tests for utility functions and small components in both frontend/backend",
                },
                {
                    title: "Integration Testing (Supertest for Node.js, React Testing Library)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Write integration tests for your API endpoints and React components",
                },
                {
                    title: "End-to-End Testing (Cypress/Playwright)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Write end-to-end tests for a complete user flow (e.g., login, create post)",
                },
                {
                    title: "Test-Driven Development (TDD) principles", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Practice TDD by building a new feature with tests first",
                },
            ],
        },

        // ► Milestone 9: DevOps Fundamentals (Docker)
        {
            title: "9. DevOps Fundamentals (Docker) (4 Weeks)",
            steps: [
                {
                    title: "Introduction to Docker (Containers, Images, Dockerfile)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Containerize a simple Node.js application",
                },
                {
                    title: "Docker Compose (Multi-container apps)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Containerize your MERN stack application (frontend, backend, database)",
                },
                {
                    title: "Docker Networking & Volumes", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Ensure containers can communicate and persist data",
                },
                {
                    title: "Introduction to CI/CD (GitHub Actions)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Set up a basic CI workflow to run tests on push",
                },
            ],
        },

        // ► Milestone 10: Cloud Deployment (AWS)
        {
            title: "10. Cloud Deployment (AWS) (6 Weeks)",
            steps: [
                {
                    title: "AWS EC2 (Virtual Servers)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Launch an EC2 instance and deploy a simple web server",
                },
                {
                    title: "AWS S3 (Object Storage) & CloudFront (CDN)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Host your React frontend on S3 and serve with CloudFront",
                },
                {
                    title: "AWS RDS (Managed Databases)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Migrate your database (e.g., PostgreSQL) to AWS RDS",
                },
                {
                    title: "AWS Elastic Beanstalk (PaaS)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Deploy your Node.js backend using Elastic Beanstalk",
                },
                {
                    title: "Load Balancing (ELB) & Auto Scaling", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Configure load balancing and auto-scaling for your backend",
                },
                {
                    title: "AWS IAM (Identity and Access Management)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Manage user permissions and roles for your AWS resources",
                },
            ],
        },

        // ► Milestone 11: GraphQL
        {
            title: "11. Introduction to GraphQL (4 Weeks)",
            steps: [
                {
                    title: "GraphQL Fundamentals (Queries, Mutations, Schemas)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Set up a basic GraphQL server for your blog API",
                },
                {
                    title: "GraphQL with Apollo Server & Client", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Integrate Apollo Client into your React frontend to consume the GraphQL API",
                },
                {
                    title: "Resolvers & Data Sources", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement resolvers for your blog data (posts, comments, users)",
                },
                {
                    title: "GraphQL Subscriptions (Real-time data)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add real-time updates (e.g., new comments) using subscriptions",
                },
            ],
        },

        // ► Milestone 12: WebSockets
        {
            title: "12. Real-time with WebSockets (3 Weeks)",
            steps: [
                {
                    title: "WebSocket Basics", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Build a simple chat application using raw WebSockets",
                },
                {
                    title: "Socket.IO for Real-time Applications", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Rebuild the chat application using Socket.IO for more features",
                },
                {
                    title: "Integrating WebSockets into MERN Stack", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Add real-time notifications or collaborative features to your full-stack app",
                },
            ],
        },

        // ► Milestone 13: Microservices Introduction
        {
            title: "13. Microservices Introduction (3 Weeks)",
            steps: [
                {
                    title: "Microservices Architecture Concepts", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Design a microservice architecture for a hypothetical e-commerce platform",
                },
                {
                    title: "API Gateway (e.g., Express-Gateway, Kong)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Set up a simple API Gateway for two small microservices",
                },
                {
                    title: "Inter-service Communication (HTTP, Message Queues)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement communication between two microservices using a message queue",
                },
            ],
        },

        // ► Milestone 14: Performance Optimization & Scalability
        {
            title: "14. Performance Optimization & Scalability (4 Weeks)",
            steps: [
                {
                    title: "Frontend Performance (Code Splitting, Image Optimization, Lazy Loading)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Analyze and optimize the performance of your React frontend",
                },
                {
                    title: "Backend Performance (Caching, Database Optimization, Load Testing)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Implement caching with Redis for your API and perform load testing",
                },
                {
                    title: "Container Orchestration (Kubernetes Introduction)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Deploy your Docker Compose app to a local Kubernetes (Minikube) cluster",
                },
                {
                    title: "Monitoring & Logging (Prometheus, Grafana, ELK Stack)", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Set up basic monitoring for your application (e.g., CPU, memory usage)",
                },
            ],
        },

        // ► Milestone 15: Final Project
        {
            title: "15. Final Full-Stack Application (8 Weeks)",
            steps: [
                {
                    title: "Define Project Scope & Requirements", isCompleted: false,
                    resources: {
                        free: {
                            video: [
                                { name: "Apna College HTML Tutorial", description: "HTML5 Tutorial by Apna College for Beginners", url: "https://youtu.be/HcOc7P5BMi4?si=lwQkPaqolDsX9zzr", author: "Apna College" },
                                { name: "HTML5 Rocks", description: "HTML5 Tutorial by HTML5 Rocks for Beginners", url: "https://youtu.be/G3e-cpL7ofc?si=QULoFrDBFSv4tZ7g", author: "SuperSimpleDev" },
                            ],
                            article: [
                                { name: "GeeksforGeeks HTML Tutorial", url: "https://www.geeksforgeeks.org/html/html-tutorial", description: "HTML5 Rocks is a great resource for learning HTML5", author: "GeeksforGeeks" },
                                { name: "MDN HTML Docs", url: "https://mdn.mozillademos.org/en-US/docs/Web/HTML/Element/section", description: "HTML5 Rocks is a great resource for learning HTML5", author: "MDN Web Docs" },
                            ],
                        },
                        paid: [
                            {
                                name: "HTML5 Fundamentals for Beginners",
                                url: "https://www.udemy.com/course/html5-fundamentals-for-beginners/?couponCode=ST4MT20725G1",
                                description: "HTML5 Rocks is a great resource for learning HTML5",
                                author: "Stone River eLearning"
                            }
                        ],
                    },
                    project: "Choose a complex full-stack application idea (e.g., e-commerce, social media clone, SaaS tool)",
                },
                {
                    title: "Architecture Design & Planning",
                    resources: [],
                    project: "Design the frontend, backend, database schema, and deployment strategy",
                },
                {
                    title: "Feature Development (Iterative)",
                    resources: [],
                    project: "Implement core features using all learned technologies (MERN, TypeScript, Auth, GraphQL/REST, Tests)",
                },
                {
                    title: "Deployment to Cloud (AWS/Azure/GCP)",
                    resources: [],
                    project: "Deploy the complete application to a public cloud provider",
                },
                {
                    title: "Performance Tuning & Security Audit",
                    resources: [],
                    project: "Optimize performance and conduct a basic security review",
                },
                {
                    title: "Documentation & Presentation",
                    resources: [],
                    project: "Create comprehensive documentation and prepare for presentation/portfolio",
                },
            ],
        },
    ],
};