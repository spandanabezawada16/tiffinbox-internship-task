import React from 'react';

export default function MenuCard({ item }) {
  return (
    <article className="menu-card" tabIndex={0}>
      <div className="menu-img" />
      <div className="menu-body">
        <h3>{item.title}</h3>
        <p className="muted">{item.desc}</p>
        <div className="menu-footer">
          <div className="price">{item.price}</div>
          <button className="btn ghost">Select</button>
        </div>
      </div>
    </article>
  );
}
