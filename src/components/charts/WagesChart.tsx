'use client';

import PlotlyChart from './PlotlyChart';
import { weeklyWagesDistribution, summaryStats } from '@/data/gigWorkerData';
import { Data, Layout } from 'plotly.js';

export default function WagesChart() {
  const accentColor = '#D64545';

  const data: Data[] = [
    {
      type: 'bar',
      x: weeklyWagesDistribution.map((d) => d.wages),
      y: weeklyWagesDistribution.map((d) => d.count),
      marker: {
        color: accentColor,
      },
      text: weeklyWagesDistribution.map((d) => d.count.toString()),
      textposition: 'outside',
      textfont: {
        color: '#6B6B6B',
        size: 11,
        family: 'Source Sans 3, sans-serif',
      },
      hovertemplate: '<b>%{x}</b><br>%{y} workers<extra></extra>',
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
      color: '#1A1A1A',
      family: 'Source Sans 3, sans-serif',
    },
    margin: { t: 40, r: 20, b: 80, l: 40 },
    xaxis: {
      title: {
        text: 'Weekly wages',
        font: { size: 12, color: '#6B6B6B' },
        standoff: 15,
      },
      tickfont: { size: 11, color: '#6B6B6B' },
      tickangle: -35,
      gridcolor: 'transparent',
      linecolor: '#E5E5E5',
      linewidth: 1,
    },
    yaxis: {
      title: { text: '' },
      tickfont: { size: 11, color: '#6B6B6B' },
      gridcolor: '#F0F0F0',
      zeroline: false,
      linecolor: 'transparent',
    },
    hoverlabel: {
      bgcolor: '#FFFFFF',
      bordercolor: '#E5E5E5',
      font: { color: '#1A1A1A', size: 13 },
    },
    bargap: 0.3,
    annotations: [
      {
        x: 0.98,
        y: 0.95,
        xref: 'paper',
        yref: 'paper',
        text: `Median: <b>$${summaryStats.medianWeeklyWage}</b>/week`,
        showarrow: false,
        font: { color: '#1A1A1A', size: 12 },
        bgcolor: '#FFFFFF',
        bordercolor: '#E5E5E5',
        borderwidth: 1,
        borderpad: 6,
        xanchor: 'right',
      },
    ],
  };

  return (
    <PlotlyChart
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{ width: '100%', height: '300px' }}
    />
  );
}
