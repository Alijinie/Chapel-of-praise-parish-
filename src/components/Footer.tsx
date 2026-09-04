import React from 'react';
import { Download, Heart, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { TabType } from '../types';
import { CHURCH_INFO } from '../data';
import { downloadSingleHtmlFile } from '../utils/exportHtml';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenPrayerRequest?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenPrayerRequest }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#191412] text-stone-300 pt-16 pb-28 sm:pb-20 border-t border-stone-800 mt-20">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#80182a] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[2] fill-none stroke-current">
                  <path d="M12 3v4m-2-2h4" strokeLinecap="round" />
                  <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9z" />
                  <path d="M10 21v-7a2 2 0 0 1 4 0v7" />
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-white block leading-none">
                  Chapel of Praise
                </span>
                <span className="text-[10px] text-[#e08996] uppercase tracking-widest font-bold block mt-0.5">
                  RCBC MAIN CAMPUS
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed pt-1">
              The spiritual home of the Redeemed Christian Bible College. Raising Christ's ambassadors with doctrinal integrity, prayer, and consecration.
            </p>

            <button
              onClick={downloadSingleHtmlFile}
              className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 px-3.5 py-2 rounded-full text-xs font-semibold transition-all border border-stone-700"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Single HTML File</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold tracking-widest text-[#e08996] uppercase block mb-3">
              EXPLORE
            </span>
            <ul className="text-xs space-y-2">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-white transition-colors"
                >
                  Home & Weekly Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('ministries')}
                  className="hover:text-white transition-colors"
                >
                  Three Congregations & Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('media')}
                  className="hover:text-white transition-colors"
                >
                  Media & Sermon Archives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('events')}
                  className="hover:text-white transition-colors"
                >
                  Calendar & Gatherings
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('visit')}
                  className="hover:text-white transition-colors"
                >
                  Find Us on Campus
                </button>
              </li>
              {onOpenPrayerRequest && (
                <li>
                  <button
                    onClick={onOpenPrayerRequest}
                    className="hover:text-white transition-colors text-rose-300 font-medium"
                  >
                    Prayer Desk Request
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Location & Times */}
          <div className="space-y-2 text-xs text-stone-400">
            <span className="text-[10px] font-bold tracking-widest text-[#e08996] uppercase block mb-3">
              CAMPUS LOCATION
            </span>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#e08996] flex-shrink-0 mt-0.5" />
              <span>Christ's Ambassadors Road, RCBC Main Campus, Redemption City, Ogun State</span>
            </p>
            <div className="pt-2 text-[11px] text-stone-400 space-y-1">
              <p><strong className="text-stone-300">Sunday:</strong> 8:00 AM (Celebration)</p>
              <p><strong className="text-stone-300">Tuesday:</strong> 6:00 PM (Digging Deep)</p>
              <p><strong className="text-stone-300">Thursday:</strong> 6:00 PM (Faith Clinic)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} RCBC Chapel of Praise. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
