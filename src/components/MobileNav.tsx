import React from 'react';
import { Home, Church, Radio, Calendar, MapPin } from 'lucide-react';
import { TabType } from '../types';

interface MobileNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ currentTab, onSelectTab }) => {
  const items: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'ministries', label: 'Ministries', icon: <Church className="w-4 h-4" /> },
    { id: 'media', label: 'Media', icon: <Radio className="w-4 h-4" /> },
    { id: 'events', label: 'Events', icon: <Calendar className="w-4 h-4" /> },
    { id: 'visit', label: 'Visit', icon: <MapPin className="w-4 h-4" /> },
  ];

  const isItemActive = (id: TabType) => {
    if (id === currentTab) return true;
    if (id === 'media' && currentTab === 'sermons') return true;
    if (id === 'events' && currentTab === 'calendar') return true;
    if (id === 'visit' && currentTab === 'contact') return true;
    return false;
  };

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[92%] max-w-sm sm:max-w-md z-50">
      <div className="bg-[#171311]/95 text-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 flex justify-between items-center shadow-2xl border border-stone-800/80 backdrop-blur-md">
        {items.map((item) => {
          const active = isItemActive(item.id);
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-1 transition-all ${
                active
                  ? 'text-white font-bold scale-105'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

