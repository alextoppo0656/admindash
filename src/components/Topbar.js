import { useTheme } from '../context/ThemeContext';
import './Topbar.css';

export default function Topbar({ page, sidebarCollapsed }) {
  const { theme, toggle } = useTheme();

  const titles = {
    overview: 'Overview',
    orders: 'Orders',
    products: 'Products',
    customers: 'Customers',
    analytics: 'Analytics',
    settings: 'Settings',
  };

  const subtitles = {
    overview: 'Welcome back, Sumit 👋',
    orders: 'Manage and track all orders',
    products: 'Manage your product catalog',
    customers: 'View and manage customers',
    analytics: 'Deep dive into your metrics',
    settings: 'Configure your preferences',
  };

  return (
    <header className={`topbar${sidebarCollapsed ? ' sidebar-collapsed' : ''}`}>
      <div className="topbar-left">
        <h1 className="topbar-title">{titles[page]}</h1>
        <span className="topbar-sub">{subtitles[page]}</span>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <SearchIcon />
          <input placeholder="Search anything..." />
        </div>

        <button className="topbar-btn" onClick={toggle} title="Toggle theme">
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>

        <button className="topbar-btn notif-btn" title="Notifications">
          <BellIcon />
          <span className="notif-dot" />
        </button>

        <div className="topbar-avatar">S</div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>;
}
function MoonIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;
}
function SunIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>;
}
function BellIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>;
}
