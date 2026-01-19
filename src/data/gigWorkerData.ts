// Verified CPS May 2017 Contingent Worker Supplement Data
// Total Gig Workers: 462 (1.00% of 45,980 surveyed workforce)

export const summaryStats = {
  totalGigWorkers: 462,
  totalSurveyed: 45980,
  percentageOfWorkforce: 1.0,
  medianAge: 42,
  medianWorkHours: 40,
  meanWorkHours: 36.8,
  medianWeeklyWage: 600,
  meanWeeklyWage: 807.45,
  wageDataSampleSize: 63,
  workHoursSampleSize: 459,
};

export const ageDistribution = [
  { ageGroup: '16-24', count: 40, percentage: 8.7 },
  { ageGroup: '25-34', count: 104, percentage: 22.5 },
  { ageGroup: '35-44', count: 108, percentage: 23.4 },
  { ageGroup: '45-54', count: 107, percentage: 23.2 },
  { ageGroup: '55-64', count: 74, percentage: 16.0 },
  { ageGroup: '65+', count: 29, percentage: 6.3 },
];

export const occupationData = [
  { occupation: 'Transportation & Moving', count: 91, percentage: 19.7 },
  { occupation: 'Management', count: 47, percentage: 10.2 },
  { occupation: 'Arts, Design, Entertainment', count: 44, percentage: 9.5 },
  { occupation: 'Computer & Mathematical', count: 44, percentage: 9.5 },
  { occupation: 'Office & Admin Support', count: 41, percentage: 8.9 },
  { occupation: 'Personal Care & Service', count: 30, percentage: 6.5 },
  { occupation: 'Business & Financial', count: 29, percentage: 6.3 },
  { occupation: 'Sales', count: 29, percentage: 6.3 },
  { occupation: 'Healthcare Support', count: 21, percentage: 4.5 },
  { occupation: 'Education & Training', count: 21, percentage: 4.5 },
  { occupation: 'Building & Grounds Cleaning', count: 14, percentage: 3.0 },
  { occupation: 'Healthcare Practitioners', count: 13, percentage: 2.8 },
  { occupation: 'Community & Social Service', count: 8, percentage: 1.7 },
  { occupation: 'Architecture & Engineering', count: 7, percentage: 1.5 },
  { occupation: 'Food Preparation & Serving', count: 6, percentage: 1.3 },
];

export const employmentStatus = [
  { status: 'Employed - At Work', count: 459, percentage: 99.4 },
  { status: 'Employed - Absent', count: 3, percentage: 0.6 },
];

export const householdIncome = [
  { income: 'Under $10K', count: 26, percentage: 5.6 },
  { income: '$10K-$20K', count: 24, percentage: 5.2 },
  { income: '$20K-$30K', count: 46, percentage: 10.0 },
  { income: '$30K-$40K', count: 55, percentage: 11.9 },
  { income: '$40K-$60K', count: 73, percentage: 15.8 },
  { income: '$60K-$100K', count: 113, percentage: 24.5 },
  { income: '$100K+', count: 125, percentage: 27.1 },
];

// Work hours distribution (binned data for histogram)
export const workHoursDistribution = [
  { hours: '1-10', count: 35, midpoint: 5 },
  { hours: '11-20', count: 58, midpoint: 15 },
  { hours: '21-30', count: 59, midpoint: 25 },
  { hours: '31-39', count: 57, midpoint: 35 },
  { hours: '40', count: 144, midpoint: 40 },
  { hours: '41-50', count: 68, midpoint: 45 },
  { hours: '51-60', count: 29, midpoint: 55 },
  { hours: '61+', count: 9, midpoint: 70 },
];

// Weekly wages distribution (binned data for histogram)
export const weeklyWagesDistribution = [
  { wages: '$0-$200', count: 12, midpoint: 100 },
  { wages: '$201-$400', count: 13, midpoint: 300 },
  { wages: '$401-$600', count: 14, midpoint: 500 },
  { wages: '$601-$800', count: 6, midpoint: 700 },
  { wages: '$801-$1000', count: 6, midpoint: 900 },
  { wages: '$1001-$1500', count: 6, midpoint: 1250 },
  { wages: '$1501-$2000', count: 2, midpoint: 1750 },
  { wages: '$2001+', count: 4, midpoint: 2500 },
];

// Comparison data: Gig vs Non-Gig workers by age
export const ageComparison = [
  { ageGroup: '16-24', gigWorkers: 8.7, nonGigWorkers: 12.1 },
  { ageGroup: '25-34', gigWorkers: 22.5, nonGigWorkers: 21.8 },
  { ageGroup: '35-44', gigWorkers: 23.4, nonGigWorkers: 20.5 },
  { ageGroup: '45-54', gigWorkers: 23.2, nonGigWorkers: 21.2 },
  { ageGroup: '55-64', gigWorkers: 16.0, nonGigWorkers: 17.8 },
  { ageGroup: '65+', gigWorkers: 6.3, nonGigWorkers: 6.6 },
];

// Key insights for display
export const keyInsights = [
  {
    title: 'Transportation Dominates',
    description: 'Nearly 1 in 5 gig workers (19.7%) are in Transportation & Moving - reflecting rideshare drivers like Uber/Lyft.',
    icon: 'car',
  },
  {
    title: 'Prime Working Age',
    description: 'The 35-54 age group represents 46.6% of all gig workers, suggesting gig work appeals to experienced workers.',
    icon: 'users',
  },
  {
    title: 'Higher Income Households',
    description: '51.6% of gig workers come from households earning $60K+, indicating gig work often supplements existing income.',
    icon: 'dollar',
  },
  {
    title: 'Full-Time Hours',
    description: 'Despite "gig" label, the median work week is 40 hours - many treat this as full-time work.',
    icon: 'clock',
  },
];

// Data source information
export const dataSource = {
  name: 'Current Population Survey (CPS)',
  supplement: 'Contingent Worker Supplement',
  date: 'May 2017',
  source: 'U.S. Bureau of Labor Statistics & U.S. Census Bureau',
  icpsr: 'ICPSR 37191-V2',
  sampleSize: 148623,
  gigWorkerDefinition: 'Electronically mediated workers who find work through apps/websites (e.g., Uber, TaskRabbit, Upwork)',
};
