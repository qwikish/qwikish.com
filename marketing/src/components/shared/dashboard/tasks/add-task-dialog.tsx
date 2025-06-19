/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Task } from "@/types/task"
import { Plus } from "lucide-react"

interface AddTaskDialogProps {
    onAddTask: (task: Omit<Task, "id" | "createdAt" | "completed" | "progress" | "starred">) => void
}

export const AddTaskDialog = React.memo<AddTaskDialogProps>(({ onAddTask }) => {
    const [open, setOpen] = React.useState(false)
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [priority, setPriority] = React.useState<"high" | "medium" | "low">("medium")
    const [category, setCategory] = React.useState<"work" | "personal" | "study" | "health" | "other">("work")
    const [due, setDue] = React.useState<Date>(new Date())
    const [timeEstimate, setTimeEstimate] = React.useState("1 hour")

    const handleSubmit = React.useCallback(() => {
        if (title.trim()) {
            onAddTask({
                title,
                description,
                due,
                priority,
                category,
                timeEstimate,
                tags: [],
            })

            // Reset form
            setTitle("")
            setDescription("")
            setPriority("medium")
            setCategory("work")
            setDue(new Date())
            setTimeEstimate("1 hour")
            setOpen(false)
        }
    }, [title, description, due, priority, category, timeEstimate, onAddTask])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="sm" className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Task
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Task</DialogTitle>
                    <DialogDescription>Create a new task with details and priority.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Title</label>
                        <Input placeholder="Task title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <Textarea
                            placeholder="Task description..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Priority</label>
                            <Select value={priority} onValueChange={(value: any) => setPriority(value)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <Select value={category} onValueChange={(value: any) => setCategory(value)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="work">Work</SelectItem>
                                    <SelectItem value="personal">Personal</SelectItem>
                                    <SelectItem value="study">Study</SelectItem>
                                    <SelectItem value="health">Health</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Time Estimate</label>
                        <Input placeholder="e.g., 2 hours" value={timeEstimate} onChange={(e) => setTimeEstimate(e.target.value)} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Add Task
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
})

AddTaskDialog.displayName = "AddTaskDialog"
