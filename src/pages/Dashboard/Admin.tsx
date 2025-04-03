import { Banknote, DollarSign, LucideUserPen } from "lucide-react";
import PageMeta from "../../components/common/PageMeta";
import { DashboardCard } from "../../components/dashboardSide/dashboard-card";
import { UserTable } from "../../components/tables/userTable";
import { motion } from "framer-motion";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import { FormAddAgent } from "../../components/dashboardSide/FormAgent";
import { useQuery } from "@tanstack/react-query";
import { PaymentApi } from "../../api/PaymentApi";

interface PaymentItem {
  currency: string;
  total_amount: number;
}

export default function Admin() {
  const { isOpen, openModal, closeModal } = useModal();
  const { data } = useQuery({
    queryKey: ["total"],
    queryFn: PaymentApi.getTotal,
  });

  const totalUSD =
    data?.find((item: PaymentItem) => item.currency === "USD")?.total_amount ||
    0;
  const formattedUSD = totalUSD.toLocaleString("en-US");
  const totalCDF =
    data?.find((item: PaymentItem) => item.currency === "CDF")?.total_amount ||
    0;
  const formattedCDF = totalCDF.toLocaleString("en-US");

  return (
    <>
      <PageMeta
        title="Espace Administrateur"
        description="Ceci est l'espace d'administration"
      />

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-14">
          <div className="grid grid-cols-3 gap-3 lg:gap-8 lg:grid-cols-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Montant USD"
                description={formattedUSD}
                icon={<DollarSign className="size-6 md:size-10 text-zinc-50" />}
                href="#"
                className="bg-amber-900 text-add-client-foreground text-zinc-50 hover:bg-amber-700 transition-colors"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Montant CDF"
                description={formattedCDF}
                icon={<Banknote className="size-6 md:size-10 text-zinc-50" />}
                href="#"
                className="bg-green-600 text-payment-foreground text-zinc-50 hover:bg-green-700 transition-colors"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Ajouter un Agent"
                icon={
                  <LucideUserPen className="size-6 md:size-10 text-zinc-50" />
                }
                href="#"
                className="bg-amber-600 text-client-list-foreground text-zinc-50 hover:bg-amber-700 transition-colors"
                onClick={openModal}
              />
            </motion.div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-14">
          <UserTable />
        </div>
        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[700px] m-4"
        >
          <FormAddAgent closeModal={closeModal} />
        </Modal>
      </div>
    </>
  );
}
