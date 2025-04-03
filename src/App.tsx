import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { AdminRoute } from "./components/auth/AdminRoute";
import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import BarChart from "./pages/Charts/BarChart";
import BasicTables from "./pages/Tables/BasicTables";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Paiement from "./pages/Tables/Paiement";
import { FactureElement } from "./pages/Factures/FactureElement";
import { Client } from "./pages/Client/Client";
import Admin from "./pages/Dashboard/Admin";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public route */}
        <Route path="/" element={<SignIn />} />

        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/basic-tables" element={<BasicTables />} />
          <Route path="/paiement" element={<Paiement />} />
          <Route path="/facture" element={<FactureElement />} />
          <Route path="/client" element={<Client />} />
          <Route path="/rapport" element={<BarChart />} />

          {/* Admin route */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
