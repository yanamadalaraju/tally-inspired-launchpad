// TallyDashboardSection.tsx
import React, { useState } from 'react';
import './DashboardSection.css'; // We'll create this next

interface TallyCardProps {
  icon: string;
  title: string;
  value: string | number;
  change: number;
  gradient: string[];
}

const TallyDashboardSection: React.FC = () => {
  const [timeRange, setTimeRange] = useState<string>('30');

  const tallyCards: TallyCardProps[] = [
    {
      icon: '📊',
      title: 'Total Entries',
      value: '1,248',
      change: 12.5,
      gradient: ['#667eea', '#764ba2']
    },
    {
      icon: '💰',
      title: 'Revenue',
      value: '$24,780',
      change: 5.8,
      gradient: ['#f093fb', '#f5576c']
    },
    {
      icon: '⏱️',
      title: 'Pending',
      value: '87',
      change: -3.2,
      gradient: ['#4facfe', '#00f2fe']
    },
    {
      icon: '✅',
      title: 'Completed',
      value: '1,161',
      change: 8.4,
      gradient: ['#43e97b', '#38f9d7']
    }
  ];

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value);
  };

  return (
    <div className="tally-dashboard">
      <div className="dashboard-header">
        <h1 className="header-title">Tally Analytics Dashboard</h1>
        <div className="header-actions">
          <button className="refresh-btn">
            <span className="icon">⟳</span> Refresh Data
          </button>
          <button className="export-btn">
            <span className="icon">↓</span> Export Report
          </button>
        </div>
      </div>

      <div className="tally-cards-container">
        {tallyCards.map((card, index) => (
          <TallyCard key={index} {...card} />
        ))}
      </div>

      <div className="tally-chart-container">
        <div className="chart-header">
          <h3>Monthly Tally Overview</h3>
          <div className="chart-period-selector">
            <select value={timeRange} onChange={handleTimeRangeChange}>
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last Quarter</option>
              <option value="365">Last Year</option>
            </select>
          </div>
        </div>
        <div className="chart-3d-effect">
          <div className="placeholder-chart">
            <ChartPlaceholder timeRange={timeRange} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TallyCard: React.FC<TallyCardProps> = ({ icon, title, value, change, gradient }) => {
  return (
    <div 
      className="tally-card"
      style={{
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`
      }}
    >
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h3>{title}</h3>
        <div className="tally-value">{value}</div>
        <div className={`tally-change ${change >= 0 ? 'positive' : 'negative'}`}>
          {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
        </div>
      </div>
      <div className="card-wave"></div>
    </div>
  );
};

const ChartPlaceholder: React.FC<{ timeRange: string }> = ({ timeRange }) => {
  // This would be replaced with an actual chart library like Chart.js in a real implementation
  const points = parseInt(timeRange);
  const bars = Array.from({ length: Math.min(points, 30) }, (_, i) => (
    <div 
      key={i} 
      className="chart-bar"
      style={{
        height: `${Math.random() * 80 + 20}%`,
        width: `${90 / Math.min(points, 30)}%`
      }}
    ></div>
  ));

  return <div className="chart-bars-container">{bars}</div>;
};

export default TallyDashboardSection;