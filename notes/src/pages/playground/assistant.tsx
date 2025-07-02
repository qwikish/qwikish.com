"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, X, Search, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { notes } from "@/constants/dummy-data"
import  ChatInterface  from "@/components/shared/playground/assistant/chat-interface"

type UploadedFile = {
    id: string
    name: string
    size: string
    type: string
    uploadedAt: Date
}

export default function AIChatPage() {
    const [selectedNotes, setSelectedNotes] = useState<string[]>([])
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
    const [searchQuery, setSearchQuery] = useState("")
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            Array.from(files).forEach((file) => {
                const newFile: UploadedFile = {
                    id: Date.now().toString() + Math.random(),
                    name: file.name,
                    size: (file.size / 1024 / 1024).toFixed(2) + " MB",
                    type: file.name.split(".").pop() || "unknown",
                    uploadedAt: new Date(),
                }
                setUploadedFiles((prev) => [...prev, newFile])
            })
        }
    }

    const removeFile = (fileId: string) => {
        setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId))
    }

    const toggleNoteSelection = (noteId: string) => {
        setSelectedNotes((prev) => (prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]))
    }

    const filteredNotes = notes.filter(
        (note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
    )



    return (
        <div className="flex h-screen bg-background overflow-hidden">
            {/* Sidebar */}
            <div className="hidden lg:flex lg:w-80 lg:flex-col border-r">
                <div className="p-4 border-b">
                    <h2 className="font-semibold text-lg mb-3">Knowledge Base</h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                            placeholder="Search notes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                </div>

                <ScrollArea className="flex-1 overflow-auto">
                    <div className="p-4 space-y-4">
                        {/* Notes Section */}
                        <div>
                            <h3 className="font-medium text-sm text-muted-foreground mb-2">
                                Notes ({selectedNotes.length} selected)
                            </h3>
                            <div className="space-y-2">
                                {filteredNotes.map((note) => (
                                    <Card
                                        key={note.id}
                                        className={`cursor-pointer transition-colors hover:bg-muted/50 ${selectedNotes.includes(note.id) ? "ring-2 ring-primary" : ""
                                            }`}
                                        onClick={() => toggleNoteSelection(note.id)}
                                    >
                                        <CardContent className="p-3">
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-medium text-sm truncate">{note.title}</h4>
                                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{note.description}</p>
                                                    <div className="flex flex-wrap gap-1 mt-2">
                                                        {note.tags.slice(0, 2).map((tag) => (
                                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                        {note.tags.length > 2 && (
                                                            <Badge variant="outline" className="text-xs">
                                                                +{note.tags.length - 2}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        {/* Files Section */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-sm text-muted-foreground">Uploaded Files ({uploadedFiles.length})</h3>
                                <Button size="sm" variant="outline" onClick={() => fileInputRef.current?.click()}>
                                    <Upload className="h-3 w-3 mr-1" />
                                    Upload
                                </Button>
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                multiple
                                className="hidden"
                                onChange={handleFileUpload}
                                accept=".pdf,.doc,.docx,.txt,.md,.png,.jpg,.jpeg"
                            />
                            <div className="space-y-2">
                                {uploadedFiles.map((file) => (
                                    <Card key={file.id} className="group">
                                        <CardContent className="p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                                    <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-sm font-medium truncate">{file.name}</p>
                                                        <p className="text-xs text-muted-foreground">
                                                            {file.type.toUpperCase()} • {file.size}
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button
                                                    size="sm"
                                                    variant="ghost"
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={() => removeFile(file.id)}
                                                >
                                                    <X className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 h-full  w-full">
                {/* Mobile Sheet for Knowledge Base */}
                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="sm" className="m-4">
                                Knowledge Base
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-80">
                            <SheetHeader>
                                <SheetTitle>Knowledge Base</SheetTitle>
                                <SheetDescription>Select notes and upload files to enhance your chat experience.</SheetDescription>
                            </SheetHeader>
                            {/* Mobile version of sidebar content would go here */}
                        </SheetContent>
                    </Sheet>
                </div>

                <ChatInterface />
            </div>
        </div>
    )
}
