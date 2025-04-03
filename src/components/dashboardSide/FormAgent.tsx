import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import Button from "../ui/button/Button";
import Select from "../form/Select";
import { useAuth } from "../../context/useAuth";

interface IClose {
  closeModal: () => void;
}

export function FormAddAgent({ closeModal }: IClose) {
  const queryClient = useQueryClient();
  const { register } = useAuth();

  const handleSubmit = async (formData: FormData) => {
    try {
      await register(formData);
      queryClient.invalidateQueries({ queryKey: ["agents"] });
      closeModal();
    } catch {
      toast.error("Erreur lors de l'ajout de l'agent");
    }
  };

  return (
    <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
      <div className="px-2 pr-14">
        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
          Ajouter un nouvel agent
        </h4>
      </div>
      <form className="flex flex-col" action={handleSubmit}>
        <div className="custom-scrollbar h-[400px] lg:h-[200px] overflow-y-scroll px-2 pb-3">
          <div className="mt-7">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-3">
              <div className="col-span-2 lg:col-span-1">
                <Label>Nom</Label>
                <Input type="text" name="name" placeholder="Nom de l'agent" />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="user@gmail.com" />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <Label>Mot de passe</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Mot de passe initial"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <Label>Téléphone</Label>
                <Input type="text" name="phone" placeholder="+243 85 875 78" />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <Label>Poste</Label>
                <Input type="text" name="titre" placeholder="Ingénieur" />
              </div>

              <div>
                <Label>Niveau d'accès</Label>
                <Select
                  name="role"
                  options={[
                    { value: "admin", label: "Admin" },
                    { value: "agent", label: "Agent" },
                  ]}
                  placeholder="Sélectionnez un rôle"
                  onChange={() => console.log("eye")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
          <Button size="sm" variant="outline" onClick={closeModal}>
            Fermer
          </Button>
          <Button size="sm">Ajouter</Button>
        </div>
      </form>
    </div>
  );
}
