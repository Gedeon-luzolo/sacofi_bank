import { Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

interface Order {
  id: number;
  image: string;
  email: string;
  name: string;
  role: string;
  phone: string;
}

const tableData: Order[] = [
  {
    id: 1,
    image: "/images/user/user-17.jpg",
    name: "Gloire Minde",
    role: "Caissier",
    email: "gloire@gmail.com",
    phone: "+24587852",
  },
  {
    id: 2,
    image: "/images/user/user-18.jpg",
    name: "Serge Mado",
    role: "Consultant",
    email: "gloire@gmail.com",
    phone: "+24587852",
  },
];

export function UserTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b bg-brand-800/70  dark:bg-brand-800/30 border-gray-100 dark:border-white/[0.05]">
            <TableRow>
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
                Titre
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
                Email
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-zinc-100 text-start text-theme-lg dark:text-gray-400"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-2 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={order.image}
                        alt={order.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {order.name}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-2 sm:px-6 text-start">
                  <div>
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {order.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-2 sm:px-6 text-start">
                  <div>
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {order.role}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-2 sm:px-6 text-start">
                  <div>
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {order.phone}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-5 py-2 sm:px-6 text-start">
                  <div>
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {order.email}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-5 text-center flex justify-center gap-3">
                  <button className="text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300">
                    <Edit size={20} />
                  </button>
                  <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                    <Trash2 size={20} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
