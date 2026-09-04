import React, { useState } from 'react';
import {
  X,
  Heart,
  Sparkles,
  Check,
  ShieldCheck,
  Lock,
  UserCheck,
  Send,
  Calendar,
  AlertCircle,
  HelpCircle
} from 'lucide-react';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast?: (msg: string) => void;
}

const PRAYER_CATEGORIES = [
  'Health & Healing (Faith Clinic)',
  'Academic & RCBC Studies',
  'Spiritual Growth & Calling',
  'Career & Financial Breakthrough',
  'Family, Marriage & Children',
  'Deliverance & Protection',
  'Thanksgiving & Testimony',
  'Other Personal Burden'
];

const INTERCESSION_TIMING = [
  'Thursday Faith Clinic Altar (6:00 PM)',
  'Tuesday Digging Deep Altar (6:00 PM)',
  'Urgent Intercession (Within 24 Hours)',
  'Monthly Holy Ghost Service Prayer Sheet'
];

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState(PRAYER_CATEGORIES[0]);
  const [timing, setTiming] = useState(INTERCESSION_TIMING[0]);
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionCode, setSubmissionCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const code = `RCBC-PR-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmissionCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);

      const toastMsg = isAnonymous
        ? 'Your confidential anonymous prayer request has been submitted to the Faith Clinic altar.'
        : `Prayer request from ${name || 'you'} received. Pastoral intercessors are standing in agreement with you!`;

      if (onShowToast) {
        onShowToast(toastMsg);
      }
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setMessage('');
    setIsAnonymous(false);
    setIsSubmitted(false);
    setCategory(PRAYER_CATEGORIES[0]);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <div
      id="prayer-request-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0F1A30]/80 backdrop-blur-sm overflow-y-auto transition-all"
    >
      <div
        id="prayer-request-modal-container"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-200 my-auto animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          id="close-prayer-modal-btn"
          aria-label="Close prayer modal"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/60 text-rose-800 text-[10px] font-black uppercase tracking-wider">
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>Faith Clinic & Intercessory Altar</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1B2A4A] tracking-tight">
            Submit Your Prayer Request
          </h3>

          <p className="text-xs text-slate-500 leading-relaxed">
            Every spiritual burden brought to Christ's Ambassadors Road is held in earnest prayer by our
            dedicated RCBC campus ministers and pastoral intercessors.
          </p>
        </div>

        {/* SUBMITTED CONFIRMATION STATE */}
        {isSubmitted ? (
          <div className="space-y-5 py-4">
            <div className="p-6 text-center space-y-3 bg-emerald-50/80 rounded-2xl border border-emerald-200">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

              <h4 className="font-serif font-bold text-lg text-emerald-950">
                Altar Agreement Confirmed!
              </h4>

              <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                Your prayer request has been logged under reverence code{' '}
                <strong className="font-mono text-emerald-900 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                  {submissionCode}
                </strong>
                . It will be lifted during the{' '}
                <strong>{timing}</strong>.
              </p>

              <div className="text-[11px] text-emerald-700/90 italic pt-1 border-t border-emerald-200/60">
                "{isAnonymous ? 'Anonymous Ambassador' : name || 'Beloved in Christ'}, if two of you agree on earth as touching any thing that they shall ask, it shall be done for them." — Matthew 18:19
              </div>
            </div>

            <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/70 text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-amber-950">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Join Us at the Faith Clinic</span>
              </div>
              <p className="text-[11px] text-amber-800/90 leading-relaxed">
                You are welcome to sit under the physical prayer atmosphere every Thursday at 6:00 PM at
                the Main Sanctuary or stream online through our Media / Sermons portal.
              </p>
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleReset}
                id="submit-another-prayer-btn"
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                Submit Another Request
              </button>
              <button
                type="button"
                onClick={handleClose}
                id="done-prayer-modal-btn"
                className="flex-1 bg-[#1B2A4A] hover:bg-[#253966] text-amber-400 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* FORM STATE */
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* ANONYMOUS SUBMISSION TOGGLE */}
            <div
              id="anonymous-toggle-container"
              className="p-3.5 rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-0.5 pr-2">
                  <label
                    htmlFor="anonymous-toggle"
                    className="flex items-center gap-1.5 font-bold text-slate-800 cursor-pointer text-xs"
                  >
                    {isAnonymous ? (
                      <Lock className="w-3.5 h-3.5 text-amber-600" />
                    ) : (
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                    <span>Submit Anonymously</span>
                  </label>
                  <p className="text-[11px] text-slate-500">
                    {isAnonymous
                      ? 'Confidential mode active. Your name and contact details will not be recorded.'
                      : 'Pastoral team can address you by name and follow up with encouragement.'}
                  </p>
                </div>

                {/* Modern Switch UI */}
                <button
                  type="button"
                  id="anonymous-toggle-switch"
                  role="switch"
                  aria-checked={isAnonymous}
                  onClick={() => setIsAnonymous(!isAnonymous)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                    isAnonymous ? 'bg-amber-600' : 'bg-slate-300'
                  }`}
                >
                  <span className="sr-only">Toggle anonymous submission</span>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                      isAnonymous ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {isAnonymous && (
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-[10px] text-amber-800 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>Privacy Guaranteed: Delivered strictly to the College Pastoral intercessory desk.</span>
                </div>
              )}
            </div>

            {/* NAME & CONTACT FIELDS (Conditioned on Anonymous state) */}
            {!isAnonymous ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 transition-all">
                <div>
                  <label htmlFor="prayer-name" className="block font-bold text-slate-700 mb-1">
                    Your Name / Title *
                  </label>
                  <input
                    type="text"
                    id="prayer-name"
                    required={!isAnonymous}
                    placeholder="e.g. Bro. Emmanuel / Sis. Grace"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs bg-white text-slate-800"
                  />
                </div>

                <div>
                  <label htmlFor="prayer-contact" className="block font-bold text-slate-700 mb-1">
                    Phone / WhatsApp <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="prayer-contact"
                    placeholder="For pastoral check-in"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs bg-white text-slate-800"
                  />
                </div>
              </div>
            ) : (
              <div className="px-3.5 py-2 bg-slate-100 rounded-xl text-slate-500 text-[11px] flex items-center justify-between border border-dashed border-slate-200">
                <span className="flex items-center gap-1.5 italic">
                  <Lock className="w-3 h-3 text-slate-400" />
                  Identity: Anonymous Ambassador
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Strictly Confidential</span>
              </div>
            )}

            {/* CATEGORY & TIMING */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="prayer-category" className="block font-bold text-slate-700 mb-1">
                  Prayer Focus / Area
                </label>
                <select
                  id="prayer-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs bg-white text-slate-700"
                >
                  {PRAYER_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="prayer-timing" className="block font-bold text-slate-700 mb-1">
                  Intercession Altar
                </label>
                <select
                  id="prayer-timing"
                  value={timing}
                  onChange={(e) => setTiming(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs bg-white text-slate-700"
                >
                  {INTERCESSION_TIMING.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* PRAYER MESSAGE TEXTAREA */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="prayer-message-input" className="block font-bold text-slate-700">
                  Your Prayer Request / Spiritual Burden *
                </label>
                <span className="text-[10px] text-slate-400">
                  {message.length} characters
                </span>
              </div>
              <textarea
                id="prayer-message-input"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Please share what you would like the pastoral intercessors to agree with you for (healing, exams at RCBC, marital peace, spiritual revival, etc.)..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs bg-white text-slate-800 leading-relaxed placeholder:text-slate-400"
              />
            </div>

            {/* SCRIPTURE REASSURANCE FOOTNOTE */}
            <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="leading-snug">
                "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God." — Philippians 4:6
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              id="submit-prayer-request-btn"
              disabled={isSubmitting || !message.trim() || (!isAnonymous && !name.trim())}
              className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
                isSubmitting || !message.trim() || (!isAnonymous && !name.trim())
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-[#1B2A4A] hover:bg-[#253966] text-amber-400 cursor-pointer active:scale-[0.99]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  <span>Placing on Prayer Altar...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {isAnonymous ? 'Send Anonymously to Altar' : 'Send to Faith Clinic Altar'}
                  </span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
