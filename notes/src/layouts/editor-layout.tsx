"use client"

import NotesList from "@/components/shared/playground/notes-list"
import { Button } from "@/components/ui/button"
import { PanelLeft, PanelLeftClose } from "lucide-react"
import { useState, useEffect } from "react"
import { Outlet, useParams } from "react-router-dom"

const EditorLayout = () => {
    const { noteId, subnoteId } = useParams()
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(subnoteId || null)
    const [isNotesListVisible, setIsNotesListVisible] = useState(true)

    // Sync selectedNoteId with subnoteId from URL
    useEffect(() => {
        if (subnoteId) {
            setSelectedNoteId(subnoteId)
        }
    }, [subnoteId])

    const toggleNotesList = () => {
        setIsNotesListVisible(!isNotesListVisible)
    }

    return (
        <div className="h-screen flex bg-background">
            {isNotesListVisible && (
                <NotesList selectedNoteId={selectedNoteId} onSelectNote={setSelectedNoteId} isVisible={isNotesListVisible} />
            )}
            <div className="flex-1 h-full  w-full flex flex-col">
                <header className="flex h-16 z-40 w-full shrink-0 items-center justify-between gap-2 border-b px-4">
                    <div className="flex items-center gap-2">
                        <Button
                            variant={isNotesListVisible ? "secondary" : "default"}
                            onClick={toggleNotesList}
                            className="flex items-center gap-2"
                        >
                            {isNotesListVisible ? (
                                <>
                                    <PanelLeft className="h-4 w-4" />
                                    Hide Notes
                                </>
                            ) : (
                                <>
                                    <PanelLeftClose className="h-4 w-4" />
                                    Show Notes
                                </>
                            )}
                        </Button>
                        {noteId && (
                            <div className="text-sm text-muted-foreground">
                                Editing: Note {noteId}
                                {subnoteId && ` / Subnote ${subnoteId}`}
                            </div>
                        )}
                    </div>
                </header>
                <div className="flex flex-1 h-full w-full  overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default EditorLayout
