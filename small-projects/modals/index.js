const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
})

open.addEventListener('click', () => {
  modal.classList.add('show-modal');
  console.log(modal)
})

close.addEventListener('click', () => {
  modal.classList.remove('show-modal');
  console.log(modal)
})

window.addEventListener('click', (evt) => {
  if(evt.target === modal) {
    modal.classList.remove('show-modal');
  }
})