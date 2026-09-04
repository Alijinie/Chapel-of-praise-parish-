import React from 'react';
import { Church, Radio, Download, Phone, MapPin } from 'lucide-react';
import { TabType } from '../types';
import { CHURCH_INFO } from '../data';
import { generateStandaloneChurchHtml } from '../utils/htmlExporter';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenLive: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenLive }) => {
  const handleExportHtml = () => {
    const htmlContent = generateStandaloneChurchHtml();
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rcbc_chapel_of_praise.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'sermons', label: 'Sermons & Media' },
    { id: 'calendar', label: 'Events & Calendar' },
    { id: 'giving', label: 'Giving' },
    { id: 'contact', label: 'Visit / Contact' },
  ];

  return (
    <>
      {/* Top Banner with Service info */}
      <div className="bg-[#0F172A] text-slate-200 text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-extrabold text-amber-400 uppercase tracking-wide">Next Gathering:</span>
            <span>Sunday Celebration & Expressions • 8:00 AM</span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{CHURCH_INFO.shortLocation}</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{CHURCH_INFO.phone}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 px-3 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto glass rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 flex justify-between items-center shadow-lg shadow-slate-900/5">
          {/* Brand Logo & Name */}
          <button
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#16243B] flex items-center justify-center text-amber-400 border border-amber-500/30 group-hover:scale-105 transition-transform flex-shrink-0 shadow-inner">
              <Church className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="block text-sm sm:text-base font-extrabold tracking-tight text-[#16243B] font-serif uppercase leading-tight">
                RCBC Chapel of Praise
              </span>
              <span className="block text-[9px] sm:text-[10px] text-amber-600 font-bold tracking-widest uppercase">
                Main Campus • "Raising Christ's Ambassadors"
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-[#16243B]/80">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`transition-all pb-0.5 ${
                    isActive
                      ? 'text-amber-600 font-extrabold border-b-2 border-amber-500'
                      : 'hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenLive}
              className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold transition-all shadow-md shadow-red-600/20"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Stream Live</span>
            </button>

            <button
              onClick={handleExportHtml}
              title="Export complete standalone single HTML file"
              className="inline-flex items-center gap-1.5 bg-[#16243B] hover:bg-slate-800 text-amber-400 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-bold border border-amber-500/30 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export HTML</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
