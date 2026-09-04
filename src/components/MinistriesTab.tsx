import React, { useState } from 'react';
import { MinistryTierId } from '../types';
import { MINISTRIES_DATA } from '../data';
import { Check, Heart, Sparkles } from 'lucide-react';

interface MinistriesTabProps {
  onOpenVolunteer?: (ministryName: string) => void;
  selectedMinistryId?: MinistryTierId;
  onShowToast?: (msg: string) => void;
}

const DEPARTMENTS = [
  {
    id: 'choir',
    title: 'Choir & Music',
    desc: 'Classical anthems and contemporary sound for three congregations.',
  },
  {
    id: 'ushering',
    title: 'Ushering & Protocol',
    desc: 'Welcome, order, and honour in the house — especially on Holy Ghost weekends.',
  },
  {
    id: 'media',
    title: 'Media & Technical',
    desc: 'Cameras, mix, and archives so the word travels beyond the pews.',
  },
  {
    id: 'prayer',
    title: 'Prayer Force',
    desc: 'The engine of Faith Clinic and the monthly Holy Ghost alignment.',
  },
  {
    id: 'evangelism',
    title: 'Evangelism & Follow-up',
    desc: 'Campus witness and care for first-time worshippers.',
  },
  {
    id: 'mentors',
    title: 'Children & Teens Mentors',
    desc: 'Adults who hold a safe room for hard questions.',
  },
];

