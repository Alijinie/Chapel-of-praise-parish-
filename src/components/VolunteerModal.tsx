import React, { useState } from 'react';
import { X, CheckCircle, UserCheck, Send } from 'lucide-react';

interface VolunteerModalProps {
  isOpen: boolean;
  defaultMinistry: string;
  onClose: () => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({
  isOpen,
  defaultMinistry,
  onClose
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [ministry, setMinistry] = useState(defaultMinistry || 'Main Sanctuary');
  const [department, setDepartment] = useState('Sanctuary Choir & Music');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl border border-slate-100">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2 text-[#16243B]">
            <UserCheck className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif font-bold text-lg">Volunteer & Department Service</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-sm font-bold"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center space-y-3 py-4">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-serif font-bold text-lg text-[#16243B]">
              Application Received, Beloved!
            </h4>
            <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
              The Departmental Coordinator for <strong>{department}</strong> will reach out to you via WhatsApp / Phone to brief you on orientations.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-[#16243B] text-amber-400 px-6 py-2 rounded-xl text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold uppercase tracking-wider text-slate-500 mb-1 text-[10px]">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sis. Grace Babalola"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-slate-500 mb-1 text-[10px]">
                Phone / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+234 800 000 0000"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50"
              />
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-slate-500 mb-1 text-[10px]">
                Ministry Expression *
              </label>
              <select
                value={ministry}
                onChange={(e) => setMinistry(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 font-medium"
              >
                <option>Main Sanctuary</option>
                <option>The Youth Church</option>
                <option>The Teenagers Church</option>
              </select>
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wider text-slate-500 mb-1 text-[10px]">
                Department of Interest *
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 font-medium"
              >
                <option>Sanctuary Choir & Music</option>
                <option>Media, Camera & Live Streaming</option>
                <option>Ushering & Protocol</option>
                <option>Sound & Technical Engineering</option>
                <option>Intercessory & Prayer Altar</option>
                <option>Evangelism & Campus Follow-up</option>
                <option>Teen Mentorship & Quiz Facilitators</option>
                <option>Sanitation & Venue Logistics</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-[#0F172A] font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Volunteer Application</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
