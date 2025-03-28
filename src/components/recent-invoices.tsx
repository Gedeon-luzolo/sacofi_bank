"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Eye, Download } from "lucide-react"
import { motion } from "framer-motion"

interface Invoice {
  id: string
  client: string
  amount: number
  status: "paid" | "pending" | "overdue"
  date: string
}

const invoices: Invoice[] = [
  {
    id: "INV001",
    client: "MR. X",
    amount: 2500.0,
    status: "paid",
    date: "2025-03-15",
  },
  {
    id: "INV002",
    client: "MR. Y",
    amount: 1800.0,
    status: "pending",
    date: "2025-03-18",
  },
  {
    id: "INV003",
    client: "MR. Z",
    amount: 3200.0,
    status: "overdue",
    date: "2025-03-10",
  },
  {
    id: "INV004",
    client: "MR. A",
    amount: 1500.0,
    status: "paid",
    date: "2025-03-20",
  },
  {
    id: "INV005",
    client: "MR. B",
    amount: 2100.0,
    status: "pending",
    date: "2025-03-22",
  },
]

export function RecentInvoices() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Factures Récentes</CardTitle>
        <CardDescription>Les 5 dernières factures émises par le système</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Facture</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Montant</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow
                key={invoice.id}
                onMouseEnter={() => setHoveredRow(invoice.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className="group"
              >
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{invoice.client}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat("fr-FR", {
                    style: "currency",
                    currency: "XAF",
                  }).format(invoice.amount)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      invoice.status === "paid" &&
                        "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
                      invoice.status === "pending" &&
                        "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
                      invoice.status === "overdue" &&
                        "border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
                    )}
                  >
                    {invoice.status === "paid" && "Payée"}
                    {invoice.status === "pending" && "En attente"}
                    {invoice.status === "overdue" && "En retard"}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    {hoveredRow === invoice.id && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex space-x-2"
                      >
                        <Button size="icon" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Download className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

