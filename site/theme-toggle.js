/**
 * Theme Toggle Functionality
 * Handles switching between light and dark themes
 */

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else if (savedTheme === 'light') {
        document.body.classList.remove('dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    
    // Update button appearance based on current theme
    updateToggleButton();
    
    // Toggle theme when button is clicked
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        // Save preference to localStorage
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        // Update button appearance
        updateToggleButton();
    });
    
    // Function to update toggle button appearance
    function updateToggleButton() {
        if (document.body.classList.contains('dark')) {
            themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
        } else {
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
        }
    }
});
