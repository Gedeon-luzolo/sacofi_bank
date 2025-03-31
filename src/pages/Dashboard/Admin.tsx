import PageMeta from "../../components/common/PageMeta";
import { AdminDash } from "../../components/dashboardSide/adminDash";
import { UserTable } from "../../components/tables/userTable";

export default function Admin() {
  return (
    <>
      <PageMeta
        title="Espace Administrateur"
        description="Ceci est l'espace d'administration"
      />
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <AdminDash />
          <UserTable />
        </div>
      </div>
    </>
  );
}
