"use client"

import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { Plus, X,  Tags, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast } from "sonner"

// Define validation schema
const noteFormSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title too long"),
    description: z.string().min(1, "Description is required").optional(),
    category: z.string().min(1, "Category is required"),
    tags: z.array(z.string().min(1)).optional(),
    isStarred: z.boolean().optional()
})

type NoteFormValues = z.infer<typeof noteFormSchema>

const CreateNotePage = () => {

    const router = useNavigate()

    const {
        control,
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setValue,
        watch,
        reset
    } = useForm<NoteFormValues>({
        resolver: zodResolver(noteFormSchema),
        defaultValues: {
            title: "",
            description: "",
            category: "General",
            tags: [],
            isStarred: false
        }
    })

    const currentTags = watch("tags") || []

    // Available categories
    const categories = [
        "General",
        "Work",
        "Personal",
        "Ideas",
        "Learning",
        "Projects",
        "AI",
        "Web Development",
        "Mobile Development"
    ]

    const onSubmit = async (data: NoteFormValues) => {
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            toast.success("Note created successfully")

            // Reset form and redirect
            reset()
            router("/notes")
        } catch (error) {
            toast.error("Failed to create note")
        }
    }

    const handleAddTag = (tagInput: string) => {
        const tag = tagInput.trim()
        if (tag && !currentTags.includes(tag)) {
            setValue("tags", [...currentTags, tag], { shouldValidate: true })
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setValue("tags", currentTags.filter(tag => tag !== tagToRemove), { shouldValidate: true })
    }

    return (
        <div className="min-h-screen bg-background p-4 sm:p-6">
            <div className="max-w-4xl mx-auto">
                <Card className="border-0 shadow-none sm:border sm:shadow-sm">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-bold flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-primary" />
                                Create New Note
                            </CardTitle>
                        </div>
                    </CardHeader>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="space-y-6">
                            {/* Title Input */}
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    placeholder="Note title..."
                                    {...register("title")}
                                    className="w-full"
                                />
                                {errors.title && (
                                    <p className="text-sm font-medium text-destructive">
                                        {errors.title.message}
                                    </p>
                                )}
                            </div>

                            {/* Category Select */}
                            <div className="space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Controller
                                    name="category"
                                    control={control}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} value={field.value} >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.category && (
                                    <p className="text-sm font-medium text-destructive">
                                        {errors.category.message}
                                    </p>
                                )}
                            </div>

                            {/* Tags Input */}
                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <div className="flex gap-2">
                                    <Input
                                        id="tags"
                                        placeholder="Add tags..."
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault()
                                                handleAddTag(e.currentTarget.value)
                                                e.currentTarget.value = ""
                                            }
                                        }}
                                    />
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            const input = document.getElementById("tags") as HTMLInputElement
                                            if (input) {
                                                handleAddTag(input.value)
                                                input.value = ""
                                            }
                                        }}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                                <input type="hidden" {...register("tags")} />
                                {currentTags.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {currentTags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="outline"
                                                className="flex items-center gap-1"
                                            >
                                                <Tags className="w-3 h-3" />
                                                {tag}
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveTag(tag)}
                                                    className="ml-1 text-muted-foreground hover:text-destructive"
                                                >
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                                {errors.tags && (
                                    <p className="text-sm font-medium text-destructive">
                                        {errors.tags.message}
                                    </p>
                                )}
                            </div>

                            {/* Content Textarea */}
                            <div className="space-y-2">
                                <Label htmlFor="content">Description</Label>
                                <Textarea
                                    id="content"
                                    placeholder="Write your note here..."
                                    className="min-h-[200px]"
                                    {...register("description")}
                                    
                                />
                                {errors.description && (
                                    <p className="text-sm font-medium text-destructive">
                                        {errors.description.message}
                                    </p>
                                )}
                            </div>
                        </CardContent>

                        <CardFooter className="flex justify-between border-t pt-6 mt-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => router("/notes")}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Creating..." : "Create Note"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default CreateNotePage