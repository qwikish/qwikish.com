import { Network, Plus, Sparkles, Clock, Zap, ChevronRight, Star, Share2, Download } from "lucide-react"
import { CTACard } from "@/components/shared/dashboard/cta-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function MindMapsDashboard() {
    // Sample data
    const stats = [
        { title: "Total Maps", value: 12, icon: Network, change: "+3 this month" },
        { title: "Collaborative", value: 5, icon: Share2, change: "2 active" },
        { title: "Last Created", value: "2 days ago", icon: Clock, change: "New template" },
        { title: "Storage Used", value: "45%", icon: Download, change: "15GB free" }
    ]

    const recentMaps = [
        { id: 1, title: "Product Roadmap", nodes: 42, lastEdited: "2023-11-15", shared: true },
        { id: 2, title: "Learning Path", nodes: 36, lastEdited: "2023-11-14", shared: false },
        { id: 3, title: "Project Brainstorm", nodes: 25, lastEdited: "2023-11-12", shared: true }
    ]

    const templates = [
        { name: "SWOT Analysis", category: "Business", stars: 4.8 },
        { name: "Essay Outline", category: "Education", stars: 4.5 },
        { name: "Product Design", category: "Design", stars: 4.7 }
    ]

    return (
        <div className="min-h-screen bg-background">
            <div className="min-h-screen bg-background p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Mind Maps</h1>
                        <p className="text-muted-foreground">Visualize ideas and connect concepts</p>
                    </div>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        New Mind Map
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
                    icon={Sparkles}
                    title="AI-Powered Mind Maps"
                    description="Generate mind maps automatically from your notes using AI"
                    buttonText="Try AI Generation"
                    gradientFrom="from-purple-50/80"
                    gradientTo="to-pink-50/80"
                    onClick={() => console.log("Navigate to AI generator")}
                />

                {/* Main Content */}
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Left Column */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Recent Maps */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Network className="h-5 w-5 text-blue-500" />
                                    Your Recent Mind Maps
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentMaps.map((map) => (
                                        <div key={map.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-medium">{map.title}</h3>
                                                    {map.shared && (
                                                        <Badge variant="secondary" className="flex items-center gap-1">
                                                            <Share2 className="h-3 w-3" />
                                                            Shared
                                                        </Badge>
                                                    )}
                                                </div>
                                                <div className="flex gap-4 mt-2">
                                                    <span className="text-sm text-muted-foreground">
                                                        Nodes: <span className="font-semibold text-foreground">{map.nodes}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-muted-foreground">
                                                    {new Date(map.lastEdited).toLocaleDateString()}
                                                </span>
                                                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Create New Map */}
                        <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Plus className="h-5 w-5 text-green-600 dark:text-green-300" />
                                    Create New Mind Map
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Start visualizing your ideas with these options
                                </p>
                                <div className="grid grid-cols-3 gap-3">
                                    <Button variant="outline" className="h-24 flex flex-col gap-2">
                                        <span className="text-2xl">🆕</span>
                                        <span>Blank</span>
                                    </Button>
                                    <Button variant="outline" className="h-24 flex flex-col gap-2">
                                        <span className="text-2xl">📝</span>
                                        <span>From Notes</span>
                                    </Button>
                                    <Button className="h-24 flex flex-col gap-2">
                                        <span className="text-2xl">🤖</span>
                                        <span>AI Generate</span>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Popular Templates */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Sparkles className="h-5 w-5 text-yellow-500" />
                                    Popular Templates
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {templates.map((template) => (
                                        <div key={template.name} className="p-3 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-medium">{template.name}</h3>
                                                    <Badge variant="outline" className="mt-1">
                                                        {template.category}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    {template.stars}
                                                </div>
                                            </div>
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
                                    <Share2 className="h-6 w-6" />
                                    <span>Share</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex flex-col gap-2">
                                    <Download className="h-6 w-6" />
                                    <span>Export</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex flex-col gap-2">
                                    <Network className="h-6 w-6" />
                                    <span>Connect</span>
                                </Button>
                                <Button variant="outline" className="h-24 flex flex-col gap-2">
                                    <Sparkles className="h-6 w-6" />
                                    <span>AI Enhance</span>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}