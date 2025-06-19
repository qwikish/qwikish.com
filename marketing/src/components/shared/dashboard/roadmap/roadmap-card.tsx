import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Star, Calendar, Target, CheckCircle, Clock, Flag, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { format } from "date-fns"

interface RoadmapCardProps {
    title: string
    description: string
    progress: number
    totalMilestones: number
    completedMilestones: number
    category: string
    priority: "high" | "medium" | "low"
    dueDate: Date
    tags: string[]
    starred: boolean
    status: "planning" | "in-progress" | "near-completion" | "completed"
}

const RoadmapCard = ({
    title,
    description,
    progress,
    totalMilestones,
    completedMilestones,
    category,
    priority,
    dueDate,
    tags,
    starred,
    status,
}: RoadmapCardProps) => {
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case "high":
                return "text-red-500 bg-red-50 border-red-200"
            case "medium":
                return "text-orange-500 bg-orange-50 border-orange-200"
            case "low":
                return "text-green-500 bg-green-50 border-green-200"
            default:
                return "text-gray-500 bg-gray-50 border-gray-200"
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "completed":
                return "text-green-600 bg-green-100"
            case "near-completion":
                return "text-blue-600 bg-blue-100"
            case "in-progress":
                return "text-orange-600 bg-orange-100"
            case "planning":
                return "text-gray-600 bg-gray-100"
            default:
                return "text-gray-600 bg-gray-100"
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-3 h-3" />
            case "near-completion":
                return <Target className="w-3 h-3" />
            case "in-progress":
                return <Clock className="w-3 h-3" />
            case "planning":
                return <Calendar className="w-3 h-3" />
            default:
                return <Clock className="w-3 h-3" />
        }
    }

    return (
        <Card className="hover:shadow-md transition-all duration-200 group">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getPriorityColor(priority)}>
                            <Flag className="w-3 h-3 mr-1" />
                            {priority}
                        </Badge>
                        {starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                                <Star className="mr-2 h-4 w-4" />
                                {starred ? "Unstar" : "Star"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Calendar className="mr-2 h-4 w-4" />
                                Edit Timeline
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Target className="mr-2 h-4 w-4" />
                                View Details
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div>
                    <h3 className="font-semibold text-lg leading-tight mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{description}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <Badge variant="secondary">{category}</Badge>
                    <Badge variant="outline" className={getStatusColor(status)}>
                        {getStatusIcon(status)}
                        <span className="ml-1 capitalize">{status.replace("-", " ")}</span>
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="space-y-4">
                    {/* Progress */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm text-muted-foreground">{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
                            <span>
                                {completedMilestones}/{totalMilestones} milestones
                            </span>
                            <span>{totalMilestones - completedMilestones} remaining</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                        {tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                        {tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                                +{tags.length - 3}
                            </Badge>
                        )}
                    </div>

                    {/* Due Date */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Due {format(dueDate, "MMM d, yyyy")}</span>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full" variant="outline">
                        Continue Learning
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default RoadmapCard
