"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import type { NotificationSettings } from "@/types/settings"
import { Mail, Smartphone, Monitor } from "lucide-react"

interface NotificationSettingsProps {
    notifications: NotificationSettings
    onUpdate: (updates: Partial<NotificationSettings>) => void
}

export const NotificationSettingsComponent = React.memo<NotificationSettingsProps>(({ notifications, onUpdate }) => {
    const updateEmailNotifications = (key: keyof typeof notifications.email, value: boolean) => {
        onUpdate({
            email: {
                ...notifications.email,
                [key]: value,
            },
        })
    }

    const updatePushNotifications = (key: keyof typeof notifications.push, value: boolean) => {
        onUpdate({
            push: {
                ...notifications.push,
                [key]: value,
            },
        })
    }

    const updateInAppNotifications = (key: keyof typeof notifications.inApp, value: boolean) => {
        onUpdate({
            inApp: {
                ...notifications.inApp,
                [key]: value,
            },
        })
    }

    return (
        <div className="space-y-6">
            {/* Email Notifications */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Email Notifications
                    </CardTitle>
                    <CardDescription>Choose what email notifications you'd like to receive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Task Reminders</Label>
                            <p className="text-sm text-muted-foreground">Get reminded about upcoming tasks and deadlines</p>
                        </div>
                        <Switch
                            checked={notifications.email.taskReminders}
                            onCheckedChange={(checked) => updateEmailNotifications("taskReminders", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Weekly Digest</Label>
                            <p className="text-sm text-muted-foreground">Weekly summary of your progress and achievements</p>
                        </div>
                        <Switch
                            checked={notifications.email.weeklyDigest}
                            onCheckedChange={(checked) => updateEmailNotifications("weeklyDigest", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Achievements</Label>
                            <p className="text-sm text-muted-foreground">Notifications when you complete goals and milestones</p>
                        </div>
                        <Switch
                            checked={notifications.email.achievements}
                            onCheckedChange={(checked) => updateEmailNotifications("achievements", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>System Updates</Label>
                            <p className="text-sm text-muted-foreground">Important updates about the application</p>
                        </div>
                        <Switch
                            checked={notifications.email.systemUpdates}
                            onCheckedChange={(checked) => updateEmailNotifications("systemUpdates", checked)}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Push Notifications */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5" />
                        Push Notifications
                    </CardTitle>
                    <CardDescription>Manage push notifications for mobile and desktop</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Task Reminders</Label>
                            <p className="text-sm text-muted-foreground">Push notifications for task deadlines</p>
                        </div>
                        <Switch
                            checked={notifications.push.taskReminders}
                            onCheckedChange={(checked) => updatePushNotifications("taskReminders", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Mentions</Label>
                            <p className="text-sm text-muted-foreground">When someone mentions you in comments or tasks</p>
                        </div>
                        <Switch
                            checked={notifications.push.mentions}
                            onCheckedChange={(checked) => updatePushNotifications("mentions", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Deadlines</Label>
                            <p className="text-sm text-muted-foreground">Critical deadline notifications</p>
                        </div>
                        <Switch
                            checked={notifications.push.deadlines}
                            onCheckedChange={(checked) => updatePushNotifications("deadlines", checked)}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* In-App Notifications */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Monitor className="h-5 w-5" />
                        In-App Notifications
                    </CardTitle>
                    <CardDescription>Control notifications shown within the application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Task Completion</Label>
                            <p className="text-sm text-muted-foreground">Celebrate when you complete tasks</p>
                        </div>
                        <Switch
                            checked={notifications.inApp.taskCompletion}
                            onCheckedChange={(checked) => updateInAppNotifications("taskCompletion", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Milestones</Label>
                            <p className="text-sm text-muted-foreground">Progress milestones and achievements</p>
                        </div>
                        <Switch
                            checked={notifications.inApp.milestones}
                            onCheckedChange={(checked) => updateInAppNotifications("milestones", checked)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Tips & Suggestions</Label>
                            <p className="text-sm text-muted-foreground">Helpful tips to improve your productivity</p>
                        </div>
                        <Switch
                            checked={notifications.inApp.tips}
                            onCheckedChange={(checked) => updateInAppNotifications("tips", checked)}
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
})

NotificationSettingsComponent.displayName = "NotificationSettings"
