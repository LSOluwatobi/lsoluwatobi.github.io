const modal=document.getElementById('modal'), modalImg=document.getElementById('modal-img'), modalTitle=document.getElementById('modal-title');
function openModal(src,title){modalImg.src=src;modalTitle.textContent=title;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('.image-btn,.view-btn').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.img,b.dataset.title)));
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const cards=[...document.querySelectorAll('.project-card')];
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
  const filter=btn.dataset.filter, domain=btn.dataset.domain;
  cards.forEach(card=>{
    let show=true;
    if(filter==='excel') show=card.dataset.platform==='excel';
    if(filter==='power') show=card.dataset.platform==='power';
    if(domain) show=card.dataset.domain===domain;
    card.classList.toggle('hidden',!show);
  });
}));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
