// ── Overview KPI cards ──────────────────────────────────────────
export const kpis = [
  { id: 1, label: 'Total Revenue',  value: '₹8,42,500', change: +14.2, suffix: 'vs last month', icon: '₹', color: 'accent' },
  { id: 2, label: 'Total Orders',   value: '3,284',      change: +8.6,  suffix: 'vs last month', icon: '📦', color: 'blue'   },
  { id: 3, label: 'Total Users',    value: '12,490',     change: +5.1,  suffix: 'vs last month', icon: '👤', color: 'green'  },
  { id: 4, label: 'Avg Order Value',value: '₹2,565',     change: -2.3,  suffix: 'vs last month', icon: '📊', color: 'amber'  },
];

// ── Revenue line chart (last 7 months) ──────────────────────────
export const revenueData = {
  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
  datasets: [
    {
      label: 'Revenue',
      data: [310000, 420000, 380000, 510000, 620000, 740000, 842500],
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Orders Value',
      data: [220000, 300000, 270000, 390000, 450000, 560000, 640000],
      tension: 0.4,
      fill: false,
    }
  ]
};

// ── Sales by category (bar chart) ───────────────────────────────
export const categoryData = {
  labels: ['Electronics', 'Clothing', 'Home', 'Beauty', 'Sports', 'Books'],
  datasets: [{
    label: 'Sales (₹)',
    data: [285000, 196000, 142000, 98000, 74000, 47500],
  }]
};

// ── Traffic sources (pie chart) ──────────────────────────────────
export const trafficData = {
  labels: ['Organic', 'Direct', 'Social', 'Email', 'Paid Ads'],
  datasets: [{
    data: [38, 24, 18, 12, 8],
  }]
};

// ── Recent orders table ──────────────────────────────────────────
export const orders = [
  { id: '#ORD-4821', customer: 'Priya Sharma',    product: 'Sony WH-1000XM5',      category: 'Electronics', amount: 32999, status: 'Delivered', date: '14 Feb 2025' },
  { id: '#ORD-4820', customer: 'Arjun Mehta',     product: 'Nike Air Max 270',      category: 'Footwear',    amount: 8995,  status: 'Shipped',   date: '14 Feb 2025' },
  { id: '#ORD-4819', customer: 'Divya Iyer',      product: 'Instant Pot Duo 7-in-1',category: 'Home',        amount: 7499,  status: 'Processing',date: '13 Feb 2025' },
  { id: '#ORD-4818', customer: 'Rahul Verma',     product: 'Kindle Paperwhite',     category: 'Electronics', amount: 13999, status: 'Delivered', date: '13 Feb 2025' },
  { id: '#ORD-4817', customer: 'Sneha Pillai',    product: 'Levi\'s 511 Slim Jeans',category: 'Clothing',    amount: 3799,  status: 'Cancelled', date: '12 Feb 2025' },
  { id: '#ORD-4816', customer: 'Karan Bose',      product: 'Canon EOS M50 Mark II', category: 'Electronics', amount: 54900, status: 'Shipped',   date: '12 Feb 2025' },
  { id: '#ORD-4815', customer: 'Ananya Das',      product: 'The Psychology of Money',category: 'Books',      amount: 399,   status: 'Delivered', date: '11 Feb 2025' },
  { id: '#ORD-4814', customer: 'Vikram Singh',    product: 'Yoga Mat Pro',          category: 'Sports',      amount: 1299,  status: 'Delivered', date: '11 Feb 2025' },
  { id: '#ORD-4813', customer: 'Neha Gupta',      product: 'Apple AirPods Pro 2',   category: 'Electronics', amount: 24900, status: 'Processing',date: '10 Feb 2025' },
  { id: '#ORD-4812', customer: 'Rohan Joshi',     product: 'Face Serum Vitamin C',  category: 'Beauty',      amount: 1850,  status: 'Delivered', date: '10 Feb 2025' },
  { id: '#ORD-4811', customer: 'Meera Nair',      product: 'MacBook Air M2',        category: 'Electronics', amount: 114900,status: 'Shipped',   date: '09 Feb 2025' },
  { id: '#ORD-4810', customer: 'Aditya Kumar',    product: 'Running Shoes GT-2000', category: 'Sports',      amount: 6999,  status: 'Delivered', date: '09 Feb 2025' },
  { id: '#ORD-4809', customer: 'Pooja Reddy',     product: 'Ceramic Dinner Set',    category: 'Home',        amount: 2499,  status: 'Delivered', date: '08 Feb 2025' },
  { id: '#ORD-4808', customer: 'Siddharth Roy',   product: 'Samsung Galaxy S24',    category: 'Electronics', amount: 74999, status: 'Processing',date: '08 Feb 2025' },
  { id: '#ORD-4807', customer: 'Kavya Menon',     product: 'Kurti Set (Pack of 3)',  category: 'Clothing',    amount: 1199,  status: 'Cancelled', date: '07 Feb 2025' },
];

export const formatINR = (n) =>
  '₹' + new Intl.NumberFormat('en-IN').format(n);
