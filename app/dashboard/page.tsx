import { Header } from "@/src/components/header";
import { DashboardCard } from "@/src/components/dashboard-card";
import { StatCard } from "@/src/components/stat-card";
import { RecentInvoices } from "@/src/components/recent-invoices";
import { SalesChart } from "@/src/components/sales-chart";
import { PlusIcon, HandshakeIcon, ListIcon, FileBarChart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-8 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Ajoutez un client"
            icon={<PlusIcon className="h-10 w-10 text-zinc-50" />}
            href="/dashboard/clients/ajouter"
            className="bg-blue-500 text-add-client-foreground text-zinc-50"
          />
          <DashboardCard
            title="Paiement"
            icon={<HandshakeIcon className="h-10 w-10 text-zinc-50" />}
            href="/dashboard/paiements"
            className="bg-green-600 text-payment-foreground text-zinc-50"
          />
          <DashboardCard
            title="Liste des clients"
            icon={<ListIcon className="h-10 w-10 text-zinc-50" />}
            href="/dashboard/clients"
            className="bg-amber-600 text-client-list-foreground text-zinc-50"
          />
          <DashboardCard
            title="Rapport"
            icon={<FileBarChart className="h-10 w-10 text-zinc-50" />}
            href="/dashboard/rapports"
            className="bg-red-500 text-report-foreground text-zinc-50"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <StatCard
            title="Nombre des clients"
            value="8"
            className="bg-indigo-950 text-stat-clients-foreground text-zinc-50"
          />
          <StatCard
            title="Nombre des parcelles vendues"
            value="21"
            className="bg-yellow-700 text-stat-parcels-foreground text-zinc-50"
          />
          <StatCard
            title="Nombre des chantiers"
            value="15"
            className="bg-green-400 text-stat-projects-foreground text-zinc-50"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <SalesChart />
          <RecentInvoices />
        </div>
      </div>
    </div>
  );
}
