const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  event.target.closest('li').
  classList.toggle('nightlight');
});
