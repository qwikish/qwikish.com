import type { Task } from "@/types/task"
import { isToday, isTomorrow, isThisWeek } from "date-fns"
import { Briefcase, Home, School, Heart, ListTodo } from "lucide-react"

export function getTaskUrgency(task: Task): string {
    if (task.completed) return "completed"
    if (task.due < new Date()) return "overdue"
    if (isToday(task.due)) return "today"
    if (isTomorrow(task.due)) return "tomorrow"
    if (isThisWeek(task.due)) return "this-week"
    return "future"
}

export function getCategoryIcon(category: string) {
    switch (category) {
        case "work":
            return Briefcase
        case "personal":
            return Home
        case "study":
            return School
        case "health":
            return Heart
        default:
            return ListTodo
    }
}

export function getCategoryColor(category: string): string {
    switch (category) {
        case "work":
            return "bg-blue-100 text-blue-800 border-blue-200"
        case "personal":
            return "bg-green-100 text-green-800 border-green-200"
        case "study":
            return "bg-purple-100 text-purple-800 border-purple-200"
        case "health":
            return "bg-pink-100 text-pink-800 border-pink-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
    }
}

export function getPriorityColor(priority: string): string {
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
