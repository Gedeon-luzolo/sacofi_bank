import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import BarChartOne from "../../components/charts/bar/BarChartOne";
import PageMeta from "../../components/common/PageMeta";
import { motion } from "framer-motion";

export default function BarChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageMeta title="Sacofi Rapport" description="Sacofi Rapport" />
      <PageBreadcrumb pageTitle="Rapport" />
      <BarChartOne />
    </motion.div>
  );
}
