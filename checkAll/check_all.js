const main = document.getElementById('ca_main');
const count = document.getElementById('ca_counter');

count.textContent = [...document.querySelectorAll('.ca_checkbox')].reduce((sum, elem) => sum + elem.checked, 0);

main.addEventListener('change', () => {
  [...document.querySelectorAll('.ca_checkbox')].forEach(elem => elem.checked = main.checked);
  main.checked? count.textContent = document.querySelectorAll('.ca_checkbox').length : count.textContent = 0;
});

[...document.querySelectorAll('.ca_checkbox')].forEach(elem => elem.addEventListener('change', () => {
  elem.checked? count.textContent++ : count.textContent--;
}));
