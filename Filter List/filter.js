
function filter() {
  let input = document.querySelector('[name="search"]').value.toUpperCase();

  let listItems = document.querySelectorAll('li');

  for (let i = 0; i < listItems.length; i += 1) {
    let item = listItems[i].getElementsByTagName('a')[0];
    console.log(item);
    if (item.innerText.toUpperCase().indexOf(input) > -1) {
      listItems[i].style.display = '';
    } else {
      listItems[i].style.display = 'none';
    }
  }
}



document.getElementById('search').addEventListener('keyup', filter);