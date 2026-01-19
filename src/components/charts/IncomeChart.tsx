'use client';

import PlotlyChart from './PlotlyChart';
import { householdIncome } from '@/data/gigWorkerData';
import { Data, Layout } from 'plotly.js';

interface IncomeChartProps {
  selectedIncome?: string | null;
  onIncomeSelect?: (income: string | null) => void;
}

export default function IncomeChart({ selectedIncome, onIncomeSelect }: IncomeChartProps) {
  const accentColor = '#D64545';
  const mutedColor = '#E5E5E5';

  const colors = householdIncome.map((d) =>
    selectedIncome === null || selectedIncome === d.income
      ? accentColor
      : mutedColor
  );

  const data: Data[] = [
    {
      type: 'bar',
      x: householdIncome.map((d) => d.income),
      y: householdIncome.map((d) => d.count),
      marker: {
        color: colors,
      },
      text: householdIncome.map((d) => `${d.count}`),
      textposition: 'outside',
      textfont: {
        color: '#6B6B6B',
        size: 11,
        family: 'Source Sans 3, sans-serif',
      },
      hovertemplate: '<b>%{x}</b><br>%{y} workers (%{customdata}%)<extra></extra>',
      customdata: householdIncome.map((d) => d.percentage),
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
      color: '#1A1A1A',
      family: 'Source Sans 3, sans-serif',
    },
    margin: { t: 30, r: 20, b: 80, l: 50 },
    xaxis: {
      title: { text: '' },
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
    bargap: 0.35,
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
          const clickedIncome = event.points[0].x as string;
          onIncomeSelect?.(selectedIncome === clickedIncome ? null : clickedIncome);
        }
      }}
    />
  );
}
