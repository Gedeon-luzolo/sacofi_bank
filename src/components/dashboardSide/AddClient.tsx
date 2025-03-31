import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export function AddClientForm() {
  const navigate = useNavigate();
  const paymentStatus = [
    { value: "pending", label: "En attente" },
    { value: "confirmed", label: "Confirmé" },
    { value: "failed", label: "Échoué" },
  ];
  const handleSubmit = () => {
    toast.success("Utilisateur ajouté avec succés");
    navigate("/basic-tables");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ComponentCard title="Nouveau client">
        <span className="dark:text-gray-300 text-gray-500">
          Entrez les informations du client
        </span>

        <div className="mt-6">
          <form
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
            action={handleSubmit}
          >
            <div>
              <Label>Nom complet du Client</Label>
              <Input type="text" name="name" placeholder="Nom du client" />
            </div>

            <div>
              <Label>Site (concession)</Label>
              <Select
                options={paymentStatus}
                placeholder="Sélectionnez un site ou concession"
                onChange={() => console.log("bpnjour")}
              />
            </div>
            <div>
              <Label>Dimension du terrain</Label>
              <Input type="text" name="phone" placeholder="20/25 mètres" />
            </div>
            <div>
              <Label>Numéro de téléphone</Label>
              <Input type="text" name="phone" placeholder="Téléphone" />
            </div>
            <div>
              <Label>Email du client</Label>
              <Input type="email" name="name" placeholder="Email du client" />
            </div>
            <div>
              <Label>N° du terrain</Label>
              <Input type="text" name="numTerain" placeholder="TRM-02" />
            </div>
            <div className="flex gap-3 mt-6 justify-end lg:justify-start">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Annuler
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="px-4 py-2 bg-brand-800 text-white rounded-lg"
              >
                Ajouter le Client
              </motion.button>
            </div>
          </form>
        </div>
      </ComponentCard>
    </motion.div>
  );
}
