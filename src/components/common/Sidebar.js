import React from 'react';
import { Calendar, Users, FileText, Package, DollarSign, Activity } from 'lucide-react';
import { MENU_ITEMS } from '../../utils/constants';

const iconComponents = {
  Activity,
  Users,
  Calendar,
  FileText,
  Package,
  DollarSign
};

const Sidebar = ({ activeTab, setActiveTab, userRole, sidebarOpen, setSidebarOpen }) => {
  const items = MENU_ITEMS[userRole] || MENU_ITEMS.ADMIN;

  return (
    <>
      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
      `}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-8">HMS Panel</h2>
          <nav className="space-y-2">
            {items.map((item) => {
              const Icon = iconComponents[item.icon];
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {Icon && <Icon size={20} />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;