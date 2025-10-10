/**
 * Main entry point for site functionality
 * Direct implementation without ES modules
 */

document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  if (themeToggleBtn) {
    console.log('Theme toggle button found');
    
    // Initialize theme from storage or system pref
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else if (savedTheme === 'light') {
      document.body.classList.remove('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    // Update button appearance
    updateThemeToggleButton();
    
    // Add click handler
    themeToggleBtn.addEventListener('click', function() {
      console.log('Theme toggle clicked');
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      updateThemeToggleButton();
    });
  } else {
    console.error('Theme toggle button not found!');
  }
  
  function updateThemeToggleButton() {
    if (!themeToggleBtn) return;
    themeToggleBtn.setAttribute(
      'aria-label',
      document.body.classList.contains('dark') ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }
  
  // Active navigation handling
  initNavActive();

  // Hide-on-scroll header behavior
  initHideOnScrollHeader();
  
  function initNavActive() {
    const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    const sections = navLinks
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);
    
    function setActiveById(id) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }
    
    // Click -> smooth scroll + active state
    navLinks.forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveById(href.slice(1));
            history.replaceState(null, '', href);
          }
        }
      });
    });
    
    // Removed scroll-based updates: active state changes only on click/hash.
    
    // Initial active
    const initialHash = location.hash && document.querySelector(location.hash) ? location.hash.slice(1) : (sections[0]?.id || null);
    if (initialHash) setActiveById(initialHash);

    // Keep active state in sync with hash/back-forward navigation
    window.addEventListener('hashchange', () => {
      const id = location.hash ? location.hash.slice(1) : null;
      if (id) setActiveById(id);
    });
  }

  function initHideOnScrollHeader() {
    const header = document.querySelector('header');
    if (!header) return;

    let lastY = window.scrollY;
    const threshold = 8; // small movement threshold to avoid jitter

    window.addEventListener('scroll', () => {
      const y = window.scrollY;

      // Always show at the very top
      if (y <= 0) {
        header.classList.remove('header-hidden');
        lastY = y;
        return;
      }

      if (y - lastY > threshold) {
        // Scrolling down
        header.classList.add('header-hidden');
        lastY = y;
      } else if (lastY - y > threshold) {
        // Scrolling up
        header.classList.remove('header-hidden');
        lastY = y;
      }
    }, { passive: true });
  }
});
