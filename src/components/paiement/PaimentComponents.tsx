import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard.tsx";
import Label from "../form/Label.tsx";
import Input from "../form/input/InputField";
import Select from "../form/Select.tsx";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function PaymentComponent() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    toast.success("Paiement ajouté avec succés");
    navigate("/facture");
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
    { value: "franc", label: "CDF" },
    { value: "dollars", label: "USD" },
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
            <Input type="text" placeholder="Jean Dupont" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Label>Motif de Paiement</Label>
            <Select
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
              <Input type="number" placeholder="Ex: 1200" className="pl-4" />
            </div>
            <div>
              <Label>Devise</Label>
              <Select
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
              <Input type="text" placeholder="TRM-02" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Label>Mumero du client</Label>
            <Input type="text" placeholder="Entrez le numero du client" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Label>E-mail du client</Label>
            <Input type="email" placeholder="luzolo@admin.com" />
          </motion.div>

          <div className="flex gap-3 mt-6 justify-end lg:justify-start">
            <button type="button" className="px-4 py-2 bg-gray-300 rounded-lg">
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
