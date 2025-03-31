import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { FactureComponents } from "../../components/paiement/FactureComponent";

export function FactureElement() {
  return (
    <div>
      <PageMeta title="Facture" description="Gestion des factures" />
      <PageBreadcrumb pageTitle="Gestion des factures " />

      <FactureComponents />
    </div>
  );
}
