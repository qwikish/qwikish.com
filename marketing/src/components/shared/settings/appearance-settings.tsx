/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import type { AppearanceSettings } from "@/types/settings"
import { Palette, Monitor, Sun, Moon, Type, Zap, Volume2 } from "lucide-react"

interface AppearanceSettingsProps {
    appearance: AppearanceSettings
    onUpdate: (updates: Partial<AppearanceSettings>) => void
}

export const AppearanceSettingsComponent = React.memo<AppearanceSettingsProps>(({ appearance, onUpdate }) => {
    const accentColors = [
        { value: "#3b82f6", label: "Blue", color: "bg-blue-500" },
        { value: "#10b981", label: "Green", color: "bg-green-500" },
        { value: "#f59e0b", label: "Orange", color: "bg-orange-500" },
        { value: "#ef4444", label: "Red", color: "bg-red-500" },
        { value: "#8b5cf6", label: "Purple", color: "bg-purple-500" },
        { value: "#06b6d4", label: "Cyan", color: "bg-cyan-500" },
    ]

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Palette className="h-5 w-5" />
                        Theme & Appearance
                    </CardTitle>
                    <CardDescription>Customize the look and feel of your application</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Theme Selection */}
                    <div className="space-y-3">
                        <Label>Theme</Label>
                        <RadioGroup
                            value={appearance.theme}
                            onValueChange={(value: any) => onUpdate({ theme: value })}
                            className="grid grid-cols-3 gap-4"
                        >
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                                <RadioGroupItem value="light" id="light" />
                                <div className="flex items-center gap-2">
                                    <Sun className="h-4 w-4" />
                                    <Label htmlFor="light" className="cursor-pointer">
                                        Light
                                    </Label>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                                <RadioGroupItem value="dark" id="dark" />
                                <div className="flex items-center gap-2">
                                    <Moon className="h-4 w-4" />
                                    <Label htmlFor="dark" className="cursor-pointer">
                                        Dark
                                    </Label>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                                <RadioGroupItem value="system" id="system" />
                                <div className="flex items-center gap-2">
                                    <Monitor className="h-4 w-4" />
                                    <Label htmlFor="system" className="cursor-pointer">
                                        System
                                    </Label>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Accent Color */}
                    <div className="space-y-3">
                        <Label>Accent Color</Label>
                        <div className="grid grid-cols-6 gap-3">
                            {accentColors.map((color) => (
                                <button
                                    key={color.value}
                                    onClick={() => onUpdate({ accentColor: color.value })}
                                    className={`h-12 w-12 rounded-lg border-2 transition-all hover:scale-105 ${appearance.accentColor === color.value ? "border-foreground" : "border-muted"
                                        }`}
                                    style={{ backgroundColor: color.value }}
                                    title={color.label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Font Size */}
                    <div className="space-y-3">
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select value={appearance.fontSize} onValueChange={(value: any) => onUpdate({ fontSize: value })}>
                            <SelectTrigger>
                                <Type className="h-4 w-4 mr-2" />
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="small">Small</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="large">Large</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Toggle Options */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Compact Mode</Label>
                                <p className="text-sm text-muted-foreground">Reduce spacing and padding for a more compact interface</p>
                            </div>
                            <Switch
                                checked={appearance.compactMode}
                                onCheckedChange={(checked) => onUpdate({ compactMode: checked })}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5 flex items-center gap-2">
                                <Zap className="h-4 w-4" />
                                <div>
                                    <Label>Animations</Label>
                                    <p className="text-sm text-muted-foreground">Enable smooth transitions and animations</p>
                                </div>
                            </div>
                            <Switch
                                checked={appearance.animations}
                                onCheckedChange={(checked) => onUpdate({ animations: checked })}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5 flex items-center gap-2">
                                <Volume2 className="h-4 w-4" />
                                <div>
                                    <Label>Sound Effects</Label>
                                    <p className="text-sm text-muted-foreground">Play sounds for interactions and notifications</p>
                                </div>
                            </div>
                            <Switch
                                checked={appearance.soundEffects}
                                onCheckedChange={(checked) => onUpdate({ soundEffects: checked })}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Preview Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>See how your settings will look</CardDescription>
                </CardHeader>
                <CardContent>
                    <div
                        className="border rounded-lg p-4 space-y-3"
                        style={{
                            fontSize: appearance.fontSize === "small" ? "14px" : appearance.fontSize === "large" ? "18px" : "16px",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: appearance.accentColor }} />
                            <span className="font-medium">Sample Task</span>
                        </div>
                        <p className="text-muted-foreground">This is how your content will appear with the current settings.</p>
                        <Button size="sm" style={{ backgroundColor: appearance.accentColor }}>
                            Sample Button
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
})

AppearanceSettingsComponent.displayName = "AppearanceSettings"
