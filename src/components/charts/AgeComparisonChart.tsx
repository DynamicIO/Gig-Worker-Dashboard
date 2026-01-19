'use client';

import PlotlyChart from './PlotlyChart';
import { ageComparison } from '@/data/gigWorkerData';
import { Data, Layout } from 'plotly.js';

export default function AgeComparisonChart() {
  const data: Data[] = [
    {
      type: 'bar',
      name: 'Gig Workers',
      x: ageComparison.map((d) => d.ageGroup),
      y: ageComparison.map((d) => d.gigWorkers),
      marker: {
        color: '#D64545',
      },
      hovertemplate: '<b>Gig Workers</b><br>%{x}: %{y}%<extra></extra>',
    },
    {
      type: 'bar',
      name: 'Non-Gig Workers',
      x: ageComparison.map((d) => d.ageGroup),
      y: ageComparison.map((d) => d.nonGigWorkers),
      marker: {
        color: '#E5E5E5',
      },
      hovertemplate: '<b>Non-Gig Workers</b><br>%{x}: %{y}%<extra></extra>',
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
      color: '#1A1A1A',
      family: 'Source Sans 3, sans-serif',
    },
    margin: { t: 40, r: 20, b: 50, l: 50 },
    barmode: 'group',
    xaxis: {
      title: { text: '' },
      tickfont: { size: 12, color: '#6B6B6B' },
      gridcolor: 'transparent',
      linecolor: '#E5E5E5',
      linewidth: 1,
    },
    yaxis: {
      title: {
        text: 'Percentage',
        font: { size: 12, color: '#6B6B6B' },
      },
      tickfont: { size: 11, color: '#6B6B6B' },
      ticksuffix: '%',
      gridcolor: '#F0F0F0',
      zeroline: false,
      linecolor: 'transparent',
    },
    legend: {
      orientation: 'h',
      yanchor: 'bottom',
      y: 1.02,
      xanchor: 'left',
      x: 0,
      font: { size: 12, color: '#6B6B6B' },
    },
    hoverlabel: {
      bgcolor: '#FFFFFF',
      bordercolor: '#E5E5E5',
      font: { color: '#1A1A1A', size: 13 },
    },
    bargap: 0.3,
    bargroupgap: 0.1,
  };

  return (
    <PlotlyChart
      data={data}
      layout={layout}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{ width: '100%', height: '350px' }}
    />
  );
}
