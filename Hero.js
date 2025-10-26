import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">Home-cooked meals, delivered daily</h1>
          <p className="hero-sub">Healthy tiffins prepared by local cooks — affordable, nutritious and on-time.</p>
          <div className="hero-actions">
            <input className="input" placeholder="Enter your pincode" aria-label="pincode" />
            <button className="btn primary">Check Availability</button>
          </div>
        </div>
        <div className="hero-preview" aria-hidden="true">
          <div className="card-slab">
            <div className="card-image" />
            <div className="card-body">
              <h3>Veg Thali</h3>
              <p>Fresh, seasonal vegetables with dal and rice</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
