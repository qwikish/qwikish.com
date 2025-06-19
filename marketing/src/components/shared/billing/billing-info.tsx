"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { BillingInfo } from "@/types/billing"
import { Building, Edit } from "lucide-react"

interface BillingInfoProps {
    billingInfo: BillingInfo
    onUpdate: (updates: Partial<BillingInfo>) => void
}

export const BillingInfoComponent = React.memo<BillingInfoProps>(({ billingInfo, onUpdate }) => {
    const [isEditing, setIsEditing] = React.useState(false)
    const [localInfo, setLocalInfo] = React.useState(billingInfo)

    React.useEffect(() => {
        setLocalInfo(billingInfo)
    }, [billingInfo])

    const handleSave = () => {
        onUpdate(localInfo)
        setIsEditing(false)
    }

    const handleCancel = () => {
        setLocalInfo(billingInfo)
        setIsEditing(false)
    }

    const countries = [
        { value: "US", label: "United States" },
        { value: "CA", label: "Canada" },
        { value: "GB", label: "United Kingdom" },
        { value: "DE", label: "Germany" },
        { value: "FR", label: "France" },
    ]

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5" />
                            Billing Information
                        </CardTitle>
                        <CardDescription>Update your billing details and tax information</CardDescription>
                    </div>
                    {!isEditing && (
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(true)} className="gap-2">
                            <Edit className="h-4 w-4" />
                            Edit
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                            id="companyName"
                            value={localInfo.companyName || ""}
                            onChange={(e) => setLocalInfo((prev) => ({ ...prev, companyName: e.target.value }))}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Billing Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={localInfo.email}
                            onChange={(e) => setLocalInfo((prev) => ({ ...prev, email: e.target.value }))}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="address1">Address Line 1</Label>
                    <Input
                        id="address1"
                        value={localInfo.address.line1}
                        onChange={(e) =>
                            setLocalInfo((prev) => ({
                                ...prev,
                                address: { ...prev.address, line1: e.target.value },
                            }))
                        }
                        disabled={!isEditing}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                    <Input
                        id="address2"
                        value={localInfo.address.line2 || ""}
                        onChange={(e) =>
                            setLocalInfo((prev) => ({
                                ...prev,
                                address: { ...prev.address, line2: e.target.value },
                            }))
                        }
                        disabled={!isEditing}
                    />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                            id="city"
                            value={localInfo.address.city}
                            onChange={(e) =>
                                setLocalInfo((prev) => ({
                                    ...prev,
                                    address: { ...prev.address, city: e.target.value },
                                }))
                            }
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                            id="state"
                            value={localInfo.address.state}
                            onChange={(e) =>
                                setLocalInfo((prev) => ({
                                    ...prev,
                                    address: { ...prev.address, state: e.target.value },
                                }))
                            }
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                            id="postalCode"
                            value={localInfo.address.postalCode}
                            onChange={(e) =>
                                setLocalInfo((prev) => ({
                                    ...prev,
                                    address: { ...prev.address, postalCode: e.target.value },
                                }))
                            }
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                            value={localInfo.address.country}
                            onValueChange={(value) =>
                                setLocalInfo((prev) => ({
                                    ...prev,
                                    address: { ...prev.address, country: value },
                                }))
                            }
                            disabled={!isEditing}
                        >
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {countries.map((country) => (
                                    <SelectItem key={country.value} value={country.value}>
                                        {country.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="taxId">Tax ID (Optional)</Label>
                        <Input
                            id="taxId"
                            value={localInfo.taxId || ""}
                            onChange={(e) => setLocalInfo((prev) => ({ ...prev, taxId: e.target.value }))}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                {isEditing && (
                    <div className="flex gap-2 pt-4">
                        <Button onClick={handleSave}>Save Changes</Button>
                        <Button variant="outline" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                )}
            </CardContent>
        </Card>
    )
})

BillingInfoComponent.displayName = "BillingInfo"
