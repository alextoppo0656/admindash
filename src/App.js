import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Overview from './pages/Overview';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import { Products, Customers, Settings } from './pages/Placeholders';
import './App.css';

const PAGES = {
  overview:  <Overview />,
  orders:    <Orders />,
  products:  <Products />,
  customers: <Customers />,
  analytics: <Analytics />,
  settings:  <Settings />,
};

function Dashboard() {
  const [page, setPage]           = useState('overview');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar
        active={page}
        onNav={setPage}
        collapsed={collapsed}
        onToggle={() => setCollapsed(c => !c)}
      />
      <div className={`main-area${collapsed ? ' sidebar-collapsed' : ''}`}>
        <Topbar page={page} sidebarCollapsed={collapsed} />
        <main className="page-wrapper">
          {PAGES[page]}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}
