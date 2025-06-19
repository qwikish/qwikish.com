"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Plan } from "@/types/billing"
import { Check, Star } from "lucide-react"

interface PlanCardProps {
    plan: Plan
    onSelect: (planId: string) => void
    isLoading?: boolean
}

export const PlanCard = React.memo<PlanCardProps>(({ plan, onSelect, isLoading = false }) => {
    return (
        <Card
            className={`relative transition-all hover:shadow-lg ${plan.current ? "border-primary shadow-md" : ""
                } ${plan.popular ? "border-orange-200" : ""}`}
        >
            {plan.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-600">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                </Badge>
            )}

            {plan.current && <Badge className="absolute -top-2 right-4 bg-primary">Current Plan</Badge>}

            <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.interval}</span>
                </div>
                <CardDescription>
                    {plan.name === "Free" && "Perfect for getting started"}
                    {plan.name === "Pro" && "Best for growing teams"}
                    {plan.name === "Enterprise" && "For large organizations"}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <Button
                    className="w-full"
                    variant={plan.current ? "outline" : "default"}
                    onClick={() => onSelect(plan.id)}
                    disabled={plan.current || isLoading}
                >
                    {plan.current ? "Current Plan" : isLoading ? "Processing..." : `Choose ${plan.name}`}
                </Button>
            </CardContent>
        </Card>
    )
})

PlanCard.displayName = "PlanCard"
