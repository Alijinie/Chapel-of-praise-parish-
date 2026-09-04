import React, { useState } from 'react';
import {
  Heart,
  Copy,
  Check,
  Building,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { GIVING_CHANNELS } from '../data';

export const GivingTab: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('10000');
  const [selectedPurpose, setSelectedPurpose] = useState<string>('Tithes & Offerings');
  const [donorName, setDonorName] = useState<string>('');
  const [showReceipt, setShowReceipt] = useState<boolean>(false);

  const handleCopy = (accountNum: string) => {
    navigator.clipboard.writeText(accountNum);
    setCopiedAccount(accountNum);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customAmount || isNaN(Number(customAmount)) || Number(customAmount) <= 0) {
      alert('Please enter a valid contribution amount.');
      return;
    }
    setShowReceipt(true);
  };

  return (
    <div className="space-y-12">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
          <span>Kingdom Stewardship</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#16243B]">
          Partner With Us in Kingdom Expansion
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
          "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of
          necessity: for God loveth a cheerful giver." (2 Corinthians 9:7)
        </p>
      </div>

      {/* 3 Bank Transfer Options Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {GIVING_CHANNELS.map((channel, idx) => {
          const isCopied = copiedAccount === channel.accountNumber;
          return (
            <div
              key={idx}
              className="glass-card p-6 rounded-3xl border-t-4 border-t-amber-600 space-y-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl font-bold">
                  {idx === 0 ? (
                    <Building className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Sparkles className="w-6 h-6" />
                  ) : (
                    <GraduationCap className="w-6 h-6" />
                  )}
                </div>

                <h3 className="font-serif font-bold text-lg text-[#16243B]">{channel.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{channel.desc}</p>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 space-y-1.5 shadow-xs">
                  <div className="text-[10px] font-extrabold text-amber-700 uppercase tracking-wider">
                    {channel.bank}
                  </div>
                  <div className="font-black text-lg text-[#16243B] tracking-wider font-mono">
                    {channel.accountNumber}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium truncate">
                    {channel.accountName}
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleCopy(channel.accountNumber)}
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  isCopied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#16243B] hover:bg-slate-800 text-amber-400'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Account Number Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Account Number</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Online Giving Portal Simulator */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <h3 className="font-serif font-bold text-xl text-[#16243B]">Direct Electronic Sowing</h3>
          <p className="text-xs text-slate-500">
            Generate an instant digital giving pledge receipt or pay via online banking
          </p>
        </div>

        <form onSubmit={handleSimulatePayment} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16243B] mb-1">
              Your Name / Alias (Optional)
            </label>
            <input
              type="text"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="e.g. Bro. Emmanuel & Family"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs sm:text-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16243B] mb-1">
              Giving Category *
            </label>
            <select
              value={selectedPurpose}
              onChange={(e) => setSelectedPurpose(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs sm:text-sm bg-white font-medium text-slate-700"
            >
              <option>Tithes & Offerings</option>
              <option>Chapel Building & Media Expansion</option>
              <option>Student-Ministers Indigent Scholarship Fund</option>
              <option>Youth & Teen Ministry Support</option>
              <option>Special Thanksgiving / Vow</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#16243B] mb-1">
              Amount (NGN ₦) *
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {['5000', '10000', '25000', '50000', '100000'].map((amt) => (
                <button
                  type="button"
                  key={amt}
                  onClick={() => setCustomAmount(amt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    customAmount === amt
                      ? 'bg-amber-500 text-[#0F172A]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  ₦{Number(amt).toLocaleString()}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-sm font-bold bg-white text-[#16243B]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-[#0F172A] font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2"
          >
            <CreditCard className="w-4 h-4" />
            <span>Generate Electronic Sowing Receipt</span>
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Secure Kingdom Stewardship • RCBC Chapel Finance Council</span>
        </div>
      </div>

      {/* Virtual Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full space-y-5 shadow-2xl border border-slate-100 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <Check className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-amber-700 tracking-wider">
                RCBC Chapel of Praise
              </span>
              <h4 className="font-serif font-bold text-xl text-[#16243B]">
                Stewardship Acknowledgment
              </h4>
              <p className="text-xs text-slate-500">
                May the Lord bless and multiply your seed sown in His vineyard!
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Contributor:</span>
                <span className="font-bold text-[#16243B]">{donorName || 'Anonymous Beloved'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Purpose:</span>
                <span className="font-bold text-[#16243B]">{selectedPurpose}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Amount Sown:</span>
                <span className="font-black text-amber-700 text-sm">
                  ₦{Number(customAmount).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Campus Code:</span>
                <span className="font-mono text-slate-600">RCBC-CH-{(Math.random() * 100000 | 0).toString().padStart(6, '0')}</span>
              </div>
            </div>

            <button
              onClick={() => setShowReceipt(false)}
              className="w-full bg-[#16243B] text-amber-400 font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-slate-800"
            >
              Close Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