export const MinistriesTab: React.FC<MinistriesTabProps> = ({
  selectedMinistryId = 'main',
  onShowToast = (_msg: string) => {},
}) => {
  const [activeTier, setActiveTier] = useState<MinistryTierId>(selectedMinistryId);

  // Volunteer form state
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [selectedDept, setSelectedDept] = useState('Choir & Music');
  const [isVolunteered, setIsVolunteered] = useState(false);

  // Prayer desk state
  const [prayerName, setPrayerName] = useState('');
  const [prayerRequest, setPrayerRequest] = useState('');
  const [isPrayerSubmitted, setIsPrayerSubmitted] = useState(false);

  const currentMinistry = MINISTRIES_DATA.find((m) => m.id === activeTier) || MINISTRIES_DATA[0];

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName || !volunteerEmail) {
      onShowToast('Please fill in your name and email to join a department.');
      return;
    }
    setIsVolunteered(true);
    onShowToast(`Thank you, ${volunteerName}! We received your request to serve in ${selectedDept}.`);
    setTimeout(() => {
      setVolunteerName('');
      setVolunteerEmail('');
      setIsVolunteered(false);
    }, 4000);
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerRequest.trim()) {
      onShowToast('Please type your prayer request.');
      return;
    }
    setIsPrayerSubmitted(true);
    onShowToast("Your prayer request has been sent to the Chaplain's office.");
    setTimeout(() => {
      setPrayerName('');
      setPrayerRequest('');
      setIsPrayerSubmitted(false);
    }, 4000);
  };

  return (
    <div className="space-y-10 max-w-xl mx-auto md:max-w-2xl lg:max-w-3xl pb-24">
      {/* 1. THREE-TIER CONGREGATIONAL UMBRELLA */}
      <section className="space-y-4">
        <div>
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            CONGREGATIONS
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Three expressions, one parish
          </h2>
          <p className="text-stone-600 text-sm mt-1 leading-relaxed">
            The Chapel of Praise operates three distinct congregations every Sunday morning under the same pastoral umbrella.
          </p>
        </div>

        {/* Congregation Switcher Tabs */}
        <div className="flex gap-2 p-1 bg-[#eae4d7] rounded-full">
          {MINISTRIES_DATA.map((tier) => {
            const isActive = tier.id === activeTier;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-all text-center ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-sm'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                {tier.name}
              </button>
            );
          })}
        </div>

        {/* Active Congregation Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
              {currentMinistry.badge}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              Sundays · 8:00 AM
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
            {currentMinistry.name}
          </h3>

          <p className="font-medium text-stone-800 text-sm">
            {currentMinistry.tagline}
          </p>

          <p className="text-stone-600 text-sm leading-relaxed">
            {currentMinistry.identity}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              Focus Areas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentMinistry.coreFocus.map((focus, idx) => (
                <span
                  key={idx}
                  className="bg-[#f5f1e9] text-stone-800 text-xs px-3 py-1 rounded-full border border-stone-200/60 font-medium"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. JOIN A DEPARTMENT (Matches Screenshot 6) */}
      <section className="space-y-4">
        <div>
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            SERVE
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Join a department
          </h2>
        </div>

        {/* Department List Cards */}
        <div className="space-y-3">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              onClick={() => setSelectedDept(dept.title)}
              className={`bg-white rounded-3xl p-5 border transition-all cursor-pointer ${
                selectedDept === dept.title
                  ? 'border-[#80182a] shadow-sm'
                  : 'border-stone-200/80 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {dept.title}
                </h3>
                {selectedDept === dept.title && (
                  <span className="w-2 h-2 rounded-full bg-[#80182a]" />
                )}
              </div>
              <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                {dept.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Serve Registration Form (Matches Screenshot 7) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Sign up to serve
          </h3>

          <form onSubmit={handleVolunteerSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-1.5">
                NAME
              </label>
              <input
                type="text"
                value={volunteerName}
                onChange={(e) => setVolunteerName(e.target.value)}
                placeholder="Your full name"
                className="w-full bg-[#f8f6f0] border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#80182a]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-1.5">
                EMAIL
              </label>
              <input
                type="email"
                value={volunteerEmail}
                onChange={(e) => setVolunteerEmail(e.target.value)}
                placeholder="your.email@rcbc.edu.ng"
                className="w-full bg-[#f8f6f0] border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-[#80182a]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-1.5">
                DEPARTMENT
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full bg-[#f8f6f0] border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-[#80182a]"
              >
                {DEPARTMENTS.map((dept) => (
                  <option key={dept.id} value={dept.title}>
                    {dept.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={isVolunteered}
              className="w-full sm:w-auto bg-[#80182a] hover:bg-[#6e1423] text-white px-8 py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2"
            >
              {isVolunteered ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Enrolled to serve</span>
                </>
              ) : (
                <span>I will serve</span>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* 3. PRAYER DESK (Matches Screenshot 7) */}
      <section className="bg-[#191412] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl border border-stone-800">
        <h2 className="font-serif text-3xl font-bold text-white">
          Prayer desk
        </h2>
        <p className="text-stone-300 text-sm leading-relaxed">
          Faith Clinic is Thursday at 6:00 PM. If you cannot wait until then, leave a note for the Chaplain's office.
        </p>

        <form onSubmit={handlePrayerSubmit} className="space-y-4 pt-2">
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1.5">
              NAME (OPTIONAL)
            </label>
            <input
              type="text"
              value={prayerName}
              onChange={(e) => setPrayerName(e.target.value)}
              placeholder="Leave blank for anonymous request"
              className="w-full bg-[#271f1d] border border-[#3b302c] rounded-2xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#80182a]"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold tracking-widest text-stone-400 uppercase mb-1.5">
              REQUEST
            </label>
            <textarea
              rows={4}
              value={prayerRequest}
              onChange={(e) => setPrayerRequest(e.target.value)}
              placeholder="Share what you would like the prayer force and Chaplain to hold in faith..."
              className="w-full bg-[#271f1d] border border-[#3b302c] rounded-2xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#80182a] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isPrayerSubmitted}
            className="w-full sm:w-auto bg-[#80182a] hover:bg-[#6e1423] text-white px-8 py-3.5 rounded-2xl font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2"
          >
            {isPrayerSubmitted ? (
              <>
                <Check className="w-4 h-4" />
                <span>Note sent to Chaplain</span>
              </>
            ) : (
              <span>Send to Chaplain's office</span>
            )}
          </button>
        </form>
      </section>
    </div>
  );
};
