
import React from 'react';

interface WishModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishModal: React.FC<WishModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const phoneNumber = '919550438100';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Happy%20Birthday%20Sai%20Baba!%20Wishing%20you%20an%20awesome%20day!`;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg p-8 max-w-md w-full text-center border-2 border-cyan-400 shadow-2xl relative animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-slate-500 hover:text-white transition-colors text-3xl font-light"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 className="text-3xl font-bold text-white mb-4">Top-Secret Mission!</h3>
        <p className="text-slate-400 mb-6">
          Your mission, should you choose to accept it, is to send a direct birthday transmission to the man of the hour. Standard communication channels are too slow. We must use the most direct route.
        </p>
        <div className="bg-slate-900 p-4 rounded-md mb-6 border border-slate-700">
            <p className="text-lg text-slate-400">Target's Personal Comms Link:</p>
            <p className="text-2xl font-mono font-bold text-cyan-400 tracking-widest">
                95504 38100
            </p>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          Message on WhatsApp
        </a>
        <p className="text-xs text-slate-600 mt-4">
          This message will self-destruct... after you send it. Maybe.
        </p>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
