import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import { PaymentComponent } from "../../components/paiement/PaimentComponents";

export default function Paiement() {
  return (
    <>
      <PageMeta
        title="Gestion des paiements"
        description="Gestion des paiements"
      />
      <PageBreadcrumb pageTitle="Gestion des paiements" />
      <div className="space-y-6">
        <PaymentComponent />
      </div>
    </>
  );
}
