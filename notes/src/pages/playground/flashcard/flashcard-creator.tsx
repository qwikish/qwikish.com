"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Plus, Trash2, Save, Eye, Settings, BookOpen, GripVertical, Palette, Upload } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"

interface Flashcard {
    id: string
    front: string
    back: string
    frontImage?: string
    backImage?: string
    tags: string[]
    difficulty: "Easy" | "Medium" | "Hard"
    notes?: string
}

interface DeckSettings {
    title: string
    description: string
    category: string
    difficulty: "Easy" | "Medium" | "Hard"
    isPublic: boolean
    allowDownload: boolean
    tags: string[]
    studySettings: {
        newCardsPerDay: number
        reviewCardsPerDay: number
        showTimer: boolean
        autoFlip: boolean
        shuffleCards: boolean
    }
}

export default function FlashcardCreator() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("cards")
    const [cards, setCards] = useState<Flashcard[]>([
        {
            id: "1",
            front: "",
            back: "",
            tags: [],
            difficulty: "Medium",
        },
    ])

    const [settings, setSettings] = useState<DeckSettings>({
        title: "",
        description: "",
        category: "",
        difficulty: "Medium",
        isPublic: false,
        allowDownload: false,
        tags: [],
        studySettings: {
            newCardsPerDay: 20,
            reviewCardsPerDay: 100,
            showTimer: false,
            autoFlip: false,
            shuffleCards: true,
        },
    })

    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [isFlipped, setIsFlipped] = useState(false)

    const addCard = () => {
        const newCard: Flashcard = {
            id: Date.now().toString(),
            front: "",
            back: "",
            tags: [],
            difficulty: "Medium",
        }
        setCards([...cards, newCard])
        setCurrentCardIndex(cards.length)
    }

    const updateCard = (id: string, updates: Partial<Flashcard>) => {
        setCards(cards.map((card) => (card.id === id ? { ...card, ...updates } : card)))
    }

    const deleteCard = (id: string) => {
        const newCards = cards.filter((card) => card.id !== id)
        setCards(newCards)
        if (currentCardIndex >= newCards.length) {
            setCurrentCardIndex(Math.max(0, newCards.length - 1))
        }
    }

    const handleSave = () => {
        console.log("Saving deck:", { settings, cards })
        navigate("/playground/flashcards")
    }

    const handlePreview = () => {
        console.log("Previewing deck:", { settings, cards })
    }

    const currentCard = cards[currentCardIndex]

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate("/playground/flashcards")}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Flashcards
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold">Create Flashcard Deck</h1>
                            <p className="text-muted-foreground">Build your personalized study deck</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={handlePreview}>
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                        </Button>
                        <Button onClick={handleSave}>
                            <Save className="h-4 w-4 mr-2" />
                            Save Deck
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="cards" className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Cards ({cards.length})
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                        </TabsTrigger>
                        <TabsTrigger value="preview" className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            Preview
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cards" className="space-y-6">
                        <div className="grid gap-6 lg:grid-cols-4">
                            {/* Card List Sidebar */}
                            <div className="lg:col-span-1">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm">Cards</CardTitle>
                                        <Button size="sm" onClick={addCard}>
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        {cards.map((card, index) => (
                                            <div
                                                key={card.id}
                                                className={`p-3 rounded-lg border cursor-pointer transition-colors ${index === currentCardIndex ? "bg-primary/10 border-primary" : "hover:bg-muted/50"
                                                    }`}
                                                onClick={() => setCurrentCardIndex(index)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <GripVertical className="h-4 w-4 text-muted-foreground" />
                                                        <span className="text-sm font-medium">Card {index + 1}</span>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            deleteCard(card.id)
                                                        }}
                                                    >
                                                        <Trash2 className="h-3 w-3" />
                                                    </Button>
                                                </div>
                                                <div className="text-xs text-muted-foreground mt-1 truncate">{card.front || "Empty card"}</div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Card Editor */}
                            <div className="lg:col-span-3 space-y-6">
                                {currentCard && (
                                    <>
                                        {/* Card Preview */}
                                        <Card>
                                            <CardHeader>
                                                <div className="flex items-center justify-between">
                                                    <CardTitle>Card {currentCardIndex + 1} Preview</CardTitle>
                                                    <Button variant="outline" onClick={() => setIsFlipped(!isFlipped)} className="min-w-[100px]">
                                                        {isFlipped ? "Show Front" : "Show Back"}
                                                    </Button>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="relative">
                                                    <div
                                                        className={`min-h-[200px] p-6 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center text-center transition-all duration-300 ${isFlipped ? "bg-blue-50 dark:bg-blue-900/20" : "bg-green-50 dark:bg-green-900/20"
                                                            }`}
                                                    >
                                                        <div className="space-y-2">
                                                            <Badge variant="outline" className="mb-2">
                                                                {isFlipped ? "Back" : "Front"}
                                                            </Badge>
                                                            <div className="text-lg">
                                                                {isFlipped
                                                                    ? currentCard.back || "Enter back content..."
                                                                    : currentCard.front || "Enter front content..."}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>

                                        {/* Card Editor Form */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Edit Card</CardTitle>
                                            </CardHeader>
                                            <CardContent className="space-y-6">
                                                <div className="grid gap-6 md:grid-cols-2">
                                                    {/* Front Side */}
                                                    <div className="space-y-4">
                                                        <div>
                                                            <Label htmlFor="front">Front Side</Label>
                                                            <Textarea
                                                                id="front"
                                                                placeholder="Enter the question or prompt..."
                                                                value={currentCard.front}
                                                                onChange={(e) => updateCard(currentCard.id, { front: e.target.value })}
                                                                className="mt-1 min-h-[120px]"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label>Front Image (Optional)</Label>
                                                            <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                                <p className="text-sm text-muted-foreground">Click to upload image</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Back Side */}
                                                    <div className="space-y-4">
                                                        <div>
                                                            <Label htmlFor="back">Back Side</Label>
                                                            <Textarea
                                                                id="back"
                                                                placeholder="Enter the answer or explanation..."
                                                                value={currentCard.back}
                                                                onChange={(e) => updateCard(currentCard.id, { back: e.target.value })}
                                                                className="mt-1 min-h-[120px]"
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label>Back Image (Optional)</Label>
                                                            <div className="mt-1 border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                                                                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                                                                <p className="text-sm text-muted-foreground">Click to upload image</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Separator />

                                                <div className="grid gap-4 md:grid-cols-3">
                                                    <div>
                                                        <Label htmlFor="difficulty">Difficulty</Label>
                                                        <Select
                                                            value={currentCard.difficulty}
                                                            onValueChange={(value: Flashcard["difficulty"]) =>
                                                                updateCard(currentCard.id, { difficulty: value })
                                                            }
                                                        >
                                                            <SelectTrigger className="mt-1">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Easy">Easy</SelectItem>
                                                                <SelectItem value="Medium">Medium</SelectItem>
                                                                <SelectItem value="Hard">Hard</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div>
                                                        <Label htmlFor="tags">Tags</Label>
                                                        <Input
                                                            id="tags"
                                                            placeholder="Add tags (comma separated)"
                                                            className="mt-1"
                                                            onChange={(e) => {
                                                                const tags = e.target.value
                                                                    .split(",")
                                                                    .map((tag) => tag.trim())
                                                                    .filter(Boolean)
                                                                updateCard(currentCard.id, { tags })
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex items-end">
                                                        <Button variant="outline" className="w-full">
                                                            <Palette className="h-4 w-4 mr-2" />
                                                            Styling
                                                        </Button>
                                                    </div>
                                                </div>

                                                <div>
                                                    <Label htmlFor="notes">Notes (Optional)</Label>
                                                    <Textarea
                                                        id="notes"
                                                        placeholder="Add any additional notes or mnemonics..."
                                                        value={currentCard.notes || ""}
                                                        onChange={(e) => updateCard(currentCard.id, { notes: e.target.value })}
                                                        className="mt-1"
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </>
                                )}

                                {cards.length === 0 && (
                                    <Card className="p-8 text-center">
                                        <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                        <h3 className="text-lg font-semibold mb-2">No cards yet</h3>
                                        <p className="text-muted-foreground mb-4">Start building your deck by adding your first card</p>
                                        <Button onClick={addCard}>
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add First Card
                                        </Button>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="settings" className="space-y-6">
                        <div className="grid gap-6 lg:grid-cols-2">
                            {/* Basic Settings */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5" />
                                        Deck Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="title">Deck Title</Label>
                                        <Input
                                            id="title"
                                            placeholder="Enter deck title..."
                                            value={settings.title}
                                            onChange={(e) => setSettings({ ...settings, title: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Describe what this deck covers..."
                                            value={settings.description}
                                            onChange={(e) => setSettings({ ...settings, description: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="category">Category</Label>
                                            <Select
                                                value={settings.category}
                                                onValueChange={(value) => setSettings({ ...settings, category: value })}
                                            >
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue placeholder="Select category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="programming">Programming</SelectItem>
                                                    <SelectItem value="languages">Languages</SelectItem>
                                                    <SelectItem value="science">Science</SelectItem>
                                                    <SelectItem value="history">History</SelectItem>
                                                    <SelectItem value="math">Mathematics</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="difficulty">Overall Difficulty</Label>
                                            <Select
                                                value={settings.difficulty}
                                                onValueChange={(value: DeckSettings["difficulty"]) =>
                                                    setSettings({ ...settings, difficulty: value })
                                                }
                                            >
                                                <SelectTrigger className="mt-1">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Easy">Easy</SelectItem>
                                                    <SelectItem value="Medium">Medium</SelectItem>
                                                    <SelectItem value="Hard">Hard</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="tags">Tags</Label>
                                        <Input
                                            id="tags"
                                            placeholder="Add tags (comma separated)"
                                            className="mt-1"
                                            onChange={(e) => {
                                                const tags = e.target.value
                                                    .split(",")
                                                    .map((tag) => tag.trim())
                                                    .filter(Boolean)
                                                setSettings({ ...settings, tags })
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Study Settings */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Settings className="h-5 w-5" />
                                        Study Settings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div>
                                        <Label>New Cards Per Day</Label>
                                        <div className="mt-2">
                                            <Slider
                                                value={[settings.studySettings.newCardsPerDay]}
                                                onValueChange={([value]) =>
                                                    setSettings({
                                                        ...settings,
                                                        studySettings: { ...settings.studySettings, newCardsPerDay: value },
                                                    })
                                                }
                                                max={50}
                                                min={1}
                                                step={1}
                                                className="w-full"
                                            />
                                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                                <span>1</span>
                                                <span>{settings.studySettings.newCardsPerDay}</span>
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <Label>Review Cards Per Day</Label>
                                        <div className="mt-2">
                                            <Slider
                                                value={[settings.studySettings.reviewCardsPerDay]}
                                                onValueChange={([value]) =>
                                                    setSettings({
                                                        ...settings,
                                                        studySettings: { ...settings.studySettings, reviewCardsPerDay: value },
                                                    })
                                                }
                                                max={200}
                                                min={10}
                                                step={10}
                                                className="w-full"
                                            />
                                            <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                                <span>10</span>
                                                <span>{settings.studySettings.reviewCardsPerDay}</span>
                                                <span>200</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label>Show Timer</Label>
                                                <p className="text-sm text-muted-foreground">Display study timer during sessions</p>
                                            </div>
                                            <Switch
                                                checked={settings.studySettings.showTimer}
                                                onCheckedChange={(checked) =>
                                                    setSettings({
                                                        ...settings,
                                                        studySettings: { ...settings.studySettings, showTimer: checked },
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label>Auto Flip</Label>
                                                <p className="text-sm text-muted-foreground">Automatically flip cards after delay</p>
                                            </div>
                                            <Switch
                                                checked={settings.studySettings.autoFlip}
                                                onCheckedChange={(checked) =>
                                                    setSettings({
                                                        ...settings,
                                                        studySettings: { ...settings.studySettings, autoFlip: checked },
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label>Shuffle Cards</Label>
                                                <p className="text-sm text-muted-foreground">Randomize card order during study</p>
                                            </div>
                                            <Switch
                                                checked={settings.studySettings.shuffleCards}
                                                onCheckedChange={(checked) =>
                                                    setSettings({
                                                        ...settings,
                                                        studySettings: { ...settings.studySettings, shuffleCards: checked },
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label>Public Deck</Label>
                                                <p className="text-sm text-muted-foreground">Make deck discoverable by others</p>
                                            </div>
                                            <Switch
                                                checked={settings.isPublic}
                                                onCheckedChange={(checked) => setSettings({ ...settings, isPublic: checked })}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label>Allow Download</Label>
                                                <p className="text-sm text-muted-foreground">Let others download this deck</p>
                                            </div>
                                            <Switch
                                                checked={settings.allowDownload}
                                                onCheckedChange={(checked) => setSettings({ ...settings, allowDownload: checked })}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="preview" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl">{settings.title || "Untitled Deck"}</CardTitle>
                                        <p className="text-muted-foreground mt-1">{settings.description || "No description provided"}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Badge variant="outline">{settings.category || "Uncategorized"}</Badge>
                                        <Badge variant="outline">{settings.difficulty}</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{cards.length}</div>
                                        <div className="text-sm text-muted-foreground">Cards</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{settings.studySettings.newCardsPerDay}</div>
                                        <div className="text-sm text-muted-foreground">New/Day</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{settings.studySettings.reviewCardsPerDay}</div>
                                        <div className="text-sm text-muted-foreground">Review/Day</div>
                                    </div>
                                </div>

                                <Separator className="my-6" />

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Sample Cards</h3>
                                    {cards.slice(0, 3).map((card, index) => (
                                        <Card key={card.id} className="p-4">
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <Badge variant="outline" className="mb-2">
                                                        Front
                                                    </Badge>
                                                    <div className="p-3 rounded border bg-green-50 dark:bg-green-900/20">
                                                        {card.front || `Card ${index + 1} front (not configured)`}
                                                    </div>
                                                </div>
                                                <div>
                                                    <Badge variant="outline" className="mb-2">
                                                        Back
                                                    </Badge>
                                                    <div className="p-3 rounded border bg-blue-50 dark:bg-blue-900/20">
                                                        {card.back || `Card ${index + 1} back (not configured)`}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 mt-3">
                                                <Badge variant="secondary">{card.difficulty}</Badge>
                                                {card.tags.map((tag) => (
                                                    <Badge key={tag} variant="outline">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </Card>
                                    ))}
                                    {cards.length > 3 && (
                                        <p className="text-center text-muted-foreground">... and {cards.length - 3} more cards</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
