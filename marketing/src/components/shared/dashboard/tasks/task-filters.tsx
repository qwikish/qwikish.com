/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { TaskFilters } from "@/types/task"
import { Search } from "lucide-react"
import { useDebouncedValue } from "@/hooks/use-debounced-value"

interface TaskFiltersProps {
    filters: TaskFilters
    onFilterChange: <K extends keyof TaskFilters>(key: K, value: TaskFilters[K]) => void
}

export const TaskFiltersComponent = React.memo<TaskFiltersProps>(({ filters, onFilterChange }) => {
    const [searchValue, setSearchValue] = React.useState(filters.search)
    const debouncedSearch = useDebouncedValue(searchValue, 300)

    React.useEffect(() => {
        onFilterChange("search", debouncedSearch)
    }, [debouncedSearch, onFilterChange])

    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search tasks..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="pl-10"
                        />
                    </div>

                    <Select value={filters.category} onValueChange={(value) => onFilterChange("category", value)}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="work">Work</SelectItem>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="study">Study</SelectItem>
                            <SelectItem value="health">Health</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={filters.priority} onValueChange={(value) => onFilterChange("priority", value)}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Priority</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select value={filters.sortBy} onValueChange={(value: any) => onFilterChange("sortBy", value)}>
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="due">Due Date</SelectItem>
                            <SelectItem value="priority">Priority</SelectItem>
                            <SelectItem value="created">Created</SelectItem>
                            <SelectItem value="title">Title</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
})

TaskFiltersComponent.displayName = "TaskFilters"
