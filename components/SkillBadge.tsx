
import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
      {skill}
    </span>
  );
};
