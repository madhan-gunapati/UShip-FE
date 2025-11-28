import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Employee } from '../hooks/useEmployees';
import { useTheme } from '../contexts/ThemeContext';

interface DetailsViewProps {
  employee: Employee | null;
  onClose: () => void;
}

const DetailsView = ({ employee, onClose }: DetailsViewProps) => {
  const { theme } = useTheme();

  if (!employee) return null;

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const sectionBg = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const sectionTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const headerBg = theme === 'dark' ? 'bg-black' : 'bg-white';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`${bgColor} rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`sticky top-0 ${headerBg} ${textColor} px-8 py-6 flex items-center justify-between border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}`}>
          <h2 className="text-3xl font-bold">Employee Details</h2>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
          >
            <X size={28} />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-shrink-0"
            >
              <img
                src={employee.picture}
                alt={employee.name}
                className="w-48 h-48 rounded-xl shadow-lg object-cover"
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 space-y-6"
            >
              {/* Basic Info */}
              <div>
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  {employee.name}
                </h3>
                <p className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {employee.email}
                </p>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${sectionBg} p-4 rounded-lg`}>
                  <p className={`text-xs font-semibold uppercase ${secondaryTextColor}`}>
                    Phone
                  </p>
                  <p className={`text-lg font-medium ${sectionTextColor}`}>
                    {employee.phone}
                  </p>
                </div>
                <div className={`${sectionBg} p-4 rounded-lg`}>
                  <p className={`text-xs font-semibold uppercase ${secondaryTextColor}`}>
                    Location
                  </p>
                  <p className={`text-lg font-medium ${sectionTextColor}`}>
                    {employee.location}
                  </p>
                </div>
              </div>

              {/* Demographic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`${sectionBg} p-4 rounded-lg`}>
                  <p className={`text-xs font-semibold uppercase ${secondaryTextColor}`}>
                    Gender
                  </p>
                  <p className={`text-lg font-medium ${sectionTextColor} capitalize`}>
                    {employee.gender}
                  </p>
                </div>
                <div className={`${sectionBg} p-4 rounded-lg`}>
                  <p className={`text-xs font-semibold uppercase ${secondaryTextColor}`}>
                    Nationality
                  </p>
                  <p className={`text-lg font-medium ${sectionTextColor}`}>
                    {employee.nationality}
                  </p>
                </div>
                <div className={`${sectionBg} p-4 rounded-lg`}>
                  <p className={`text-xs font-semibold uppercase ${secondaryTextColor}`}>
                    Date of Birth
                  </p>
                  <p className={`text-lg font-medium ${sectionTextColor}`}>
                    {employee.dob}
                  </p>
                </div>
                <div className={`${sectionBg} p-4 rounded-lg`}>
                  <p className={`text-xs font-semibold uppercase ${secondaryTextColor}`}>
                    Registered
                  </p>
                  <p className={`text-lg font-medium ${sectionTextColor}`}>
                    {employee.registered}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

       
      </motion.div>
    </motion.div>
  );
};

export default DetailsView;
