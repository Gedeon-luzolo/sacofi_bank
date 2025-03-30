import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";

export function AddClientForm() {
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
      <ComponentCard title="Ajouter un nouveau client rapidement">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-500 dark:text-gray-100  ">
              Formulaire d'ajout de client
            </h1>
            <p className="text-gray-600">Entrez les informations du client.</p>
          </div>
        </div>

        <div className="mt-6">
          <form className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <Label>Nom du Client</Label>
              <Input type="text" name="name" placeholder="Nom du client" />
            </div>

            <div>
              <Label>Email du client</Label>
              <Input type="email" name="name" placeholder="Email du client" />
            </div>
            <div>
              <Label>Numéro de téléphone</Label>
              <Input type="text" name="phone" placeholder="Téléphone" />
            </div>
            <div>
              <Label>Adresse</Label>
              <Input
                type="text"
                name="address"
                placeholder="Adresse du client"
              />
            </div>
            <div>
              <Label>Ville</Label>
              <Input type="text" name="ville" placeholder="Ville du client" />
            </div>
            <div>
              <Label>Type de Bien</Label>
              <Select
                options={paymentStatus}
                placeholder="Sélectionnez un état"
                onChange={() => console.log("bpnjour")}
              />
            </div>
            <div>
              <Label>Statut</Label>
              <Select
                options={paymentStatus}
                placeholder="Sélectionnez un état"
                onChange={() => console.log("bpnjour")}
              />
            </div>
            <div className="flex gap-3 mt-6 justify-end">
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
