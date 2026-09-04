import React, { useState } from 'react';
import {
  Radio,
  Play,
  Pause,
  Volume2,
  Download,
  BookOpen,
  Calendar,
  Clock,
  Search,
  CheckCircle,
  ExternalLink,
  Users
} from 'lucide-react';
import { Sermon } from '../types';
import { SERMONS_DATA, CHURCH_INFO } from '../data';

interface SermonsTabProps {
  onOpenLive: () => void;
}

export const SermonsTab: React.FC<SermonsTabProps> = ({ onOpenLive }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAudioSermon, setActiveAudioSermon] = useState<Sermon>(SERMONS_DATA[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [selectedSermonDetail, setSelectedSermonDetail] = useState<Sermon | null>(null);

  const filterOptions = ['All', 'Main Sanctuary', 'Youth Church', 'Teenagers Church', 'RCBC Faculty'];

  const filteredSermons = SERMONS_DATA.filter((sermon) => {
    const matchesFilter = selectedFilter === 'All' || sermon.ministry === selectedFilter;
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handlePlaySermon = (sermon: Sermon) => {
    setActiveAudioSermon(sermon);
    setIsPlaying(true);
  };

  const handleDownloadNotes = (title: string) => {
    alert(`Downloading study notes & outline for: "${title}" (PDF)`);
  };

  return (
    <div className="space-y-10">
      {/* LIVESTREAM HERO CARD */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 bg-[#0F172A] text-white border border-amber-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Broadcast Altar</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
              Live Stream Sunday Services
            </h2>
            <p className="text-xs text-slate-300">
              Broadcasting from Christ's Ambassadors Road inside Redemption City to worshippers across the globe.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-amber-400 font-bold bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>1,420 Active Streamers</span>
            </div>
          </div>
        </div>

        {/* Video Player Frame Preview */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black relative flex items-center justify-center border border-white/10 group">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80"
            alt="Live Stream Sanctuary"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <button
            onClick={onOpenLive}
            className="absolute w-20 h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0F172A] flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform z-10"
          >
            <Play className="w-8 h-8 ml-1 fill-current" />
          </button>
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 bg-[#0F172A]/85 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs">
            <div>
              <span className="text-amber-400 font-bold">Now Airing / Next:</span>
              <div className="font-bold text-sm text-white">Sunday Celebration & Expression Service</div>
            </div>
            <span className="text-[11px] text-slate-400 font-medium">8:00 AM WAT • High Definition Audio/Video</span>
          </div>
        </div>
      </div>

      {/* BUILT-IN AUDIO SERMON PLAYER */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded">
              Current Audio Stream • {activeAudioSermon.ministry}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[#16243B] mt-1">
              {activeAudioSermon.title}
            </h3>
            <p className="text-xs text-slate-500 font-semibold">
              Speaker: {activeAudioSermon.preacher} ({activeAudioSermon.role})
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Playback speed toggle */}
            <button
              onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1)}
              className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
            >
              {playbackSpeed}x
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-amber-500 hover:bg-amber-400 text-[#0F172A] flex items-center justify-center shadow-lg transition-all"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* Progress bar simulation */}
        <div className="space-y-1.5">
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden relative cursor-pointer">
            <div
              className="bg-amber-500 h-full rounded-full transition-all duration-300"
              style={{ width: isPlaying ? '48%' : '25%' }}
            />
          </div>
          <div className="flex justify-between text-[11px] text-slate-400 font-bold">
            <span>{isPlaying ? '24:50' : '12:15'}</span>
            <span>{activeAudioSermon.duration}</span>
          </div>
        </div>

        {/* Audio takeaway snapshot */}
        <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-amber-900">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <span className="font-bold">Anchored Scripture:</span>
            <span>{activeAudioSermon.scripture}</span>
          </div>
          <button
            onClick={() => handleDownloadNotes(activeAudioSermon.title)}
            className="hover:underline font-bold flex items-center gap-1 text-amber-800"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Expository Notes</span>
          </button>
        </div>
      </div>

      {/* SERMON ARCHIVES CATALOG */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="font-serif font-bold text-2xl text-[#16243B]">Sermon Library & Outlines</h3>
            <p className="text-xs text-slate-500">
              Browse sound doctrinal teachings, youth fireside messages, and academic lectures.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search preacher, title, scripture..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 text-xs bg-white"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((filter) => {
            const isSelected = selectedFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#16243B] text-amber-400 shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded ${
                      sermon.ministry === 'Main Sanctuary'
                        ? 'bg-amber-100 text-amber-900'
                        : sermon.ministry === 'Youth Church'
                        ? 'bg-blue-100 text-blue-900'
                        : sermon.ministry === 'Teenagers Church'
                        ? 'bg-emerald-100 text-emerald-900'
                        : 'bg-purple-100 text-purple-900'
                    }`}
                  >
                    {sermon.ministry}
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold">{sermon.date}</span>
                </div>

                <h4 className="font-bold text-base text-[#16243B] leading-snug">{sermon.title}</h4>

                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">{sermon.preacher}</span> • {sermon.role}
                </div>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{sermon.summary}</p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>{sermon.scripture}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handlePlaySermon(sermon)}
                  className="bg-slate-100 hover:bg-amber-500 hover:text-[#0F172A] text-[#16243B] px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Listen Now</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedSermonDetail(sermon)}
                    className="text-slate-600 hover:text-[#16243B] px-3 py-1.5 text-xs font-bold"
                  >
                    Key Points
                  </button>
                  <button
                    onClick={() => handleDownloadNotes(sermon.title)}
                    className="bg-[#16243B] hover:bg-slate-800 text-amber-400 p-2 rounded-xl text-xs font-bold transition-all"
                    title="Download Notes"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Key Notes */}
      {selectedSermonDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl border border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded">
                  {selectedSermonDetail.ministry}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#16243B] mt-1.5">
                  {selectedSermonDetail.title}
                </h3>
                <p className="text-xs text-slate-500">{selectedSermonDetail.preacher}</p>
              </div>
              <button
                onClick={() => setSelectedSermonDetail(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
                Core Expository Points
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedSermonDetail.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handleDownloadNotes(selectedSermonDetail.title)}
              className="w-full bg-[#16243B] text-amber-400 font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-800"
            >
              <Download className="w-4 h-4" />
              <span>Download Full Study PDF</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
