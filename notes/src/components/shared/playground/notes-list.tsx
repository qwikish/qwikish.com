"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Star, Plus, StickyNote } from "lucide-react"
import { notes } from "@/constants/dummy-data"
import { useNavigate, useParams } from "react-router-dom"

interface NotesListProps {
    selectedNoteId: string | null
    onSelectNote: (noteId: string) => void
    isVisible: boolean
}

export default function NotesList({ selectedNoteId, onSelectNote, isVisible }: NotesListProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const { noteId } = useParams<{ noteId: string }>()
    const navigate = useNavigate()

    const currentNote = useMemo(() => (noteId ? notes.find((note) => note.id === noteId) : null), [noteId])

    const filteredSubnotes = useMemo(() => {
        if (!currentNote?.subnotes) return []

        if (!searchQuery.trim()) return currentNote.subnotes

        return currentNote.subnotes.filter(
            (subnote) =>
                subnote.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                subnote.content.toLowerCase().includes(searchQuery.toLowerCase()),
        )
    }, [currentNote?.subnotes, searchQuery])

    const formatDate = (date: Date) => {
        const now = new Date()
        const diffTime = Math.abs(now.getTime() - date.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays === 1) return "Today"
        if (diffDays === 2) return "Yesterday"
        if (diffDays <= 7) return `${diffDays - 1} days ago`
        if (diffDays <= 30) return `${Math.ceil(diffDays / 7)} weeks ago`
        return date.toLocaleDateString()
    }

    if (!isVisible) {
        return null
    }

    return (
        <div className="w-80 border-r bg-muted/20 flex flex-col h-full">
            {/* Header */}
            <div className="p-4 border-b bg-background">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <StickyNote className="w-5 h-5 text-primary" />
                        <h2 className="font-semibold">{currentNote ? `${currentNote.title}` : "Notes"}</h2>
                    </div>
                    <Button size="sm" variant="outline">
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>

                {/* Search */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search subnotes..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Notes List */}
            <div className="flex-1 overflow-auto">
                {!currentNote ? (
                    <div className="p-4 text-center text-muted-foreground">
                        <StickyNote className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">No note selected</p>
                    </div>
                ) : filteredSubnotes.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                        <StickyNote className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">{searchQuery ? "No subnotes match your search" : "No subnotes found"}</p>
                    </div>
                ) : (
                    filteredSubnotes.map((subnote) => (
                        <div
                            key={subnote.id}
                            onClick={() => {
                                onSelectNote(subnote.id)
                                navigate(`/playground/${noteId}/subnotes/${subnote.id}`)
                            }}
                            className={`p-4 border-b cursor-pointer hover:bg-accent/50 transition-colors ${selectedNoteId === subnote.id ? "bg-accent border-l-4 border-l-primary" : ""
                                }`}
                        >
                            <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                    <h3 className="font-medium text-sm line-clamp-1">{subnote.title}</h3>
                                    <div className="flex items-center gap-1 ml-2">
                                        {subnote.starred && <Star className="w-3 h-3 text-yellow-500 fill-current" />}
                                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                                            {formatDate(subnote.updatedAt)}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground line-clamp-2">{subnote.content}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
