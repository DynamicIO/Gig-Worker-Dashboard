'use client';

import PlotlyChart from './PlotlyChart';
import { ageDistribution } from '@/data/gigWorkerData';
import { Data, Layout } from 'plotly.js';

interface AgeDistributionChartProps {
  selectedAge?: string | null;
  onAgeSelect?: (age: string | null) => void;
}

export default function AgeDistributionChart({ selectedAge, onAgeSelect }: AgeDistributionChartProps) {
  const accentColor = '#D64545';
  const mutedColor = '#E5E5E5';
  
  const colors = ageDistribution.map((d) =>
    selectedAge === null || selectedAge === d.ageGroup
      ? accentColor
      : mutedColor
  );

  const data: Data[] = [
    {
      type: 'bar',
      x: ageDistribution.map((d) => d.ageGroup),
      y: ageDistribution.map((d) => d.count),
      marker: {
        color: colors,
      },
      text: ageDistribution.map((d) => `${d.count}`),
      textposition: 'outside',
      textfont: {
        color: '#6B6B6B',
        size: 12,
        family: 'Source Sans 3, sans-serif',
      },
      hovertemplate: '<b>%{x}</b><br>%{y} workers (%{customdata}%)<extra></extra>',
      customdata: ageDistribution.map((d) => d.percentage),
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
      color: '#1A1A1A',
      family: 'Source Sans 3, sans-serif',
    },
    margin: { t: 30, r: 20, b: 50, l: 50 },
    xaxis: {
      title: { text: '' },
      tickfont: { size: 13, color: '#6B6B6B' },
      gridcolor: 'transparent',
      linecolor: '#E5E5E5',
      linewidth: 1,
    },
    yaxis: {
      title: { text: '' },
      tickfont: { size: 12, color: '#6B6B6B' },
      gridcolor: '#F0F0F0',
      zeroline: false,
      linecolor: 'transparent',
    },
    hoverlabel: {
      bgcolor: '#FFFFFF',
      bordercolor: '#E5E5E5',
      font: { color: '#1A1A1A', size: 13 },
    },
    bargap: 0.4,
  };

  return (
    <PlotlyChart
      data={data}
      layout={layout}
      config={{
        displayModeBar: true,
        modeBarButtonsToRemove: ['pan2d', 'select2d', 'lasso2d', 'autoScale2d', 'zoom2d'],
        displaylogo: false,
        responsive: true,
      }}
      style={{ width: '100%', height: '350px' }}
      onClick={(event) => {
        if (event.points && event.points[0]) {
          const clickedAge = event.points[0].x as string;
          onAgeSelect?.(selectedAge === clickedAge ? null : clickedAge);
        }
      }}
    />
  );
}
