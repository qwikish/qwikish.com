"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Invoice } from "@/types/billing"
import { Download, Receipt } from "lucide-react"
import { format } from "date-fns"

interface InvoiceTableProps {
    invoices: Invoice[]
}

export const InvoiceTable = React.memo<InvoiceTableProps>(({ invoices }) => {
    const getStatusColor = (status: Invoice["status"]) => {
        switch (status) {
            case "paid":
                return "bg-green-100 text-green-800"
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "failed":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Receipt className="h-5 w-5" />
                    Billing History
                </CardTitle>
                <CardDescription>View and download your past invoices</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                                <TableCell className="font-medium">{invoice.id}</TableCell>
                                <TableCell>{format(invoice.date, "MMM d, yyyy")}</TableCell>
                                <TableCell>{invoice.description}</TableCell>
                                <TableCell>
                                    <Badge variant="outline" className={getStatusColor(invoice.status)}>
                                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                                    </Badge>
                                </TableCell>
                                <TableCell>${invoice.amount}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" className="gap-2">
                                        <Download className="h-4 w-4" />
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
})

InvoiceTable.displayName = "InvoiceTable"
