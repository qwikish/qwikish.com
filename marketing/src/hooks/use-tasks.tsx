"use client"

import { useState, useMemo, useCallback } from "react"
import type { Task, TaskStats } from "@/types/task"
import { isToday, addDays } from "date-fns"

const INITIAL_TASKS: Task[] = [
    {
        id: 1,
        title: "Complete React Advanced Course",
        description: "Finish modules 8-12 covering advanced hooks, context, and performance optimization",
        due: new Date(2024, 11, 15),
        priority: "high",
        completed: false,
        timeEstimate: "4 hours",
        category: "study",
        tags: ["React", "JavaScript", "Frontend"],
        progress: 65,
        starred: true,
        createdAt: new Date(2024, 10, 1),
        subtasks: [
            { id: 1, title: "Complete Module 8: Advanced Hooks", completed: true },
            { id: 2, title: "Complete Module 9: Context API", completed: true },
            { id: 3, title: "Complete Module 10: Performance", completed: false },
            { id: 4, title: "Complete Module 11: Testing", completed: false },
            { id: 5, title: "Complete Module 12: Deployment", completed: false },
        ],
    },
    {
        id: 2,
        title: "Team Sprint Planning Meeting",
        description: "Plan next sprint goals and assign tasks to team members",
        due: new Date(2024, 10, 28),
        priority: "high",
        completed: false,
        timeEstimate: "2 hours",
        category: "work",
        tags: ["Meeting", "Planning", "Team"],
        progress: 0,
        starred: false,
        createdAt: new Date(2024, 10, 20),
    },
    {
        id: 3,
        title: "Review Pull Requests",
        description: "Review and provide feedback on 5 pending pull requests",
        due: new Date(2024, 10, 25),
        priority: "medium",
        completed: true,
        timeEstimate: "1.5 hours",
        category: "work",
        tags: ["Code Review", "Development"],
        progress: 100,
        starred: false,
        createdAt: new Date(2024, 10, 22),
    },
    {
        id: 4,
        title: "Gym Workout Session",
        description: "Full body workout focusing on strength training",
        due: new Date(),
        priority: "medium",
        completed: false,
        timeEstimate: "1 hour",
        category: "health",
        tags: ["Fitness", "Health", "Routine"],
        progress: 0,
        starred: false,
        createdAt: new Date(),
    },
]

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS)

    const stats = useMemo((): TaskStats => {
        const completed = tasks.filter((task) => task.completed).length
        const total = tasks.length
        const highPriority = tasks.filter((task) => task.priority === "high" && !task.completed).length
        const todayTasks = tasks.filter((task) => isToday(task.due) && !task.completed).length
        const overdueTasks = tasks.filter((task) => task.due < new Date() && !task.completed).length

        return {
            total,
            completed,
            completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
            highPriority,
            todayTasks,
            overdueTasks,
        }
    }, [tasks])

    const toggleTask = useCallback((taskId: number) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed, progress: !task.completed ? 100 : task.progress }
                    : task,
            ),
        )
    }, [])

    const toggleTaskStar = useCallback((taskId: number) => {
        setTasks((prev) => prev.map((task) => (task.id === taskId ? { ...task, starred: !task.starred } : task)))
    }, [])

    const deleteTask = useCallback((taskId: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== taskId))
    }, [])

    const duplicateTask = useCallback((taskId: number) => {
        setTasks((prev) => {
            const taskToDuplicate = prev.find((task) => task.id === taskId)
            if (!taskToDuplicate) return prev

            const newTask: Task = {
                ...taskToDuplicate,
                id: Math.max(...prev.map((t) => t.id)) + 1,
                title: `${taskToDuplicate.title} (Copy)`,
                completed: false,
                progress: 0,
                createdAt: new Date(),
                due: addDays(taskToDuplicate.due, 1),
            }
            return [...prev, newTask]
        })
    }, [])

    const addTask = useCallback((newTask: Omit<Task, "id" | "createdAt" | "completed" | "progress" | "starred">) => {
        setTasks((prev) => {
            const task: Task = {
                ...newTask,
                id: Math.max(...prev.map((t) => t.id)) + 1,
                completed: false,
                progress: 0,
                starred: false,
                createdAt: new Date(),
            }
            return [...prev, task]
        })
    }, [])

    return {
        tasks,
        stats,
        toggleTask,
        toggleTaskStar,
        deleteTask,
        duplicateTask,
        addTask,
    }
}
