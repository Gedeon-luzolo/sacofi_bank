import { Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { useModal } from "../../hooks/useModal";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { AgentApi } from "../../api/AgentApi";
import { toast } from "sonner";
import { IAgent } from "../../../types/globalTypes";
import LoadingSpinner from "../Loading/LoadingSpinner";

export function UserTable() {
  const queryClient = useQueryClient();
  const { isOpen, openModal, closeModal } = useModal();

  const {
    data: agents = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["agents"],
    queryFn: AgentApi.getAgents,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => AgentApi.deleteAgent(id),
    onSuccess: () => {
      toast.success("Agent Supprimé avec succès");
      queryClient.invalidateQueries({ queryKey: ["agents"] });
    },
    onError: () => {
      toast.error("Erreur lors de la suppression de l'agent");
    },
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  if (isError) return <div>Erreur lors du chargement des agents</div>;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <Table>
          <TableHeader className="border-b bg-brand-800/70  dark:bg-brand-800/30 border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                N°
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Agents
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Email
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Poste
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Role
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Telephone
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {agents && agents.length > 0 ? (
              agents.map((agent: IAgent) => (
                <TableRow key={agent.id}>
                  <TableCell className="px-5 py-2 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {agent.id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-2 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          width={40}
                          height={40}
                          src="/images/user/default.png"
                          alt={agent.name}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {agent.name}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-2 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {agent.email}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-2 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {agent.titre}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-2 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {agent.role}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-2 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {agent.phone}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-5 text-center flex justify-center gap-3">
                    <button
                      onClick={openModal}
                      className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(agent.id)}
                      className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 size={20} />
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center dark:text-gray-200">
                  Aucun Agent trouvé
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modifier un agent */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Modifier les informations d'un agent
            </h4>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[370px] overflow-y-auto px-2 pb-3">
              <div className="mt-7">
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Nom</Label>
                    <Input type="text" placeholder="Gedeon" name="name" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email</Label>
                    <Input
                      type="text"
                      placeholder="admin@gmail.com"
                      name="email"
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Role</Label>
                    <Input type="text" placeholder="Agents" name="role" />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Téléphone</Label>
                    <Input type="text" value="+243 85 875 78" name="phone" />
                  </div>

                  <div className="col-span-2">
                    <Label>Poste</Label>
                    <Input type="text" value="Ingenieur Data" name="titre" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm">Save Changes</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
