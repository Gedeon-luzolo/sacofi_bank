import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import { TableClient } from "../../components/tables/BasicTables/tableClient";

export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="Liste des clients"
        description="Cette page contient la liste des clients"
      />
      <PageBreadcrumb pageTitle="LISTE DES CLIENTS" />
      <div className="space-y-6">
        <ComponentCard title="Liste des clients">
          <TableClient />
        </ComponentCard>
      </div>
    </>
  );
}
