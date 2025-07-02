"use client"

import { useState } from "react"
import NotesList from "./notes-list"
import { Button } from "@/components/ui/button"
import { PanelLeft, PanelLeftClose } from "lucide-react"
import { useParams } from "react-router-dom"

const NotesView = () => {
    const { noteId } = useParams()
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
    const [isNotesListVisible, setIsNotesListVisible] = useState(true)

    const toggleNotesList = () => {
        setIsNotesListVisible(!isNotesListVisible)
    }

    return (
        <div className="h-screen flex bg-background w-full">
            {isNotesListVisible && (
                <NotesList selectedNoteId={selectedNoteId} onSelectNote={setSelectedNoteId} isVisible={isNotesListVisible} />
            )}
            <div className="flex-1 h-full">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
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
                    {noteId && <div className="text-sm text-muted-foreground">Viewing subnotes for Note: {noteId}</div>}
                </header>
                <div className="flex-1 flex items-center justify-center p-4  h-full">
                    <div className="text-center text-muted-foreground">
                        <h3 className="text-lg font-medium mb-2">Select a subnote to edit</h3>
                        <p className="text-sm">Choose a subnote from the sidebar to start editing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotesView
