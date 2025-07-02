"use client"

import { Button } from "@/components/ui/button"
import { Folder, Search, Grid3X3, List, BookOpen, Plus, FolderOpen } from "lucide-react"
import { useState } from "react"
import NotesCard from "@/components/shared/notes/note-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CreateCategoryDialog from "@/components/dialogs/create-category-dialog"
import { notes } from "@/constants/dummy-data"
import { useNavigate } from "react-router-dom"

const CategoriesPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const navigation = useNavigate()

    // Get all categories with their counts
    const categoryCounts = notes.reduce(
        (acc, note) => {
            acc[note.category] = (acc[note.category] || 0) + 1
            return acc
        },
        {} as Record<string, number>,
    )

    const sortedCategories = Object.entries(categoryCounts)
        .sort(([, a], [, b]) => b - a)
        .filter(([category]) => searchQuery === "" || category.toLowerCase().includes(searchQuery.toLowerCase()))

    const filteredNotes = selectedCategory ? notes.filter((note) => note.category === selectedCategory) : []

    const getCategoryIcon = (category: string) => {
        const icons = {
            Work: "💼",
            Personal: "👤",
            Learning: "📚",
            Travel: "✈️",
            Health: "🏥",
            Finance: "💰",
            AI: "🤖",
            Web: "🌐",
            Mobile: "📱",
            Design: "🎨",
            Business: "📊",
        }
        return icons[category as keyof typeof icons] || "📁"
    }

    const getCategoryColor = (category: string) => {
        const colors = {
            Work: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
            Personal: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
            Learning: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
            Travel: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
            Health: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
            Finance: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
            AI: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            Web: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            Mobile: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
            Design: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
            Business: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
        }
        return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }

    const handleCategoryCreate = (categoryData: any) => {
        console.log("Creating category:", categoryData)
        // Handle category creation logic here
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900">
                            <Folder className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Categories</h1>
                            <p className="text-muted-foreground">
                                {sortedCategories.length} {sortedCategories.length === 1 ? "category" : "categories"} organizing your
                                notes
                                {selectedCategory && ` • ${filteredNotes.length} notes in "${selectedCategory}"`}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {selectedCategory && (
                            <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                                Show All Categories
                            </Button>
                        )}
                        <CreateCategoryDialog onCategoryCreate={handleCategoryCreate} />
                        <Button onClick={() => navigation("/notes/new")}>
                            <Plus className="w-4 h-4 mr-2" />
                            Create Note
                        </Button>
                    </div>
                </div>

                {/* Search */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder={selectedCategory ? "Search notes..." : "Search categories..."}
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {!selectedCategory ? (
                    /* Categories Grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sortedCategories.map(([category, count]) => (
                            <Card
                                key={category}
                                className="cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                                onClick={() => setSelectedCategory(category)}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl">{getCategoryIcon(category)}</div>
                                        <CardTitle className="text-lg font-semibold">{category}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <Badge className={getCategoryColor(category)}>
                                            {count} {count === 1 ? "note" : "notes"}
                                        </Badge>
                                        <FolderOpen className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    /* Notes in Selected Category */
                    <>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="text-2xl">{getCategoryIcon(selectedCategory)}</div>
                                <Badge className={`${getCategoryColor(selectedCategory)} text-base px-3 py-1`}>
                                    {selectedCategory}
                                </Badge>
                                <span className="text-muted-foreground">
                                    {filteredNotes.length} {filteredNotes.length === 1 ? "note" : "notes"}
                                </span>
                            </div>
                            <div className="flex border rounded-md">
                                <Button
                                    variant={viewMode === "grid" ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("grid")}
                                    className="rounded-r-none"
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </Button>
                                <Button
                                    variant={viewMode === "list" ? "default" : "ghost"}
                                    size="sm"
                                    onClick={() => setViewMode("list")}
                                    className="rounded-l-none"
                                >
                                    <List className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {filteredNotes.length > 0 ? (
                            <div
                                className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}
                            >
                                {filteredNotes.map((note) => (
                                    <NotesCard
                                        key={note.id}
                                        {...note}
                                        onEdit={() => navigation(`/notes/${note.id}`)}
                                        onDelete={() => console.log("Delete note:", note.id)}
                                        onToggleFavorite={() => console.log("Toggle favorite:", note.id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                                <div className="p-4 rounded-full bg-orange-100 dark:bg-orange-900">
                                    <Folder className="w-12 h-12 text-orange-600 dark:text-orange-400" />
                                </div>
                                <h3 className="text-xl font-medium">No notes found</h3>
                                <p className="text-muted-foreground max-w-md">No notes found in the "{selectedCategory}" category</p>
                            </div>
                        )}
                    </>
                )}

                {/* Empty State for Categories */}
                {!selectedCategory && sortedCategories.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                        <div className="p-4 rounded-full bg-orange-100 dark:bg-orange-900">
                            <Folder className="w-12 h-12 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h3 className="text-xl font-medium">No categories found</h3>
                        <p className="text-muted-foreground max-w-md">
                            {searchQuery
                                ? "No categories match your search"
                                : "Start creating notes with categories to organize them"}
                        </p>
                        <Button onClick={() => navigation("/notes")}>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Browse All Notes
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CategoriesPage
