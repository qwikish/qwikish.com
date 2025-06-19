"use client"

import React from "react"
import { format } from "date-fns"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { ListTodo, Filter, Settings } from "lucide-react"

// Custom hooks
import { useTasks } from "@/hooks/use-tasks"
import { useTaskFilters } from "@/hooks/use-task-filters"

// Components
import { TaskStatsComponent } from "@/components/shared/dashboard/tasks/task-stats"
import { TaskFiltersComponent } from "@/components/shared/dashboard/tasks/task-filters"
import { TaskItem } from "@/components/shared/dashboard/tasks/task-item"
import { AddTaskDialog } from "@/components/shared/dashboard/tasks/add-task-dialog"
import { PomodoroTimer } from "@/components/shared/dashboard/tasks/pomodoro-timer"
import { CTACard } from "@/components/shared/dashboard/cta-card"

// Utils
import { CheckCircle } from "lucide-react"

export default function TaskDashboard() {
    const { tasks, stats, toggleTask, toggleTaskStar, deleteTask, duplicateTask, addTask } = useTasks()
    const { filters, updateFilter, filteredAndSortedTasks } = useTaskFilters(tasks)

    const handleNavigate = React.useCallback((path: string) => {
        // Navigation logic here
        console.log("Navigate to:", path)
    }, [])

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold">Task Dashboard</h1>
                        <p className="text-muted-foreground">
                            {format(new Date(), "EEEE, MMMM do")} • {stats.todayTasks} tasks due today
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Filter className="w-4 h-4" />
                            Filter
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <Settings className="w-4 h-4" />
                            Settings
                        </Button>
                        <AddTaskDialog onAddTask={addTask} />
                    </div>
                </div>

                {/* Stats */}
                <TaskStatsComponent stats={stats} />

                {/* CTA Card */}
                <CTACard
                    icon={CheckCircle}
                    title="Task Manager Pro"
                    description="Advanced task management with team collaboration and analytics"
                    buttonText="Upgrade Now"
                    gradientFrom="from-orange-50/80"
                    gradientTo="to-red-50/80"
                    onClick={() => handleNavigate("/tasks/pro")}
                />

                {/* Main Content */}
                <Tabs defaultValue="tasks" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="tasks">Tasks</TabsTrigger>
                        <TabsTrigger value="calendar">Calendar</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                        <TabsTrigger value="timer">Focus Timer</TabsTrigger>
                    </TabsList>

                    {/* Tasks Tab */}
                    <TabsContent value="tasks" className="space-y-6">
                        <div className="grid gap-6 lg:grid-cols-4">
                            <div className="space-y-6 lg:col-span-3">
                                <TaskFiltersComponent filters={filters} onFilterChange={updateFilter} />

                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle>Your Tasks ({filteredAndSortedTasks.length})</CardTitle>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => updateFilter("showCompleted", !filters.showCompleted)}
                                            >
                                                {filters.showCompleted ? "Hide" : "Show"} Completed
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {filteredAndSortedTasks.length === 0 ? (
                                            <div className="text-center py-8 text-muted-foreground">
                                                <ListTodo className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                                <p>No tasks found matching your filters.</p>
                                            </div>
                                        ) : (
                                            filteredAndSortedTasks.map((task) => (
                                                <TaskItem
                                                    key={task.id}
                                                    task={task}
                                                    onToggle={toggleTask}
                                                    onToggleStar={toggleTaskStar}
                                                    onDuplicate={duplicateTask}
                                                    onDelete={deleteTask}
                                                />
                                            ))
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar - Quick stats and actions */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Quick Stats</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Completion Rate</span>
                                            <span className="font-medium">{stats.completionRate}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>High Priority</span>
                                            <span className="font-medium text-red-500">{stats.highPriority}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Due Today</span>
                                            <span className="font-medium text-blue-500">{stats.todayTasks}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    {/* Calendar Tab */}
                    <TabsContent value="calendar" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Task Calendar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Calendar
                                    mode="multiple"
                                    selected={tasks.map((task) => task.due)}
                                    className="rounded-md border w-full"
                                />
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Analytics Tab */}
                    <TabsContent value="analytics" className="space-y-6">
                        <div className="grid gap-6 lg:grid-cols-2">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Completion Analytics</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-primary">{stats.completionRate}%</div>
                                        <p className="text-muted-foreground">Overall Completion Rate</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Timer Tab */}
                    <TabsContent value="timer" className="space-y-6">
                        <PomodoroTimer />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
