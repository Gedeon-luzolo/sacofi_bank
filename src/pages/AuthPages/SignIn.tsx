import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";
import { useAuth } from "../../context/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function SignIn() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Si l'utilisateur est déjà connecté, rediriger vers la page d'accueil
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <>
      <PageMeta
        title="Sacofi Page de Connexion"
        description="Page de connexion Sacofi"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
