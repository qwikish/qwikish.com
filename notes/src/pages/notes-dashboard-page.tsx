"use client"

import { Button } from "@/components/ui/button"
import { Plus, Search, Filter, Star, ChevronDown, Calendar, AArrowUp, AArrowDown, Clock, BookOpen, Download, Archive, Trash2, MoreHorizontal, Eye, EyeOff } from 'lucide-react'
import { useState } from "react"
import NotesCard from "@/components/shared/notes/note-card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import MultiSelect from "@/components/ui/multi-select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import { notes } from "@/constants/dummy-data"
import { useNavigate } from "react-router-dom"

const NOTES_PER_PAGE = 6

const SORT_OPTIONS = [
  { value: "name-asc", label: "Name (A-Z)", icon: <AArrowUp className="w-4 h-4 mr-2" /> },
  { value: "name-desc", label: "Name (Z-A)", icon: <AArrowDown className="w-4 h-4 mr-2" /> },
  { value: "updated-desc", label: "Recently Updated", icon: <Clock className="w-4 h-4 mr-2" /> },
  { value: "created-desc", label: "Newest First", icon: <Calendar className="w-4 h-4 mr-2" /> },
  { value: "created-asc", label: "Oldest First", icon: <Calendar className="w-4 h-4 mr-2" /> }
]

const FILTER_PRESETS = [
  { name: "All Notes", filters: {} },
  { name: "Starred", filters: { showStarredOnly: true } },
  { name: "Recent", filters: { sortOption: "updated-desc" } },
  { name: "Work", filters: { selectedCategories: [] } }
]

const AllNotesPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showStarredOnly, setShowStarredOnly] = useState(false)
  const [sortOption, setSortOption] = useState("updated-desc")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedNotes, setSelectedNotes] = useState<string[]>([])
  const [showBulkActions, setShowBulkActions] = useState(false)
  const navigate = useNavigate()

  const allCategories = Array.from(new Set(notes.map(note => note.category)))
  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)))

  // Save recent searches


  const filteredNotes = notes
    .filter(note => {
      const matchesSearch = searchQuery === "" ||
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = selectedCategories.length === 0 ||
        selectedCategories.includes(note.category)

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => note.tags.includes(tag))

      const matchesStarred = !showStarredOnly || note.starred

      return matchesSearch && matchesCategory && matchesTags && matchesStarred
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "name-asc": return a.title.localeCompare(b.title)
        case "name-desc": return b.title.localeCompare(a.title)
        case "updated-desc": return b.updatedAt.getTime() - a.updatedAt.getTime()
        case "created-desc": return b.createdAt.getTime() - a.createdAt.getTime()
        case "created-asc": return a.createdAt.getTime() - b.createdAt.getTime()
        default: return 0
      }
    })

  const currentNotes = filteredNotes.slice(0, currentPage * NOTES_PER_PAGE)
  const hasMoreNotes = currentNotes.length < filteredNotes.length

  const loadMore = () => setCurrentPage(prev => prev + 1)

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedTags([])
    setShowStarredOnly(false)
    setSortOption("updated-desc")
    setCurrentPage(1)
  }

  const applyFilterPreset = (preset: typeof FILTER_PRESETS[0]) => {
    resetFilters()
    if (preset.filters.showStarredOnly) setShowStarredOnly(true)
    if (preset.filters.sortOption) setSortOption(preset.filters.sortOption)
    if (preset.filters.selectedCategories) setSelectedCategories(preset.filters.selectedCategories)
  }

  const toggleNoteSelection = (noteId: string) => {
    setSelectedNotes(prev =>
      prev.includes(noteId)
        ? prev.filter(id => id !== noteId)
        : [...prev, noteId]
    )
  }

  const selectAllNotes = () => {
    setSelectedNotes(currentNotes.map(note => note.id))
}

  const clearSelection = () => {
    setSelectedNotes([])
  }

  const exportNotes = () => {
    const notesToExport = selectedNotes.length > 0
      ? notes.filter(note => selectedNotes.includes(note.id))
      : filteredNotes

    const dataStr = JSON.stringify(notesToExport, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `notes-export-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedTags.length > 0 || showStarredOnly || searchQuery

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">All Notes</h1>
            <p className="text-muted-foreground">
              Showing {currentNotes.length} of {filteredNotes.length} notes
              {selectedNotes.length > 0 && ` • ${selectedNotes.length} selected`}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 ${showFilters ? 'bg-accent' : ''}`}
            >
              <Filter className="w-4 h-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
              {hasActiveFilters && <Badge variant="secondary" className="ml-1 h-4 w-4 p-0 text-xs">!</Badge>}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={exportNotes}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Notes
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setShowBulkActions(!showBulkActions)}>
                  {showBulkActions ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                  {showBulkActions ? "Hide" : "Show"} Bulk Actions
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button onClick={() => navigate("/notes/new")}>
              <Plus className="w-4 h-4 mr-2" />
              Create Note
            </Button>
          </div>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notes by title or content..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1) }}
            />
          </div>

          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  {SORT_OPTIONS.find(opt => opt.value === sortOption)?.icon}
                  <span className="hidden sm:inline">{SORT_OPTIONS.find(opt => opt.value === sortOption)?.label}</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {SORT_OPTIONS.map(option => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => { setSortOption(option.value); setCurrentPage(1) }}
                    className={sortOption === option.value ? "bg-accent" : ""}
                  >
                    {option.icon} {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>

        {/* Filter Presets */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {FILTER_PRESETS.map((preset) => (
              <TabsTrigger
                key={preset.name}
                value={preset.name.toLowerCase().replace(' ', '-')}
                onClick={() => applyFilterPreset(preset)}
              >
                {preset.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="p-4 border rounded-lg bg-muted/50 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                <MultiSelect
                  options={allCategories.map(cat => ({ value: cat, label: cat }))}
                  selected={selectedCategories}
                  onChange={(selected) => {
                    setSelectedCategories(Array.isArray(selected) ? selected : [])
                    setCurrentPage(1)
                  }}
                  placeholder="Select categories..."
                />
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Tags</h3>
                <MultiSelect
                  options={allTags.map(tag => ({ value: tag, label: tag }))}
                  selected={selectedTags}
                  onChange={(selected) => {
                    setSelectedTags(Array.isArray(selected) ? selected : [])
                    setCurrentPage(1)
                  }}
                  placeholder="Select tags..."
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="starred-only"
                    checked={showStarredOnly}
                    onCheckedChange={(checked) => {
                      setShowStarredOnly(!!checked)
                      setCurrentPage(1)
                    }}
                  />
                  <label htmlFor="starred-only" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Starred Only
                  </label>
                </div>
                <Button variant="outline" onClick={resetFilters} className="w-full">
                  Reset All Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {(selectedCategories.length > 0 || selectedTags.length > 0 || showStarredOnly) && (
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map(category => (
              <Badge key={category} variant="secondary" className="flex items-center gap-1">
                {category}
                <button
                  onClick={() => setSelectedCategories(prev => prev.filter(c => c !== category))}
                  className="ml-1 hover:bg-destructive/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              </Badge>
            ))}
            {selectedTags.map(tag => (
              <Badge key={tag} variant="outline" className="flex items-center gap-1">
                {tag}
                <button
                  onClick={() => setSelectedTags(prev => prev.filter(t => t !== tag))}
                  className="ml-1 hover:bg-destructive/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              </Badge>
            ))}
            {showStarredOnly && (
              <Badge variant="default" className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                Starred
                <button
                  onClick={() => setShowStarredOnly(false)}
                  className="ml-1 hover:bg-destructive/20 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        )}

        {/* Bulk Actions */}
        {showBulkActions && (
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={selectedNotes.length === currentNotes.length && currentNotes.length > 0}
                onCheckedChange={(checked) => checked ? selectAllNotes() : clearSelection()}
              />
              <span className="text-sm">
                {selectedNotes.length > 0 ? `${selectedNotes.length} selected` : "Select all"}
              </span>
            </div>
            {selectedNotes.length > 0 && (
              <>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Archive className="w-4 h-4 mr-2" />
                    Archive
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                  <Button variant="outline" size="sm" onClick={exportNotes}>
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Notes Grid/List */}
        {filteredNotes.length > 0 ? (
          <>
            <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
              {currentNotes.map((note) => (
                <div key={note.id} className="relative">
                  {showBulkActions && (
                    <Checkbox
                      className="absolute top-2 left-2 z-10 bg-background"
                      checked={selectedNotes.includes(note.id)}
                      onCheckedChange={() => toggleNoteSelection(note.id)}
                    />
                  )}
                  <NotesCard
                    id={note.id}
                    category={note.category}
                    title={note.title}
                    description={note.description}
                    tags={note.tags}
                    subnotes={note.subnotes.length}
                    starred={note.starred}
                    updatedAt={note.updatedAt}
                    createdAt={note.createdAt}
                    onEdit={() => navigate(`/notes/${note.id}`)}
                    onDelete={() => console.log("Delete note:", note.id)}
                    onToggleFavorite={() => console.log("Toggle favorite:", note.id)}
                  />
                </div>
              ))}
            </div>
            {hasMoreNotes && (
              <div className="flex justify-center">
                <Button variant="outline" onClick={loadMore} className="mt-4">
                  Load More ({filteredNotes.length - currentNotes.length} remaining)
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground" />
            <h3 className="text-xl font-medium">No notes found</h3>
            <p className="text-muted-foreground max-w-md">
              {hasActiveFilters
                ? "Try adjusting your filters or search query"
                : "You haven't created any notes yet"}
            </p>
            <div className="flex gap-2">
              <Button onClick={() => navigate("/notes/new")}>
                <Plus className="w-4 h-4 mr-2" />
                Create your first note
              </Button>
              {hasActiveFilters && (
                <Button variant="outline" onClick={resetFilters}>
                  Clear filters
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AllNotesPage
