import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { TaskStats } from "@/types/task"
import { ListTodo, Check, Flag, CalendarIcon, TrendingUp } from "lucide-react"

interface TaskStatsProps {
    stats: TaskStats
}

export const TaskStatsComponent = React.memo<TaskStatsProps>(({ stats }) => {
    const { total, completed, completionRate, highPriority, todayTasks, overdueTasks } = stats

    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Total Tasks</CardDescription>
                    <CardTitle className="text-3xl">{total}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <ListTodo className="h-6 w-6 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Completed</CardDescription>
                    <CardTitle className="text-3xl">{completed}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <Check className="h-6 w-6 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{completionRate}% rate</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>High Priority</CardDescription>
                    <CardTitle className="text-3xl">{highPriority}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <Flag className="h-6 w-6 text-red-500" />
                        <span className="text-xs text-muted-foreground">Urgent</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Due Today</CardDescription>
                    <CardTitle className="text-3xl">{todayTasks}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <CalendarIcon className="h-6 w-6 text-blue-500" />
                        <span className="text-xs text-muted-foreground">Focus</span>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardDescription>Productivity</CardDescription>
                    <CardTitle className="text-3xl">
                        {overdueTasks === 0 ? "100%" : Math.max(0, 100 - overdueTasks * 10)}%
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between">
                        <TrendingUp className="h-6 w-6 text-green-500" />
                        <Progress value={overdueTasks === 0 ? 100 : Math.max(0, 100 - overdueTasks * 10)} className="h-2 w-16" />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
})

TaskStatsComponent.displayName = "TaskStats"
