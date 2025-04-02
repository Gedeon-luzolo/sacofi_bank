"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientApi } from "../../api/ClientApi";
import { IClient } from "../../../types/globalTypes";
import { toast } from "sonner";
import SkeletonLoader from "../Loading/SkekeletonLoader";

export function TableClient() {
  const queryClient = useQueryClient();

  const {
    data: clients = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: ClientApi.getClients,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => ClientApi.deleteClient(id),
    onSuccess: () => {
      toast.success("Client Supprimé avec succès");
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
    onError: () => {
      toast.error("Erreur lors de la suppression de l'utilisateur");
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isLoading)
    return (
      <div>
        {" "}
        <SkeletonLoader rows={8} columns={10} />
      </div>
    );
  if (isError) return <div>Erreur lors du chargement des clients</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-xl border border-green-500 bg-white dark:border-green-800 dark:bg-white/[0.03] shadow-md"
    >
      <div className="w-full overflow-x-auto">
        <Table className="min-w-[600px] ">
          <TableHeader className="border-b border-green-500 bg-green-700 dark:border-green-800 dark:bg-green-800">
            <TableRow>
              <TableCell
                isHeader
                className="px-2 py-3 text-start font-semibold text-white/90"
              >
                N°
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Nom du Client
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Téléphone
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Site (Concession)
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-center font-semibold text-white/90"
              >
                Dimension du terrain
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Email
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 text-start font-semibold text-white/90"
              >
                Photo
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
            {clients && clients.length > 0 ? (
              clients.map((client: IClient) => (
                <TableRow
                  key={client.id}
                  className="hover:bg-brand-700/10 transition"
                >
                  <TableCell className="px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                    {client.id}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <span className="block font-semibold text-gray-900 dark:text-white/90">
                      {client.name}
                    </span>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                    {client.phone}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                    {client.site}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-center text-gray-600 dark:text-gray-400">
                    {client.terrainDimension} m2
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                    {client.email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                    <div className="w-10 h-10 overflow-hidden rounded-full border border-green-800">
                      <img
                        width={40}
                        height={40}
                        src={client.photo} // Assurez-vous que le chemin de la photo est correct
                        alt={client.name}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-6 text-center flex justify-center gap-3">
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
              ))
            ) : (
              <tr>
                <td colSpan={10} className="p-4 text-center dark:text-gray-200">
                  Aucun Client trouvé
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
}
