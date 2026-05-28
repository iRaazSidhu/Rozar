
  const themeToggleBtn = document.getElementById('themeToggle');
  
  // 1. Initial State: Browser storage check karein ya default light set karein
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  // 2. Click Event Listener: Theme badalne aur store karne ke liye
  themeToggleBtn.addEventListener('click', () => {
    let targetTheme = 'light';
    const activeTheme = document.documentElement.getAttribute('data-theme');
    
    if (activeTheme === 'light') {
      targetTheme = 'dark';
    }
    
    // HTML tag par attribute badlein
    document.documentElement.setAttribute('data-theme', targetTheme);
    // Local storage me save karein taaki page refresh par change na ho
    localStorage.setItem('theme', targetTheme);
  });
