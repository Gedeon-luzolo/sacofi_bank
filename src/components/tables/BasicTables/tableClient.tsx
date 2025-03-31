"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import { Edit, Trash2, Eye } from "lucide-react";
import { motion } from "framer-motion";
interface ClientData {
  id: number;
  user: { image: string; name: string; phone: string };
  address: string;
  transactionType: string;
  propertyType: string;
  date: string;
  landImage: string;
  price: string;
  status: string;
}

const initialClients: ClientData[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-1.jpg",
      name: "Jean Dupont",
      phone: "+33 6 12 34 56 78",
    },
    address: "12 Rue Lafayette, Paris",
    transactionType: "Achat",
    propertyType: "Terrain",
    date: "2024-03-15",
    landImage: "/images/land/land-1.jpg",
    price: "250K€",
    status: "Confirmé",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-2.jpg",
      name: "Marie Curie",
      phone: "+33 7 98 76 54 32",
    },
    address: "45 Avenue de Lyon, Marseille",
    transactionType: "Location",
    propertyType: "Appartement",
    date: "2024-02-20",
    landImage: "/images/land/land-2.jpg",
    price: "1.2K€/mois",
    status: "En cours",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-3.jpg",
      name: "Paul Martin",
      phone: "+33 6 45 67 89 01",
    },
    address: "78 Boulevard Haussmann, Lille",
    transactionType: "Achat",
    propertyType: "Maison",
    date: "2024-01-10",
    landImage: "/images/land/land-3.jpg",
    price: "180K€",
    status: "Annulé",
  },
];

export function TableClient() {
  const [clients, setClients] = useState<ClientData[]>(initialClients);

  const handleDelete = (id: number) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-xl border border-green-500 bg-white dark:border-green-800 dark:bg-white/[0.03] shadow-md"
    >
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[600px] ">
          <TableHeader className="border-b border-green-500  bg-green-700 dark:border-green-800 dark:bg-green-800">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Client
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Telepone
              </TableCell>

              <TableCell
                isHeader
                className="hidden md:table-cell px-5 py-3 text-start font-semibold text-white/90"
              >
                Adresse
              </TableCell>
              <TableCell
                isHeader
                className="hidden lg:table-cell px-5 py-3 text-start font-semibold text-white/90"
              >
                Transaction
              </TableCell>
              <TableCell
                isHeader
                className="hidden lg:table-cell px-5 py-3 text-start font-semibold text-white/90"
              >
                Type de Bien
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Statut
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Montant
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-center font-semibold text-white/90"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-green-700 ">
            {clients.map((client) => (
              <TableRow
                key={client.id}
                className="hover:bg-brand-700/10  transition"
              >
                <TableCell className="px-5 py-4 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10  overflow-hidden rounded-full border border-green-800">
                      <img
                        width={40}
                        height={40}
                        src={client.user.image}
                        alt={client.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-900 dark:text-white/90">
                        {client.user.name}
                      </span>
                      {/* <span className="block text-gray-600 dark:text-gray-400 text-sm">
                        
                      </span> */}
                    </div>
                  </div>
                </TableCell>

                <TableCell className="hidden md:table-cell px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                  {client.user.phone}
                </TableCell>
                <TableCell className="hidden md:table-cell px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                  {client.address}
                </TableCell>

                <TableCell className="hidden lg:table-cell px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                  {client.transactionType}
                </TableCell>

                <TableCell className="hidden lg:table-cell px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                  {client.propertyType}
                </TableCell>

                <TableCell className="px-4 py-3 text-start">
                  <Badge
                    size="sm"
                    color={
                      client.status === "Confirmé"
                        ? "success"
                        : client.status === "En cours"
                        ? "warning"
                        : "error"
                    }
                  >
                    {client.status}
                  </Badge>
                </TableCell>

                <TableCell className="px-4 py-3 text-start font-medium text-gray-900 dark:text-gray-400">
                  {client.price}
                </TableCell>

                <TableCell className="px-4 py-12 text-center flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <Eye size={20} />
                  </button>
                  <button className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300">
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Trash2 size={20} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
