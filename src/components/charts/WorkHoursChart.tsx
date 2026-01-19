'use client';

import PlotlyChart from './PlotlyChart';
import { Data, Layout } from 'plotly.js';

const workHoursData = [
  { range: '1-10', count: 35 },
  { range: '11-20', count: 58 },
  { range: '21-30', count: 59 },
  { range: '31-39', count: 57 },
  { range: '40', count: 144 },
  { range: '41-50', count: 68 },
  { range: '51-60', count: 29 },
  { range: '61+', count: 9 },
];

export default function WorkHoursChart() {
  const accentColor = '#D64545';
  
  // Highlight the 40-hour bar more prominently
  const colors = workHoursData.map((d) => 
    d.range === '40' ? accentColor : '#E8B4B4'
  );

  const data: Data[] = [
    {
      type: 'bar',
      x: workHoursData.map((d) => d.range),
      y: workHoursData.map((d) => d.count),
      marker: {
        color: colors,
      },
      text: workHoursData.map((d) => d.count.toString()),
      textposition: 'outside',
      textfont: {
        color: '#6B6B6B',
        size: 12,
        family: 'Source Sans 3, sans-serif',
      },
      hovertemplate: '<b>%{x} hours/week</b><br>%{y} workers<extra></extra>',
    },
  ];

  const layout: Partial<Layout> = {
    paper_bgcolor: 'transparent',
    plot_bgcolor: 'transparent',
    font: {
      color: '#1A1A1A',
      family: 'Source Sans 3, sans-serif',
    },
    margin: { t: 50, r: 30, b: 70, l: 50 },
    xaxis: {
      title: {
        text: 'Hours per week',
        font: { size: 13, color: '#6B6B6B' },
        standoff: 20,
      },
      tickfont: { size: 12, color: '#6B6B6B' },
      tickangle: 0,
      gridcolor: 'transparent',
      linecolor: '#E5E5E5',
      linewidth: 1,
    },
    yaxis: {
      title: {
        text: 'Number of workers',
        font: { size: 13, color: '#6B6B6B' },
      },
      tickfont: { size: 11, color: '#6B6B6B' },
      gridcolor: '#F0F0F0',
      zeroline: false,
      linecolor: 'transparent',
      range: [0, 170],
    },
    hoverlabel: {
      bgcolor: '#FFFFFF',
      bordercolor: '#E5E5E5',
      font: { color: '#1A1A1A', size: 13 },
    },
    bargap: 0.25,
    annotations: [
      {
        x: '40',
        y: 155,
        text: '<b>40 hrs = Median</b>',
        showarrow: true,
        arrowhead: 2,
        arrowsize: 1,
        arrowwidth: 1.5,
        arrowcolor: '#D64545',
        ax: 0,
        ay: -25,
        font: { color: '#D64545', size: 11 },
        xanchor: 'center',
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
      style={{ width: '100%', height: '380px' }}
    />
  );
}
