import './GenericPage.css';

export function Products() {
  return (
    <div className="placeholder-page fade-up">
      <span className="placeholder-icon">📦</span>
      <h2>Products</h2>
      <p>Product catalog management would live here.</p>
    </div>
  );
}

export function Customers() {
  return (
    <div className="placeholder-page fade-up">
      <span className="placeholder-icon">👥</span>
      <h2>Customers</h2>
      <p>Customer CRM and details would live here.</p>
    </div>
  );
}

export function Settings() {
  return (
    <div className="placeholder-page fade-up">
      <span className="placeholder-icon">⚙️</span>
      <h2>Settings</h2>
      <p>App configuration and preferences would live here.</p>
    </div>
  );
}
