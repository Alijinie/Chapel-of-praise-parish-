import React, { useState } from 'react';
import { Radio, X, Volume2, Users, MessageSquare, Send, Heart } from 'lucide-react';
import { CHURCH_INFO } from '../data';

interface LiveStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToGiving: () => void;
}

export const LiveStreamModal: React.FC<LiveStreamModalProps> = ({
  isOpen,
  onClose,
  onGoToGiving
}) => {
  const [chatMessage, setChatMessage] = useState('');
  const [comments, setComments] = useState<string[]>([
    'Sis. Mary (Lagos): Hallelujah! Watching live from Ikeja.',
    'Bro. Joshua (RCBC Scholar): Amen! The presence of God is heavy in the sanctuary.',
    'Pastor David (London): Blessed worship from Christ Ambassadors Road!'
  ]);

  if (!isOpen) return null;

  const handleSendComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setComments((prev) => [...prev, `You: ${chatMessage.trim()}`]);
    setChatMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0F172A] text-white rounded-3xl shadow-2xl overflow-hidden border border-amber-500/30 flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 flex justify-between items-center border-b border-white/10 bg-[#16243B]/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-amber-400">
                RCBC Chapel of Praise • Live Service Broadcast
              </h3>
              <p className="text-[11px] text-slate-400">
                Christ's Ambassadors Road, Redemption City • Worldwide Feed
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          <div className="lg:col-span-8 p-4 flex flex-col justify-between space-y-4">
            <div className="aspect-video w-full rounded-2xl bg-black overflow-hidden flex items-center justify-center relative border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80"
                alt="Sanctuary Stream"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <Radio className="w-12 h-12 text-amber-400 animate-pulse mb-2" />
                <span className="font-serif font-bold text-lg text-white">Live Stream Active</span>
                <span className="text-xs text-slate-300 max-w-sm mt-1">
                  Broadcasting live praise, expository word, and apostolic intercession.
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                <span>ON AIR</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
              <div className="space-y-0.5">
                <span className="text-amber-400 font-bold">Series:</span>
                <div className="font-bold text-white text-sm">The Ambassador Mandate (2 Corinthians 5:20)</div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onGoToGiving();
                }}
                className="bg-amber-500 hover:bg-amber-400 text-[#0F172A] px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Give Online Offering</span>
              </button>
            </div>
          </div>

          {/* Simulated Fellowship Chat */}
          <div className="lg:col-span-4 bg-slate-900/90 border-t lg:border-t-0 lg:border-l border-white/10 p-4 flex flex-col justify-between max-h-80 lg:max-h-none">
            <div className="space-y-3 flex-1 overflow-y-auto">
              <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Fellowship Live Chat</span>
              </div>

              <div className="space-y-2 text-xs">
                {comments.map((msg, idx) => (
                  <div key={idx} className="bg-white/5 p-2.5 rounded-xl border border-white/5 leading-relaxed text-slate-300 text-[11px]">
                    {msg}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSendComment} className="pt-3 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Share your Amen or prayer..."
                className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-[#0F172A] p-2 rounded-xl text-xs font-bold"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
