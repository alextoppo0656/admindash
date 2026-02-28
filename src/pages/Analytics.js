import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement,
  PointElement, LineElement,
  Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import './GenericPage.css';
import './Analytics.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const chartFont = { family: "'Outfit', sans-serif", size: 12 };

const weeklyOrders = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
    label: 'Orders',
    data: [42, 58, 47, 71, 85, 96, 63],
    backgroundColor: 'rgba(212,85,10,0.15)',
    borderColor: '#d4550a',
    borderWidth: 2,
    borderRadius: 6,
    borderSkipped: false,
  }]
};

const conversionData = {
  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  datasets: [{
    label: 'Conversion Rate %',
    data: [2.1, 2.4, 2.2, 2.8, 3.1, 3.4, 3.7],
    borderColor: '#16a34a',
    backgroundColor: (ctx) => {
      const chart = ctx.chart;
      const { ctx: c2, chartArea } = chart;
      if (!chartArea) return 'transparent';
      const g = c2.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
      g.addColorStop(0, 'rgba(22,163,74,0.15)');
      g.addColorStop(1, 'rgba(22,163,74,0)');
      return g;
    },
    fill: true,
    tension: 0.4,
    pointRadius: 4,
    pointBackgroundColor: '#16a34a',
    borderWidth: 2.5,
  }]
};

const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

const baseOpts = () => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: isDark() ? '#1c1b19' : '#fff',
      borderColor: isDark() ? '#2e2d29' : '#e8e6df',
      borderWidth: 1,
      titleColor: isDark() ? '#f0ede6' : '#1a1916',
      bodyColor: isDark() ? '#9e9c94' : '#6b6a65',
      titleFont: { ...chartFont, weight: '600' },
      bodyFont: chartFont,
      padding: 10,
    }
  },
  scales: {
    x: { grid: { display: false }, ticks: { font: chartFont, color: isDark() ? '#6a6860' : '#a8a79f' } },
    y: {
      grid: { color: isDark() ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' },
      ticks: { font: chartFont, color: isDark() ? '#6a6860' : '#a8a79f' }
    }
  }
});

const analyticsKpis = [
  { label: 'Page Views',     value: '1,24,830', change: '+18%', up: true  },
  { label: 'Sessions',       value: '48,201',   change: '+12%', up: true  },
  { label: 'Bounce Rate',    value: '38.4%',    change: '-3%',  up: true  },
  { label: 'Avg. Duration',  value: '3m 42s',   change: '+8%',  up: true  },
];

export default function Analytics() {
  return (
    <div className="page-content fade-up">
      {/* mini KPIs */}
      <div className="ana-kpis">
        {analyticsKpis.map(k => (
          <div className="ana-kpi page-card" key={k.label}>
            <p className="ana-kpi-label">{k.label}</p>
            <p className="ana-kpi-value">{k.value}</p>
            <span className={`ana-kpi-change ${k.up ? 'up' : 'down'}`}>{k.change} this month</span>
          </div>
        ))}
      </div>

      <div className="ana-charts">
        <div className="page-card ana-chart">
          <div className="ana-chart-header">
            <h3 className="chart-title">Weekly Orders</h3>
            <p className="chart-sub">This week</p>
          </div>
          <div style={{ height: 240, padding: '12px 16px 16px' }}>
            <Bar data={weeklyOrders} options={baseOpts()} />
          </div>
        </div>

        <div className="page-card ana-chart">
          <div className="ana-chart-header">
            <h3 className="chart-title">Conversion Rate</h3>
            <p className="chart-sub">Last 7 months</p>
          </div>
          <div style={{ height: 240, padding: '12px 16px 16px' }}>
            <Line data={conversionData} options={baseOpts()} />
          </div>
        </div>
      </div>

      <div className="page-card">
        <div className="ana-chart-header" style={{ padding: '18px 20px 14px' }}>
          <h3 className="chart-title">Top Products by Revenue</h3>
          <p className="chart-sub">Current month</p>
        </div>
        <div className="top-products-list">
          {[
            { name: 'MacBook Air M2',         revenue: 114900, pct: 94 },
            { name: 'Samsung Galaxy S24',      revenue: 74999,  pct: 61 },
            { name: 'Canon EOS M50 Mark II',   revenue: 54900,  pct: 45 },
            { name: 'Apple AirPods Pro 2',     revenue: 24900,  pct: 20 },
            { name: 'Sony WH-1000XM5',         revenue: 32999,  pct: 27 },
          ].map((p, i) => (
            <div key={p.name} className="top-product-row">
              <span className="tp-rank">#{i + 1}</span>
              <span className="tp-name">{p.name}</span>
              <div className="tp-bar-wrap">
                <div className="tp-bar" style={{ width: `${p.pct}%` }} />
              </div>
              <span className="tp-revenue">₹{p.revenue.toLocaleString('en-IN')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
