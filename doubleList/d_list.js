const list1 = document.getElementById('dl_list_1');
const list2 = document.getElementById('dl_list_2');
const to_1 = document.getElementById('dl_to_1');
const to_2 = document.getElementById('dl_to_2');
const allTo_1 = document.getElementById('dl_all_to_1');
const allTo_2 = document.getElementById('dl_all_to_2');

function sortByValue(list) {
  [...list.children].sort((a, b) => Number(a.value) - Number(b.value)).forEach(elem => list.appendChild(elem));
}

allTo_1.addEventListener('click', () => {
  [...list1.children].forEach(elem => elem.selected = false);
  [...list2.children].forEach(elem => { list1.appendChild(elem); elem.selected = true});
  sortByValue(list1);
});

allTo_2.addEventListener('click', () => {
  [...list2.children].forEach(elem => elem.selected = false);
  [...list1.children].forEach(elem => { list2.appendChild(elem); elem.selected = true; });
  sortByValue(list2);
});

to_1.addEventListener('click', () => {
  [...list1.children].forEach(elem => elem.selected = false);
  [...list2.children].filter(elem => elem.selected).forEach(elem => list1.appendChild(elem));
  sortByValue(list1);
});

to_2.addEventListener('click', () => {
  [...list2.children].forEach(elem => elem.selected = false);
  [...list1.children].filter(elem => elem.selected).forEach(elem => list2.appendChild(elem));
  sortByValue(list2);
});
