export interface Plan {
    id: string
    name: string
    price: number
    interval: "month" | "year"
    features: string[]
    popular?: boolean
    current?: boolean
}

export interface Invoice {
    id: string
    date: Date
    amount: number
    status: "paid" | "pending" | "failed"
    description: string
    downloadUrl?: string
}

export interface PaymentMethod {
    id: string
    type: "card" | "paypal" | "bank"
    last4?: string
    brand?: string
    expiryMonth?: number
    expiryYear?: number
    isDefault: boolean
}

export interface Usage {
    tasks: { current: number; limit: number }
    storage: { current: number; limit: number }
    teamMembers: { current: number; limit: number }
    integrations: { current: number; limit: number }
}

export interface BillingInfo {
    companyName?: string
    email: string
    address: {
        line1: string
        line2?: string
        city: string
        state: string
        postalCode: string
        country: string
    }
    taxId?: string
}
  