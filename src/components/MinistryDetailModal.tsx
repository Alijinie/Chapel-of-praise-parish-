import React from 'react';
import { X, CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { MinistryTier } from '../types';

interface MinistryDetailModalProps {
  ministry: MinistryTier | null;
  onClose: () => void;
  onOpenVolunteer: (ministryName: string) => void;
}

export const MinistryDetailModal: React.FC<MinistryDetailModalProps> = ({
  ministry,
  onClose,
  onOpenVolunteer
}) => {
  if (!ministry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl border border-slate-100">
        <div className="flex justify-between items-start border-b border-slate-100 pb-4">
          <div>
            <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded ${ministry.color.badgeBg}`}>
              {ministry.badge}
            </span>
            <h3 className="font-serif font-extrabold text-2xl text-[#16243B] mt-1">
              {ministry.name}
            </h3>
            <p className="text-xs text-amber-700 font-bold">{ministry.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>{ministry.identity}</p>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 font-medium text-xs">
            <strong>Website Feature Focus:</strong> {ministry.sectionIdea}
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#16243B]">Core Pillars & Focus</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ministry.coreFocus.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#16243B]">Gathering Timings</h4>
            <div className="space-y-2">
              {ministry.schedule.map((s, i) => (
                <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-[#16243B]">{s.name}</span>
                    <span className="text-slate-400 block text-[11px]">{s.desc}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-amber-700">{s.day}</span>
                    <span className="text-slate-500 block text-[11px]">{s.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-serif font-bold text-sm text-[#16243B]">Service Departments</h4>
            <div className="flex flex-wrap gap-1.5">
              {ministry.departments.map((dept, i) => (
                <span key={i} className="bg-slate-100 text-[#16243B] px-2.5 py-1 rounded-lg text-xs font-semibold">
                  {dept}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-2 flex gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenVolunteer(ministry.name);
            }}
            className="flex-1 bg-[#16243B] text-amber-400 hover:bg-slate-800 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span>Apply to Volunteer in {ministry.name}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
