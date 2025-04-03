import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard.tsx";
import Label from "../form/Label.tsx";
import Input from "../form/input/InputField";
import Select from "../form/Select.tsx";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { PaymentApi } from "../../api/PaymentApi"; // Assurez-vous que le chemin est correct

export function PaymentComponent() {
  const navigate = useNavigate();

  // Mutation pour ajouter un client
  const mutation = useMutation({
    mutationFn: (paymentData: FormData) => PaymentApi.addPayment(paymentData),
    onSuccess: () => {
      toast.success("Paiement ajouté avec succès");
      navigate("/facture");
    },
    onError: () => {
      toast.error("Erreur lors de l'ajout du paiement");
    },
  });

  const handleSubmit = (formData: FormData) => {
    mutation.mutate(formData); // Envoie les données du formulaire
  };

  const paymentMethods = [
    { value: "souscription", label: "SOUSCRIPTION" },
    { value: "paiement menseul", label: "PAIEMENT MENSUEL" },
    { value: "borne", label: "BORNE" },
    { value: "plan-construction", label: "PLAN & CONSTRUCTION" },
  ];
  const paymentConcession = [
    { value: "Maluku", label: "MALUKU" },
    { value: "Nsele", label: "NSELE" },
  ];

  const paymentMode = [
    { value: "en_espece", label: "EN ESPECE" },
    { value: "cheque", label: "CHEQUE" },
    { value: "virement_bancaire", label: "VIREMENT BANCAIRE" },
    { value: "mobile_money", label: "MOBILE MONEY" },
  ];
  const paymentDevice = [
    { value: "CDF", label: "CDF" },
    { value: "USD", label: "USD" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ComponentCard title="Paiement">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          action={handleSubmit}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Label>Nom du Client</Label>
            <Input name="clientName" type="text" placeholder="Jean Dupont" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Label>Motif de Paiement</Label>
            <Select
              name="paymentReason" // Ajout du nom pour le formulaire
              options={paymentMethods}
              placeholder="Choisissez un motif"
              onChange={() => console.log("bpnjour")}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-x-5"
          >
            <div className="col-span-2">
              <Label>Montant</Label>
              <Input
                name="amount"
                type="number"
                placeholder="Ex: 1200"
                className="pl-4"
              />
            </div>
            <div>
              <Label>Devise</Label>
              <Select
                name="currency" // Ajout du nom pour le formulaire
                options={paymentDevice}
                placeholder="USD"
                onChange={() => console.log("bpnjour")}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Label>Mode de paiement</Label>
            <Select
              name="paymentMode" // Ajout du nom pour le formulaire
              options={paymentMode}
              placeholder="Choisissez un mode de paiement"
              onChange={() => console.log("bpnjour")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Label>Site (concession)</Label>
            <Select
              name="site" // Ajout du nom pour le formulaire
              options={paymentConcession}
              placeholder="Sélectionnez la concession"
              onChange={() => console.log("bpnjour")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Label>N° du terrain</Label>
            <div className="relative">
              <Input name="terrainNumber" type="text" placeholder="TRM-02" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Label>N° du client</Label>
            <Input
              name="clientNumber"
              type="text"
              placeholder="Entrez le numéro du client"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Label>E-mail du client</Label>
            <Input name="email" type="email" placeholder="luzolo@admin.com" />
          </motion.div>

          <div className="flex gap-3 mt-6 justify-end lg:justify-start">
            <button
              onClick={() => navigate("/home")}
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Annuler
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="px-10 py-2 bg-brand-800 text-white rounded-lg"
            >
              Payer
            </motion.button>
          </div>
        </form>
      </ComponentCard>
    </motion.div>
  );
}
