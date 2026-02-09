
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-green-600 tracking-tight text-base">
            The Living in Raleigh team
          </span>
        </div>
        <div className="text-slate-400 text-xs">
          &copy; {new Date().getFullYear()} Raleigh NC Guide. Local Insights & Relocation Expertise.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
