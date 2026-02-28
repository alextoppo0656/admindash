import OrdersTable from '../components/OrdersTable';
import './GenericPage.css';

export default function Orders() {
  return (
    <div className="page-content fade-up">
      <div className="page-card">
        <OrdersTable />
      </div>
    </div>
  );
}
