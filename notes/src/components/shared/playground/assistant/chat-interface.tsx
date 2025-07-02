"use client"

import MarkdownRenderer from "@/components/ui/markdown-renderer"
import { MessageInput } from "@/components/ui/message-input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sparkle, User } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Message {
    id: string
    role: "user" | "assistant"
    content: string
    timestamp?: Date
}

const ChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "user",
            content: "Hello! What is your name?",
            timestamp: new Date(Date.now() - 300000),
        },
        {
            id: "2",
            role: "assistant",
            content: "My name is Qwikish. How can I help you today?",
            timestamp: new Date(Date.now() - 240000),
        },
        {
            id: "3",
            role: "user",
            content: "Can you tell me a joke?",
            timestamp: new Date(Date.now() - 180000),
        },
        {
            id: "4",
            role: "assistant",
            content: `# Here's a programming joke for you!

Why do programmers prefer dark mode?

**Because light attracts bugs!** 🐛

## More tech humor:
- Why do Java developers wear glasses? Because they can't C#!
- How many programmers does it take to change a light bulb? None, that's a hardware problem.

\`\`\`javascript
// Even our code can be funny
function tellJoke() {
  return "Why did the developer go broke? Because he used up all his cache!";
}
\`\`\`

Hope that brought a smile to your face! 😄`,
            timestamp: new Date(Date.now() - 120000),
        },
    ])

    const [inputValue, setInputValue] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const scrollAreaRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = async () => {
        if (!inputValue.trim() || isGenerating) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: inputValue.trim(),
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsGenerating(true)

        // Simulate AI response
        setTimeout(() => {
            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: `I received your message: "${userMessage.content}"

This is a simulated response. In a real implementation, this would be connected to an AI service like OpenAI's GPT or another language model.

## What I can help with:
- Answer questions
- Provide explanations
- Help with coding problems
- Generate creative content
- And much more!

Feel free to ask me anything else! 🚀`,
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, assistantMessage])
            setIsGenerating(false)
        }, 1500)
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    return (
        <div className="w-full h-full flex flex-col">
            <header className="flex items-center gap-3 px-6 h-14 border-b bg-card/50">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary">
                    <Sparkle className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div>
                    <h1 className="text-base font-medium">Qwikish Assistant</h1>
                </div>
            </header>

            <div className="flex-1 overflow-hidden">
                <ScrollArea className="h-full" ref={scrollAreaRef}>
                    <div className="max-w-4xl mx-auto p-4">
                        {messages.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-8">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                                    <Sparkle className="h-6 w-6 text-primary" />
                                </div>
                                <h2 className="text-xl font-semibold mb-2">Welcome to Qwikish Assistant</h2>
                                <p className="text-muted-foreground max-w-md">
                                    Start a conversation by typing a message below. I'm here to help with questions, explanations, coding
                                    problems, and more!
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {messages.map((message) => (
                                    <div
                                        key={message.id}
                                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        {message.role === "assistant" && (
                                            <Avatar className="w-8 h-8 shrink-0">
                                                <AvatarFallback className="bg-primary text-primary-foreground">
                                                    <Sparkle className="h-4 w-4" />
                                                </AvatarFallback>
                                            </Avatar>
                                        )}

                                        <div
                                            className={`flex flex-col max-w-[80%] ${message.role === "user" ? "items-end" : "items-start"}`}
                                        >
                                            <div
                                                className={`rounded-lg px-4 py-3 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                                                    }`}
                                            >
                                                {message.role === "assistant" ? (
                                                    <MarkdownRenderer >{message.content}</MarkdownRenderer>
                                                ) : (
                                                    <p className="text-sm leading-relaxed">{message.content}</p>
                                                )}
                                            </div>
                                            {message.timestamp && (
                                                <span className="text-xs text-muted-foreground mt-1">{formatTime(message.timestamp)}</span>
                                            )}
                                        </div>

                                        {message.role === "user" && (
                                            <Avatar className="w-8 h-8 shrink-0">
                                                <AvatarFallback className="bg-secondary">
                                                    <User className="h-4 w-4" />
                                                </AvatarFallback>
                                            </Avatar>
                                        )}
                                    </div>
                                ))}

                                {isGenerating && (
                                    <div className="flex gap-3 justify-start">
                                        <Avatar className="w-8 h-8 shrink-0">
                                            <AvatarFallback className="bg-primary text-primary-foreground">
                                                <Sparkle className="h-4 w-4" />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="bg-muted rounded-lg px-4 py-3">
                                            <div className="flex items-center gap-1">
                                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </div>

            <footer className="border-t bg-card/50 p-3">
                <div className="max-w-4xl mx-auto">
                    <MessageInput
                        placeholder="Ask Qwikish anything..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onSubmit={handleSubmit}
                        isGenerating={isGenerating}
                        allowAttachments={false}
                    />
                </div>
            </footer>
        </div>
    )
}

export default ChatInterface
