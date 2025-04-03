import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/useAuth";

interface AdminRouteProps {
  children: React.ReactNode;
}

export const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
