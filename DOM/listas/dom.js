// const listItems = document.querySelectorAll('li');

// listItems.forEach(item => {
//   item.addEventListener('click', (event) => {
//     event.target.classList.toggle('nightlight');
//     });
// });

const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  event.target.closest('li').
  classList.toggle('nightlight');
});
