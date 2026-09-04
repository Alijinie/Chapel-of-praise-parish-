import React, { useState } from 'react';
import { Calendar, Bell, Check, Clock, MapPin } from 'lucide-react';

interface EventsTabProps {
  onShowToast?: (msg: string) => void;
}

interface EventItem {
  id: string;
  dayShort: string;
  dateNum: string;
  title: string;
  timeLocation: string;
  description: string;
  category: 'Sanctuary' | 'Youth' | 'Teens' | 'Global RCCG';
  fullDate: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 'evt-1',
    dayShort: 'FRI,',
    dateNum: '04',
    title: 'Holy Ghost Service',
    timeLocation: '6:00 PM · Redemption City',
    description: 'First Friday of the month. The Chapel prepares student-ministers to serve and to receive at the global gathering hosted inside Redemption City.',
    category: 'Global RCCG',
    fullDate: '2026-10-02T18:00:00',
  },
  {
    id: 'evt-2',
    dayShort: 'SUN,',
    dateNum: '06',
    title: 'Sunday Celebration & Youth Expression',
    timeLocation: '8:00 AM · Main Sanctuary & Youth Church',
    description: 'Three congregations under one umbrella: adult sanctuary, youth expression, and the teenagers overflow.',
    category: 'Sanctuary',
    fullDate: '2026-10-04T08:00:00',
  },
  {
    id: 'evt-3',
    dayShort: 'TUE,',
    dateNum: '08',
    title: 'Digging Deep',
    timeLocation: '6:00 PM · Main Sanctuary',
    description: 'Systematic chapter-by-chapter exposition of the Word with the campus community.',
    category: 'Sanctuary',
    fullDate: '2026-10-06T18:00:00',
  },
  {
    id: 'evt-4',
    dayShort: 'THU,',
    dateNum: '10',
    title: 'Faith Clinic',
    timeLocation: '6:00 PM · Main Sanctuary',
    description: 'Intercessory warfare, divine healing, and praying down revival over the academic semester.',
    category: 'Sanctuary',
    fullDate: '2026-10-08T18:00:00',
  },
  {
    id: 'evt-5',
    dayShort: 'SAT,',
    dateNum: '19',
    title: 'Youth Ignite Summit',
    timeLocation: '10:00 AM · Youth Arena',
    description: 'Career readiness, digital ministry, and kingdom empowerment for campus youth.',
    category: 'Youth',
    fullDate: '2026-10-17T10:00:00',
  },
  {
    id: 'evt-6',
    dayShort: 'SAT,',
    dateNum: '26',
    title: 'The Overflow: Teenagers Hangout',
    timeLocation: '3:00 PM · Chapel Annex',
    description: 'Creative expression, mentorship, biblical identity, and questions room.',
    category: 'Teens',
    fullDate: '2026-10-24T15:00:00',
  },
];

export const EventsTab: React.FC<EventsTabProps> = ({ onShowToast = (_msg: string) => {} }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [reminders, setReminders] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Sanctuary', 'Youth', 'Teens', 'Global RCCG'];

  const filteredEvents = activeCategory === 'All'
    ? EVENTS_DATA
    : EVENTS_DATA.filter((e) => e.category === activeCategory);

  const toggleReminder = (event: EventItem) => {
    const isSet = !reminders[event.id];
    setReminders((prev) => ({ ...prev, [event.id]: isSet }));
    if (isSet) {
      onShowToast(`Reminder added for "${event.title}"!`);
      // Generate standard iCalendar file for user download
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//RCBC Chapel of Praise//Calendar//EN',
        'BEGIN:VEVENT',
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:${event.timeLocation}`,
        `DTSTART:${event.fullDate.replace(/[-:]/g, '')}`,
        'END:VEVENT',
        'END:VCALENDAR',
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${event.title.replace(/\s+/g, '_')}.ics`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } else {
      onShowToast(`Reminder cancelled for "${event.title}".`);
    }
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto md:max-w-2xl lg:max-w-3xl pb-24">
      {/* Category Pills Filter (Matches Screenshot 8) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 pb-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#1c1917] text-white shadow-sm'
                  : 'bg-[#ede7dc] text-stone-800 hover:bg-[#e4ddd0]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Calendar Header Notice */}
      <div>
        <span className="block text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
          CALENDAR & EXPRESSIONS
        </span>
        <h2 className="font-serif text-3xl font-bold text-stone-900 mt-1">
          Coming up at Chapel of Praise
        </h2>
        <p className="text-stone-600 text-sm mt-1 leading-relaxed">
          Mark your calendar for upcoming Sunday celebrations, theological deep-dives, and Redemption City gatherings.
        </p>
      </div>

      {/* Events List Cards (Matches Screenshot 8 & 9) */}
      <div className="space-y-4">
        {filteredEvents.map((evt) => {
          const isReminded = !!reminders[evt.id];
          return (
            <div
              key={evt.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-stone-300"
            >
              <div className="flex items-start gap-4 sm:gap-5 flex-1 min-w-0">
                {/* Date Box (Exact match to screenshots) */}
                <div className="bg-[#f0ebe1] rounded-2xl w-14 sm:w-16 h-18 sm:h-20 flex flex-col items-center justify-center flex-shrink-0 text-stone-900 border border-stone-300/40">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-stone-600">
                    {evt.dayShort}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold leading-none mt-0.5">
                    {evt.dateNum}
                  </span>
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                      {evt.title}
                    </h3>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-[#80182a] mt-1">
                    {evt.timeLocation}
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Remind me / Add to Calendar button */}
              <button
                onClick={() => toggleReminder(evt)}
                className={`self-end sm:self-center px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all flex-shrink-0 ${
                  isReminded
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-[#f5f2eb] hover:bg-[#ede7db] text-stone-800 border border-stone-200'
                }`}
                title="Save event to device calendar (.ics)"
              >
                {isReminded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Saved</span>
                  </>
                ) : (
                  <>
                    <Bell className="w-3.5 h-3.5 text-stone-600" />
                    <span>Remind me</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
