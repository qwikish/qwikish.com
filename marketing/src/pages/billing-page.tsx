"use client"

import React from "react"
import { format } from "date-fns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
    CreditCard,
    Receipt,
    Settings,
    TrendingUp,
    Calendar,
    DollarSign,
    ArrowLeft,
    AlertCircle,
    CheckCircle,
} from "lucide-react"

// Components
import { PlanCard } from "@/components/shared/billing/plan-card"
import { UsageCard } from "@/components/shared/billing/usage-card"
import { InvoiceTable } from "@/components/shared/billing/invoice-table"
import { PaymentMethods } from "@/components/shared/billing/payment-methods"
import { BillingInfoComponent } from "@/components/shared/billing/billing-info"

// Hooks
import { useBilling } from "@/hooks/use-billing"

export default function BillingPage() {
    const { currentPlan, availablePlans, invoices, paymentMethods, usage, billingInfo, changePlan, updateBillingInfo } =
        useBilling()

    const [isChangingPlan, setIsChangingPlan] = React.useState(false)

    const handlePlanChange = async (planId: string) => {
        setIsChangingPlan(true)
        try {
            await changePlan(planId)
        } finally {
            setIsChangingPlan(false)
        }
    }

    const nextBillingDate = new Date()
    nextBillingDate.setMonth(nextBillingDate.getMonth() + 1)

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
                                <CreditCard className="h-6 w-6" />
                                Billing & Subscription
                            </h1>
                            <p className="text-muted-foreground">Manage your subscription, billing, and payment methods</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Receipt className="h-4 w-4" />
                            Download Invoice
                        </Button>
                        <Button size="sm" className="gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Upgrade Plan
                        </Button>
                    </div>
                </div>

                {/* Current Plan Overview */}
                <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-between">
                                <span>Current Subscription</span>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Active
                                </Badge>
                            </CardTitle>
                            <CardDescription>Your current plan and billing information</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{currentPlan.name} Plan</h3>
                                    <p className="text-muted-foreground">
                                        ${currentPlan.price}/{currentPlan.interval}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">Next billing date</p>
                                    <p className="font-medium">{format(nextBillingDate, "MMM d, yyyy")}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Billing cycle: Monthly</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Auto-renewal: Enabled</span>
                                </div>
                            </div>

                            <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>
                                    Your subscription will automatically renew on {format(nextBillingDate, "MMMM d, yyyy")} for $
                                    {currentPlan.price}.
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </Card>

                    <UsageCard usage={usage} />
                </div>

                {/* Billing Tabs */}
                <Tabs defaultValue="plans" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="plans" className="gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Plans
                        </TabsTrigger>
                        <TabsTrigger value="billing" className="gap-2">
                            <Receipt className="h-4 w-4" />
                            History
                        </TabsTrigger>
                        <TabsTrigger value="payment" className="gap-2">
                            <CreditCard className="h-4 w-4" />
                            Payment
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="gap-2">
                            <Settings className="h-4 w-4" />
                            Settings
                        </TabsTrigger>
                    </TabsList>

                    {/* Plans Tab */}
                    <TabsContent value="plans" className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Choose Your Plan</h2>
                            <p className="text-muted-foreground mb-6">
                                Select the plan that best fits your needs. You can upgrade or downgrade at any time.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-3">
                            {availablePlans.map((plan) => (
                                <PlanCard key={plan.id} plan={plan} onSelect={handlePlanChange} isLoading={isChangingPlan} />
                            ))}
                        </div>

                        {/* Plan Comparison */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Plan Comparison</CardTitle>
                                <CardDescription>Compare features across all plans</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left py-2">Feature</th>
                                                <th className="text-center py-2">Free</th>
                                                <th className="text-center py-2">Pro</th>
                                                <th className="text-center py-2">Enterprise</th>
                                            </tr>
                                        </thead>
                                        <tbody className="space-y-2">
                                            <tr className="border-b">
                                                <td className="py-2">Tasks</td>
                                                <td className="text-center py-2">100</td>
                                                <td className="text-center py-2">Unlimited</td>
                                                <td className="text-center py-2">Unlimited</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2">Team Members</td>
                                                <td className="text-center py-2">1</td>
                                                <td className="text-center py-2">10</td>
                                                <td className="text-center py-2">Unlimited</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2">Storage</td>
                                                <td className="text-center py-2">1GB</td>
                                                <td className="text-center py-2">100GB</td>
                                                <td className="text-center py-2">1TB</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2">Priority Support</td>
                                                <td className="text-center py-2">❌</td>
                                                <td className="text-center py-2">✅</td>
                                                <td className="text-center py-2">✅</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Billing History Tab */}
                    <TabsContent value="billing" className="space-y-6">
                        <InvoiceTable invoices={invoices} />
                    </TabsContent>

                    {/* Payment Methods Tab */}
                    <TabsContent value="payment" className="space-y-6">
                        <PaymentMethods paymentMethods={paymentMethods} />
                    </TabsContent>

                    {/* Billing Settings Tab */}
                    <TabsContent value="settings" className="space-y-6">
                        <BillingInfoComponent billingInfo={billingInfo} onUpdate={updateBillingInfo} />

                        {/* Additional Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Subscription Settings</CardTitle>
                                <CardDescription>Manage your subscription preferences</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-medium">Auto-renewal</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Automatically renew your subscription each billing cycle
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Enabled
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <h3 className="font-medium">Billing notifications</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Receive email notifications about billing and payments
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        Configure
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-red-600">Cancel subscription</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Cancel your subscription and downgrade to the free plan
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm" className="border-red-200 text-red-600">
                                        Cancel
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
