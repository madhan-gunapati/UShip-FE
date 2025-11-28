import { useState } from 'react';
import { motion } from 'framer-motion';
import HorizontalMenu from './components/HorizontalMenu';
import GridView from './components/GridView';
import TileView from './components/TileView';
import DetailsView from './components/DetailsView';
import useEmployees from './hooks/useEmployees';
import { LayoutGrid, Grid2x2 } from 'lucide-react';
import { useTheme } from './contexts/ThemeContext';
import type { Employee } from './hooks/useEmployees';
import HamburgerMenu from './components/HamburgerMenu';

const App = () => {
  const { theme } = useTheme();
  const { employees, loading, error } = useEmployees();
  const [viewMode, setViewMode] = useState<'grid' | 'tile'>('tile');
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${bgColor} ${textColor}`}>
      {/* Top Navigation */}
      <HorizontalMenu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <HamburgerMenu isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex pt-16">
        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-7xl mx-auto p-4 sm:p-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className={`text-4xl font-bold ${textColor} mb-2`}>
                Employee Directory
              </h1>
              <p className={secondaryTextColor}>
                Manage and view employee information in different formats
              </p>
            </motion.div>

            {/* View Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <span className={`font-medium ${textColor}`}>View Mode:</span>
              <div className={`flex gap-2 ${cardBg} p-2 rounded-lg border ${borderColor}`}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('tile')}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    viewMode === 'tile'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : `${textColor} hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`
                  }`}
                >
                  <Grid2x2 size={20} />
                  
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-2 px-4 py-2 rounded transition-all ${
                    viewMode === 'grid'
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : `${textColor} hover:${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`
                  }`}
                >
                  <LayoutGrid size={20} />
                  
                </motion.button>
              </div>
              <span className={`ml-auto text-sm ${secondaryTextColor}`}>
                {employees.length} employees
              </span>
            </motion.div>

            {/* Loading State */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center py-20"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`w-12 h-12 border-4 border-gray-700 border-t-black rounded-full animate-spin dark:border-gray-300 dark:border-t-white`} />
                  <p className={`font-medium ${secondaryTextColor}`}>
                    Loading employees...
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error State */}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'} border rounded-lg p-6 text-red-600`}
              >
                <p className="font-semibold">Error loading employees</p>
                <p className="text-sm mt-1">{error}</p>
              </motion.div>
            )}

            {/* Content View */}
            {!loading && !error && (
              <motion.div
                key={viewMode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`${cardBg} rounded-xl p-6 shadow-sm border ${borderColor}`}
              >
                {viewMode === 'tile' ? (
                  <TileView
                    employees={employees}
                    onSelectEmployee={setSelectedEmployee}
                  />
                ) : (
                  <GridView
                    employees={employees}
                    onSelectEmployee={setSelectedEmployee}
                  />
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <DetailsView
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </div>
  );
};

export default App;