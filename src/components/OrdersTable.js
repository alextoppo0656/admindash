import { useState } from 'react';
import { orders, formatINR } from '../data/mockData';
import './OrdersTable.css';

const STATUS_COLOR = {
  Delivered:  'green',
  Shipped:    'blue',
  Processing: 'amber',
  Cancelled:  'red',
};

const COLS = [
  { key: 'id',        label: 'Order ID'  },
  { key: 'customer',  label: 'Customer'  },
  { key: 'product',   label: 'Product'   },
  { key: 'category',  label: 'Category'  },
  { key: 'amount',    label: 'Amount'    },
  { key: 'status',    label: 'Status'    },
  { key: 'date',      label: 'Date'      },
];

const PAGE_SIZE = 7;

export default function OrdersTable({ limit }) {
  const [sortKey, setSortKey]   = useState('id');
  const [sortDir, setSortDir]   = useState('desc');
  const [page, setPage]         = useState(1);
  const [filter, setFilter]     = useState('All');

  const statuses = ['All', 'Delivered', 'Shipped', 'Processing', 'Cancelled'];

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
    setPage(1);
  };

  const filtered = orders.filter(o => filter === 'All' || o.status === filter);

  const sorted = [...filtered].sort((a, b) => {
    let av = a[sortKey], bv = b[sortKey];
    if (typeof av === 'string') av = av.toLowerCase(), bv = bv.toLowerCase();
    if (av < bv) return sortDir === 'asc' ? -1 : 1;
    if (av > bv) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  const data    = limit ? sorted.slice(0, limit) : sorted;
  const paged   = limit ? data : data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const total   = Math.ceil(data.length / PAGE_SIZE);

  return (
    <div className="orders-table-wrap">
      {!limit && (
        <div className="table-controls">
          <div className="status-tabs">
            {statuses.map(s => (
              <button
                key={s}
                className={`status-tab${filter === s ? ' active' : ''}`}
                onClick={() => { setFilter(s); setPage(1); }}
              >
                {s}
                <span className="tab-count">
                  {s === 'All' ? orders.length : orders.filter(o => o.status === s).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="table-scroll">
        <table className="orders-table">
          <thead>
            <tr>
              {COLS.map(col => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className={sortKey === col.key ? 'sorted' : ''}
                >
                  {col.label}
                  <span className="sort-icon">
                    {sortKey === col.key ? (sortDir === 'asc' ? ' ↑' : ' ↓') : ' ↕'}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.map((order, i) => (
              <tr key={order.id} style={{ animationDelay: `${i * 0.03}s` }}>
                <td className="cell-id">{order.id}</td>
                <td className="cell-name">{order.customer}</td>
                <td className="cell-product">
                  <span className="product-name">{order.product}</span>
                </td>
                <td><span className="category-tag">{order.category}</span></td>
                <td className="cell-amount">{formatINR(order.amount)}</td>
                <td>
                  <span className={`status-badge status-${STATUS_COLOR[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="cell-date">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!limit && total > 1 && (
        <div className="pagination">
          <span className="page-info">
            Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, data.length)} of {data.length}
          </span>
          <div className="page-btns">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>‹ Prev</button>
            {Array.from({ length: total }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                className={page === n ? 'active' : ''}
                onClick={() => setPage(n)}
              >{n}</button>
            ))}
            <button onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}>Next ›</button>
          </div>
        </div>
      )}
    </div>
  );
}
