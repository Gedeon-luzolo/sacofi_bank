import { IPayment } from "../../../types/globalTypes";
import { motion } from "framer-motion";

interface FactureModalProps {
  selectedInvoice: IPayment;
}

export function FactureModal({ selectedInvoice }: FactureModalProps) {
  const createdAtDate = new Date(selectedInvoice.createdAt || Date.now()); // Conversion en objet Date

  const formattedDate = createdAtDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="no-scrollbar relative w-full max-w-[700px] overflow-hidden rounded-3xl bg-white p-4">
      <div className="custom-scrollbar max-h-[80vh] overflow-y-auto px-4 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center py-10">
            <img
              src="./images/logo/sacofi_bgBlanc.png"
              alt="Logo"
              className="w-40"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-sm font-semibold mb-1">Destinataire:</h2>
            <p className="font-bold">{selectedInvoice.clientName}</p>
            <p className="text-sm">Client N°: {selectedInvoice.clientNumber}</p>
            <p className="text-sm">Email: {selectedInvoice.email}</p>
          </div>
          <div className="text-right">
            <p className="text-sm">
              <span className="font-semibold">Date de facturation:</span>{" "}
              {formattedDate}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Mode de paiement:</span>{" "}
              {selectedInvoice.paymentMode}
            </p>
          </div>
        </div>

        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold">Facture № {selectedInvoice.id}</h1>
        </motion.div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 text-left font-semibold">Désignation</th>
                <th className="py-2 text-center font-semibold">Quantité</th>
                <th className="py-2 text-right font-semibold">Prix</th>
                <th className="py-2 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              <motion.tr
                className="border-b border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <td className="py-3">
                  <div className="space-y-1">
                    <p className="font-medium">
                      {selectedInvoice.paymentReason}
                    </p>
                    <p className="text-sm text-gray-600">
                      Site: {selectedInvoice.site}
                    </p>
                    <p className="text-sm text-gray-600">
                      Terrain N°: {selectedInvoice.terrainNumber}
                    </p>
                  </div>
                </td>
                <td className="py-3 text-center">1</td>
                <td className="py-3 text-right">
                  {selectedInvoice.amount.toLocaleString("en-US")}{" "}
                  {selectedInvoice.currency}
                </td>
                <td className="py-3 text-right">
                  {selectedInvoice.amount.toLocaleString("en-US")}{" "}
                  {selectedInvoice.currency}
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end mb-4">
          <div className="w-64">
            <div className="flex justify-between py-1">
              <span className="font-semibold">Total:</span>
              <span>
                {selectedInvoice.amount.toLocaleString("en-US")}{" "}
                {selectedInvoice.currency}
              </span>
            </div>

            <div className="flex justify-between py-2 border-t border-gray-300 font-bold">
              <span>Total TTC:</span>
              <span>
                {selectedInvoice.amount.toLocaleString("en-US")}{" "}
                {selectedInvoice.currency}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm border-t border-gray-300 pt-4">
          <div>
            <p>facture émet par</p>
            <p className="font-bold text-lg">{selectedInvoice.agent}</p>
          </div>
          <div className="text-right">
            <p>Sacofi</p>
            <p>Tél: +243 85 24 855</p>
            <p>Kinshasa/Gombe</p>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="mt-4 p-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Imprimer
        </button>
      </div>
    </div>
  );
}
