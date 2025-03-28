import { Header } from "@/src/components/header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { PlusIcon, Search, Eye, Download, Printer } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";

const invoices = [
  {
    id: "INV001",
    client: "Jean Dupont",
    amount: 2500000,
    status: "paid",
    date: "2025-03-15",
  },
  {
    id: "INV002",
    client: "Marie Curie",
    amount: 1800000,
    status: "pending",
    date: "2025-03-18",
  },
  {
    id: "INV003",
    client: "Pierre Martin",
    amount: 3200000,
    status: "overdue",
    date: "2025-03-10",
  },
  {
    id: "INV004",
    client: "Sophie Dubois",
    amount: 1500000,
    status: "paid",
    date: "2025-03-20",
  },
  {
    id: "INV005",
    client: "Thomas Bernard",
    amount: 2100000,
    status: "pending",
    date: "2025-03-22",
  },
  {
    id: "INV006",
    client: "Camille Leroy",
    amount: 2800000,
    status: "paid",
    date: "2025-03-05",
  },
  {
    id: "INV007",
    client: "Lucas Moreau",
    amount: 1900000,
    status: "overdue",
    date: "2025-03-01",
  },
  {
    id: "INV008",
    client: "Emma Petit",
    amount: 2300000,
    status: "paid",
    date: "2025-03-12",
  },
];

export default function InvoicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Factures</h1>
            <p className="text-muted-foreground">
              Gérez vos factures et suivez les paiements
            </p>
          </div>
          <Link href="/dashboard/factures/creer">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" /> Créer une facture
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des factures</CardTitle>
            <CardDescription>
              Total: {invoices.length} factures émises
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Rechercher une facture..."
                  className="pl-9"
                />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>N° Facture</TableHead>
                    <TableHead>Client</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Montant</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">
                        {invoice.id}
                      </TableCell>
                      <TableCell>{invoice.client}</TableCell>
                      <TableCell>
                        {new Date(invoice.date).toLocaleDateString("fr-FR")}
                      </TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("fr-FR", {
                          style: "currency",
                          currency: "XAF",
                        }).format(invoice.amount)}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            invoice.status === "paid"
                              ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                              : invoice.status === "pending"
                              ? "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300"
                              : "border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                          }
                        >
                          {invoice.status === "paid" && "Payée"}
                          {invoice.status === "pending" && "En attente"}
                          {invoice.status === "overdue" && "En retard"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button size="icon" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Printer className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
