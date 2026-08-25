import { type ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/2 border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-colors group">
      <div className="bg-white/5 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#8AB4F8]/10 transition-colors">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
