import { motion } from "framer-motion";

interface TableSkeletonLoaderProps {
  rows?: number;
  columns?: number;
  showHeader?: boolean;
  className?: string;
}

export default function SkeletonLoader({
  rows = 5,
  columns = 4,
  showHeader = true,
  className = "",
}: TableSkeletonLoaderProps) {
  // Generate column widths - first column is usually wider for IDs or names
  const columnWidths = [
    "w-1/4", // First column wider
    ...Array(columns - 1)
      .fill("")
      .map(() => {
        const randomWidth = Math.floor(Math.random() * 3) + 1; // Random width between 1/6 and 3/6
        return `w-${randomWidth}/6`;
      }),
  ];

  return (
    <div
      className={`w-full overflow-x-auto rounded-lg border border-gray-200 ${className}`}
    >
      <table className="w-full divide-y divide-gray-200">
        {showHeader && (
          <thead className="bg-gray-50">
            <tr>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <th key={`header-${colIndex}`} className="px-6 py-3 text-left">
                  <motion.div
                    className={`h-6 ${columnWidths[colIndex]} bg-gray-200 rounded`}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 0.8, 0.6] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: colIndex * 0.1,
                    }}
                  />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  <motion.div
                    className={`h-5 ${columnWidths[colIndex]} bg-gray-200 rounded`}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 0.8, 0.6] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: rowIndex * 0.05 + colIndex * 0.1,
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
