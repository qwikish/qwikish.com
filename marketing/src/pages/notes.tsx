import { CTACard } from "@/components/shared/dashboard/cta-card"
import NotesCard from "@/components/shared/dashboard/notes/note-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, SquareCheck, ChevronDown, ChevronUp, Plus } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const NotesPage = () => {
    const [showAllNotes, setShowAllNotes] = useState(false)
    const router = useNavigate()
    const data = {
        stats: [
            {
                title: "Notes Created",
                icon: <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 14
            },
            {
                title: "Total Subnotes",
                icon: <SquareCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 14
            },
            {
                title: "Shared Notes",
                icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 14
            },
            {
                title: "Total Categories",
                icon: <SquareCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
                value: 14
            },
        ],
        notes: [
            {
                title: "Machine Learning",
                description: "Machine learning (ML) is a field of study that focuses on the development of algorithms and models...",
                tags: ["AI", "Machine Learning"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "AI"
            },
            {
                title: "Deep Learning",
                description: "Deep learning is a subset of machine learning that focuses on training models with multiple layers...",
                tags: ["AI", "Deep Learning"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "AI"
            },
            {
                title: "Artificial Intelligence",
                description: "Artificial intelligence (AI) is a field of study that focuses on creating intelligent machines...",
                tags: ["AI", "Artificial Intelligence"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "AI"
            },
            {
                title: "Natural Language Processing",
                description: "Natural language processing (NLP) is a field of study that focuses on the interaction between computers...",
                tags: ["AI", "NLP"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "AI"
            },
            {
                title: "Computer Vision",
                description: "Computer vision is a field of study that focuses on the ability of computers to understand and process...",
                tags: ["AI", "Computer Vision"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "AI"
            },
            {
                title: "Speech Recognition",
                description: "Speech recognition is a field of study that focuses on the ability of computers to understand...",
                tags: ["AI", "Speech Recognition"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "AI"
            },
            {
                title: "Web Development",
                description: "Web development is the process of creating and maintaining websites and web applications.",
                tags: ["Web", "Development"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: true,
                category: "Web"
            },
            {
                title: "React",
                description: "React is a JavaScript library for building user interfaces.",
                tags: ["Web", "Development"],
                subnotes: 10,
                createdAt: new Date(),
                updatedAt: new Date(),
                starred: false,
                category: "Web"
            }
        ]
    }

    const visibleNotes = showAllNotes ? data.notes : data.notes.slice(0, 6)

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Notes</h1>
                        <p className="text-muted-foreground">All your notes are here</p>
                    </div>
                    <Button
                        onClick={() => setShowAllNotes(!showAllNotes)}
                        className=""
                    >
                         <Plus className="w-4 h-4 mr-2" />    Create Note
                        </Button>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.stats.map((stat, index) => (
                        <Card key={index} className="hover:shadow-sm transition-shadow">
                            <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-muted-foreground">
                                    {stat.title}
                                </CardTitle>
                                <div className="text-muted-foreground">
                                    {stat.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-3xl font-bold">{stat.value}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Notes App CTA */}
                <CTACard
                    icon={BookOpen}
                    title="Qwikish Notes"
                    description="Your digital notebook with smart organization and seamless sync"
                    buttonText="Open Notes"
                    gradientFrom="from-blue-50/80"
                    gradientTo="to-purple-50/80"
                    onClick={() => router("/app/notes/dashboard")}
                />
                {/* Featured Notes */}
                <div className="rounded-lg border  p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">Your Notes</h2>
                            <p className="text-sm text-muted-foreground">
                                Recently created and updated notes
                            </p>
                        </div>
                        {data.notes.length > 6 && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowAllNotes(!showAllNotes)}
                                className="mt-2 sm:mt-0"
                            >
                                {showAllNotes ? (
                                    <>
                                        <ChevronUp className="mr-2 h-4 w-4" />
                                        Show Less
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="mr-2 h-4 w-4" />
                                        Show All ({data.notes.length})
                                    </>
                                )}
                            </Button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {visibleNotes.map((note, index) => (
                            <NotesCard key={index} {...note} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesPage