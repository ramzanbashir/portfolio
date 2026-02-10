// Toggle light/dark mode
function toggleTheme() {
  const body = document.body;
  const icon = document.querySelector('.theme-toggle i');
  const theme = body.classList.contains('dark-mode') ? 'light' : 'dark';

  body.classList.toggle('dark-mode');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');

  icon.style.transform = 'rotate(360deg)';
  setTimeout(() => icon.style.transform = '', 300);

  localStorage.setItem('theme', theme);
}

// Initialize theme and center home section
window.onload = function () {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const icon = document.querySelector('.theme-toggle i');

  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  document.body.classList.toggle('dark-mode', isDark);

  if (icon) {
    icon.classList.remove('fa-sun', 'fa-moon');
    icon.classList.add(isDark ? 'fa-moon' : 'fa-sun');
  }

  centerHomeContent();
};

// Center align home section content
function centerHomeContent() {
  const home = document.getElementById("home");
  if (home) {
    home.style.display = "flex";
    home.style.flexDirection = "column";
    home.style.alignItems = "center";
    home.style.justifyContent = "center";
    home.style.minHeight = "100vh";
    home.style.textAlign = "center";
  }
}
