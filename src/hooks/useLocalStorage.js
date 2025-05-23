import React, { useState, useEffect, createContext, useContext } from 'react';
import { Calendar, Users, FileText, Package, DollarSign, Activity, User, Search, Plus, Edit, Trash2, Eye, Bell, Menu, X } from 'lucide-react';

const Header = ({ currentUser, onRoleChange, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Hospital Management</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={currentUser?.role || 'ADMIN'}
            onChange={(e) => onRoleChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="ADMIN">Admin</option>
            <option value="DOCTOR">Doctor</option>
            <option value="PATIENT">Patient</option>
          </select>
          
          <div className="flex items-center space-x-2">
            <Bell size={20} className="text-gray-600" />
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {currentUser?.name || 'Admin User'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};