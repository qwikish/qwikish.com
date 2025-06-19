import {
    Github,
    Linkedin,
    Twitter,
    Clock,
    BookOpen,
    CheckCircle,
    ListTodo,
    Award,
    Flame,
    BarChart2,
    Edit,
    Star,
    Brain,
    Calendar,
    TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
    // User Data
    const user = {
        name: "Shreya Raj Pandey",
        bio: "Computer Science Student | Web Developer | Learning React & TypeScript",
        role: "Student",
        avatar: "/dummyUser.jpg",
        coverPhoto: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
        socialLinks: {
            github: "github.com/alexjohnson",
            linkedin: "linkedin.com/in/alexjohnson",
            twitter: "twitter.com/alexjohnson"
        },
        streak: 14,
        totalStudyHours: 86,
        notesCreated: 42,
        tasksCompleted: 28,
        quizzesTaken: 15,
        joinDate: "March 2024"
    };

    // Activity Data (Last 365 days)
    const activityData = Array.from({ length: 365 }, (_, i) => {
        const date = new Date(Date.now() - (365 - i - 1) * 24 * 60 * 60 * 1000);
        // Create more realistic activity pattern with some empty days
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const baseActivity = isWeekend ? 0.3 : 0.7; // Less activity on weekends
        const randomFactor = Math.random();

        let count = 0;
        if (randomFactor < baseActivity) {
            count = Math.floor(Math.random() * 4) + 1; // 1-4 activities
        }

        return {
            date,
            count,
            dayOfWeek,
            weekOfYear: Math.floor(i / 7)
        };
    });

    // Calculate total contributions for the year
    const totalContributions = activityData.reduce((sum, day) => sum + day.count, 0);
    const activeDays = activityData.filter(day => day.count > 0).length;

    // Get month labels for the graph
    const monthLabels = [];
    const currentDate = new Date();
    for (let i = 11; i >= 0; i--) {
        const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        monthLabels.push({
            name: monthDate.toLocaleDateString('en-US', { month: 'short' }),
            index: Math.floor((365 - (i * 30)) / 7) * 7 // Approximate week position
        });
    }

    // Skills & Progress
    const skills = [
        { name: "JavaScript", progress: 85, level: "Advanced" },
        { name: "React", progress: 70, level: "Intermediate" },
        { name: "TypeScript", progress: 60, level: "Intermediate" },
        { name: "CSS", progress: 75, level: "Advanced" }
    ];

    // Recent Activity
    const recentActivity = [
        { type: "quiz", text: "Completed React Quiz", score: "92%", time: "2h ago", icon: Brain },
        { type: "note", text: "Updated JavaScript Notes", time: "5h ago", icon: BookOpen },
        { type: "task", text: "Finished CSS Grid Task", time: "1d ago", icon: ListTodo },
        { type: "achievement", text: "7-Day Streak Unlocked!", time: "2d ago", icon: Award }
    ];

    // Badges
    const badges = [
        { name: "7-Day Streak", icon: Flame, earned: true, color: "orange" },
        { name: "JavaScript Beginner", icon: Star, earned: true, color: "yellow" },
        { name: "30-Day Streak", icon: Flame, earned: false, color: "orange" },
        { name: "React Explorer", icon: Star, earned: true, color: "blue" }
    ];

    // Stats
    const stats = [
        { label: "Current Streak", value: `${user.streak} days`, icon: Flame, color: "text-orange-500", bgColor: "bg-orange-50" },
        { label: "Study Hours", value: `${user.totalStudyHours}h`, icon: Clock, color: "text-blue-500", bgColor: "bg-blue-50" },
        { label: "Notes Created", value: user.notesCreated, icon: BookOpen, color: "text-green-500", bgColor: "bg-green-50" },
        { label: "Tasks Completed", value: user.tasksCompleted, icon: ListTodo, color: "text-purple-500", bgColor: "bg-purple-50" },
        { label: "Quizzes Taken", value: user.quizzesTaken, icon: CheckCircle, color: "text-yellow-500", bgColor: "bg-yellow-50" }
    ];

    return (
        
        <div className="min-h-screen mx-auto">
            {/* Cover Photo Section */}
            <div className="relative">
                <div className="h-64 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
                    <img
                        src={user.coverPhoto}
                        alt="Cover"
                        className="w-full h-full object-cover mix-blend-overlay opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Profile Avatar */}
                <div className="absolute -bottom-16 left-8">
                    <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="text-2xl font-bold">AJ</AvatarFallback>
                    </Avatar>
                </div>
            </div>

            <div className="px-8 pt-20 pb-8 max-w-7xl mx-auto">
                {/* Profile Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
                            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                {user.role}
                            </Badge>
                        </div>
                        <p className="text-lg text-muted-foreground mb-2">{user.bio}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {user.joinDate}</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <Button variant="ghost" size="sm" asChild>
                                <a href={user.socialLinks.github} className="hover:text-foreground">
                                    <Github className="h-4 w-4 mr-2" />
                                    GitHub
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href={user.socialLinks.linkedin} className="hover:text-blue-600">
                                    <Linkedin className="h-4 w-4 mr-2" />
                                    LinkedIn
                                </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <a href={user.socialLinks.twitter} className="hover:text-blue-400">
                                    <Twitter className="h-4 w-4 mr-2" />
                                    Twitter
                                </a>
                            </Button>
                        </div>
                    </div>

                    <Button className="lg:mt-0">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    {stats.map((stat, i) => (
                        <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="flex items-center p-4">
                                <div className={`p-2 rounded-lg ${stat.bgColor} mr-3`}>
                                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                                    <p className="text-xl font-bold">{stat.value}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Activity Heatmap - 365 Days */}
                    <Card className="lg:col-span-2 border-0 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <BarChart2 className="h-5 w-5 text-primary" />
                                    Study Activity
                                </CardTitle>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {totalContributions} contributions in the last year • {activeDays} active days
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {/* Month Labels */}
                            <div className="flex justify-between text-xs text-muted-foreground mb-2 px-1">
                                {monthLabels.filter((_, i) => i % 2 === 0).map((month, i) => (
                                    <span key={i}>{month.name}</span>
                                ))}
                            </div>

                            {/* Days of week labels */}
                            <div className="flex mb-2">
                                <div className="flex flex-col text-xs text-muted-foreground mr-2 justify-between h-24">
                                    <span>Sun</span>
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                </div>

                                {/* Activity Grid */}
                                <div className="flex gap-1 overflow-x-auto">
                                    {Array.from({ length: 53 }, (_, weekIndex) => (
                                        <div key={weekIndex} className="flex flex-col gap-1">
                                            {Array.from({ length: 7 }, (_, dayIndex) => {
                                                const dataIndex = weekIndex * 7 + dayIndex;
                                                const day = activityData[dataIndex];

                                                if (!day) return <div key={dayIndex} className="h-3 w-3"></div>;

                                                return (
                                                    <div
                                                        key={dayIndex}
                                                        className={`h-3 w-3 rounded-sm transition-all hover:scale-110 cursor-pointer border ${day.count === 0
                                                                ? 'bg-muted border-muted'
                                                                : day.count === 1
                                                                    ? 'bg-green-200 border-green-300'
                                                                    : day.count === 2
                                                                        ? 'bg-green-400 border-green-500'
                                                                        : day.count === 3
                                                                            ? 'bg-green-600 border-green-700'
                                                                            : 'bg-green-800 border-green-900'
                                                            }`}
                                                        title={`${day.count} ${day.count === 1 ? 'contribution' : 'contributions'} on ${day.date.toLocaleDateString('en-US', {
                                                            weekday: 'long',
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    )).slice(0, Math.ceil(365 / 7))}
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground mt-4">
                                <span>Less</span>
                                <div className="flex items-center gap-1">
                                    <div className="h-3 w-3 bg-muted rounded-sm border border-muted"></div>
                                    <div className="h-3 w-3 bg-green-200 rounded-sm border border-green-300"></div>
                                    <div className="h-3 w-3 bg-green-400 rounded-sm border border-green-500"></div>
                                    <div className="h-3 w-3 bg-green-600 rounded-sm border border-green-700"></div>
                                    <div className="h-3 w-3 bg-green-800 rounded-sm border border-green-900"></div>
                                </div>
                                <span>More</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-primary" />
                                Recent Activity
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {recentActivity.map((activity, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className={`p-2 rounded-full ${activity.type === 'quiz'
                                            ? 'bg-purple-100 text-purple-600'
                                            : activity.type === 'note'
                                                ? 'bg-blue-100 text-blue-600'
                                                : activity.type === 'task'
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-yellow-100 text-yellow-600'
                                        }`}>
                                        <activity.icon className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate">{activity.text}</p>
                                        {activity.score && (
                                            <Badge variant="secondary" className="text-xs mt-1">
                                                {activity.score}
                                            </Badge>
                                        )}
                                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                    {/* Skills & Progress */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Skills & Progress</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {skills.map((skill, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{skill.name}</span>
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="text-xs">
                                                {skill.level}
                                            </Badge>
                                            <span className="text-sm font-medium">{skill.progress}%</span>
                                        </div>
                                    </div>
                                    <Progress value={skill.progress} className="h-2" />
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Badges & Achievements */}
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Badges & Achievements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                {badges.map((badge, i) => (
                                    <div
                                        key={i}
                                        className={`p-4 rounded-lg text-center transition-all hover:scale-105 ${badge.earned
                                                ? 'bg-primary/5 border border-primary/20'
                                                : 'bg-muted/50 opacity-60'
                                            }`}
                                    >
                                        <div className={`mx-auto mb-3 p-3 rounded-full w-fit ${badge.earned
                                                ? badge.color === 'orange'
                                                    ? 'bg-orange-100 text-orange-600'
                                                    : badge.color === 'yellow'
                                                        ? 'bg-yellow-100 text-yellow-600'
                                                        : 'bg-blue-100 text-blue-600'
                                                : 'bg-muted text-muted-foreground'
                                            }`}>
                                            <badge.icon className="h-6 w-6" />
                                        </div>
                                        <p className="font-medium text-sm mb-1">{badge.name}</p>
                                        <Badge
                                            variant={badge.earned ? "default" : "secondary"}
                                            className="text-xs"
                                        >
                                            {badge.earned ? 'Earned' : 'Locked'}
                                        </Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}