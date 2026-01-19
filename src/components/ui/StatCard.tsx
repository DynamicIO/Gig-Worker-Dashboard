'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  color?: 'cyan' | 'purple' | 'amber' | 'rose' | 'emerald';
  delay?: number;
}

const colorClasses = {
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    icon: 'text-cyan-400',
    value: 'text-cyan-400',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    icon: 'text-purple-400',
    value: 'text-purple-400',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    icon: 'text-amber-400',
    value: 'text-amber-400',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    icon: 'text-rose-400',
    value: 'text-rose-400',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    icon: 'text-emerald-400',
    value: 'text-emerald-400',
  },
};

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  color = 'cyan',
  delay = 0 
}: StatCardProps) {
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl ${colors.bg} border ${colors.border} p-6 backdrop-blur-sm`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full" />
      
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</p>
          <p className={`text-3xl font-bold ${colors.value}`}>{value}</p>
          {subtitle && (
            <p className="text-sm text-slate-500">{subtitle}</p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colors.bg} border ${colors.border}`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
      </div>
    </motion.div>
  );
}
