"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { Usage } from "@/types/billing"
import { Users, Database, Zap, Puzzle } from "lucide-react"

interface UsageCardProps {
    usage: Usage
}

export const UsageCard = React.memo<UsageCardProps>(({ usage }) => {
    const usageItems = [
        {
            label: "Tasks",
            current: usage.tasks.current,
            limit: usage.tasks.limit,
            icon: Zap,
            color: "text-blue-500",
        },
        {
            label: "Storage",
            current: usage.storage.current,
            limit: usage.storage.limit,
            icon: Database,
            color: "text-green-500",
            unit: "GB",
        },
        {
            label: "Team Members",
            current: usage.teamMembers.current,
            limit: usage.teamMembers.limit,
            icon: Users,
            color: "text-purple-500",
        },
        {
            label: "Integrations",
            current: usage.integrations.current,
            limit: usage.integrations.limit,
            icon: Puzzle,
            color: "text-orange-500",
        },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Usage Overview</CardTitle>
                <CardDescription>Your current usage across all features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {usageItems.map((item) => {
                    const percentage = item.limit === -1 ? 0 : (item.current / item.limit) * 100
                    const isUnlimited = item.limit === -1

                    return (
                        <div key={item.label} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <item.icon className={`h-4 w-4 ${item.color}`} />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">
                                    {item.current}
                                    {item.unit && ` ${item.unit}`}
                                    {!isUnlimited && ` / ${item.limit}${item.unit ? ` ${item.unit}` : ""}`}
                                    {isUnlimited && " (Unlimited)"}
                                </span>
                            </div>
                            {!isUnlimited && (
                                <Progress
                                    value={percentage}
                                    className={`h-2 ${percentage > 80 ? "bg-red-100" : percentage > 60 ? "bg-yellow-100" : "bg-green-100"}`}
                                />
                            )}
                        </div>
                    )
                })}
            </CardContent>
        </Card>
    )
})

UsageCard.displayName = "UsageCard"
