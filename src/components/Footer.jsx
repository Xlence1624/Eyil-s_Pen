import React, { useMemo } from "react";

export default function Footer() {
  // Performance optimization: Calculate the year only once on mount
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="footer-logo">Eyilzpen</div>
            <p>
              Faith. Relationships. Lifestyle.
              Work. Finance. Everything in between.
            </p>
          </div>

          {/* Semantic <nav> added for better SEO and Accessibility */}
          <nav aria-label="Explore Links">
            <h3>Explore</h3>
            <div className="footer-links">
              <a href="#faith">Faith</a>
              <a href="#relationships">Relationships</a>
              <a href="#lifestyle">Lifestyle</a>
            </div>
          </nav>

          <nav aria-label="More Links">
            <h3>More</h3>
            <div className="footer-links">
              <a href="#work">Work</a>
              <a href="#Finance">Finance</a>
              <a href="#Everything in between"  className="nowrap">Everything in between</a>
            </div>
          </nav>

          <nav aria-label="Connect Links">
            <h3>Connect</h3>
            <div className="footer-links">
              {/* Secure links opening in a new tab */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="mailto:hello@eyilzpen.com">Email</a>
            </div>
          </nav>

        </div>

        <div className="copyright flex justify-between items-center">
          © {currentYear} Eyilzpen. All rights reserved.
          <p onClick={() => (window.location.href = '/admin')}>Admin login</p>
        </div>
      </div>
    </footer>
  ); 
} 