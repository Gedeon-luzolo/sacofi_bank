import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard";
import Input from "../form/input/InputField";
import { Search, LucidePrinter, Trash2 } from "lucide-react";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PaymentApi } from "../../api/PaymentApi";
import { IPayment } from "../../../types/globalTypes";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useState } from "react";
import { Modal } from "../ui/modal";
import { FactureModal } from "./FactureModal";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { toast } from "sonner";
import { useAuth } from "../../context/useAuth";
import { useSidebar } from "../../context/SidebarContext";

export function FactureComponents() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<IPayment | null>(null);
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { isExpanded } = useSidebar();

  const { data, isError, isLoading } = useQuery({
    queryKey: ["payment"],
    queryFn: PaymentApi.getPayments,
  });

  const openModal = (invoice: IPayment) => {
    setSelectedInvoice(invoice);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInvoice(null);
  };

  const deleteMutation = useMutation({
    mutationFn: (id: number) => PaymentApi.deletePayment(id),
    onSuccess: () => {
      toast.success("Facture supprimé avec succès");
      queryClient.invalidateQueries({ queryKey: ["payment"] });
    },
    onError: () => {
      toast.error("Erreur lors de la suppression de la facture");
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isError) {
    return <div>Erreur</div>;
  }

  if (isLoading) {
    return (
      <div>
        {" "}
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ComponentCard title="Facture">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input placeholder="Rechercher une facture..." className="pl-10" />
          </div>
          <Button
            onClick={() => navigate("/paiement")}
            className="dark:bg-green-700/60 hover:bg-brand-500"
          >
            Créer une facture
          </Button>
        </div>

        <div className="mt-6 mx-auto overflow-x-auto custom-scrollbar rounded-lg border border-green-700 dark:border-green-800">
          <Table className="min-w-[600px]">
            <TableHeader className="border-b border-green-500 bg-green-700 dark:border-green-800 dark:bg-green-800">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-2 py-3 text-sm text-start font-semibold text-white/90"
                >
                  N° Facture
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-3 text-sm text-start font-semibold text-white/90"
                >
                  Nom du Client
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-3 text-sm text-start font-semibold text-white/90"
                >
                  Motif de paiement
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-3 text-sm text-start font-semibold text-white/90"
                >
                  Montant
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-3 text-sm text-center font-semibold text-white/90"
                >
                  Mode de paiement
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-3 text-sm text-start font-semibold text-white/90"
                >
                  Concession
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 text-sm text-start font-semibold text-white/90"
                >
                  N° du terrain
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-3 text-sm text-center font-semibold text-white/90"
                >
                  Telephone
                </TableCell>

                {!isExpanded && (
                  <TableCell
                    isHeader
                    className="px-3 py-2 text-sm text-center font-semibold text-white/90"
                  >
                    Email client
                  </TableCell>
                )}

                <TableCell
                  isHeader
                  className="px-3 py-2 text-sm text-center font-semibold text-white/90"
                >
                  Emit par
                </TableCell>
                <TableCell
                  isHeader
                  className="px-3 py-2 text-sm text-center font-semibold text-white/90"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y divide-green-700">
              {data && data.length > 0 ? (
                data.map((invoice: IPayment) => (
                  <TableRow
                    key={invoice.id}
                    className="hover:bg-brand-700/10 transition text-sm"
                  >
                    <TableCell className="text-sm px-4 py-3 text-start text-gray-600 dark:text-gray-400">
                      {invoice.id}
                    </TableCell>
                    <TableCell className="px-3 text-sm py-3 text-start text-gray-600 dark:text-gray-400">
                      {invoice.clientName}
                    </TableCell>
                    <TableCell className="px-3 text-sm py-3 text-start text-gray-600 dark:text-gray-400">
                      {invoice.paymentReason}
                    </TableCell>
                    <TableCell className="px-3 text-sm py-3 text-start text-gray-600 dark:text-gray-400">
                      {invoice.amount.toLocaleString("en-US")}{" "}
                      {invoice.currency}
                    </TableCell>
                    <TableCell className="px-3 text-sm py-3 text-center text-gray-600 dark:text-gray-400">
                      {invoice.paymentMode}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-start text-gray-600 dark:text-gray-400">
                      {invoice.site}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-start text-gray-600 dark:text-gray-400">
                      {invoice.terrainNumber}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-sm text-start text-gray-600 dark:text-gray-400">
                      {invoice.clientNumber}
                    </TableCell>

                    {!isExpanded && (
                      <TableCell className="px-4 py-3 text-sm text-start text-gray-600 dark:text-gray-400">
                        {invoice.email}
                      </TableCell>
                    )}

                    <TableCell className="px-4 py-3 text-sm text-start text-gray-600 dark:text-gray-400">
                      {invoice.agent}
                    </TableCell>

                    <TableCell className="px-4 py-3 text-sm text-center gap-3">
                      <div className="flex items-center">
                        <button
                          className="p-2 rounded hover:bg-green-600"
                          onClick={() => openModal(invoice)}
                        >
                          <LucidePrinter className="size-5 text-blue-700 hover:dark:text-zinc-50 dark:text-blue-400 hover:text-gray-25" />
                        </button>

                        {user?.role === "admin" && (
                          <button
                            onClick={() => handleDelete(invoice.id)}
                            className="text-red-600 rounded hover:bg-red-500 hover:text-zinc-50 p-2 dark:text-red-400 dark:hover:text-zinc-50"
                          >
                            <Trash2 size={20} />
                          </button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={10}
                    className="p-4 text-center dark:text-gray-200"
                  >
                    Aucune facture trouvée.
                  </td>
                </tr>
              )}
            </TableBody>
          </Table>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          className="max-w-[700px] m-4"
        >
          {selectedInvoice && (
            <FactureModal selectedInvoice={selectedInvoice} />
          )}
        </Modal>
      </ComponentCard>
    </motion.div>
  );
}
