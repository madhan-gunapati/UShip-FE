import { useState } from 'react';
import { X, ChevronDown,Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const HamburgerMenu = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  const { theme } = useTheme();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems = [
    {
      label: 'Dashboard',
      href: '#',
      submenu: null,
    },
    {
      label: 'Employees',
      href: '#',
      submenu: [
        { label: 'View All', href: '#' },
        { label: 'Add New', href: '#' },
        { label: 'Reports', href: '#' },
      ],
    },
    {
      label: 'Departments',
      href: '#',
      submenu: [
        { label: 'Engineering', href: '#' },
        { label: 'Sales', href: '#' },
        { label: 'HR', href: '#' },
      ],
    },
    {
      label: 'Settings',
      href: '#',
      submenu: null,
    },
  ];

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const secondaryBg = theme === 'dark' ? 'hover:bg-gray-900' : 'hover:bg-gray-50';
  const borderColor = theme === 'dark' ? 'border-gray-800' : 'border-gray-200';
  const tertiaryBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`fixed inset-y-0 left-0 top-16 w-64 ${bgColor} border-r ${borderColor} z-40 shadow-xl overflow-y-auto`}
        >
          {/* Close button at the top */}
          <div className={`flex items-center justify-between px-4 py-3 border-b ${borderColor} sticky top-0 ${bgColor}`}>
            <span className={`font-medium text-lg ${textColor}`}>Menu</span>
            <button
              onClick={onToggle}
              className={`p-1 rounded-lg transition-colors ${secondaryBg}`}
            >
              <X size={24} className={textColor} />
            </button>
          </div>

          <nav className="py-2">
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => item.submenu && toggleSubmenu(item.label)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${secondaryBg}`}
                >
                  <span className={`font-medium ${textColor}`}>{item.label}</span>
                  {item.submenu && (
                    <motion.div
                      animate={{
                        rotate: expandedMenu === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={18} className={theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} />
                    </motion.div>
                  )}
                </button>

                <AnimatePresence>
                  {item.submenu && expandedMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={tertiaryBg}
                    >
                      {item.submenu.map((subitem) => (
                        <a
                          key={subitem.label}
                          href={subitem.href}
                          className={`block px-8 py-2 text-sm transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </motion.div>
      )}
      <button type='button' className='pt-25     pl-4 fixed' onClick={onToggle}>
        <Menu size={32}/>
      </button>
      
      
    </AnimatePresence>
  );
};

export default HamburgerMenu;
