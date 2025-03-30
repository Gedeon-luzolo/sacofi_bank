import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import PageMeta from "../../components/common/PageMeta";

export default function NotFound() {
  return (
    <>
      <PageMeta
        title="React.js 404 Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js 404 Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
        <GridShape />
        <div className="mx-auto w-full max-w-[242px] text-center ">
          <h1 className="mb-8 font-bold text-gray-800 text-title-md dark:text-white/90 xl:text-title-2xl">
            Erreur
          </h1>
          <img src="/images/error/error2.png" alt="404" width={200} />

          <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
            La page que vous cherhez n'existe pas
          </p>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3.5 text-sm font-medium shadow-theme-xs hover:bg-green-500 bg-brand-800 text-zinc-50  dark:hover:text-gray-200"
          >
            Retourner en arrière
          </Link>
        </div>
        {/* <!-- Footer --> */}
        <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
          &copy; {new Date().getFullYear()} - SacofiBank
        </p>
      </div>
    </>
  );
}
