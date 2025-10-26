import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo" aria-label="Tiffinbox logo">Tiffin<span>Box</span></div>
        <nav className="nav">
          <button className="btn ghost">Login</button>
          <button className="btn primary">Order Now</button>
        </nav>
      </div>
    </header>
  );
}
