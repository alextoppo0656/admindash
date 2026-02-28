import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement,
  Title, Tooltip, Legend, Filler
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import KpiCard from '../components/KpiCard';
import OrdersTable from '../components/OrdersTable';
import { kpis, revenueData, categoryData, trafficData } from '../data/mockData';
import './Overview.css';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Title, Tooltip, Legend, Filler
);

// Shared chart defaults
const chartFont = { family: "'Outfit', sans-serif", size: 12 };

function useChartColors() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return {
    gridColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    tickColor: isDark ? '#6a6860' : '#a8a79f',
    tooltipBg: isDark ? '#1c1b19' : '#ffffff',
    tooltipBorder: isDark ? '#2e2d29' : '#e8e6df',
    tooltipText: isDark ? '#f0ede6' : '#1a1916',
  };
}

export default function Overview() {
  const c = useChartColors();

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top', labels: { font: chartFont, color: c.tickColor, boxWidth: 10, padding: 16 } },
      tooltip: {
        backgroundColor: c.tooltipBg,
        borderColor: c.tooltipBorder,
        borderWidth: 1,
        titleColor: c.tooltipText,
        bodyColor: c.tickColor,
        titleFont: { ...chartFont, weight: '600' },
        bodyFont: chartFont,
        padding: 10,
        callbacks: {
          label: ctx => ` ₹${ctx.parsed.y.toLocaleString('en-IN')}`
        }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: chartFont, color: c.tickColor } },
      y: {
        grid: { color: c.gridColor },
        ticks: {
          font: chartFont,
          color: c.tickColor,
          callback: v => '₹' + (v >= 100000 ? (v / 100000).toFixed(1) + 'L' : v.toLocaleString('en-IN'))
        }
      }
    }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: c.tooltipBg,
        borderColor: c.tooltipBorder,
        borderWidth: 1,
        titleColor: c.tooltipText,
        bodyColor: c.tickColor,
        titleFont: { ...chartFont, weight: '600' },
        bodyFont: chartFont,
        padding: 10,
        callbacks: { label: ctx => ` ₹${ctx.parsed.y.toLocaleString('en-IN')}` }
      }
    },
    scales: {
      x: { grid: { display: false }, ticks: { font: chartFont, color: c.tickColor } },
      y: {
        grid: { color: c.gridColor },
        ticks: {
          font: chartFont,
          color: c.tickColor,
          callback: v => '₹' + (v >= 100000 ? (v / 100000).toFixed(0) + 'L' : v.toLocaleString('en-IN'))
        }
      }
    }
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: {
      legend: { position: 'bottom', labels: { font: chartFont, color: c.tickColor, boxWidth: 10, padding: 12 } },
      tooltip: {
        backgroundColor: c.tooltipBg,
        borderColor: c.tooltipBorder,
        borderWidth: 1,
        titleColor: c.tooltipText,
        bodyColor: c.tickColor,
        titleFont: { ...chartFont, weight: '600' },
        bodyFont: chartFont,
        padding: 10,
        callbacks: { label: ctx => ` ${ctx.parsed}%` }
      }
    }
  };

  // Line chart dataset styles
  const lineDataset = {
    ...revenueData,
    datasets: [
      {
        ...revenueData.datasets[0],
        borderColor: '#d4550a',
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: c2, chartArea } = chart;
          if (!chartArea) return 'transparent';
          const gradient = c2.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(212,85,10,0.18)');
          gradient.addColorStop(1, 'rgba(212,85,10,0)');
          return gradient;
        },
        pointRadius: 3,
        pointBackgroundColor: '#d4550a',
        borderWidth: 2.5,
      },
      {
        ...revenueData.datasets[1],
        borderColor: '#2563eb',
        backgroundColor: 'transparent',
        borderDash: [4, 4],
        pointRadius: 3,
        pointBackgroundColor: '#2563eb',
        borderWidth: 2,
      }
    ]
  };

  const barDataset = {
    ...categoryData,
    datasets: [{
      ...categoryData.datasets[0],
      backgroundColor: ['#d4550a', '#e97c3a', '#f4a46b', '#f9c49d', '#fde3cc', '#fff0e6'],
      borderRadius: 6,
      borderSkipped: false,
    }]
  };

  const doughnutDataset = {
    ...trafficData,
    datasets: [{
      ...trafficData.datasets[0],
      backgroundColor: ['#d4550a', '#2563eb', '#16a34a', '#d97706', '#6b7280'],
      borderWidth: 0,
      hoverOffset: 4,
    }]
  };

  return (
    <div className="overview">
      {/* KPI Grid */}
      <div className="kpi-grid">
        {kpis.map((kpi, i) => (
          <KpiCard key={kpi.id} kpi={kpi} delay={i * 0.07} />
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="charts-row">
        <div className="chart-card chart-wide fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Revenue Trend</h3>
              <p className="chart-sub">Last 7 months</p>
            </div>
            <div className="chart-legend-custom">
              <span className="legend-dot" style={{ background: '#d4550a' }} />Revenue
              <span className="legend-dot" style={{ background: '#2563eb' }} />Orders Value
            </div>
          </div>
          <div className="chart-body" style={{ height: 240 }}>
            <Line data={lineDataset} options={lineOptions} />
          </div>
        </div>

        <div className="chart-card fade-up" style={{ animationDelay: '0.38s' }}>
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Traffic Sources</h3>
              <p className="chart-sub">This month</p>
            </div>
          </div>
          <div className="chart-body donut-wrap" style={{ height: 240 }}>
            <Doughnut data={doughnutDataset} options={doughnutOptions} />
          </div>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="charts-row charts-row-single">
        <div className="chart-card chart-full fade-up" style={{ animationDelay: '0.44s' }}>
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Sales by Category</h3>
              <p className="chart-sub">Current month breakdown</p>
            </div>
          </div>
          <div className="chart-body" style={{ height: 220 }}>
            <Bar data={barDataset} options={barOptions} />
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="section-card fade-up" style={{ animationDelay: '0.5s' }}>
        <div className="section-header">
          <div>
            <h3 className="chart-title">Recent Orders</h3>
            <p className="chart-sub">Latest 5 transactions</p>
          </div>
        </div>
        <OrdersTable limit={5} />
      </div>
    </div>
  );
}
