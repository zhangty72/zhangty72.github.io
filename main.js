const button=document.querySelector('.theme');
try{if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark')}catch{}
function update(){button.setAttribute('aria-pressed',String(document.body.classList.contains('dark')));button.setAttribute('aria-label',document.body.classList.contains('dark')?'Switch to light theme':'Switch to dark theme')}
button.addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')}catch{}update()});update();
