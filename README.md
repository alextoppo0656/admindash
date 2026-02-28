# Nexus — E-Commerce Admin Dashboard

A clean, professional admin dashboard for e-commerce built with React and Chart.js.

## Tech Stack

- **React 18** — UI with functional components + hooks
- **Chart.js + react-chartjs-2** — Line, Bar, and Doughnut charts
- **Context API** — Dark/Light theme state
- **CSS Variables** — Full theming system (no Tailwind dependency)
- **Google Fonts** — Playfair Display + Outfit

## Features

- 📊 **KPI Cards** — Revenue, Orders, Users, Avg Order Value with trend indicators
- 📈 **Revenue Line Chart** — Multi-dataset with gradient fill
- 🥧 **Traffic Sources Doughnut** — Segmented with tooltips
- 📊 **Category Bar Chart** — Gradient colored bars
- 📋 **Orders Table** — Sortable columns, status filter tabs, pagination
- 🌙 **Dark/Light Mode** — Full theme toggle, persisted in localStorage
- 📱 **Responsive** — Works on mobile, sidebar collapses
- ✨ **Analytics Page** — Extra charts + top products bar chart

## Local Setup

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm start

# Production build
npm run build
```

## Deploy on Vercel

1. Push to GitHub
2. Import repo on vercel.com
3. Framework: Create React App (auto-detected)
4. Hit Deploy

## Resume Points

- Built interactive dashboard with Chart.js (Line, Bar, Doughnut charts)
- Implemented dark/light theme system using CSS variables + Context API
- Sortable data table with client-side pagination and status filtering
- Responsive layout with collapsible sidebar using CSS transitions
- Component-based architecture with clean separation of concerns
