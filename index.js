// Light & dark theme button logic
const root = document.documentElement;
root.setAttribute('data-theme', 'light'); 
function toggleTheme() {
  if (root.getAttribute('data-theme') === 'light') {
    root.setAttribute('data-theme', 'dark');  
  } else {
    root.setAttribute('data-theme', 'light');
  }
}  
toggleTheme();

// dock logic
const dock = document.getElementById('dock');
dockBehavior();
window.addEventListener('scroll', dockBehavior)

function dockBehavior() {
  if (window.scrollY < 300) {
    dock.classList.add('hidden');
  } else {
    dock.classList.remove('hidden');
  }
}

// dock buttons
const modesBtns = document.getElementsByClassName('dock__btn-modes');
const upBtn = document.getElementById('dock-up-btn');

Array.from(modesBtns).forEach(element => {
  element.addEventListener('click', () => {
    toggleTheme();
  });
});

upBtn.addEventListener('click', () => {
  console.log('hi')
  window.scrollTo(0, 0);
})

// footer logic
const footer = document.getElementById('footer');
const footerText = document.getElementById('footer-text');

window.addEventListener('resize', footerLogic)

function footerLogic() {
  console.log('hello')
  if(window.innerWidth < 740) {
    footerText.style.display = 'none'
  }
  else footerText.style.display = 'block';
}