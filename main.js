const button=document.querySelector('.theme');
try{if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark')}catch{}
function update(){button.setAttribute('aria-pressed',String(document.body.classList.contains('dark')));button.setAttribute('aria-label',document.body.classList.contains('dark')?'Switch to light theme':'Switch to dark theme')}
button.addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')}catch{}update()});update();

const filters=document.querySelector('.filters');
const count=document.querySelector('.filter-count');
const papers=[...document.querySelectorAll('#paper-list .paper')];
if(filters&&count){
 filters.hidden=false;count.hidden=false;
 const filter=(value)=>{let shown=0;papers.forEach(p=>{const status=p.querySelector('.status')?.textContent.toLowerCase()||'';p.hidden=value!=='all'&&!status.startsWith(value);if(!p.hidden)shown++});filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===value)));count.textContent=`Showing ${shown} of ${papers.length} selected publications`;};
 filters.addEventListener('click',e=>{const b=e.target.closest('button[data-filter]');if(b)filter(b.dataset.filter)});filter('all');
}
const progress=document.querySelector('.scroll-progress');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${max>0?Math.min(100,Math.max(0,scrollY/max*100)):0}%`;}
addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
if('IntersectionObserver' in window){const navLinks=[...document.querySelectorAll('.nav a[href^="#"]')];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')})}})},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main>section[id]').forEach(s=>observer.observe(s));}
