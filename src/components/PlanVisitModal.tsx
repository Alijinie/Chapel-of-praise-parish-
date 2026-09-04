import React, { useState } from 'react';
import { X, Sparkles, Check, MapPin, Calendar, Clock, Church } from 'lucide-react';

interface PlanVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const PlanVisitModal: React.FC<PlanVisitModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [ministry, setMinistry] = useState('Main Sanctuary (Adult Church)');
  const [date, setDate] = useState('2026-09-06');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    onShowToast(`Visit reservation confirmed for ${name}! Our hospitality team is notified.`);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F1A30]/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>VIP Hospitality Experience</span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-[#1B2A4A]">
            Plan Your Sunday Visit
          </h3>
          <p className="text-xs text-slate-500">
            Let our campus ambassadors reserve seating and guide you smoothly into the sanctuary.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
            <Check className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="font-serif font-bold text-lg text-emerald-950">We Can't Wait to Host You!</h4>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Your Sunday reservation for <strong>{ministry}</strong> on {date} is recorded. We will contact you via WhatsApp / SMS before service.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Service Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">Preferred Wing *</label>
                <select
                  value={ministry}
                  onChange={(e) => setMinistry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium"
                >
                  <option>Main Sanctuary (Adults)</option>
                  <option>The Youth Church</option>
                  <option>The Teenagers Church</option>
                  <option>Family with Kids/Teens</option>
                </select>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-slate-500 text-[11px]">
              <div className="flex items-center gap-1.5 font-bold text-[#1B2A4A]">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sunday Service starts promptly at 8:00 AM</span>
              </div>
              <p>Location: Christ's Ambassadors Road inside Redemption City.</p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B2A4A] hover:bg-[#253966] text-[#D4AF37] font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Confirm Visit Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
