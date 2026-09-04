import React, { useState } from 'react';
import { Ministry } from '../types';
import { X, CheckCircle2, Clock, MapPin, Users, Calendar, ArrowRight, Heart } from 'lucide-react';

interface MinistryModalProps {
  ministry: Ministry | null;
  onClose: () => void;
  onOpenPlanVisit: () => void;
  onOpenVolunteer: () => void;
}

export const MinistryModal: React.FC<MinistryModalProps> = ({
  ministry,
  onClose,
  onOpenPlanVisit,
  onOpenVolunteer,
}) => {
  if (!ministry) return null;

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'schedule' | 'leadership'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F1A30]/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col border border-slate-200 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Banner */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden flex-shrink-0">
          <img
            src={ministry.imageUrl}
            alt={ministry.title}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/60 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Texts */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1 z-10">
            <span className="inline-block bg-[#D4AF37] text-[#1B2A4A] text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest">
              {ministry.badge} • {ministry.umbrellaLevel}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {ministry.title}
            </h3>
            <p className="text-xs text-[#F5E7A3] font-medium">
              {ministry.subtitle}
            </p>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="flex border-b border-slate-200 px-6 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeSubTab === 'overview'
                ? 'border-emerald-600 text-emerald-700 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Overview & Focus
          </button>
          <button
            onClick={() => setActiveSubTab('schedule')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeSubTab === 'schedule'
                ? 'border-emerald-600 text-emerald-700 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Service Timings
          </button>
          <button
            onClick={() => setActiveSubTab('leadership')}
            className={`py-3 px-4 border-b-2 transition-colors ${
              activeSubTab === 'leadership'
                ? 'border-emerald-600 text-emerald-700 font-extrabold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Location & Lead
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs text-slate-700">
          {activeSubTab === 'overview' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-1">
                  Identity & Mandate
                </h4>
                <p className="text-sm text-[#1B2A4A] leading-relaxed font-medium">
                  {ministry.identity}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] block">
                  Core Website Concept: "{ministry.sectionTheme}"
                </span>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  {ministry.sectionDetails}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-2">
                  Key Distinctive Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ministry.coreFocus.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'schedule' && (
            <div className="space-y-3">
              <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Service Schedule & Assembly Times
              </h4>
              <div className="space-y-2.5">
                {ministry.serviceTimings.map((t, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-[#1B2A4A]">{t.name}</span>
                      <span className="bg-[#1B2A4A] text-[#D4AF37] text-xs font-black px-2.5 py-0.5 rounded">
                        {t.time}
                      </span>
                    </div>
                    <span className="text-slate-500 font-semibold block">{t.day}</span>
                    <p className="text-xs text-slate-600 pt-1">{t.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSubTab === 'leadership' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold">Sanctuary Location:</span>
                </div>
                <p className="text-xs text-slate-600 pl-6">
                  {ministry.location}, Christ's Ambassadors Road inside Redemption City (Km 46 Lagos-Ibadan Expressway).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <Users className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-bold">Pastoral Lead & Coordination:</span>
                </div>
                <p className="text-xs text-slate-600 pl-6">
                  {ministry.pastoralLead}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-end items-center">
          <button
            onClick={() => {
              onClose();
              onOpenVolunteer();
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-200 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Volunteer in This Wing
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenPlanVisit();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#1B2A4A] hover:bg-[#253966] text-[#D4AF37] font-black text-xs uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
          >
            <span>Plan Sunday Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
