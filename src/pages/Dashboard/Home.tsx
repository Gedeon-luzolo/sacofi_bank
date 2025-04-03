import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";
import { DashboardCard } from "../../components/dashboardSide/dashboard-card";
import { StatCard } from "../../components/dashboardSide/stat-card";
import { FileBarChart, UserPlus, Receipt, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { ClientApi } from "../../api/ClientApi";
import { PaymentApi } from "../../api/PaymentApi";

export default function Home() {
  const { data: client = [] } = useQuery({
    queryKey: ["paiement"],
    queryFn: ClientApi.getClients,
  });

  const { data: reson } = useQuery({
    queryKey: ["cont"],
    queryFn: PaymentApi.countPaymentByReason,
  });

  const { data: construction } = useQuery({
    queryKey: ["construct"],
    queryFn: PaymentApi.paymentConstruction,
  });

  return (
    <>
      <PageMeta
        title="Tableau Admin Sacofi"
        description="Ceci est un tableau d'admin pour Sacofi"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 lg:grid-cols-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Ajoutez un client"
                icon={<UserPlus className="size-8 lg:size-10 text-zinc-50" />}
                href="/client"
                className="bg-blue-500 text-add-client-foreground text-zinc-50 hover:bg-blue-600 transition-colors"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Paiement"
                icon={<Receipt className="size-8 lg:size-10 text-zinc-50" />}
                href="/paiement"
                className="bg-green-600 text-payment-foreground text-zinc-50 hover:bg-green-700 transition-colors"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Liste des clients"
                icon={<Users className="size-8 lg:size-10 text-zinc-50" />}
                href="/basic-tables"
                className="bg-amber-600 text-client-list-foreground text-zinc-50 hover:bg-amber-700 transition-colors"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <DashboardCard
                title="Rapport"
                icon={
                  <FileBarChart className="size-8 lg:size-10 text-zinc-50" />
                }
                href="/rapport"
                className="bg-red-500 text-report-foreground text-zinc-50 hover:bg-red-600 transition-colors"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-2 lg:gap-6">
            <StatCard
              title="Nombre des clients"
              value={client?.length}
              className="bg-indigo-950 text-stat-clients-foreground text-zinc-50"
            />
            <StatCard
              title="Nombre des parcelles vendues"
              value={reson?.data.count}
              className="bg-yellow-700 text-stat-parcels-foreground text-zinc-50"
            />
            <StatCard
              title="Nombre des chantiers"
              value={construction?.data.count}
              className="bg-green-400 text-stat-projects-foreground text-zinc-50"
            />
          </div>
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>
      </div>
    </>
  );
}
