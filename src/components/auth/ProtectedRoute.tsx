import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLoading, checkTokenExpiration } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // Vérifier si le token est expiré
  if (!user || !checkTokenExpiration()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
