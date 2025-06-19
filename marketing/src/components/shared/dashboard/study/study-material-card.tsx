"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
    BookOpen,
    Video,
    FileText,
    Globe,
    Code,
    Star,
    Clock,
    MoreVertical,
    Play,
    Bookmark,
    ExternalLink,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"

interface StudyMaterialCardProps {
    id: number
    title: string
    type: "documentation" | "video-course" | "article-series" | "interactive-book" | "ebook" | "practice-problems"
    subject: string
    progress: number
    totalPages?: number
    currentPage?: number
    totalLessons?: number
    completedLessons?: number
    totalArticles?: number
    completedArticles?: number
    totalExercises?: number
    completedExercises?: number
    totalChapters?: number
    completedChapters?: number
    totalProblems?: number
    solvedProblems?: number
    lastAccessed: Date
    difficulty: "beginner" | "intermediate" | "advanced"
    estimatedTime: string
    tags: string[]
    bookmarked: boolean
}

const StudyMaterialCard = ({
    title,
    type,
    subject,
    progress,
    totalPages,
    currentPage,
    totalLessons,
    completedLessons,
    totalArticles,
    completedArticles,
    totalExercises,
    completedExercises,
    totalChapters,
    completedChapters,
    totalProblems,
    solvedProblems,
    lastAccessed,
    difficulty,
    estimatedTime,
    tags,
    bookmarked,
}: StudyMaterialCardProps) => {
    const getTypeIcon = (type: string) => {
        switch (type) {
            case "video-course":
                return <Video className="w-4 h-4" />
            case "documentation":
                return <FileText className="w-4 h-4" />
            case "article-series":
                return <Globe className="w-4 h-4" />
            case "interactive-book":
                return <BookOpen className="w-4 h-4" />
            case "ebook":
                return <BookOpen className="w-4 h-4" />
            case "practice-problems":
                return <Code className="w-4 h-4" />
            default:
                return <BookOpen className="w-4 h-4" />
        }
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case "video-course":
                return "chart-1"
            case "documentation":
                return "chart-2"
            case "article-series":
                return "chart-3"
            case "interactive-book":
                return "chart-4"
            case "ebook":
                return "chart-5"
            case "practice-problems":
                return "chart-1"
            default:
                return "muted"
        }
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "beginner":
                return "bg-chart-2/10 text-chart-2 border-chart-2/20"
            case "intermediate":
                return "bg-chart-3/10 text-chart-3 border-chart-3/20"
            case "advanced":
                return "bg-chart-1/10 text-chart-1 border-chart-1/20"
            default:
                return "bg-muted text-muted-foreground"
        }
    }

    const getProgressText = () => {
        if (totalPages && currentPage) return `${currentPage}/${totalPages} pages`
        if (totalLessons && completedLessons) return `${completedLessons}/${totalLessons} lessons`
        if (totalArticles && completedArticles) return `${completedArticles}/${totalArticles} articles`
        if (totalExercises && completedExercises) return `${completedExercises}/${totalExercises} exercises`
        if (totalChapters && completedChapters) return `${completedChapters}/${totalChapters} chapters`
        if (totalProblems && solvedProblems) return `${solvedProblems}/${totalProblems} problems`
        return `${progress}% complete`
    }

    return (
        <Card className="bg-card/90 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-${getTypeColor(type)} shadow-lg`}>
                                <div className="text-primary-foreground">{getTypeIcon(type)}</div>
                            </div>
                            <Badge variant="secondary" className="text-xs font-medium">
                                {subject}
                            </Badge>
                            {bookmarked && <Star className="w-4 h-4 text-chart-4 fill-current" />}
                        </div>
                        <h3 className="text-lg font-bold leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`text-xs ${getDifficultyColor(difficulty)}`}>
                                {difficulty}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{estimatedTime}</span>
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground transition-all"
                            >
                                <MoreVertical className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-44">
                            <DropdownMenuItem>
                                <Play className="mr-2 h-4 w-4" />
                                Continue Reading
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bookmark className="mr-2 h-4 w-4" />
                                {bookmarked ? "Remove Bookmark" : "Add Bookmark"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Open External
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-muted-foreground">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{getProgressText()}</p>
                </div>

                {/* Last Accessed */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Last accessed {format(lastAccessed, "MMM d, h:mm a")}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                    {tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                            +{tags.length - 3}
                        </Badge>
                    )}
                </div>

                {/* Action Button */}
                <Button size="sm" className="w-full gap-2">
                    <Play className="w-4 h-4" />
                    Continue Learning
                </Button>
            </CardContent>
        </Card>
    )
}

export default StudyMaterialCard
