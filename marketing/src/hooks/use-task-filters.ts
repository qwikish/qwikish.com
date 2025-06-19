"use client"

import { useState, useMemo, useCallback } from "react"
import type { Task, TaskFilters } from "@/types/task"

export function useTaskFilters(tasks: Task[]) {
  const [filters, setFilters] = useState<TaskFilters>({
    category: "all",
    priority: "all",
    status: "all",
    search: "",
    showCompleted: true,
    sortBy: "due",
  })

  const updateFilter = useCallback(<K extends keyof TaskFilters>(key: K, value: TaskFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }, [])

  const filteredAndSortedTasks = useMemo(() => {
    const filtered = tasks.filter((task) => {
      if (!filters.showCompleted && task.completed) return false
      if (filters.category !== "all" && task.category !== filters.category) return false
      if (filters.priority !== "all" && task.priority !== filters.priority) return false
      if (filters.status === "completed" && !task.completed) return false
      if (filters.status === "pending" && task.completed) return false
      if (filters.status === "overdue" && (task.completed || task.due >= new Date())) return false
      if (filters.search && !task.title.toLowerCase().includes(filters.search.toLowerCase())) return false
      return true
    })

    return filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case "due":
          return a.due.getTime() - b.due.getTime()
        case "priority":{
          const priorityOrder = { high: 3, medium: 2, low: 1 }
          return priorityOrder[b.priority] - priorityOrder[a.priority]
        }
        case "created":
          return b.createdAt.getTime() - a.createdAt.getTime()
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })
  }, [tasks, filters])

  return {
    filters,
    updateFilter,
    filteredAndSortedTasks,
  }
}
