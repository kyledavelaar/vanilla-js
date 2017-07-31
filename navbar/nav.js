
let form = document.getElementById('form');
let left = document.getElementById('left');

form.onsubmit = (event) => {
  event.preventDefault();

  console.log(event.target.myInput.value)
  let li = document.createElement('li');
  let a = document.createElement('a');

  a.setAttribute('href', '#');
  a.append(event.target.myInput.value);
  li.append(a);
  left.appendChild(li);

  form.reset();

}

//returns an array so can get length and loop thru it
let h1 = document.getElementsByClassName('header'); 
let h2 = document.querySelectorAll('.header');

//querySelector without the 'All' will only return the first node found

console.log(h1);
console.log(h2);