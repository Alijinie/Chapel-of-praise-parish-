import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, X, Radio } from 'lucide-react';

interface MediaTabProps {
  onShowToast: (msg: string) => void;
}

interface SermonItem {
  id: string;
  tag: string;
  duration: string;
  title: string;
  scripture: string;
  summary: string;
  category: 'Sanctuary' | 'Youth' | 'Teens' | 'Student ministers';
  highlighted?: boolean;
}

const SERMON_LIST: SermonItem[] = [
  {
    id: 'sermon-1',
    tag: 'THE CHAPLAIN',
    duration: '48 MIN',
    title: 'Ambassadors of Another Kingdom',
    scripture: '2 Corinthians 5:20',
    summary: "The chapel's charge: represent Christ with doctrinal integrity on campus and beyond.",
    category: 'Sanctuary',
    highlighted: true,
  },
  {
    id: 'sermon-2',
    tag: 'YOUTH CHURCH',
    duration: '38 MIN',
    title: 'Arise and Shine',
    scripture: 'Isaiah 60:1',
    summary: 'Purpose, fire, and the call to career excellence without losing the altar.',
    category: 'Youth',
  },
  {
    id: 'sermon-3',
    tag: 'TEENAGERS CHURCH',
    duration: '28 MIN',
    title: 'A Faith of Your Own',
    scripture: '2 Timothy 1:5',
    summary: 'Crossing from inherited religion into a personal walk with Christ.',
    category: 'Teens',
  },
  {
    id: 'sermon-4',
    tag: 'STUDENT MINISTERS',
    duration: '42 MIN',
    title: 'Pulpit Integrity & Apostolic Zeal',
    scripture: '1 Timothy 4:12',
    summary: 'Seminary practical training on character, anointing, and faithful shepherding.',
    category: 'Student ministers',
  },
  {
    id: 'sermon-5',
    tag: 'THE CHAPLAIN',
    duration: '52 MIN',
    title: 'The Sound Doctrine of the Altar',
    scripture: 'Titus 2:1',
    summary: 'Systematic biblical theology for student pastors and theologians.',
    category: 'Sanctuary',
  },
  {
    id: 'sermon-6',
    tag: 'FAITH CLINIC',
    duration: '45 MIN',
    title: 'Prevailing Intercession',
    scripture: 'James 5:16',
    summary: 'Campus prayer engine, warfare intercession, and Holy Ghost empowerment.',
    category: 'Sanctuary',
  },
];

