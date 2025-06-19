/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserProfile {
    name: string
    email: string
    avatar: string
    bio: string
    location: string
    website: string
    timezone: string
    language: string
}

export interface AppearanceSettings {
    theme: "light" | "dark" | "system"
    accentColor: string
    fontSize: "small" | "medium" | "large"
    compactMode: boolean
    animations: boolean
    soundEffects: boolean
}

export interface NotificationSettings {
    email: {
        taskReminders: boolean
        weeklyDigest: boolean
        achievements: boolean
        systemUpdates: boolean
    }
    push: {
        taskReminders: boolean
        mentions: boolean
        deadlines: boolean
    }
    inApp: {
        taskCompletion: boolean
        milestones: boolean
        tips: boolean
    }
}

export interface PrivacySettings {
    profileVisibility: "public" | "private" | "friends"
    activityTracking: boolean
    dataCollection: boolean
    thirdPartySharing: boolean
    twoFactorAuth: boolean
}

export interface DataSettings {
    autoBackup: boolean
    backupFrequency: "daily" | "weekly" | "monthly"
    dataRetention: "1year" | "2years" | "forever"
    exportFormat: "json" | "csv" | "pdf"
}

export interface SettingsCategory {
    id: string
    label: string
    icon: any
    description: string
}
  