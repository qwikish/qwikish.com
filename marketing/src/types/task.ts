export interface Task {
    id: number
    title: string
    description?: string
    due: Date
    priority: "high" | "medium" | "low"
    completed: boolean
    timeEstimate: string
    category: "work" | "personal" | "study" | "health" | "other"
    tags: string[]
    progress: number
    starred: boolean
    createdAt: Date
    subtasks?: { id: number; title: string; completed: boolean }[]
}

export interface TaskFilters {
    category: string
    priority: string
    status: string
    search: string
    showCompleted: boolean
    sortBy: "due" | "priority" | "created" | "title"
}

export interface TaskStats {
    total: number
    completed: number
    completionRate: number
    highPriority: number
    todayTasks: number
    overdueTasks: number
}
  