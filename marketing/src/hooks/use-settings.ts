"use client"

import { useState, useCallback } from "react"
import type {
    UserProfile,
    AppearanceSettings,
    NotificationSettings,
    PrivacySettings,
    DataSettings,
} from "@/types/settings"

export function useSettings() {
    const [profile, setProfile] = useState<UserProfile>({
        name: "Alex Johnson",
        email: "alex.johnson@example.com",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Full-stack developer passionate about learning and productivity",
        location: "San Francisco, CA",
        website: "https://alexjohnson.dev",
        timezone: "America/Los_Angeles",
        language: "en",
    })

    const [appearance, setAppearance] = useState<AppearanceSettings>({
        theme: "system",
        accentColor: "#3b82f6",
        fontSize: "medium",
        compactMode: false,
        animations: true,
        soundEffects: true,
    })

    const [notifications, setNotifications] = useState<NotificationSettings>({
        email: {
            taskReminders: true,
            weeklyDigest: true,
            achievements: true,
            systemUpdates: false,
        },
        push: {
            taskReminders: true,
            mentions: true,
            deadlines: true,
        },
        inApp: {
            taskCompletion: true,
            milestones: true,
            tips: false,
        },
    })

    const [privacy, setPrivacy] = useState<PrivacySettings>({
        profileVisibility: "public",
        activityTracking: true,
        dataCollection: false,
        thirdPartySharing: false,
        twoFactorAuth: false,
    })

    const [dataSettings, setDataSettings] = useState<DataSettings>({
        autoBackup: true,
        backupFrequency: "weekly",
        dataRetention: "2years",
        exportFormat: "json",
    })

    const updateProfile = useCallback((updates: Partial<UserProfile>) => {
        setProfile((prev) => ({ ...prev, ...updates }))
    }, [])

    const updateAppearance = useCallback((updates: Partial<AppearanceSettings>) => {
        setAppearance((prev) => ({ ...prev, ...updates }))
    }, [])

    const updateNotifications = useCallback((updates: Partial<NotificationSettings>) => {
        setNotifications((prev) => ({ ...prev, ...updates }))
    }, [])

    const updatePrivacy = useCallback((updates: Partial<PrivacySettings>) => {
        setPrivacy((prev) => ({ ...prev, ...updates }))
    }, [])

    const updateDataSettings = useCallback((updates: Partial<DataSettings>) => {
        setDataSettings((prev) => ({ ...prev, ...updates }))
    }, [])

    const saveSettings = useCallback(async () => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Settings saved:", { profile, appearance, notifications, privacy, dataSettings })
    }, [profile, appearance, notifications, privacy, dataSettings])

    return {
        profile,
        appearance,
        notifications,
        privacy,
        dataSettings,
        updateProfile,
        updateAppearance,
        updateNotifications,
        updatePrivacy,
        updateDataSettings,
        saveSettings,
    }
}
