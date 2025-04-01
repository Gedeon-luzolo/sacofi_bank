import { CircleDollarSignIcon } from "lucide-react";
import { GroupIcon } from "../../icons";

export function AdminDash() {
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-6">
      <div className="rounded-2xl col-span-2 md:col-auto md:grid-s border flex-col lg:flex-row flex lg:items-center justify-center gap-x-10 border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center size-12 lg:size-26 bg-gray-100 rounded-xl dark:bg-brand-800/20">
          <CircleDollarSignIcon className="text-gray-800 size-10 lg:size-20 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Somme Total dans la caisse
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-lg md:text-title-sm dark:text-white/90">
              5.000 $ /<br /> 100.000.000 fc
            </h4>
          </div>
        </div>
      </div>
      <div className="rounded-2xl border flex-col lg:flex-row flex lg:items-center justify-center gap-x-10 border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center size-16 lg:size-26 bg-gray-100 rounded-xl dark:bg-blue-800/20">
          <GroupIcon className="text-gray-800 size-10 lg:size-20 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Agents
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-4xl md:text-title-lg dark:text-white/90">
              2
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
