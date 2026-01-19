# Gig Worker Analytics Dashboard

An interactive, modern dashboard visualizing gig worker data from the U.S. Census Bureau's Current Population Survey (CPS) May 2017 Contingent Worker Supplement.

![Dashboard Preview](preview.png)

## 🚀 Features

- **Interactive Charts**: Click, hover, and explore data with Plotly.js
- **Modern UI**: Built with Next.js 14, Tailwind CSS, and Framer Motion
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Theme**: Professional dark mode aesthetic
- **Real Data**: Verified statistics from ICPSR 37191

## 📊 Data Visualizations

- **Age Distribution**: Demographics of gig workers by age group
- **Top Occupations**: Transportation, tech, arts, and more
- **Household Income**: Income distribution across brackets
- **Work Hours**: Weekly hours distribution with 40-hour benchmark
- **Weekly Wages**: Earnings distribution with mean/median
- **Employment Status**: Active employment rates
- **Gig vs Non-Gig Comparison**: Age demographics compared

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Plotly.js with react-plotly.js
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd gig-worker-dashboard

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment on Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with default settings

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📈 Data Source

- **Survey**: Current Population Survey (CPS)
- **Supplement**: Contingent Worker Supplement
- **Date**: May 2017
- **Source**: U.S. Bureau of Labor Statistics & U.S. Census Bureau
- **ICPSR Study**: 37191-V2
- **Sample Size**: 148,623 records (462 gig workers identified)

## 🔍 Key Findings

| Metric | Value |
|--------|-------|
| Total Gig Workers | 462 (1.0% of workforce) |
| Median Age | 42 years |
| Median Work Hours | 40 hrs/week |
| Median Weekly Wage | $600 |
| Top Occupation | Transportation & Moving (19.7%) |

## 📄 License

MIT License - feel free to use this for your own projects!

## 🙏 Acknowledgments

Data provided by the Inter-university Consortium for Political and Social Research (ICPSR).
