"use client";

import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard";
import Input from "../form/input/InputField";
import { DownloadIcon } from "../../icons";
import { Search, LucidePrinter, LucideEye } from "lucide-react";
import Button from "../ui/button/Button";
import Badge from "../ui/badge/Badge";
import { Modal } from "../ui/modal";
import { useModal } from "../../hooks/useModal";
import Label from "../form/Label";
import Select from "../form/Select";

const invoices = [
  {
    id: "INV001",
    client: "Jean Dupont",
    amount: 2500000,
    status: "En cours",
    date: "2025-03-15",
  },
  {
    id: "INV002",
    client: "Marie Curie",
    amount: 1800000,
    status: "Paie",
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
    status: "Paie",
    date: "2025-03-20",
  },
];

const statusOptions = [
  { value: "paid", label: "Payée" },
  { value: "pending", label: "En attente" },
  { value: "overdue", label: "En retard" },
];

export function FactureComponents() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ComponentCard title="Factures">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input placeholder="Rechercher une facture..." className="pl-10" />
          </div>
          <Button
            onClick={openModal}
            className="dark:bg-green-700/60 hover:bg-brand-500"
          >
            Créer une facture
          </Button>
        </div>

        <div className="mt-6 overflow-auto rounded-lg border border-green-700 dark:border-green-800">
          <table className="w-full text-left">
            <thead className=" bg-green-700 dark:bg-green-700/40 text-gray-200">
              <tr>
                <th className="p-4">N° Facture</th>
                <th className="p-4">Client</th>
                <th className="p-4">Date</th>
                <th className="p-4">Montant</th>
                <th className="p-4">Statut</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-t border-green-700 dark:text-gray-100"
                >
                  <td className="p-4 font-medium">{invoice.id}</td>
                  <td className="p-4">{invoice.client}</td>
                  <td className="p-4">
                    {new Date(invoice.date).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="p-4">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "XAF",
                    }).format(invoice.amount)}
                  </td>
                  <td className="p-4">
                    <Badge
                      size="sm"
                      color={
                        invoice.status === "Paie"
                          ? "success"
                          : invoice.status === "En cours"
                          ? "warning"
                          : "error"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2  rounded hover:bg-green-600">
                      <LucideEye className="size-5" />
                    </button>
                    <button className="p-2  rounded hover:bg-green-600">
                      <DownloadIcon className="size-5" />
                    </button>
                    <button className="p-2  rounded hover:bg-green-600">
                      <LucidePrinter className="size-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentCard>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="relative w-full p-4 overflow-y-auto bg-white rounded-3xl dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-5 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Créer une facture
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="px-2 overflow-y-auto">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div>
                  <Label>Client</Label>
                  <Input
                    type="text"
                    name="client"
                    placeholder="Nom du client"
                  />
                </div>
                <div>
                  <Label>Montant</Label>
                  <Input
                    type="number"
                    name="amount"
                    placeholder="Montant en $"
                  />
                </div>
                <div>
                  <Label>Date</Label>
                  <Input type="date" name="date" />
                </div>
                <div>
                  <Label>Statut</Label>
                  <Select
                    options={statusOptions}
                    onChange={() => console.log("")}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Fermer
              </Button>
              <Button size="sm" onClick={handleSave}>
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </motion.div>
  );
}
