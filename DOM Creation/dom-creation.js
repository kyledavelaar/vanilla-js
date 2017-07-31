const button = document.querySelector('button');
const container = document.querySelector('#container');

const colors = ['red', 'green', 'blue', 'pink', 'orange', 'yellow'];

function random () {
  return Math.floor(Math.random() * colors.length)
}

button.onclick = (e) => {
  let div = document.createElement('div');
  div.setAttribute('style', `display: inline-block; background-color: ${colors[random()]}; height: 100px; width: 100px`)
  let del = document.createElement('button');
  del.innerHTML = 'Delete';
  let edit = document.createElement('button');
  edit.innerHTML = 'Edit'

  div.appendChild(del);
  div.appendChild(edit);
  container.appendChild(div);
}

container.onclick = (e) => {
  if (e.target.innerHTML === 'Delete') {
    container.removeChild(e.target.parentElement);
  }
  if (e.target.innerHTML === 'Edit') {
    //if use setAttribute here, it will overwrite all other style properties, don't want this...only want to replace background-color;
    e.target.parentElement.style.backgroundColor = colors[random()]
  }
}