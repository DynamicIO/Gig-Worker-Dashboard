'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Info } from 'lucide-react';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
  info?: string;
}

export default function ChartCard({ 
  title, 
  subtitle, 
  children, 
  className = '',
  delay = 0,
  info
}: ChartCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm ${className}`}
    >
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
      
      {/* Header */}
      <div className="p-6 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {subtitle && (
              <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
            )}
          </div>
          {info && (
            <div className="group relative">
              <Info className="w-5 h-5 text-slate-500 hover:text-slate-300 cursor-help transition-colors" />
              <div className="absolute right-0 top-8 w-64 p-3 bg-slate-900 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <p className="text-sm text-slate-300">{info}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Chart content */}
      <div className="p-4 pt-0">
        {children}
      </div>
    </motion.div>
  );
}
