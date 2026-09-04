import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 transform transition-all duration-300 max-w-md w-[92%] sm:w-auto animate-bounce">
      <div className="px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1B2A4A]/95 border border-[#D4AF37]/40 backdrop-blur-md">
        <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
        <span className="leading-snug">{message}</span>
      </div>
    </div>
  );
};
