"use client"

import { useState, useEffect, useCallback } from "react"

export function usePomodoro() {
    const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
    const [isRunning, setIsRunning] = useState(false)
    const [mode, setMode] = useState<"work" | "break">("work")
    const [sessions, setSessions] = useState(0)

    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000)
        } else if (time === 0) {
            setIsRunning(false)
            if (mode === "work") {
                setSessions((prev) => prev + 1)
                setMode("break")
                setTime(5 * 60) // 5 minute break
            } else {
                setMode("work")
                setTime(25 * 60) // Back to work
            }
        }
        return () => clearInterval(interval)
    }, [isRunning, time, mode])

    const toggle = useCallback(() => {
        setIsRunning((prev) => !prev)
    }, [])

    const reset = useCallback(() => {
        setTime(25 * 60)
        setIsRunning(false)
        setMode("work")
    }, [])

    const setWorkTime = useCallback((minutes: number) => {
        setTime(minutes * 60)
        setMode("work")
        setIsRunning(false)
    }, [])

    const setBreakTime = useCallback((minutes: number) => {
        setTime(minutes * 60)
        setMode("break")
        setIsRunning(false)
    }, [])

    const formatTime = useCallback((seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }, [])

    return {
        time,
        isRunning,
        mode,
        sessions,
        toggle,
        reset,
        setWorkTime,
        setBreakTime,
        formatTime,
    }
}
