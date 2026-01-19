'use client';

import { motion } from 'framer-motion';
import { Car, Users, DollarSign, Clock, LucideIcon } from 'lucide-react';

interface InsightCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  car: Car,
  users: Users,
  dollar: DollarSign,
  clock: Clock,
};

export default function InsightCard({ title, description, icon, index }: InsightCardProps) {
  const Icon = iconMap[icon] || Users;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ x: 4 }}
      className="group flex gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5 text-cyan-400" />
      </div>
      <div>
        <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-400 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
