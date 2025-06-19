"use client"

import { useState, useCallback } from "react"
import type { Plan, Invoice, PaymentMethod, Usage, BillingInfo } from "@/types/billing"

export function useBilling() {
    const [currentPlan, setCurrentPlan] = useState<Plan>({
        id: "pro",
        name: "Pro",
        price: 29,
        interval: "month",
        features: ["Unlimited tasks", "Team collaboration", "Advanced analytics", "Priority support"],
        current: true,
    })

    const [invoices] = useState<Invoice[]>([
        {
            id: "inv_001",
            date: new Date(2024, 10, 1),
            amount: 29,
            status: "paid",
            description: "Pro Plan - November 2024",
            downloadUrl: "#",
        },
        {
            id: "inv_002",
            date: new Date(2024, 9, 1),
            amount: 29,
            status: "paid",
            description: "Pro Plan - October 2024",
            downloadUrl: "#",
        },
        {
            id: "inv_003",
            date: new Date(2024, 8, 1),
            amount: 29,
            status: "paid",
            description: "Pro Plan - September 2024",
            downloadUrl: "#",
        },
    ])

    const [paymentMethods] = useState<PaymentMethod[]>([
        {
            id: "pm_001",
            type: "card",
            last4: "4242",
            brand: "visa",
            expiryMonth: 12,
            expiryYear: 2025,
            isDefault: true,
        },
        {
            id: "pm_002",
            type: "paypal",
            isDefault: false,
        },
    ])

    const [usage] = useState<Usage>({
        tasks: { current: 1247, limit: -1 }, // -1 means unlimited
        storage: { current: 2.4, limit: 100 }, // in GB
        teamMembers: { current: 3, limit: 10 },
        integrations: { current: 5, limit: 15 },
    })

    const [billingInfo, setBillingInfo] = useState<BillingInfo>({
        companyName: "Acme Inc.",
        email: "billing@acme.com",
        address: {
            line1: "123 Business St",
            city: "San Francisco",
            state: "CA",
            postalCode: "94105",
            country: "US",
        },
        taxId: "12-3456789",
    })

    const availablePlans: Plan[] = [
        {
            id: "free",
            name: "Free",
            price: 0,
            interval: "month",
            features: ["Up to 100 tasks", "Basic features", "Email support"],
        },
        {
            id: "pro",
            name: "Pro",
            price: 29,
            interval: "month",
            features: ["Unlimited tasks", "Team collaboration", "Advanced analytics", "Priority support"],
            popular: true,
            current: currentPlan.id === "pro",
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: 99,
            interval: "month",
            features: ["Everything in Pro", "Advanced security", "Custom integrations", "Dedicated support", "SLA guarantee"],
        },
    ]

    const changePlan = useCallback(async (planId: string) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))
        const newPlan = availablePlans.find((p) => p.id === planId)
        if (newPlan) {
            setCurrentPlan({ ...newPlan, current: true })
        }
    }, [])

    const updateBillingInfo = useCallback((updates: Partial<BillingInfo>) => {
        setBillingInfo((prev) => ({ ...prev, ...updates }))
    }, [])

    return {
        currentPlan,
        availablePlans,
        invoices,
        paymentMethods,
        usage,
        billingInfo,
        changePlan,
        updateBillingInfo,
    }
}
