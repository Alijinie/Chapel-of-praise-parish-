import React from 'react';
import { TabType } from '../types';
import { Download, MapPin, Radio, Calendar, Heart, Church } from 'lucide-react';
import { downloadSingleHtmlFile } from '../utils/exportHtml';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenPlanVisit: () => void;
  onOpenLiveStream: () => void;
  onOpenPrayerRequest?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenPlanVisit,
  onOpenPrayerRequest,
}) => {
  const isTabActive = (tab: TabType) => {
    if (currentTab === tab) return true;
    if (tab === 'media' && currentTab === 'sermons') return true;
    if (tab === 'events' && currentTab === 'calendar') return true;
    if (tab === 'visit' && currentTab === 'contact') return true;
    return false;
  };

  return (
    <header className="fixed top-2.5 left-1/2 -translate-x-1/2 w-[93%] max-w-md md:max-w-3xl lg:max-w-5xl z-50 transition-all duration-300">
      <div className="bg-[#FAF7F1]/95 backdrop-blur-md rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 flex justify-between items-center shadow-lg shadow-stone-900/5 border border-stone-200/90">
        {/* Brand Logo & Parish Identity (Matches Screenshot exactly) */}
        <div 
          onClick={() => onSelectTab('home')} 
          className="flex items-center gap-3 cursor-pointer select-none group"
          id="church-brand-logo"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#80182a] flex items-center justify-center text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
            {/* Peaked chapel icon with cross */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[2] fill-none stroke-current">
              <path d="M12 3v4m-2-2h4" strokeLinecap="round" />
              <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z" />
              <path d="M10 21v-7a2 2 0 0 1 4 0v7" />
            </svg>
          </div>
          <div>
            <span className="block text-[17px] sm:text-lg font-bold tracking-tight text-[#1c1917] font-serif leading-none">
              Chapel of Praise
            </span>
            <span className="block text-[10px] sm:text-[11px] font-bold tracking-widest text-[#80182a] uppercase mt-1">
              RCBC MAIN CAMPUS
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-semibold uppercase tracking-wider text-stone-700">
          <button
            onClick={() => onSelectTab('home')}
            className={`transition-all pb-0.5 ${
              isTabActive('home')
                ? 'text-[#80182a] font-bold border-b-2 border-[#80182a]'
                : 'hover:text-[#80182a]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onSelectTab('ministries')}
            className={`transition-all pb-0.5 ${
              isTabActive('ministries')
                ? 'text-[#80182a] font-bold border-b-2 border-[#80182a]'
                : 'hover:text-[#80182a]'
            }`}
          >
            Ministries
          </button>

          <button
            onClick={() => onSelectTab('media')}
            className={`transition-all pb-0.5 ${
              isTabActive('media')
                ? 'text-[#80182a] font-bold border-b-2 border-[#80182a]'
                : 'hover:text-[#80182a]'
            }`}
          >
            Media
          </button>

          <button
            onClick={() => onSelectTab('events')}
            className={`transition-all pb-0.5 ${
              isTabActive('events')
                ? 'text-[#80182a] font-bold border-b-2 border-[#80182a]'
                : 'hover:text-[#80182a]'
            }`}
          >
            Events
          </button>

          <button
            onClick={() => onSelectTab('visit')}
            className={`transition-all pb-0.5 ${
              isTabActive('visit')
                ? 'text-[#80182a] font-bold border-b-2 border-[#80182a]'
                : 'hover:text-[#80182a]'
            }`}
          >
            Visit
          </button>
        </nav>

        {/* Action Buttons (Export HTML / Plan Visit) */}
        <div className="flex items-center gap-2">
          {onOpenPrayerRequest && (
            <button
              onClick={onOpenPrayerRequest}
              title="Leave a note for Prayer Desk"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#80182a] bg-[#80182a]/10 hover:bg-[#80182a]/15 transition-all"
            >
              <Heart className="w-3.5 h-3.5 fill-[#80182a]" />
              <span>Prayer</span>
            </button>
          )}

          <button
            onClick={downloadSingleHtmlFile}
            title="Download Standalone HTML Version"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-stone-600" />
            <span className="hidden lg:inline">Single HTML</span>
          </button>

          <button
            onClick={onOpenPlanVisit}
            className="bg-[#80182a] hover:bg-[#6e1423] text-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all shadow-sm flex items-center gap-1.5 text-xs font-semibold"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Plan visit</span>
          </button>
        </div>
      </div>
    </header>
  );
};

