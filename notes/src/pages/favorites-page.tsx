"use client"

import { Button } from "@/components/ui/button"
import { Star, Search, Grid3X3, List, BookOpen, Plus } from "lucide-react"
import { useState } from "react"
import NotesCard from "@/components/shared/notes/note-card"
import { Input } from "@/components/ui/input"
import { notes } from "@/constants/dummy-data"
import { useNavigate } from "react-router-dom"

const FavoritesPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const navigation = useNavigate()

    const favoriteNotes = notes.filter((note) => note.starred)

    const filteredNotes = favoriteNotes.filter(
        (note) =>
            searchQuery === "" ||
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900">
                            <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400 fill-current" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Favorite Notes</h1>
                            <p className="text-muted-foreground">
                                {filteredNotes.length} starred {filteredNotes.length === 1 ? "note" : "notes"}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
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
                        placeholder="Search favorite notes..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Notes */}
                {filteredNotes.length > 0 ? (
                    <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}>
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
                        <div className="p-4 rounded-full bg-yellow-100 dark:bg-yellow-900">
                            <Star className="w-12 h-12 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-medium">No favorite notes yet</h3>
                        <p className="text-muted-foreground max-w-md">
                            {searchQuery ? "No favorite notes match your search" : "Star your important notes to see them here"}
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

export default FavoritesPage
