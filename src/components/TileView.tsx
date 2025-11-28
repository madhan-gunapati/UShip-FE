import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreVertical } from 'lucide-react';
import type { Employee } from '../hooks/useEmployees';
import { useTheme } from '../contexts/ThemeContext';

interface TileViewProps {
  employees: Employee[];
  onSelectEmployee: (employee: Employee) => void;
  onDelete?: (employeeId: string) => void;
  onFlag?: (employeeId: string) => void;
}

const TileView = ({
  employees,
  onSelectEmployee,
  onDelete,
  onFlag,
}: TileViewProps) => {
  const { theme } = useTheme();
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const bgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const menuBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const menuBorder = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const menuHover = theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-50';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0"
    >
      <AnimatePresence>
        {employees.map((employee, index) => (
          <motion.div
            key={employee.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelectEmployee(employee)}
            className={`${bgColor} rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden`}
          >
            <div className="relative h-48 bg-black overflow-hidden group">
              <img
                src={employee.picture}
                alt={employee.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenMenuId(
                      openMenuId === employee.id ? null : employee.id
                    );
                  }}
                  className={`p-2 ${theme === 'dark' ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm rounded-full hover:${theme === 'dark' ? 'bg-black' : 'bg-white'} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MoreVertical size={20} className={theme === 'dark' ? 'text-white' : 'text-gray-700'} />
                </motion.button>

                <AnimatePresence>
                  {openMenuId === employee.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute top-full right-0 mt-1 ${menuBg} border ${menuBorder} rounded-lg shadow-lg z-10 w-32`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className={`w-full px-4 py-2 text-left text-sm border-b ${menuBorder} ${menuHover} transition-colors`}>
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => {
                          onFlag?.(employee.id);
                          setOpenMenuId(null);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm border-b ${menuBorder} ${menuHover} transition-colors`}
                      >
                        🚩 Flag
                      </button>
                      <button
                        onClick={() => {
                          onDelete?.(employee.id);
                          setOpenMenuId(null);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm text-red-600 ${menuHover} transition-colors`}
                      >
                        🗑️ Delete
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-4">
              <h3 className={`font-bold text-lg ${textColor} truncate`}>
                {employee.name}
              </h3>
              <p className={`text-sm ${secondaryTextColor} truncate`}>{employee.email}</p>
              <p className={`text-xs ${secondaryTextColor} mt-2`}>{employee.location}</p>
              <div className="mt-4 flex gap-2">
                <span className={`inline-block px-2 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'} text-xs rounded`}>
                  {employee.gender}
                </span>
                <span className={`inline-block px-2 py-1 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'} text-xs rounded`}>
                  {employee.nationality}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default TileView;
