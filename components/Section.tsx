import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-10">
      <h2 className="inline-block cursor-pointer text-2xl font-bold text-white border-b-2 border-cyan-400 pb-2 mb-6 transition-transform duration-300 ease-in-out hover:-rotate-2 hover:scale-105 origin-bottom-left">
        {title}
      </h2>
      {children}
    </section>
  );
};