'use client';

import PlotlyChart from './PlotlyChart';
import { occupationData } from '@/data/gigWorkerData';
import { Data, Layout } from 'plotly.js';

interface OccupationChartProps {
  selectedOccupation?: string | null;
  onOccupationSelect?: (occupation: string | null) => void;
  limit?: number;
}

export default function OccupationChart({ 
  selectedOccupation, 
  onOccupationSelect,
  limit = 10 
}: OccupationChartProps) {
  const displayData = occupationData.slice(0, limit).reverse();
  const accentColor = '#D64545';
  const mutedColor = '#E5E5E5';
  
  const colors = displayData.map((d) =>
    selectedOccupation === null || selectedOccupation === d.occupation
      ? accentColor
      : mutedColor
  );

  const data: Data[] = [
    {
      type: 'bar',
      orientation: 'h',
      y: displayData.map((d) => d.occupation),
      x: displayData.map((d) => d.count),
      marker: {
        color: colors,
      },
      text: displayData.map((d) => `${d.count}`),
      textposition: 'outside',
      textfont: {
        color: '#6B6B6B',
        size: 11,
        family: 'Source Sans 3, sans-serif',
      },
      hovertemplate: '<b>%{y}</b><br>%{x} workers (%{customdata}%)<extra></extra>',
      customdata: displayData.map((d) => d.percentage),
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
      color: '#1A1A1A',
      family: 'Source Sans 3, sans-serif',
    },
    margin: { t: 10, r: 50, b: 40, l: 160 },
    xaxis: {
      title: { text: '' },
      tickfont: { size: 11, color: '#6B6B6B' },
      gridcolor: '#F0F0F0',
      zeroline: false,
      linecolor: 'transparent',
    },
    yaxis: {
      tickfont: { size: 12, color: '#1A1A1A' },
      gridcolor: 'transparent',
    },
    hoverlabel: {
      bgcolor: '#FFFFFF',
      bordercolor: '#E5E5E5',
      font: { color: '#1A1A1A', size: 13 },
    },
    bargap: 0.3,
  };

  return (
    <PlotlyChart
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{ width: '100%', height: '380px' }}
      onClick={(event) => {
        if (event.points && event.points[0]) {
          const clickedOcc = event.points[0].y as string;
          onOccupationSelect?.(selectedOccupation === clickedOcc ? null : clickedOcc);
        }
      }}
    />
  );
}
