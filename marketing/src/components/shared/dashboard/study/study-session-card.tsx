"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Clock, Brain, Calendar, Play, CheckCircle, MoreVertical, BookOpen, Target, Zap, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"

interface StudySessionCardProps {
    id: number
    title: string
    subject: string
    duration: number
    completedAt?: Date
    scheduledFor?: Date
    focusScore?: number
    status: "completed" | "scheduled" | "in-progress"
    type: "deep-focus" | "lecture" | "practice" | "flashcards" | "hands-on"
    notes?: string
    tags: string[]
}

const StudySessionCard = ({
    title,
    subject,
    duration,
    completedAt,
    scheduledFor,
    focusScore,
    status,
    type,
    notes,
    tags,
}: StudySessionCardProps) => {
    const getTypeIcon = (type: string) => {
        switch (type) {
            case "deep-focus":
                return <Brain className="w-4 h-4" />
            case "lecture":
                return <BookOpen className="w-4 h-4" />
            case "practice":
                return <Target className="w-4 h-4" />
            case "flashcards":
                return <Zap className="w-4 h-4" />
            case "hands-on":
                return <FileText className="w-4 h-4" />
            default:
                return <BookOpen className="w-4 h-4" />
        }
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case "deep-focus":
                return "chart-1"
            case "lecture":
                return "chart-2"
            case "practice":
                return "chart-3"
            case "flashcards":
                return "chart-4"
            case "hands-on":
                return "chart-5"
            default:
                return "muted"
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "bg-chart-2/10 text-chart-2 border-chart-2/20"
            case "scheduled":
                return "bg-chart-3/10 text-chart-3 border-chart-3/20"
            case "in-progress":
                return "bg-chart-1/10 text-chart-1 border-chart-1/20"
            default:
                return "bg-muted text-muted-foreground"
        }
    }

    return (
        <Card className="bg-card/90 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 group">
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
                            <Badge variant="outline" className={`text-xs ${getStatusColor(status)}`}>
                                {status === "in-progress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}
                            </Badge>
                        </div>
                        <h3 className="text-lg font-bold leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        {notes && <p className="text-sm text-muted-foreground line-clamp-2">{notes}</p>}
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
                                Start Session
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                Reschedule
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                Edit Notes
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Duration and Focus Score */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>
                            {Math.floor(duration / 60)}h {duration % 60}m
                        </span>
                    </div>
                    {focusScore && (
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Brain className="w-4 h-4" />
                            <span>{focusScore}% focus</span>
                        </div>
                    )}
                </div>

                {/* Focus Score Progress */}
                {focusScore && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Focus Score</span>
                            <span>{focusScore}%</span>
                        </div>
                        <Progress value={focusScore} className="h-2" />
                    </div>
                )}

                {/* Date Information */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {completedAt && <span>Completed {format(completedAt, "MMM d, h:mm a")}</span>}
                    {scheduledFor && <span>Scheduled for {format(scheduledFor, "MMM d, h:mm a")}</span>}
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
                <div className="pt-2">
                    {status === "scheduled" && (
                        <Button size="sm" className="w-full gap-2">
                            <Play className="w-4 h-4" />
                            Start Session
                        </Button>
                    )}
                    {status === "completed" && (
                        <Button variant="outline" size="sm" className="w-full gap-2">
                            <CheckCircle className="w-4 h-4" />
                            View Details
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default StudySessionCard
