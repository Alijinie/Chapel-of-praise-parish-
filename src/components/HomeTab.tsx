import React, { useState, useEffect } from 'react';
import { MapPin, Play, ArrowRight } from 'lucide-react';
import { TabType, MinistryTierId } from '../types';
import IMAGES from '../assets/images';

interface HomeTabProps {
  onSelectTab: (tab: TabType) => void;
  onOpenMinistryModal: (id: MinistryTierId) => void;
  onOpenLive: () => void;
  onOpenPrayerRequest?: () => void;
  onOpenPlanVisit?: () => void;
  onOpenServiceNotes?: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onSelectTab,
  onOpenLive,
  onOpenPlanVisit,
  onOpenServiceNotes,
}) => {
  // Live dynamic countdown to Next Sunday 8:00 AM
  const [countdown, setCountdown] = useState({ days: 2, hours: 6, minutes: 5, seconds: 34 });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      // Find next Sunday at 8:00 AM
      const nextSunday = new Date();
      const currentDay = now.getDay();
      const daysUntilSunday = (7 - currentDay) % 7;
      nextSunday.setDate(now.getDate() + (daysUntilSunday === 0 && now.getHours() >= 8 ? 7 : daysUntilSunday));
      nextSunday.setHours(8, 0, 0, 0);

      const diff = Math.max(0, nextSunday.getTime() - now.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const format2Digits = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="space-y-8 max-w-xl mx-auto md:max-w-2xl lg:max-w-3xl pb-16">
      {/* 1. HERO CARD (Exact match to Screenshot 1 & 2) */}
      <section className="relative rounded-[32px] overflow-hidden shadow-xl border border-stone-300/40 bg-stone-900">
        {/* Background Sanctuary Interior Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.sanctuaryInterior}
            alt="RCBC Chapel Sanctuary Interior"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Subtle warm darkened gradient overlay matching screenshot */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#181310]/75 via-[#181310]/65 to-[#181310]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between min-h-[580px] sm:min-h-[640px] text-white">
          <div className="space-y-4">
            {/* Top Pill Badge */}
            <div>
              <span className="inline-block bg-black/40 backdrop-blur-md text-[#d7cec3] text-[11px] font-semibold tracking-wider px-3.5 py-1.5 rounded-full border border-white/10 uppercase">
                RCBC MAIN CAMPUS · RCBC
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Chapel of Praise
            </h1>

            {/* Subtitle */}
            <p className="font-serif italic text-xl sm:text-2xl text-[#dfcca5] tracking-wide">
              Raising Christ's Ambassadors
            </p>

            {/* Description Paragraph */}
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed max-w-lg font-normal pt-1">
              The spiritual home of the Redeemed Christian Bible College. One campus parish, three congregations: Main Sanctuary, Youth Church, and Teenagers Church.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenPlanVisit || (() => onSelectTab('visit'))}
                className="bg-white text-[#181412] hover:bg-stone-100 px-5 py-3 rounded-full text-sm font-semibold transition-all shadow-md flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#181412]" />
                <span>Plan your visit</span>
              </button>

              <button
                onClick={onOpenLive}
                className="text-white border border-white/40 hover:bg-white/10 px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <Play className="w-3.5 h-3.5 fill-white text-white" />
                <span>Sunday live</span>
              </button>
            </div>
          </div>

          {/* Countdown Glass Card and Crimson Announcement Card Stack */}
          <div className="space-y-4 pt-6">
            {/* Countdown Glass Pill */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3.5 text-white shadow-inner">
              <div className="flex items-center gap-2 text-xs text-stone-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-stone-300">Next</span>
                <span className="font-bold text-white">Sunday Celebration Service</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm mt-1 text-stone-200">
                <span>Sunday, 6 Sept · 8:00 am</span>
                <span className="font-mono font-semibold text-white tracking-wider">
                  {countdown.days}d {format2Digits(countdown.hours)}:{format2Digits(countdown.minutes)}:{format2Digits(countdown.seconds)}
                </span>
              </div>
            </div>

            {/* Crimson/Wine Holy Ghost Service Card (Exact match to Screenshot) */}
            <div className="bg-[#80182a] rounded-2xl p-5 sm:p-6 text-white shadow-lg border border-red-900/30">
              <span className="block text-[11px] font-bold tracking-widest text-rose-200 uppercase">
                TONIGHT · FIRST FRIDAY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Holy Ghost Service
              </h2>
              <p className="text-rose-100 text-xs sm:text-sm mt-2 leading-relaxed">
                6:00 PM · Redemption City. The chapel family gathers with the global house.
              </p>
              <button
                onClick={onOpenServiceNotes || (() => onSelectTab('media'))}
                className="inline-block underline font-medium text-xs sm:text-sm text-white mt-3 hover:text-rose-200 transition-colors"
              >
                Service notes
              </button>
            </div>

            {/* Chapel Exterior Image (Matches Screenshot 2) */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-700/40">
              <img
                src={IMAGES.chapelExterior}
                alt="RCBC Chapel of Praise Campus Building"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WEEKLY GATHERING CARDS (Matches Screenshot 2) */}
      <section className="space-y-4">
        {/* Sunday Card */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm transition-all hover:border-stone-300">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            SUNDAY
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Celebration Service
          </h2>
          <div className="text-stone-800 font-semibold text-base mt-1">
            8:00 AM
          </div>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Word, worship, and the family of the campus gathered as one.
          </p>
        </div>

        {/* Tuesday Card */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm transition-all hover:border-stone-300">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            TUESDAY
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Digging Deep
          </h2>
          <div className="text-stone-800 font-semibold text-base mt-1">
            6:00 PM
          </div>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Bible study. Come hungry for the Word.
          </p>
        </div>

        {/* Thursday Card */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-sm transition-all hover:border-stone-300">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            THURSDAY
          </span>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mt-1">
            Faith Clinic
          </h2>
          <div className="text-stone-800 font-semibold text-base mt-1">
            6:00 PM
          </div>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Intercession, warfare, and standing in the gap for the campus.
          </p>
        </div>
      </section>

      {/* 3. OFFICE OF THE CHAPLAIN (Matches Screenshot 3) */}
      <section className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Portrait */}
        <div className="rounded-2xl overflow-hidden shadow-sm aspect-[4/5] sm:aspect-[4/3] bg-stone-100">
          <img
            src={IMAGES.chaplainPortrait}
            alt="The Chaplain of RCBC Chapel of Praise"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Message */}
        <div className="space-y-3">
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            OFFICE OF THE CHAPLAIN
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900">
            A welcome
          </h2>
          <p className="font-sans font-medium text-stone-800 text-sm sm:text-base pt-1">
            Beloved in Christ,
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Welcome to the Chapel of Praise, the spiritual home of the Redeemed Christian Bible College Main Campus. We exist to raise Christ's ambassadors — men and women whose lives are rooted in Scripture, ignited in prayer, and sent into the nations.
          </p>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Whether you are a student-minister, a family on campus, a teenager finding your voice, or a visitor walking Christ's Ambassadors Road for the first time, there is a place for you under this umbrella.
          </p>
        </div>
      </section>

      {/* 4. LIFE ON CAMPUS (Matches Screenshot 4) */}
      <section className="space-y-4">
        <div>
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            LIFE ON CAMPUS
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
            Chapel of Praise
          </h2>
        </div>

        {/* Horizontal Photo Gallery */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-2 px-2 snap-x">
          <div className="snap-start flex-shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <img
              src={IMAGES.campusWorship}
              alt="Chapel Praise and Worship"
              className="w-full h-44 sm:h-48 object-cover"
            />
          </div>
          <div className="snap-start flex-shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <img
              src={IMAGES.campusClassroom}
              alt="Bible College Theology Lecture"
              className="w-full h-44 sm:h-48 object-cover"
            />
          </div>
          <div className="snap-start flex-shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden shadow-sm border border-stone-200">
            <img
              src={IMAGES.chapelExterior}
              alt="Chapel Grounds Redemption City"
              className="w-full h-44 sm:h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. CALENDAR / COMING UP (Matches Screenshot 4) */}
      <section className="space-y-4 pt-4">
        <div>
          <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
            CALENDAR
          </span>
          <div className="flex justify-between items-baseline mt-1">
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Coming up
            </h2>
            <button
              onClick={() => onSelectTab('events')}
              className="text-[#80182a] font-semibold text-xs sm:text-sm flex items-center gap-1 hover:underline"
            >
              <span>Full calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Event Card 1: Friday 04 Holy Ghost Service */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-sm flex items-start gap-4 sm:gap-5">
          {/* Date Box */}
          <div className="bg-[#f0ebe1] rounded-2xl w-14 sm:w-16 h-18 sm:h-20 flex flex-col items-center justify-center flex-shrink-0 text-stone-900 border border-stone-300/40">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-stone-600">
              FRI,
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold leading-none mt-0.5">
              04
            </span>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              Holy Ghost Service
            </h3>
            <div className="text-xs sm:text-sm font-semibold text-[#80182a] mt-1">
              6:00 PM · Redemption City
            </div>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              First Friday of the month. The Chapel prepares student-ministers to serve and to receive at the global gathering hosted inside Redemption City.
            </p>
          </div>
        </div>

        {/* Event Card 2: Sunday 06 Sunday Celebration */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-sm flex items-start gap-4 sm:gap-5">
          {/* Date Box */}
          <div className="bg-[#f0ebe1] rounded-2xl w-14 sm:w-16 h-18 sm:h-20 flex flex-col items-center justify-center flex-shrink-0 text-stone-900 border border-stone-300/40">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-stone-600">
              SUN,
            </span>
            <span className="font-serif text-2xl sm:text-3xl font-bold leading-none mt-0.5">
              06
            </span>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              Sunday Celebration & Youth Expression
            </h3>
            <div className="text-xs sm:text-sm font-semibold text-[#80182a] mt-1">
              8:00 AM · Main Sanctuary & Youth Church
            </div>
            <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Three congregations under one umbrella: adult sanctuary, youth expression, and the teenagers overflow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
