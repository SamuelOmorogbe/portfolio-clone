const a = window.innerWidth
   console.log(a)

  const button = document.querySelector('#theme-toggle');
  const root = document.documentElement;

  // 'theme-v2' avoids the old value saved by the previous script
  const saved = localStorage.getItem('theme-v2') || 'dark';

  // The "dark" CSS class is your LIGHT look, so add it only for light mode
  root.classList.toggle('dark', saved === 'light');
  button.textContent = saved === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  button.addEventListener('click', () => {
    const isLight = root.classList.toggle('dark');
    localStorage.setItem('theme-v2', isLight ? 'light' : 'dark');
    button.textContent = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  });

  const icon = document.getElementById('bars')
  const x = document.getElementById('cancel')
   const con = document.getElementById('remove')
  icon.addEventListener('click', function(){
    con.classList.add('scale-x-100')
  })
  x.addEventListener('click', function(){
    con.classList.remove('scale-x-100')
  })