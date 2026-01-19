'use client';

import dynamic from 'next/dynamic';
import { ComponentProps } from 'react';

const Plot = dynamic(() => import('react-plotly.js'), { 
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full min-h-[300px]">
      <div className="animate-pulse flex flex-col items-center gap-2">
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-400 text-sm">Loading chart...</span>
      </div>
    </div>
  ),
});

type PlotlyChartProps = ComponentProps<typeof Plot>;

export default function PlotlyChart(props: PlotlyChartProps) {
  return <Plot {...props} />;
}
