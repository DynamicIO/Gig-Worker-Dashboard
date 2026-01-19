'use client';

import PlotlyChart from './PlotlyChart';
import { employmentStatus } from '@/data/gigWorkerData';
import { Data, Layout } from 'plotly.js';

export default function EmploymentStatusChart() {
  const displayData = [...employmentStatus].reverse();
  const accentColor = '#D64545';
  const lightColor = '#F5D0D0';

  const data: Data[] = [
    {
      type: 'bar',
      orientation: 'h',
      y: displayData.map((d) => d.status.replace('Employed - ', '')),
      x: displayData.map((d) => d.count),
      marker: {
        color: [lightColor, accentColor],
      },
      text: displayData.map((d) => `${d.count} (${d.percentage}%)`),
      textposition: 'inside',
      insidetextanchor: 'middle',
      textfont: {
        color: ['#D64545', '#FFFFFF'],
        size: 13,
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
    margin: { t: 10, r: 20, b: 30, l: 70 },
    xaxis: {
      title: { text: '' },
      tickfont: { size: 11, color: '#6B6B6B' },
      gridcolor: '#F0F0F0',
      zeroline: false,
      linecolor: 'transparent',
      range: [0, 500],
    },
    yaxis: {
      tickfont: { size: 13, color: '#1A1A1A' },
      gridcolor: 'transparent',
    },
    hoverlabel: {
      bgcolor: '#FFFFFF',
      bordercolor: '#E5E5E5',
      font: { color: '#1A1A1A', size: 13 },
    },
    bargap: 0.5,
  };

  return (
    <PlotlyChart
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{ width: '100%', height: '150px' }}
    />
  );
}
