import { motion } from "framer-motion";
import ComponentCard from "../common/ComponentCard";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { EnvelopeIcon } from "../../icons";
import FileInput from "../form/input/FileInput";
import { useMutation } from "@tanstack/react-query";
import { ClientApi } from "../../api/ClientApi";

export function AddClientForm() {
  const navigate = useNavigate();
  const concession = [
    { value: "MALUKU", label: "MALUKU" },
    { value: "MAKALA", label: "MAKALA" },
    { value: "LEMBA", label: "LEMBA" },
  ];

  // Mutation pour ajouter un client
  const mutation = useMutation({
    mutationFn: (clientData: FormData) => ClientApi.postClient(clientData),
    onSuccess: () => {
      toast.success("Client ajouté avec succès");
      navigate("/basic-tables");
    },
    onError: () => {
      toast.error("Erreur lors de l'ajout du client");
    },
  });

  const handleSubmit = (formData: FormData) => {
    console.log("Données envoyées :", Object.fromEntries(formData.entries())); // Vérifier les données envoyées
    mutation.mutate(formData); // Envoie les données du formulaire
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
            action={handleSubmit} // Utilisation de onSubmit
          >
            <div>
              <Label>Nom complet du Client</Label>
              <Input type="text" name="name" placeholder="Nom du client" />
            </div>

            <div>
              <Label>Site (concession)</Label>
              <Select
                name="site"
                options={concession}
                placeholder="Sélectionnez un site ou concession"
                onChange={() => console.log("bpnjour")}
              />
            </div>
            <div>
              <Label>Dimension du terrain</Label>
              <Input
                type="text"
                name="terrainDimension"
                placeholder="20/25 mètres"
              />
            </div>
            <div>
              <Label>Numéro de téléphone</Label>
              <Input type="text" name="phone" placeholder="Téléphone" />
            </div>
            <div>
              <Label>Email du client</Label>
              <div className="relative">
                <Input
                  placeholder="info@gmail.com"
                  type="email"
                  name="email" // Ajout du nom pour le formulaire
                  className="pl-[62px]"
                />
                <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <EnvelopeIcon className="size-6" />
                </span>
              </div>
            </div>
            <div>
              <Label>N° du terrain</Label>
              <Input type="text" name="numTerrain" placeholder="TRM-02" />
            </div>

            <div>
              <Label>Photo du client</Label>
              <FileInput className="custom-class" name="photo" />
            </div>
            <div className="flex gap-3 mt-6 justify-end lg:justify-start">
              <button
                type="button"
                className="px-4 py-2 bg-gray-300 rounded-lg"
                onClick={() => navigate("/home")}
              >
                Annuler
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="px-4 py-2 bg-brand-800 text-white rounded-lg"
              >
                Enregistrer le Client
              </motion.button>
            </div>
          </form>
        </div>
      </ComponentCard>
    </motion.div>
  );
}
