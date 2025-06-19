/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type { PrivacySettings } from "@/types/settings"
import { Shield, Eye, Database, Lock, AlertTriangle } from "lucide-react"

interface PrivacySettingsProps {
    privacy: PrivacySettings
    onUpdate: (updates: Partial<PrivacySettings>) => void
}

export const PrivacySettingsComponent = React.memo<PrivacySettingsProps>(({ privacy, onUpdate }) => {
    const [showTwoFactorSetup, setShowTwoFactorSetup] = React.useState(false)

    return (
        <div className="space-y-6">
            {/* Profile Privacy */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Eye className="h-5 w-5" />
                        Profile Visibility
                    </CardTitle>
                    <CardDescription>Control who can see your profile and activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label>Profile Visibility</Label>
                        <Select
                            value={privacy.profileVisibility}
                            onValueChange={(value: any) => onUpdate({ profileVisibility: value })}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="public">Public - Anyone can see your profile</SelectItem>
                                <SelectItem value="friends">Friends - Only friends can see your profile</SelectItem>
                                <SelectItem value="private">Private - Only you can see your profile</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Data & Tracking */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        Data & Tracking
                    </CardTitle>
                    <CardDescription>Manage how your data is collected and used</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Activity Tracking</Label>
                            <p className="text-sm text-muted-foreground">Allow tracking of your app usage for analytics</p>
                        </div>
                        <Switch
                            checked={privacy.activityTracking}
                            onCheckedChange={(checked) => onUpdate({ activityTracking: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Data Collection</Label>
                            <p className="text-sm text-muted-foreground">Collect usage data to improve the application</p>
                        </div>
                        <Switch
                            checked={privacy.dataCollection}
                            onCheckedChange={(checked) => onUpdate({ dataCollection: checked })}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Third-party Sharing</Label>
                            <p className="text-sm text-muted-foreground">Share anonymized data with third-party services</p>
                        </div>
                        <Switch
                            checked={privacy.thirdPartySharing}
                            onCheckedChange={(checked) => onUpdate({ thirdPartySharing: checked })}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Security */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        Security
                    </CardTitle>
                    <CardDescription>Enhance your account security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Two-Factor Authentication</Label>
                            <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {privacy.twoFactorAuth && <span className="text-sm text-green-600 font-medium">Enabled</span>}
                            <Switch
                                checked={privacy.twoFactorAuth}
                                onCheckedChange={(checked) => {
                                    if (checked) {
                                        setShowTwoFactorSetup(true)
                                    } else {
                                        onUpdate({ twoFactorAuth: checked })
                                    }
                                }}
                            />
                        </div>
                    </div>

                    {showTwoFactorSetup && (
                        <Alert>
                            <Lock className="h-4 w-4" />
                            <AlertDescription>
                                Two-factor authentication setup would be initiated here. This typically involves:
                                <ul className="list-disc list-inside mt-2 space-y-1">
                                    <li>Scanning a QR code with an authenticator app</li>
                                    <li>Entering a verification code</li>
                                    <li>Saving backup codes</li>
                                </ul>
                                <div className="flex gap-2 mt-3">
                                    <Button
                                        size="sm"
                                        onClick={() => {
                                            onUpdate({ twoFactorAuth: true })
                                            setShowTwoFactorSetup(false)
                                        }}
                                    >
                                        Complete Setup
                                    </Button>
                                    <Button size="sm" variant="outline" onClick={() => setShowTwoFactorSetup(false)}>
                                        Cancel
                                    </Button>
                                </div>
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="h-5 w-5" />
                        Danger Zone
                    </CardTitle>
                    <CardDescription>Irreversible and destructive actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
                        <div className="space-y-0.5">
                            <Label className="text-red-600">Delete Account</Label>
                            <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
                        </div>
                        <Button variant="destructive" size="sm">
                            Delete Account
                        </Button>
                    </div>

                    <div className="flex items-center justify-between p-4 border border-orange-200 rounded-lg">
                        <div className="space-y-0.5">
                            <Label className="text-orange-600">Clear All Data</Label>
                            <p className="text-sm text-muted-foreground">Remove all your tasks, notes, and progress data</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-orange-200 text-orange-600">
                            Clear Data
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
})

PrivacySettingsComponent.displayName = "PrivacySettings"
