"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Plus, Trash2, Save, Eye, Settings, BookOpen, HelpCircle, GripVertical } from "lucide-react"
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Question {
    id: string
    type: "multiple-choice" | "true-false" | "short-answer" | "essay"
    question: string
    options?: string[]
    correctAnswer: string | string[]
    explanation?: string
    points: number
    timeLimit?: number
}

interface QuizSettings {
    title: string
    description: string
    category: string
    difficulty: "Easy" | "Medium" | "Hard"
    timeLimit: number
    shuffleQuestions: boolean
    shuffleAnswers: boolean
    showResults: boolean
    allowRetakes: boolean
    passingScore: number
    isPublic: boolean
}

export default function QuizCreator() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("questions")
    const [questions, setQuestions] = useState<Question[]>([
        {
            id: "1",
            type: "multiple-choice",
            question: "",
            options: ["", "", "", ""],
            correctAnswer: "",
            explanation: "",
            points: 1,
        },
    ])

    const [settings, setSettings] = useState<QuizSettings>({
        title: "",
        description: "",
        category: "",
        difficulty: "Medium",
        timeLimit: 30,
        shuffleQuestions: false,
        shuffleAnswers: false,
        showResults: true,
        allowRetakes: true,
        passingScore: 70,
        isPublic: false,
    })

    const addQuestion = () => {
        const newQuestion: Question = {
            id: Date.now().toString(),
            type: "multiple-choice",
            question: "",
            options: ["", "", "", ""],
            correctAnswer: "",
            explanation: "",
            points: 1,
        }
        setQuestions([...questions, newQuestion])
    }

    const updateQuestion = (id: string, updates: Partial<Question>) => {
        setQuestions(questions.map((q) => (q.id === id ? { ...q, ...updates } : q)))
    }

    const deleteQuestion = (id: string) => {
        setQuestions(questions.filter((q) => q.id !== id))
    }

    const updateQuestionOption = (questionId: string, optionIndex: number, value: string) => {
        setQuestions(
            questions.map((q) =>
                q.id === questionId
                    ? {
                        ...q,
                        options: q.options?.map((opt, idx) => (idx === optionIndex ? value : opt)),
                    }
                    : q,
            ),
        )
    }

    const handleSave = () => {
        // Save quiz logic here
        console.log("Saving quiz:", { settings, questions })
        navigate("/playground/quizzes")
    }

    const handlePreview = () => {
        // Preview quiz logic here
        console.log("Previewing quiz:", { settings, questions })
    }

    const renderQuestionEditor = (question: Question, index: number) => (
        <Card key={question.id} className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                    <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                    <Badge variant="outline">{question.type.replace("-", " ")}</Badge>
                </div>
                <div className="flex items-center gap-2">
                    <Select
                        value={question.type}
                        onValueChange={(value: Question["type"]) => updateQuestion(question.id, { type: value })}
                    >
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                            <SelectItem value="true-false">True/False</SelectItem>
                            <SelectItem value="short-answer">Short Answer</SelectItem>
                            <SelectItem value="essay">Essay</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="ghost" size="sm" onClick={() => deleteQuestion(question.id)}>
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <Label htmlFor={`question-${question.id}`}>Question</Label>
                    <Textarea
                        id={`question-${question.id}`}
                        placeholder="Enter your question here..."
                        value={question.question}
                        onChange={(e) => updateQuestion(question.id, { question: e.target.value })}
                        className="mt-1"
                    />
                </div>

                {question.type === "multiple-choice" && (
                    <div className="space-y-3">
                        <Label>Answer Options</Label>
                        {question.options?.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center gap-2">
                                <RadioGroup
                                    value={question.correctAnswer as string}
                                    onValueChange={(value) => updateQuestion(question.id, { correctAnswer: value })}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value={optionIndex.toString()} id={`option-${question.id}-${optionIndex}`} />
                                    </div>
                                </RadioGroup>
                                <Input
                                    placeholder={`Option ${optionIndex + 1}`}
                                    value={option}
                                    onChange={(e) => updateQuestionOption(question.id, optionIndex, e.target.value)}
                                    className="flex-1"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {question.type === "true-false" && (
                    <div className="space-y-3">
                        <Label>Correct Answer</Label>
                        <RadioGroup
                            value={question.correctAnswer as string}
                            onValueChange={(value) => updateQuestion(question.id, { correctAnswer: value })}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="true" id={`true-${question.id}`} />
                                <Label htmlFor={`true-${question.id}`}>True</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="false" id={`false-${question.id}`} />
                                <Label htmlFor={`false-${question.id}`}>False</Label>
                            </div>
                        </RadioGroup>
                    </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor={`points-${question.id}`}>Points</Label>
                        <Input
                            id={`points-${question.id}`}
                            type="number"
                            min="1"
                            value={question.points}
                            onChange={(e) => updateQuestion(question.id, { points: Number.parseInt(e.target.value) || 1 })}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label htmlFor={`time-${question.id}`}>Time Limit (seconds)</Label>
                        <Input
                            id={`time-${question.id}`}
                            type="number"
                            min="0"
                            placeholder="No limit"
                            value={question.timeLimit || ""}
                            onChange={(e) =>
                                updateQuestion(question.id, { timeLimit: e.target.value ? Number.parseInt(e.target.value) : undefined })
                            }
                            className="mt-1"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor={`explanation-${question.id}`}>Explanation (Optional)</Label>
                    <Textarea
                        id={`explanation-${question.id}`}
                        placeholder="Explain the correct answer..."
                        value={question.explanation}
                        onChange={(e) => updateQuestion(question.id, { explanation: e.target.value })}
                        className="mt-1"
                    />
                </div>
            </CardContent>
        </Card>
    )

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="border-b bg-card/50 px-6 py-4">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={() => navigate("/playground/quizzes")}>
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Quizzes
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold">Create Quiz</h1>
                            <p className="text-muted-foreground">Build an engaging quiz for your students</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={handlePreview}>
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                        </Button>
                        <Button onClick={handleSave}>
                            <Save className="h-4 w-4 mr-2" />
                            Save Quiz
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="questions" className="flex items-center gap-2">
                            <HelpCircle className="h-4 w-4" />
                            Questions ({questions.length})
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

                    <TabsContent value="questions" className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-semibold">Quiz Questions</h2>
                                <p className="text-muted-foreground">Add and configure your quiz questions</p>
                            </div>
                            <Button onClick={addQuestion}>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Question
                            </Button>
                        </div>

                        <div className="space-y-4">{questions.map((question, index) => renderQuestionEditor(question, index))}</div>

                        {questions.length === 0 && (
                            <Card className="p-8 text-center">
                                <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                <h3 className="text-lg font-semibold mb-2">No questions yet</h3>
                                <p className="text-muted-foreground mb-4">Start building your quiz by adding your first question</p>
                                <Button onClick={addQuestion}>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add First Question
                                </Button>
                            </Card>
                        )}
                    </TabsContent>

                    <TabsContent value="settings" className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold">Quiz Settings</h2>
                            <p className="text-muted-foreground">Configure your quiz behavior and appearance</p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-2">
                            {/* Basic Settings */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5" />
                                        Basic Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="title">Quiz Title</Label>
                                        <Input
                                            id="title"
                                            placeholder="Enter quiz title..."
                                            value={settings.title}
                                            onChange={(e) => setSettings({ ...settings, title: e.target.value })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Describe what this quiz covers..."
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
                                                    <SelectItem value="web-dev">Web Development</SelectItem>
                                                    <SelectItem value="data-science">Data Science</SelectItem>
                                                    <SelectItem value="design">Design</SelectItem>
                                                    <SelectItem value="business">Business</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="difficulty">Difficulty</Label>
                                            <Select
                                                value={settings.difficulty}
                                                onValueChange={(value: QuizSettings["difficulty"]) =>
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
                                </CardContent>
                            </Card>

                            {/* Quiz Behavior */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Settings className="h-5 w-5" />
                                        Quiz Behavior
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="timeLimit">Time Limit (minutes)</Label>
                                        <Input
                                            id="timeLimit"
                                            type="number"
                                            min="1"
                                            value={settings.timeLimit}
                                            onChange={(e) => setSettings({ ...settings, timeLimit: Number.parseInt(e.target.value) || 30 })}
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="passingScore">Passing Score (%)</Label>
                                        <Input
                                            id="passingScore"
                                            type="number"
                                            min="0"
                                            max="100"
                                            value={settings.passingScore}
                                            onChange={(e) =>
                                                setSettings({ ...settings, passingScore: Number.parseInt(e.target.value) || 70 })
                                            }
                                            className="mt-1"
                                        />
                                    </div>
                                    <Separator />
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label htmlFor="shuffleQuestions">Shuffle Questions</Label>
                                                <p className="text-sm text-muted-foreground">Randomize question order</p>
                                            </div>
                                            <Switch
                                                id="shuffleQuestions"
                                                checked={settings.shuffleQuestions}
                                                onCheckedChange={(checked) => setSettings({ ...settings, shuffleQuestions: checked })}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label htmlFor="shuffleAnswers">Shuffle Answers</Label>
                                                <p className="text-sm text-muted-foreground">Randomize answer options</p>
                                            </div>
                                            <Switch
                                                id="shuffleAnswers"
                                                checked={settings.shuffleAnswers}
                                                onCheckedChange={(checked) => setSettings({ ...settings, shuffleAnswers: checked })}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label htmlFor="showResults">Show Results</Label>
                                                <p className="text-sm text-muted-foreground">Display results after completion</p>
                                            </div>
                                            <Switch
                                                id="showResults"
                                                checked={settings.showResults}
                                                onCheckedChange={(checked) => setSettings({ ...settings, showResults: checked })}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label htmlFor="allowRetakes">Allow Retakes</Label>
                                                <p className="text-sm text-muted-foreground">Let users retake the quiz</p>
                                            </div>
                                            <Switch
                                                id="allowRetakes"
                                                checked={settings.allowRetakes}
                                                onCheckedChange={(checked) => setSettings({ ...settings, allowRetakes: checked })}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <Label htmlFor="isPublic">Public Quiz</Label>
                                                <p className="text-sm text-muted-foreground">Make quiz discoverable by others</p>
                                            </div>
                                            <Switch
                                                id="isPublic"
                                                checked={settings.isPublic}
                                                onCheckedChange={(checked) => setSettings({ ...settings, isPublic: checked })}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="preview" className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold">Quiz Preview</h2>
                            <p className="text-muted-foreground">See how your quiz will appear to students</p>
                        </div>

                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl">{settings.title || "Untitled Quiz"}</CardTitle>
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
                                        <div className="text-2xl font-bold">{questions.length}</div>
                                        <div className="text-sm text-muted-foreground">Questions</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{settings.timeLimit}m</div>
                                        <div className="text-sm text-muted-foreground">Time Limit</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold">{settings.passingScore}%</div>
                                        <div className="text-sm text-muted-foreground">Passing Score</div>
                                    </div>
                                </div>

                                <Separator className="my-6" />

                                <div className="space-y-4">
                                    <h3 className="text-lg font-semibold">Questions Preview</h3>
                                    {questions.slice(0, 3).map((question, index) => (
                                        <Card key={question.id} className="p-4">
                                            <div className="flex items-start gap-3">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium">{question.question || `Question ${index + 1} (not configured)`}</p>
                                                    {question.type === "multiple-choice" && question.options && (
                                                        <div className="mt-2 space-y-1">
                                                            {question.options.map((option, optionIndex) => (
                                                                <div
                                                                    key={optionIndex}
                                                                    className="flex items-center gap-2 text-sm text-muted-foreground"
                                                                >
                                                                    <div className="w-4 h-4 rounded-full border" />
                                                                    {option || `Option ${optionIndex + 1}`}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                <Badge variant="outline">
                                                    {question.points} pt{question.points !== 1 ? "s" : ""}
                                                </Badge>
                                            </div>
                                        </Card>
                                    ))}
                                    {questions.length > 3 && (
                                        <p className="text-center text-muted-foreground">... and {questions.length - 3} more questions</p>
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
