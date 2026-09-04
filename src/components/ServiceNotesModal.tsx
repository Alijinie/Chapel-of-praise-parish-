import React from 'react';
import { X, BookOpen, Download, Share2 } from 'lucide-react';

interface ServiceNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ServiceNotesModal: React.FC<ServiceNotesModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  if (!isOpen) return null;

  const handleCopyNotes = () => {
    const text = `RCBC Chapel of Praise - Holy Ghost Service Notes\nTheme: Raising Christ's Ambassadors\nScripture: 2 Corinthians 5:20, Isaiah 60:1\nLocation: Redemption City, Ogun State\n\nKey Exhortations:\n1. The Altar must remain ablaze through personal study and prayer.\n2. Doctrinal integrity in an evolving global culture.\n3. Every student-minister is sent as an ambassador to the nations.`;
    navigator.clipboard.writeText(text);
    onShowToast('Service notes copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden border border-stone-200 shadow-2xl space-y-4 p-6 text-stone-900 animate-fadeIn">
        <div className="flex justify-between items-start border-b border-stone-100 pb-3">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-[#80182a] uppercase">
              TONIGHT · SERVICE NOTES
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
              Holy Ghost Service
            </h3>
            <p className="text-xs text-stone-500">
              Redemption City · First Friday Gathering
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-sm text-stone-700 max-h-[60vh] overflow-y-auto pr-1">
          <div className="bg-[#f8f6f0] rounded-2xl p-4 border border-stone-200/60">
            <h4 className="font-serif font-bold text-base text-stone-900 mb-1">
              Chapel Exhortation & Focus
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              As the Bible College family joins millions across Redemption City and the global house, our corporate posture is consecrated anticipation.
            </p>
          </div>

          <div>
            <h5 className="font-serif font-bold text-sm text-stone-900">
              1. Scripture Foundation
            </h5>
            <p className="text-xs text-stone-600 mt-0.5">
              <em>"Now then we are ambassadors for Christ, as though God did beseech you by us..."</em> — 2 Corinthians 5:20
            </p>
          </div>

          <div>
            <h5 className="font-serif font-bold text-sm text-stone-900">
              2. Corporate Prayer Points
            </h5>
            <ul className="text-xs text-stone-600 space-y-1.5 mt-1 list-disc pl-4">
              <li>Fresh baptism of fire upon every student minister and classroom.</li>
              <li>Supernatural wisdom and revival across RCBC campus and faculty.</li>
              <li>Protection and divine direction for youth and teenagers this academic year.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-serif font-bold text-sm text-stone-900">
              3. Logistics & Fellowship
            </h5>
            <p className="text-xs text-stone-600 mt-0.5">
              Campus shuttles depart from the Chapel of Praise forecourt at 5:00 PM towards the Arena. Post-service debrief at 6:30 AM Saturday.
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-2 border-t border-stone-100">
          <button
            onClick={handleCopyNotes}
            className="flex-1 py-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 font-medium text-xs text-stone-700 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Copy Notes</span>
          </button>

          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-[#80182a] hover:bg-[#6e1423] text-white font-medium text-xs transition-colors text-center"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
