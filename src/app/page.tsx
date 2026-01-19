'use client';

import { useState } from 'react';
import { 
  Database,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

import {
  AgeDistributionChart,
  OccupationChart,
  IncomeChart,
  WorkHoursChart,
  WagesChart,
  EmploymentStatusChart,
  AgeComparisonChart,
} from '@/components/charts';

import { summaryStats, keyInsights, dataSource } from '@/data/gigWorkerData';

export default function Dashboard() {
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const [selectedOccupation, setSelectedOccupation] = useState<string | null>(null);
  const [selectedIncome, setSelectedIncome] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-stone-500 uppercase tracking-widest">
              Data Analysis
            </div>
            <a 
              href="https://www.icpsr.umich.edu/web/ICPSR/studies/37191"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-stone-500 hover:text-red-600 transition-colors"
            >
              <Database className="w-4 h-4" />
              <span>Source Data</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <p className="text-red-600 font-medium text-sm uppercase tracking-widest mb-4">
            Labor & Economy
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-stone-900 leading-tight max-w-4xl">
            Who Are America&apos;s Gig Workers?
          </h1>
          <p className="mt-6 text-xl text-stone-600 max-w-2xl leading-relaxed">
            An analysis of {summaryStats.totalGigWorkers.toLocaleString()} electronically mediated workers 
            from the U.S. Census Bureau&apos;s Current Population Survey
          </p>
          <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">
            <span>May 2017</span>
            <span className="w-1 h-1 rounded-full bg-stone-300" />
            <span>Bureau of Labor Statistics</span>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="bg-white border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold text-red-600">
                {summaryStats.totalGigWorkers}
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Gig workers identified
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
                {summaryStats.percentageOfWorkforce}%
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Of surveyed workforce
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
                {summaryStats.medianAge}
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Median age in years
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl font-semibold text-stone-900">
                ${summaryStats.medianWeeklyWage}
              </p>
              <p className="mt-2 text-sm text-stone-600">
                Median weekly wage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Age Distribution */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-stone-900">
              Age Distribution
            </h2>
            <p className="mt-2 text-stone-600 max-w-2xl">
              Most gig workers are in their prime working years, with the 35–54 age group 
              representing nearly half of all electronically mediated workers.
            </p>
          </div>
          <div className="bg-white border border-stone-200 p-6 md:p-8">
            <AgeDistributionChart 
              selectedAge={selectedAge}
              onAgeSelect={setSelectedAge}
            />
          </div>
        </section>

        {/* Two Column: Occupation & Income */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-semibold text-stone-900">
                Top Occupations
              </h2>
              <p className="mt-2 text-stone-600">
                Transportation dominates, driven by rideshare platforms like Uber and Lyft.
              </p>
            </div>
            <div className="bg-white border border-stone-200 p-6">
              <OccupationChart 
                selectedOccupation={selectedOccupation}
                onOccupationSelect={setSelectedOccupation}
                limit={8}
              />
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-semibold text-stone-900">
                Household Income
              </h2>
              <p className="mt-2 text-stone-600">
                Over half come from households earning $60K+, suggesting supplemental income.
              </p>
            </div>
            <div className="bg-white border border-stone-200 p-6">
              <IncomeChart 
                selectedIncome={selectedIncome}
                onIncomeSelect={setSelectedIncome}
              />
            </div>
          </div>
        </section>

        {/* Work Hours */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-stone-900">
              Weekly Work Hours
            </h2>
            <p className="mt-2 text-stone-600 max-w-2xl">
              Despite the &quot;gig&quot; label suggesting part-time flexibility, the median gig worker 
              puts in a full 40-hour work week.
            </p>
          </div>
          <div className="bg-white border border-stone-200 p-6 md:p-8">
            <WorkHoursChart />
          </div>
        </section>

        {/* Two Column: Employment & Wages */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-stone-900">
                Employment Status
              </h2>
            </div>
            <div className="bg-white border border-stone-200 p-6">
              <EmploymentStatusChart />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-semibold text-stone-900">
                Weekly Wages
              </h2>
              <p className="mt-2 text-stone-600 text-sm">
                Based on {summaryStats.wageDataSampleSize} workers with available wage data
              </p>
            </div>
            <div className="bg-white border border-stone-200 p-6">
              <WagesChart />
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-semibold text-stone-900">
              Gig vs. Non-Gig Workers
            </h2>
            <p className="mt-2 text-stone-600 max-w-2xl">
              Comparing age distributions reveals gig workers skew slightly older, 
              with stronger representation in the 35–54 age range.
            </p>
          </div>
          <div className="bg-white border border-stone-200 p-6 md:p-8">
            <AgeComparisonChart />
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 mb-8">
            Key Takeaways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyInsights.map((insight, index) => (
              <div 
                key={insight.title}
                className="flex gap-4 p-6 bg-white border border-stone-200"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-serif font-semibold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-1">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-3">
                About This Data
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                This analysis uses data from the <strong>Current Population Survey (CPS)</strong>, 
                specifically the May 2017 Contingent Worker Supplement. The survey was conducted by 
                the U.S. Census Bureau for the Bureau of Labor Statistics.
              </p>
              <p className="text-sm text-stone-500">
                Gig workers are defined as those who find work through electronic platforms 
                such as Uber, TaskRabbit, and Upwork.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-stone-900 mb-3">
                Source
              </h4>
              <p className="text-sm text-stone-600 mb-2">
                ICPSR Study #37191
              </p>
              <a
                href="https://www.icpsr.umich.edu/web/ICPSR/studies/37191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                View original dataset
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone-200 text-center text-sm text-stone-400">
            Data from {dataSource.sampleSize.toLocaleString()} survey records • May 2017
          </div>
        </div>
      </footer>
    </div>
  );
}
