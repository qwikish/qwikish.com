/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { PaymentMethod } from "@/types/billing"
import { CreditCard, Plus, MoreVertical, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface PaymentMethodsProps {
    paymentMethods: PaymentMethod[]
}

export const PaymentMethods = React.memo<PaymentMethodsProps>(({ paymentMethods }) => {
    const getCardIcon = (brand?: string) => {
        // In a real app, you'd have actual card brand icons
        return <CreditCard className="h-6 w-6" />
    }

    const formatCardNumber = (last4?: string) => {
        return `•••• •••• •••• ${last4}`
    }

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5" />
                            Payment Methods
                        </CardTitle>
                        <CardDescription>Manage your payment methods</CardDescription>
                    </div>
                    <Button size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        Add Method
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                    <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                        <div className="flex items-center gap-3">
                            {method.type === "card" ? (
                                getCardIcon(method.brand)
                            ) : (
                                <div className="h-6 w-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
                                    PP
                                </div>
                            )}
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">
                                        {method.type === "card"
                                            ? `${method.brand?.toUpperCase()} ${formatCardNumber(method.last4)}`
                                            : "PayPal"}
                                    </span>
                                    {method.isDefault && (
                                        <Badge variant="secondary" className="text-xs">
                                            Default
                                        </Badge>
                                    )}
                                </div>
                                {method.type === "card" && method.expiryMonth && method.expiryYear && (
                                    <p className="text-sm text-muted-foreground">
                                        Expires {method.expiryMonth.toString().padStart(2, "0")}/{method.expiryYear}
                                    </p>
                                )}
                            </div>
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {!method.isDefault && <DropdownMenuItem>Set as Default</DropdownMenuItem>}
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Remove
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
})

PaymentMethods.displayName = "PaymentMethods"
