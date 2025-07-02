"use client"

import { useState } from "react"
import { notes as dummyNotes, type Note } from "@/constants/dummy-data"

export function useNotes() {
    const [notes, setNotes] = useState<Note[]>(dummyNotes[])
    const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null)
    const [selectedSubnoteId, setSelectedSubnoteId] = useState<string | null>(null)

    const selectedNote = notes.find((note) => note.id === selectedNoteId)
    const selectedSubnote = selectedNote?.subnotes.find((subnote) => subnote.id === selectedSubnoteId)

    const selectNote = (noteId: string) => {
        setSelectedNoteId(noteId)
        setSelectedSubnoteId(null) // Reset subnote selection when changing notes
    }

    const selectSubnote = (subnoteId: string) => {
        setSelectedSubnoteId(subnoteId)
    }

    return {
        notes,
        selectedNote,
        selectedSubnote,
        selectedNoteId,
        selectedSubnoteId,
        selectNote,
        selectSubnote,
        setNotes,
    }
}