export const MediaTab: React.FC<MediaTabProps> = ({ onShowToast }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [playingSermon, setPlayingSermon] = useState<SermonItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressSecs, setProgressSecs] = useState<number>(0);
  const [isLiveStreamOpen, setIsLiveStreamOpen] = useState<boolean>(false);

  const categories = ['All', 'Sanctuary', 'Youth', 'Teens', 'Student ministers'];

  // Audio timer simulation
  useEffect(() => {
    let timer: any;
    if (isPlaying && playingSermon) {
      timer = setInterval(() => {
        setProgressSecs((prev) => (prev >= 2880 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playingSermon]);

  const handlePlayToggle = (sermon: SermonItem) => {
    if (playingSermon?.id === sermon.id) {
      setIsPlaying(!isPlaying);
    } else {
      setPlayingSermon(sermon);
      setIsPlaying(true);
      setProgressSecs(0);
      onShowToast(`Streaming: "${sermon.title}"`);
    }
  };

  const filteredSermons = activeCategory === 'All'
    ? SERMON_LIST
    : SERMON_LIST.filter((s) => s.category === activeCategory);

  const formatAudioTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto md:max-w-2xl lg:max-w-3xl pb-24">
      {/* Category Filter Pills (Exact Match to Screenshot 5) */}
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

      {/* Live Broadcast Notice */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-sm flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#80182a]/10 flex items-center justify-center text-[#80182a] flex-shrink-0">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">
              Sunday Sanctuary Live Broadcast
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Stream live from Christ's Ambassadors Road every Sunday at 8:00 AM
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsLiveStreamOpen(true)}
          className="bg-[#80182a] hover:bg-[#6f1424] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors flex-shrink-0"
        >
          Watch Live
        </button>
      </div>

      {/* Sermon Audio Cards (Exact Match to Screenshot 5) */}
      <div className="space-y-4">
        {filteredSermons.map((sermon) => {
          const isCurrent = playingSermon?.id === sermon.id;
          const isThisPlaying = isCurrent && isPlaying;
          const hasMaroonBorder = sermon.highlighted || isCurrent;

          return (
            <div
              key={sermon.id}
              className={`bg-white rounded-3xl p-6 shadow-sm transition-all relative ${
                hasMaroonBorder
                  ? 'border-2 border-[#80182a]'
                  : 'border border-stone-200/80 hover:border-stone-300'
              }`}
            >
              {/* Header: TAG · DURATION and Play Button */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-[#80182a] uppercase">
                  {sermon.tag} · {sermon.duration}
                </span>

                <button
                  onClick={() => handlePlayToggle(sermon)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isThisPlaying
                      ? 'bg-[#80182a] text-white'
                      : 'text-stone-700 hover:text-[#80182a] hover:bg-stone-100'
                  }`}
                  title={isThisPlaying ? 'Pause' : 'Play Message'}
                >
                  {isThisPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1 leading-snug">
                {sermon.title}
              </h3>

              {/* Scripture */}
              <div className="text-stone-700 text-sm font-medium mt-1">
                {sermon.scripture}
              </div>

              {/* Description */}
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                {sermon.summary}
              </p>

              {/* Inline progress bar if active */}
              {isCurrent && (
                <div className="mt-4 pt-3 border-t border-stone-100">
                  <div className="flex justify-between items-center text-[11px] font-mono text-stone-500 mb-1.5">
                    <span>{formatAudioTime(progressSecs)}</span>
                    <span className="text-stone-400">48:00</span>
                  </div>
                  <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#80182a] h-full transition-all duration-300 rounded-full"
                      style={{ width: `${Math.min(100, (progressSecs / 2880) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating Audio Player Bar when sermon is selected */}
      {playingSermon && (
        <div className="fixed bottom-18 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-[#181412] text-white rounded-2xl p-4 shadow-2xl border border-stone-800 z-40 flex items-center justify-between gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-[#80182a] flex items-center justify-center text-white shadow flex-shrink-0"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-white" />
            ) : (
              <Play className="w-4 h-4 fill-white ml-0.5" />
            )}
          </button>

          <div className="min-w-0 flex-1">
            <div className="text-xs font-semibold truncate text-white">
              {playingSermon.title}
            </div>
            <div className="text-[10px] text-stone-400 truncate flex items-center gap-1.5">
              <span>{playingSermon.scripture}</span>
              <span>•</span>
              <span>{formatAudioTime(progressSecs)}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Volume2 className="w-4 h-4 text-stone-400" />
            <button
              onClick={() => {
                setPlayingSermon(null);
                setIsPlaying(false);
              }}
              className="text-stone-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Live Stream Modal */}
      {isLiveStreamOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#181412] text-white rounded-3xl max-w-lg w-full overflow-hidden border border-stone-800 shadow-2xl space-y-4 p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                <h3 className="font-serif text-xl font-bold">Chapel of Praise Live</h3>
              </div>
              <button
                onClick={() => setIsLiveStreamOpen(false)}
                className="text-stone-400 hover:text-white p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-stone-800">
              <div className="text-center space-y-2 p-6">
                <Radio className="w-10 h-10 text-rose-500 mx-auto animate-pulse" />
                <p className="font-serif text-lg font-bold text-white">
                  Sunday Celebration Service Stream
                </p>
                <p className="text-xs text-stone-400">
                  Broadcast starts Sunday 8:00 AM from Main Sanctuary, Redemption City.
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Experience the Word, Apostolic praise, and the move of the Holy Spirit with the campus family.
            </p>

            <button
              onClick={() => setIsLiveStreamOpen(false)}
              className="w-full py-3 rounded-xl bg-[#80182a] hover:bg-[#6e1423] text-white font-medium text-xs transition-colors"
            >
              Return to Archives
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
