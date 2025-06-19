"use client"

import React from "react"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Task } from "@/types/task"
import { getTaskUrgency, getCategoryIcon, getCategoryColor, getPriorityColor } from "@/utils/task-utill"
import {
    MoreVertical,
    Star,
    Edit,
    Copy,
    Archive,
    Trash2,
    Clock,
    CalendarIcon,
    Flag,
    Tag,
    AlertCircle,
} from "lucide-react"

interface TaskItemProps {
    task: Task
    onToggle: (id: number) => void
    onToggleStar: (id: number) => void
    onDuplicate: (id: number) => void
    onDelete: (id: number) => void
}

export const TaskItem = React.memo<TaskItemProps>(({ task, onToggle, onToggleStar, onDuplicate, onDelete }) => {
    const urgency = getTaskUrgency(task)
    const CategoryIcon = getCategoryIcon(task.category)

    const handleToggle = React.useCallback(() => {
        onToggle(task.id)
    }, [task.id, onToggle])

    const handleToggleStar = React.useCallback(() => {
        onToggleStar(task.id)
    }, [task.id, onToggleStar])

    const handleDuplicate = React.useCallback(() => {
        onDuplicate(task.id)
    }, [task.id, onDuplicate])

    const handleDelete = React.useCallback(() => {
        onDelete(task.id)
    }, [task.id, onDelete])

    return (
        <div
            className={`flex items-start gap-3 p-4 rounded-lg border transition-all hover:shadow-sm ${task.completed
                    ? "opacity-70 bg-muted/30"
                    : urgency === "overdue"
                        ? "border-red-200 bg-red-50/50"
                        : urgency === "today"
                            ? "border-blue-200 bg-blue-50/50"
                            : "hover:bg-accent/50"
                }`}
        >
            <Checkbox checked={task.completed} onCheckedChange={handleToggle} className="mt-1" />

            <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                                {task.title}
                            </p>
                            {task.starred && <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />}
                            {urgency === "overdue" && <AlertCircle className="w-4 h-4 text-red-500" />}
                        </div>
                        {task.description && <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>}
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={handleToggleStar}>
                                <Star className="mr-2 h-4 w-4" />
                                {task.starred ? "Unstar" : "Star"}
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDuplicate}>
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Archive className="mr-2 h-4 w-4" />
                                Archive
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500" onClick={handleDelete}>
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {/* Progress Bar */}
                {task.progress > 0 && task.progress < 100 && (
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                    </div>
                )}

                {/* Subtasks */}
                {task.subtasks && task.subtasks.length > 0 && (
                    <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">
                            Subtasks ({task.subtasks.filter((st) => st.completed).length}/{task.subtasks.length})
                        </p>
                        <div className="space-y-1">
                            {task.subtasks.slice(0, 3).map((subtask) => (
                                <div key={subtask.id} className="flex items-center gap-2 text-sm">
                                    <div className={`w-2 h-2 rounded-full ${subtask.completed ? "bg-green-500" : "bg-gray-300"}`} />
                                    <span className={subtask.completed ? "line-through text-muted-foreground" : ""}>{subtask.title}</span>
                                </div>
                            ))}
                            {task.subtasks.length > 3 && (
                                <p className="text-xs text-muted-foreground ml-4">+{task.subtasks.length - 3} more</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Task Meta */}
                <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{task.timeEstimate}</span>
                    </div>

                    <Badge variant="outline" className={getPriorityColor(task.priority)}>
                        <Flag className="h-3 w-3 mr-1" />
                        {task.priority}
                    </Badge>

                    <Badge variant="outline" className={getCategoryColor(task.category)}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        <span className="capitalize">{task.category}</span>
                    </Badge>

                    <div className="flex items-center gap-1 text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>
                            {urgency === "overdue"
                                ? "Overdue"
                                : urgency === "today"
                                    ? "Today"
                                    : urgency === "tomorrow"
                                        ? "Tomorrow"
                                        : format(task.due, "MMM d")}
                        </span>
                    </div>
                </div>

                {/* Tags */}
                {task.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {task.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                <Tag className="h-2 w-2 mr-1" />
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
})

TaskItem.displayName = "TaskItem"
