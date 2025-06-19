/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import {
    User,
    Palette,
    Bell,
    Shield,
    Database,
    Puzzle,
    SettingsIcon,
    HelpCircle,
    Save,
    RotateCcw,
    ArrowLeft,
} from "lucide-react"

// UI Components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Settings Components
import { ProfileSettings } from "@/components/shared/settings/profile-settings"
import { AppearanceSettingsComponent } from "@/components/shared/settings/appearance-settings"
import { NotificationSettingsComponent } from "@/components/shared/settings/notification-settings"
import { PrivacySettingsComponent } from "@/components/shared/settings/privacy-settings"

// Hooks
import { useSettings } from "@/hooks/use-settings"

// Types
import type { SettingsCategory } from "@/types/settings"
import { toast } from "sonner"

export default function SettingsPage() {
    const {
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
    } = useSettings()

    const [hasUnsavedChanges, setHasUnsavedChanges] = React.useState(false)
    const [isSaving, setIsSaving] = React.useState(false)

    const settingsCategories: SettingsCategory[] = [
        {
            id: "profile",
            label: "Profile",
            icon: User,
            description: "Personal information and account settings",
        },
        {
            id: "appearance",
            label: "Appearance",
            icon: Palette,
            description: "Theme, colors, and visual preferences",
        },
        {
            id: "notifications",
            label: "Notifications",
            icon: Bell,
            description: "Email, push, and in-app notification settings",
        },
        {
            id: "privacy",
            label: "Privacy",
            icon: Shield,
            description: "Privacy controls and security settings",
        },
        {
            id: "data",
            label: "Data",
            icon: Database,
            description: "Backup, export, and data management",
        },
        {
            id: "integrations",
            label: "Integrations",
            icon: Puzzle,
            description: "Third-party apps and services",
        },
        {
            id: "advanced",
            label: "Advanced",
            icon: SettingsIcon,
            description: "Advanced settings and preferences",
        },
        {
            id: "help",
            label: "Help",
            icon: HelpCircle,
            description: "Documentation, support, and feedback",
        },
    ]

    const handleSave = async () => {
        setIsSaving(true)
        try {
            await saveSettings()
            setHasUnsavedChanges(false)
            toast.success("Settings saved successfully!")
        } catch (error) {
            toast.error("Failed to save settings. Please try again.")
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                                <SettingsIcon className="h-6 w-6" />
                                Settings
                            </h1>
                            <p className="text-muted-foreground">Manage your account and application preferences</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {hasUnsavedChanges && (
                            <Badge variant="outline" className="text-orange-600 border-orange-200">
                                Unsaved changes
                            </Badge>
                        )}
                        <Button variant="outline" size="sm" className="gap-2">
                            <RotateCcw className="h-4 w-4" />
                            Reset
                        </Button>
                        <Button onClick={handleSave} disabled={isSaving} size="sm" className="gap-2">
                            <Save className="h-4 w-4" />
                            {isSaving ? "Saving..." : "Save Changes"}
                        </Button>
                    </div>
                </div>

                {/* Settings Tabs */}
                <Tabs defaultValue="profile" className="space-y-6">
                    <div className="border-b">
                        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 h-auto p-1">
                            {settingsCategories.map((category) => (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="flex flex-col items-center gap-1 p-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                                >
                                    <category.icon className="h-4 w-4" />
                                    <span className="text-xs font-medium">{category.label}</span>
                                    {category.id === "integrations" && (
                                        <Badge variant="secondary" className="h-4 w-4 p-0 text-xs">
                                            3
                                        </Badge>
                                    )}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {/* Profile Settings */}
                    <TabsContent value="profile" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <User className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Profile & Account</h2>
                                <p className="text-sm text-muted-foreground">Personal information and account settings</p>
                            </div>
                        </div>
                        <ProfileSettings profile={profile} onUpdate={updateProfile} />
                    </TabsContent>

                    {/* Appearance Settings */}
                    <TabsContent value="appearance" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Palette className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Appearance</h2>
                                <p className="text-sm text-muted-foreground">Theme, colors, and visual preferences</p>
                            </div>
                        </div>
                        <AppearanceSettingsComponent appearance={appearance} onUpdate={updateAppearance} />
                    </TabsContent>

                    {/* Notification Settings */}
                    <TabsContent value="notifications" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Bell className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Notifications</h2>
                                <p className="text-sm text-muted-foreground">Email, push, and in-app notification settings</p>
                            </div>
                        </div>
                        <NotificationSettingsComponent notifications={notifications} onUpdate={updateNotifications} />
                    </TabsContent>

                    {/* Privacy Settings */}
                    <TabsContent value="privacy" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Privacy & Security</h2>
                                <p className="text-sm text-muted-foreground">Privacy controls and security settings</p>
                            </div>
                        </div>
                        <PrivacySettingsComponent privacy={privacy} onUpdate={updatePrivacy} />
                    </TabsContent>

                    {/* Data Settings */}
                    <TabsContent value="data" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Database className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Data & Storage</h2>
                                <p className="text-sm text-muted-foreground">Backup, export, and data management</p>
                            </div>
                        </div>
                        <DataStorageSettings dataSettings={dataSettings} onUpdate={updateDataSettings} />
                    </TabsContent>

                    {/* Integrations Settings */}
                    <TabsContent value="integrations" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Puzzle className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Integrations</h2>
                                <p className="text-sm text-muted-foreground">Third-party apps and services</p>
                            </div>
                        </div>
                        <IntegrationsSettings />
                    </TabsContent>

                    {/* Advanced Settings */}
                    <TabsContent value="advanced" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <SettingsIcon className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Advanced Settings</h2>
                                <p className="text-sm text-muted-foreground">Advanced configuration options</p>
                            </div>
                        </div>
                        <AdvancedSettings />
                    </TabsContent>

                    {/* Help Settings */}
                    <TabsContent value="help" className="space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <HelpCircle className="h-5 w-5 text-primary" />
                            <div>
                                <h2 className="text-xl font-semibold">Help & Support</h2>
                                <p className="text-sm text-muted-foreground">Documentation, support, and feedback</p>
                            </div>
                        </div>
                        <HelpSupportSettings />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

// Additional Settings Components
const DataStorageSettings = ({ dataSettings, onUpdate }: any) => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Backup & Sync
                </CardTitle>
                <CardDescription>Manage your data backup and synchronization settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <Card className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="font-medium">Auto Backup</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Last backup: 2 hours ago</p>
                        <Button size="sm" variant="outline">
                            Configure
                        </Button>
                    </Card>
                    <Card className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500" />
                            <span className="font-medium">Export Data</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">Download your data</p>
                        <Button size="sm" variant="outline">
                            Export
                        </Button>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
)

const IntegrationsSettings = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Puzzle className="h-5 w-5" />
                    Connected Apps
                </CardTitle>
                <CardDescription>Manage your third-party integrations and connected services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4">
                    {[
                        { name: "Google Calendar", status: "Connected", color: "bg-blue-500" },
                        { name: "Slack", status: "Connected", color: "bg-purple-500" },
                        { name: "Notion", status: "Available", color: "bg-gray-400" },
                    ].map((integration) => (
                        <div key={integration.name} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center gap-3">
                                <div
                                    className={`h-10 w-10 rounded-lg ${integration.color} flex items-center justify-center text-white font-bold`}
                                >
                                    {integration.name[0]}
                                </div>
                                <div>
                                    <p className="font-medium">{integration.name}</p>
                                    <p className="text-sm text-muted-foreground">{integration.status}</p>
                                </div>
                            </div>
                            <Button size="sm" variant={integration.status === "Connected" ? "outline" : "default"}>
                                {integration.status === "Connected" ? "Disconnect" : "Connect"}
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
)

const AdvancedSettings = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <SettingsIcon className="h-5 w-5" />
                    Advanced Configuration
                </CardTitle>
                <CardDescription>Advanced settings for power users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Developer Mode</p>
                            <p className="text-sm text-muted-foreground">Enable advanced debugging features</p>
                        </div>
                        <Button size="sm" variant="outline">
                            Enable
                        </Button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">API Access</p>
                            <p className="text-sm text-muted-foreground">Generate API keys for external access</p>
                        </div>
                        <Button size="sm" variant="outline">
                            Manage
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
)

const HelpSupportSettings = () => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Help & Support
                </CardTitle>
                <CardDescription>Get help and support for using the application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <Card className="p-4">
                        <h3 className="font-medium mb-2">Documentation</h3>
                        <p className="text-sm text-muted-foreground mb-3">Browse our comprehensive guides</p>
                        <Button size="sm" variant="outline">
                            View Docs
                        </Button>
                    </Card>
                    <Card className="p-4">
                        <h3 className="font-medium mb-2">Contact Support</h3>
                        <p className="text-sm text-muted-foreground mb-3">Get help from our support team</p>
                        <Button size="sm" variant="outline">
                            Contact Us
                        </Button>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
)
