// Get root element
const root = document.documentElement;

// Initially set light theme
root.setAttribute('data-theme', 'light'); 

// Toggle theme function
function toggleTheme() {
  if (root.getAttribute('data-theme') === 'light') {
    root.setAttribute('data-theme', 'dark');  
  } else {
    root.setAttribute('data-theme', 'light');
  }
}

// Initialize light theme then toggle  
toggleTheme();