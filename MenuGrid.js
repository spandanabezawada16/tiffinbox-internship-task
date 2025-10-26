import React from 'react';
import MenuCard from './MenuCard';

const items = [
  { id: 1, title: 'Veg Thali', price: '₹99', desc: 'Balanced vegetarian meal' },
  { id: 2, title: 'Paneer Box', price: '₹129', desc: 'Paneer curry with rotis' },
  { id: 3, title: 'Chicken Curry', price: '₹149', desc: 'Home style chicken' },
  { id: 4, title: 'Diet Plan', price: '₹179', desc: 'Low-cal, high-protein' }
];

export default function MenuGrid() {
  return (
    <section className="menu container">
      <h2 className="section-title">Popular Plans</h2>
      <div className="grid">
        {items.map(i => (
          <MenuCard key={i.id} item={i} />
        ))}
      </div>
    </section>
  );
}
