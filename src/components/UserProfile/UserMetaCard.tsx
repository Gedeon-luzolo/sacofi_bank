import { useAuth } from "../../context/useAuth";

export default function UserMetaCard() {
  const { user } = useAuth();
  return (
    <>
      <div className="p-5 border border-gray-200 bg-green-700  dark:bg-green-800 backdrop-blur-3xl rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
              <img src="/images/user/owner.jpeg" alt="user" />
            </div>
            <div className="order-3 xl:order-2">
              <h4 className="mb-2 text-lg font-semibold text-center text-white/90 xl:text-left">
                {user?.name}
              </h4>
              <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                <p className="text-sm text-gray-100">{user?.titre}</p>
                <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                <p className="text-sm text-gray-100">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
