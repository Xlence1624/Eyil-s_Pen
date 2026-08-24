

import { useState } from "react";

const navigation = [
  "Faith",
  "Relationships",
  "Lifestyle",
  "Work",
  "Money",
  "Perspectives",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav">

        <a href="/" className="logo">
          eyilzpen
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">

          <button
            className="icon-button"
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            className="icon-button menu-button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

      </div>
    </header>
  );
}














// import React from 'react'

// const Loading = () => {
//   return (
//     <div className='flex justify-center items-center h-screen '>
//       <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-white border-gray-700"></div>
//     </div>
//   )
// }

// export default Loading
