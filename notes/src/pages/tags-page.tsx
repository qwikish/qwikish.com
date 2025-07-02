"use client"

import { Button } from "@/components/ui/button"
import { Tag, Search, Grid3X3, List, BookOpen, Plus, Hash } from "lucide-react"
import { useState } from "react"
import NotesCard from "@/components/shared/notes/note-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { notes } from "@/constants/dummy-data"
import { useNavigate } from "react-router-dom"

const TagsPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTag, setSelectedTag] = useState<string | null>(null)
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const navigation =useNavigate()

    // Get all tags with their counts
    const tagCounts = notes.reduce(
        (acc, note) => {
            note.tags.forEach((tag) => {
                acc[tag] = (acc[tag] || 0) + 1
            })
            return acc
        },
        {} as Record<string, number>,
    )

    const sortedTags = Object.entries(tagCounts)
        .sort(([, a], [, b]) => b - a)
        .filter(([tag]) => searchQuery === "" || tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const filteredNotes = selectedTag ? notes.filter((note) => note.tags.includes(selectedTag)) : []

    const getTagColor = (tag: string) => {
        const colors = [
            "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
            "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
            "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
            "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
            "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
        ]
        const index = tag.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
        return colors[index % colors.length]
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900">
                            <Tag className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Tags</h1>
                            <p className="text-muted-foreground">
                                {sortedTags.length} {sortedTags.length === 1 ? "tag" : "tags"} across your notes
                                {selectedTag && ` • ${filteredNotes.length} notes with "${selectedTag}"`}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {selectedTag && (
                            <Button variant="outline" onClick={() => setSelectedTag(null)}>
                                Show All Tags
                            </Button>
                        )}
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
                        placeholder={selectedTag ? "Search notes..." : "Search tags..."}
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {!selectedTag ? (
                    /* Tags Grid */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {sortedTags.map(([tag, count]) => (
                            <Card
                                key={tag}
                                className="cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                                onClick={() => setSelectedTag(tag)}
                            >
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Hash className="w-4 h-4 text-muted-foreground" />
                                        <CardTitle className="text-lg font-semibold">{tag}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between">
                                        <Badge className={getTagColor(tag)}>
                                            {count} {count === 1 ? "note" : "notes"}
                                        </Badge>
                                        <div className="text-sm text-muted-foreground">Click to view</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    /* Notes with Selected Tag */
                    <>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Badge className={`${getTagColor(selectedTag)} text-base px-3 py-1`}>#{selectedTag}</Badge>
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
                                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900">
                                    <Tag className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                                </div>
                                <h3 className="text-xl font-medium">No notes found</h3>
                                <p className="text-muted-foreground max-w-md">No notes found with the tag "{selectedTag}"</p>
                            </div>
                        )}
                    </>
                )}

                {/* Empty State for Tags */}
                {!selectedTag && sortedTags.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                        <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900">
                            <Tag className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-medium">No tags found</h3>
                        <p className="text-muted-foreground max-w-md">
                            {searchQuery ? "No tags match your search" : "Start adding tags to your notes to organize them better"}
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

export default TagsPage
