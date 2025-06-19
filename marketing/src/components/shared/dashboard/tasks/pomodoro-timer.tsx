"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { usePomodoro } from "@/hooks/use-pomodoro"
import { Play, Pause, RotateCcw, Zap, Coffee, Target } from "lucide-react"

export const PomodoroTimer = React.memo(() => {
    const { time, isRunning, mode, sessions, toggle, reset, setWorkTime, setBreakTime, formatTime } = usePomodoro()

    const progress = React.useMemo(() => {
        const totalTime = mode === "work" ? 25 * 60 : 5 * 60
        return ((totalTime - time) / totalTime) * 100
    }, [time, mode])

    return (
        <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Focus Timer</CardTitle>
                        <CardDescription>Use the Pomodoro technique to stay focused and productive</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center space-y-4">
                            <div className="text-6xl font-mono font-bold">{formatTime(time)}</div>
                            <div className="text-lg text-muted-foreground">{mode === "work" ? "Focus Session" : "Break Time"}</div>
                            <Progress value={progress} className="h-3" />
                        </div>

                        <div className="flex gap-4 justify-center">
                            <Button onClick={toggle} size="lg" className="gap-2">
                                {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                                {isRunning ? "Pause" : "Start"}
                            </Button>
                            <Button onClick={reset} variant="outline" size="lg" className="gap-2">
                                <RotateCcw className="h-5 w-5" />
                                Reset
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <Button variant="outline" onClick={() => setWorkTime(25)}>
                                25 min Work
                            </Button>
                            <Button variant="outline" onClick={() => setBreakTime(5)}>
                                5 min Break
                            </Button>
                            <Button variant="outline" onClick={() => setBreakTime(15)}>
                                15 min Break
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Today's Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center space-y-2">
                            <div className="text-3xl font-bold text-primary">{sessions}</div>
                            <p className="text-muted-foreground">Completed Sessions</p>
                            <div className="flex justify-center gap-1">
                                {Array.from({ length: Math.max(8, sessions) }).map((_, i) => (
                                    <div key={i} className={`w-3 h-3 rounded-full ${i < sessions ? "bg-primary" : "bg-muted"}`} />
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Focus Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-start gap-2">
                            <Zap className="w-4 h-4 text-yellow-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium">Stay Focused</p>
                                <p className="text-xs text-muted-foreground">Eliminate distractions during work sessions</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Coffee className="w-4 h-4 text-brown-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium">Take Breaks</p>
                                <p className="text-xs text-muted-foreground">Use break time to rest and recharge</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <Target className="w-4 h-4 text-blue-500 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium">Set Goals</p>
                                <p className="text-xs text-muted-foreground">Define what you want to accomplish</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
})

PomodoroTimer.displayName = "PomodoroTimer"
