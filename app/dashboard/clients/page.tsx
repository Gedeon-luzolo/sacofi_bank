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
import { PlusIcon, Search, Edit, Trash } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";

const clients = [
  {
    id: "CL001",
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "+237 612345678",
    status: "active",
    projects: 3,
  },
  {
    id: "CL002",
    name: "Marie Curie",
    email: "marie.curie@example.com",
    phone: "+237 623456789",
    status: "inactive",
    projects: 0,
  },
  {
    id: "CL003",
    name: "Pierre Martin",
    email: "pierre.martin@example.com",
    phone: "+237 634567890",
    status: "active",
    projects: 2,
  },
  {
    id: "CL004",
    name: "Sophie Dubois",
    email: "sophie.dubois@example.com",
    phone: "+237 645678901",
    status: "active",
    projects: 1,
  },
  {
    id: "CL005",
    name: "Thomas Bernard",
    email: "thomas.bernard@example.com",
    phone: "+237 656789012",
    status: "inactive",
    projects: 0,
  },
  {
    id: "CL006",
    name: "Camille Leroy",
    email: "camille.leroy@example.com",
    phone: "+237 667890123",
    status: "active",
    projects: 4,
  },
  {
    id: "CL007",
    name: "Lucas Moreau",
    email: "lucas.moreau@example.com",
    phone: "+237 678901234",
    status: "active",
    projects: 2,
  },
  {
    id: "CL008",
    name: "Emma Petit",
    email: "emma.petit@example.com",
    phone: "+237 689012345",
    status: "active",
    projects: 1,
  },
];

export default function ClientsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
            <p className="text-muted-foreground">
              Gérez vos clients et leurs informations
            </p>
          </div>
          <Link href="/dashboard/clients/ajouter">
            <Button>
              <PlusIcon className="mr-2 h-4 w-4" /> Ajouter un client
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Liste des clients</CardTitle>
            <CardDescription>
              Total: {clients.length} clients enregistrés
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Rechercher un client..." className="pl-9" />
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Statut</TableHead>
                    <TableHead>Projets</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.id}</TableCell>
                      <TableCell>{client.name}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            client.status === "active"
                              ? "border-green-500 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                              : "border-red-500 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300"
                          }
                        >
                          {client.status === "active" ? "Actif" : "Inactif"}
                        </Badge>
                      </TableCell>
                      <TableCell>{client.projects}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button size="icon" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Trash className="h-4 w-4" />
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
