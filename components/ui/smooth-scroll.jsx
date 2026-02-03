'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Add smooth scrolling to all anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Add smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
