const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
})