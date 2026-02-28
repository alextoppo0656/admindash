import './KpiCard.css';

export default function KpiCard({ kpi, delay = 0 }) {
  const up = kpi.change >= 0;
  return (
    <div className={`kpi-card kpi-${kpi.color}`} style={{ animationDelay: `${delay}s` }}>
      <div className="kpi-top">
        <span className="kpi-label">{kpi.label}</span>
        <span className="kpi-icon-wrap">{kpi.icon}</span>
      </div>
      <div className="kpi-value">{kpi.value}</div>
      <div className={`kpi-change ${up ? 'up' : 'down'}`}>
        <span className="kpi-arrow">{up ? '↑' : '↓'}</span>
        <span>{Math.abs(kpi.change)}%</span>
        <span className="kpi-suffix">{kpi.suffix}</span>
      </div>
    </div>
  );
}
