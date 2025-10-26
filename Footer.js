import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} TiffinBox</div>
        <div className="muted">Made for Neurofactor Internship Task</div>
      </div>
    </footer>
  );
}
