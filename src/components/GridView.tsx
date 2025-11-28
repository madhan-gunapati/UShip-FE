import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Employee } from '../hooks/useEmployees';
import { useTheme } from '../contexts/ThemeContext';

interface GridViewProps {
  employees: Employee[];
  onSelectEmployee: (employee: Employee) => void;
}

const GridView = ({ employees, onSelectEmployee }: GridViewProps) => {
  const { theme } = useTheme();
  const [sortColumn, setSortColumn] = useState<keyof Employee>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const columns: (keyof Employee)[] = [
    'name',
    'email',
    'phone',
    'location',
    'nationality',
    'gender',
    'dob',
    'registered',
  ];

  const sortedEmployees = [...employees].sort((a, b) => {
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    return 0;
  });

  const handleSort = (column: keyof Employee) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const headerBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100';
  const hoverBgColor = theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-full overflow-x-auto rounded-lg ${bgColor}`}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className={`${headerBgColor} border-b-2 ${borderColor}`}>
            {columns.map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column)}
                className={`px-4 py-3 text-left cursor-pointer transition-colors font-semibold whitespace-nowrap ${secondaryTextColor} ${theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
              >
                <div className="flex items-center gap-2">
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                  {sortColumn === column && (
                    <span className="text-sm">
                      {sortDirection === 'asc' ? '↑' : '↓'}
                    </span>
                  )}
                </div>
              </th>
            ))}
            <th className={`px-4 py-3 text-center font-semibold ${secondaryTextColor}`}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {sortedEmployees.map((employee, index) => (
              <motion.tr
                key={employee.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.02 }}
                className={`border-b ${borderColor} ${hoverBgColor} transition-colors`}
              >
                {columns.map((column) => (
                  <td
                    key={`${employee.id}-${column}`}
                    className={`px-4 py-3 text-sm ${textColor} whitespace-nowrap overflow-hidden text-ellipsis`}
                  >
                    {String(employee[column]).substring(0, 30)}
                  </td>
                ))}
                <td className="px-4 py-3 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSelectEmployee(employee)}
                    className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 text-sm transition-colors"
                  >
                    View
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
    </motion.div>
  );
};

export default GridView;
