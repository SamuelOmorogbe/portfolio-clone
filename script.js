const a = window.innerWidth
   console.log(a)

  const button = document.querySelector('#theme-toggle');
  const button2 = document.querySelector('#theme-toggle2');
  const root = document.documentElement;
  const sun = document.getElementById('sun')
  const solid = document.getElementById('solid-sun')
  const moon = document.getElementById('moon')
  const smoon = document.getElementById('solid-moon')
  const suns = document.getElementById('suns')
  const solids = document.getElementById('solid-suns')
  const moons = document.getElementById('moon2')
  const smoons = document.getElementById('solid-moons')

  // 'theme-v2' avoids the old value saved by the previous script
  const saved = localStorage.getItem('theme-v2') || 'dark';

  // The "dark" CSS class is your LIGHT look, so add it only for light mode
  root.classList.toggle('dark', saved === 'light');


  button.addEventListener('click', function(){
    
    
    if(!root.classList.contains('dark')){
      sun.classList.add('hidden');
      solid.classList.add('group-hover:hidden')
      moon.classList.remove('hidden')
      smoon.classList.remove('group-hover:hidden')
      smoon.classList.add('group-hover:inline-block')
      const isLight = root.classList.toggle('dark');
    localStorage.setItem('theme-v2', isLight ? 'light' : 'dark');
    }else if(root.classList.contains('dark')){
      sun.classList.remove('hidden');
      solid.classList.remove('group-hover:hidden')
      moon.classList.add('hidden')
      smoon.classList.add('group-hover:hidden')
      smoon.classList.remove('group-hover:inline-block')
      const isLight = root.classList.toggle('dark');
    localStorage.setItem('theme-v2', isLight ? 'light' : 'dark');
      }
   
    
    });

    button2.addEventListener('click', function(){
    
    
    if(!root.classList.contains('dark')){
      suns.classList.add('hidden');
      solids.classList.add('group-hover:hidden')
      moons.classList.remove('hidden')
      smoons.classList.remove('group-hover:hidden')
      smoons.classList.add('group-hover:inline-block')
      const isLight = root.classList.toggle('dark');
    localStorage.setItem('theme-v2', isLight ? 'light' : 'dark');
    }else if(root.classList.contains('dark')){
      suns.classList.remove('hidden');
      solids.classList.remove('group-hover:hidden')
      moons.classList.add('hidden')
      smoons.classList.add('group-hover:hidden')
      smoons.classList.remove('group-hover:inline-block')
      const isLight = root.classList.toggle('dark');
    localStorage.setItem('theme-v2', isLight ? 'light' : 'dark');
      }
   
    
    });

  const icon = document.getElementById('bars')
  const x = document.getElementById('cancel')
   const con = document.getElementById('remove')
   const rest = document.getElementById('rest')
   
   
icon.addEventListener('click', function(event){
    event.stopPropagation();

    if(con.classList.contains('scale-x-100')){
        con.classList.remove('scale-x-100');
        document.body.classList.remove('overflow-hidden');
    } else {
        con.classList.add('scale-x-100');
        document.body.classList.add('overflow-hidden');
    }
});
  x.addEventListener('click', function(){
    con.classList.remove('scale-x-100');
    document.body.classList.remove('overflow-hidden');
  })
  rest.addEventListener('click', function(){
    if(con.classList.contains('scale-x-100')){
      con.classList.remove('scale-x-100');
      document.body.classList.remove('overflow-hidden');
    }
    

  })
