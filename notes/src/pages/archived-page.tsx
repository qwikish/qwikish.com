"use client"

import { Button } from "@/components/ui/button"
import { Archive, Search, Grid3X3, List, BookOpen, RotateCcw, Trash2 } from "lucide-react"
import { useState } from "react"
import NotesCard from "@/components/shared/notes/note-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { useNavigate } from "react-router-dom"

// Mock archived notes data
const archivedNotes = [
    {
        id: "archived-1",
        title: "Old Project Documentation",
        description:
            "Documentation for a completed project from last year. Contains technical specifications and implementation details.",
        category: "Work",
        tags: ["documentation", "project", "archived"],
        starred: false,
        subnotes: 12,
        createdAt: new Date("2023-06-15"),
        updatedAt: new Date("2023-12-20"),
        archivedAt: new Date("2024-01-05"),
    },
    {
        id: "archived-2",
        title: "Summer Vacation Plans 2023",
        description: "Travel itinerary and plans for summer vacation that already happened. Keeping for memories.",
        category: "Travel",
        tags: ["vacation", "travel", "memories"],
        starred: true,
        subnotes: 6,
        createdAt: new Date("2023-04-10"),
        updatedAt: new Date("2023-08-15"),
        archivedAt: new Date("2023-09-01"),
    },
]

const ArchivedPage = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [selectedNotes, setSelectedNotes] = useState<string[]>([])
    const [showBulkActions, setShowBulkActions] = useState(false)
    const navigation = useNavigate()

    const filteredNotes = archivedNotes.filter(
        (note) =>
            searchQuery === "" ||
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const toggleNoteSelection = (noteId: string) => {
        setSelectedNotes((prev) => (prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]))
    }

    const selectAllNotes = () => {
        setSelectedNotes(filteredNotes.map((note) => note.id))
    }

    const clearSelection = () => {
        setSelectedNotes([])
    }

    const restoreNotes = () => {
        console.log("Restore notes:", selectedNotes)
        clearSelection()
    }

    const permanentlyDelete = () => {
        console.log("Permanently delete notes:", selectedNotes)
        clearSelection()
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <Archive className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Archived Notes</h1>
                            <p className="text-muted-foreground">
                                {filteredNotes.length} archived {filteredNotes.length === 1 ? "note" : "notes"}
                                {selectedNotes.length > 0 && ` • ${selectedNotes.length} selected`}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setShowBulkActions(!showBulkActions)}
                            className="flex items-center gap-2"
                        >
                            <Archive className="w-4 h-4" />
                            {showBulkActions ? "Hide" : "Show"} Actions
                        </Button>
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
                </div>

                {/* Search */}
                <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search archived notes..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Bulk Actions */}
                {showBulkActions && (
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Checkbox
                                checked={selectedNotes.length === filteredNotes.length && filteredNotes.length > 0}
                                onCheckedChange={(checked) => (checked ? selectAllNotes() : clearSelection())}
                            />
                            <span className="text-sm">
                                {selectedNotes.length > 0 ? `${selectedNotes.length} selected` : "Select all"}
                            </span>
                        </div>
                        {selectedNotes.length > 0 && (
                            <>
                                <Separator orientation="vertical" className="h-6" />
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={restoreNotes}>
                                        <RotateCcw className="w-4 h-4 mr-2" />
                                        Restore
                                    </Button>
                                    <Button variant="destructive" size="sm" onClick={permanentlyDelete}>
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete Forever
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Notes */}
                {filteredNotes.length > 0 ? (
                    <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-3"}>
                        {filteredNotes.map((note) => (
                            <div key={note.id} className="relative">
                                {showBulkActions && (
                                    <Checkbox
                                        className="absolute top-2 left-2 z-10 bg-background"
                                        checked={selectedNotes.includes(note.id)}
                                        onCheckedChange={() => toggleNoteSelection(note.id)}
                                    />
                                )}
                                <div className="relative">
                                    <NotesCard
                                        {...note}
                                        onEdit={() => navigation(`/notes/${note.id}`)}
                                        onDelete={() => console.log("Permanently delete note:", note.id)}
                                        onToggleFavorite={() => console.log("Toggle favorite:", note.id)}
                                    />
                                    <Badge variant="outline" className="absolute top-2 right-2 text-xs bg-background/80 backdrop-blur-sm">
                                        Archived {note.archivedAt.toLocaleDateString()}
                                    </Badge>
                                    {/* Archived overlay */}
                                    <div className="absolute inset-0 bg-muted/20 pointer-events-none rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 space-y-4 text-center">
                        <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-800">
                            <Archive className="w-12 h-12 text-gray-600 dark:text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium">No archived notes</h3>
                        <p className="text-muted-foreground max-w-md">
                            {searchQuery
                                ? "No archived notes match your search"
                                : "Archive notes you want to keep but don't need active access to"}
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

export default ArchivedPage
