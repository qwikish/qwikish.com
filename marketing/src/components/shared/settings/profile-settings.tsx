"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { UserProfile } from "@/types/settings"
import { Upload, User, Mail, Globe, MapPin, Clock } from "lucide-react"

interface ProfileSettingsProps {
    profile: UserProfile
    onUpdate: (updates: Partial<UserProfile>) => void
}

export const ProfileSettings = React.memo<ProfileSettingsProps>(({ profile, onUpdate }) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const [localProfile, setLocalProfile] = React.useState(profile)

    React.useEffect(() => {
        setLocalProfile(profile)
    }, [profile])

    const handleSave = () => {
        onUpdate(localProfile)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setLocalProfile(profile)
        setIsEditing(false)
    }

    const timezones = [
        { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
        { value: "America/Denver", label: "Mountain Time (MT)" },
        { value: "America/Chicago", label: "Central Time (CT)" },
        { value: "America/New_York", label: "Eastern Time (ET)" },
        { value: "Europe/London", label: "Greenwich Mean Time (GMT)" },
        { value: "Europe/Paris", label: "Central European Time (CET)" },
        { value: "Asia/Tokyo", label: "Japan Standard Time (JST)" },
    ]

    const languages = [
        { value: "en", label: "English" },
        { value: "es", label: "Español" },
        { value: "fr", label: "Français" },
        { value: "de", label: "Deutsch" },
        { value: "ja", label: "日本語" },
        { value: "zh", label: "中文" },
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Profile Information
                    </CardTitle>
                    <CardDescription>Update your personal information and profile details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Avatar Section */}
                    <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={localProfile.avatar || "/placeholder.svg"} alt={localProfile.name} />
                            <AvatarFallback className="text-lg">
                                {localProfile.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                            <Button variant="outline" className="gap-2">
                                <Upload className="h-4 w-4" />
                                Upload Photo
                            </Button>
                            <p className="text-sm text-muted-foreground">JPG, PNG or GIF. Max size 2MB.</p>
                        </div>
                    </div>

                    {/* Basic Information */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                value={localProfile.name}
                                onChange={(e) => setLocalProfile((prev) => ({ ...prev, name: e.target.value }))}
                                disabled={!isEditing}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={localProfile.email}
                                    onChange={(e) => setLocalProfile((prev) => ({ ...prev, email: e.target.value }))}
                                    disabled={!isEditing}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            id="bio"
                            value={localProfile.bio}
                            onChange={(e) => setLocalProfile((prev) => ({ ...prev, bio: e.target.value }))}
                            disabled={!isEditing}
                            placeholder="Tell us about yourself..."
                            rows={3}
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="location"
                                    value={localProfile.location}
                                    onChange={(e) => setLocalProfile((prev) => ({ ...prev, location: e.target.value }))}
                                    disabled={!isEditing}
                                    className="pl-10"
                                    placeholder="City, Country"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="website">Website</Label>
                            <div className="relative">
                                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="website"
                                    value={localProfile.website}
                                    onChange={(e) => setLocalProfile((prev) => ({ ...prev, website: e.target.value }))}
                                    disabled={!isEditing}
                                    className="pl-10"
                                    placeholder="https://yourwebsite.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="timezone">Timezone</Label>
                            <Select
                                value={localProfile.timezone}
                                onValueChange={(value) => setLocalProfile((prev) => ({ ...prev, timezone: value }))}
                                disabled={!isEditing}
                            >
                                <SelectTrigger>
                                    <Clock className="h-4 w-4 mr-2" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {timezones.map((tz) => (
                                        <SelectItem key={tz.value} value={tz.value}>
                                            {tz.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="language">Language</Label>
                            <Select
                                value={localProfile.language}
                                onValueChange={(value) => setLocalProfile((prev) => ({ ...prev, language: value }))}
                                disabled={!isEditing}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map((lang) => (
                                        <SelectItem key={lang.value} value={lang.value}>
                                            {lang.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                        {isEditing ? (
                            <>
                                <Button onClick={handleSave}>Save Changes</Button>
                                <Button variant="outline" onClick={handleCancel}>
                                    Cancel
                                </Button>
                            </>
                        ) : (
                            <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
})

ProfileSettings.displayName = "ProfileSettings"
