"use client"

import type React from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Star, MoreVertical, Pen, Trash2, Heart, Clock, FileText } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface NotesCardProps {
    title: string
    description: string
    tags: string[]
    subnotes: number
    createdAt: Date
    updatedAt: Date
    starred: boolean
    category: string
    onEdit?: () => void
    onDelete?: () => void
    onToggleFavorite?: () => void
}

const NotesCard: React.FC<NotesCardProps> = ({
    title,
    description,
    tags,
    subnotes,
    createdAt,
    updatedAt,
    starred,
    category,
    onEdit,
    onDelete,
    onToggleFavorite,
}) => {
    const getCategoryColor = (category: string) => {
        const colors = {
            AI: "chart-1",
            Web: "chart-2",
            Mobile: "chart-3",
            Design: "chart-4",
            Business: "chart-5",
        }
        return colors[category as keyof typeof colors] || "muted"
    }

    return (
        <Card className="relative overflow-hidden bg-card/90 backdrop-blur-sm border-border shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            {/* Gradient accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-${getCategoryColor(category)}`} />

            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-muted/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader className="pb-3 relative z-10">
                <div className="flex items-start justify-between gap-3">
                    <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg bg-${getCategoryColor(category)} shadow-lg`}>
                                <FileText className="w-3 h-3 text-primary-foreground" />
                            </div>
                            <Badge
                                variant="secondary"
                                className="text-xs font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80"
                            >
                                {category}
                            </Badge>
                        </div>
                        <h2 className="text-lg font-bold leading-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                            {title}
                        </h2>
                        {description && <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{description}</p>}
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0">
                        {starred ? (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-chart-4 hover:bg-chart-4/10 hover:text-chart-4 transition-colors"
                                onClick={onToggleFavorite}
                            >
                                <Star className="w-4 h-4 fill-current" />
                            </Button>
                        ) : (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-chart-4 hover:bg-chart-4/10 transition-all"
                                onClick={onToggleFavorite}
                            >
                                <Star className="w-4 h-4" />
                            </Button>
                        )}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-all"
                                >
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-44 bg-popover/95 backdrop-blur-sm border-border">
                                <DropdownMenuItem onClick={onEdit} className="hover:bg-accent hover:text-accent-foreground">
                                    <Pen className="mr-2 h-4 w-4" />
                                    <span>Edit Note</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={onToggleFavorite} className="hover:bg-accent hover:text-accent-foreground">
                                    <Heart className="mr-2 h-4 w-4" />
                                    <span>{starred ? "Remove favorite" : "Add favorite"}</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={onDelete}
                                    className="hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive"
                                >
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    <span>Delete Note</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="py-3 relative z-10">
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <FileText className="w-3.5 h-3.5" />
                        <span className="font-medium">{subnotes}</span>
                        <span>{subnotes === 1 ? "subnote" : "subnotes"}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{createdAt.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                </div>

                {createdAt.toISOString() !== updatedAt.toISOString() && (
                    <div className="mt-2 text-xs text-slate-400">
                        Updated: {updatedAt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                )}
            </CardContent>

            <CardFooter className="pt-3 pb-4 relative z-10">
                <div className="flex flex-wrap gap-2 w-full">
                    {tags.slice(0, 3).map((tag) => (
                        <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs font-medium bg-muted text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                            {tag}
                        </Badge>
                    ))}
                    {tags.length > 3 && (
                        <Badge variant="outline" className="text-xs font-medium bg-muted text-muted-foreground border-border">
                            +{tags.length - 3} more
                        </Badge>
                    )}
                </div>
            </CardFooter>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Card>
    )
}

export default NotesCard
