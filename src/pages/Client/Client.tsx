import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { AddClientForm } from "../../components/dashboardSide/AddClient";

export function Client() {
  return (
    <div>
      <PageMeta
        title="Formulaire d'ajout client"
        description="Formulaire d'ajout client"
      />
      <PageBreadcrumb pageTitle="Ajouter client " />
      <AddClientForm />
    </div>
  );
}
