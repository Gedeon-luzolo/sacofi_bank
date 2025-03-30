"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard.tsx";
import Label from "../form/Label.tsx";
import Input from "../form/input/InputField";
import Select from "../form/Select.tsx";
import { Calendar, LucideCreditCard } from "lucide-react";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import DatePicker from "../form/date-picker.tsx";

export function PaymentComponent() {
  const [showPassword, setShowPassword] = useState(false);
  const paymentMethods = [
    { value: "card", label: "Carte Bancaire" },
    { value: "transfer", label: "Virement" },
    { value: "cash", label: "Espèces" },
  ];
  const paymentStatus = [
    { value: "pending", label: "En attente" },
    { value: "confirmed", label: "Confirmé" },
    { value: "failed", label: "Échoué" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ComponentCard title="Ajoutez des paiements sans soucis">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Label>Nom du Client</Label>
            <Input type="text" placeholder="Jean Dupont" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Label>Méthode de Paiement</Label>
            <Select
              options={paymentMethods}
              placeholder="Choisissez une méthode"
              onChange={() => console.log("bpnjour")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Label>Montant</Label>
            <Input type="number" placeholder="Ex: 1200" className="pl-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Label>Date de Paiement</Label>
            <div className="relative">
              <DatePicker
                id="date-picker"
                placeholder="Sélectionnez une date"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Calendar className="size-5" />
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Label>État du Paiement</Label>
            <Select
              options={paymentStatus}
              placeholder="Sélectionnez un état"
              onChange={() => console.log("bpnjour")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Label>Numéro de Transaction</Label>
            <div className="relative">
              <Input
                type="text"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="pl-[50px]"
              />
              <span className="absolute left-0 top-1/2 flex h-11 w-[40px] -translate-y-1/2 items-center justify-center border-r border-gray-300 dark:border-gray-700">
                <LucideCreditCard className="size-6 text-gray-500 dark:text-gray-400" />
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Label>Mot de passe</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Entrez votre mot de passe"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeIcon className="size-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <EyeCloseIcon className="size-5 text-gray-500 dark:text-gray-400" />
                )}
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="mt-6 w-full md:w-auto px-6 py-3 bg-brand-800 text-white font-semibold rounded-lg shadow-md hover:bg-brand-700 transition-all">
            Valider le Paiement
          </button>
        </motion.div>
      </ComponentCard>
    </motion.div>
  );
}
