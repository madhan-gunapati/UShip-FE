import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HorizontalMenu = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (value: boolean) => void }) => {
  const { theme, toggleTheme } = useTheme();
  
  const menuItems = [
    { label: 'Home', href: '#', icon: '🏠' },
    { label: 'Browse', href: '#', icon: '🔍' },
    { label: 'Categories', href: '#', icon: '📂' },
    { label: 'Favorites', href: '#', icon: '⭐' },
    { label: 'Help', href: '#', icon: '❓' },
  ];

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  const hoverBg = theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-100';

  return (
    <nav className={`fixed top-0 left-0 right-0 ${bgColor} ${textColor} px-6 py-4 shadow-md border-b ${borderColor} z-50`}>
        <div className="flex items-center gap-8 max-w-full mx-auto">
          <motion.h1 
            className="text-2xl font-bold whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            Ultra Ship
          </motion.h1>
          
          <div className="hidden md:flex items-center gap-6 flex-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 transition-colors cursor-pointer ${hoverBg} px-3 py-2 rounded`}
              >
                
                <span className="font-medium">{item.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${hoverBg}`}
            >
              {sidebarOpen ? <X size={24} className={textColor} /> : <Menu size={24} className={textColor} />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${hoverBg}`}
            >
              {theme === 'dark' ? (
                <Sun size={20} className={textColor} />
              ) : (
                <Moon size={20} className={textColor} />
              )}
            </motion.button>
          </div>
      </div>
    </nav>
  );
};

export default HorizontalMenu;