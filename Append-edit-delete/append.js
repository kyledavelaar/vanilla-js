const form = document.querySelector('form');
const ul = document.querySelector('ul');

form.onsubmit = (e) => {
  e.preventDefault();
  if (form.userInput.value === '') return;
  
  let li = document.createElement('li');
  let div = document.createElement('div');
  div.innerText = form.userInput.value;
  let del = document.createElement('button');
  del.innerText = 'Delete';
  let edit = document.createElement('button');
  edit.innerText = 'Edit'

  li.appendChild(div);
  li.appendChild(del);
  li.appendChild(edit);
  ul.appendChild(li);

  form.reset();
}

ul.onclick = (e) => {
  if (e.target.innerHTML === 'Delete') {
    ul.removeChild(e.target.parentNode)
  }
  if (e.target.innerHTML === 'Edit' && !e.target.parentNode.childNodes[3]) {
    let form = document.createElement('form');
    form.setAttribute('style', 'display: inline-block; margin-left: 10px');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'formInput');
    let inputBtn = document.createElement('input');
    inputBtn.setAttribute('type', 'submit');
    inputBtn.setAttribute('Value', 'Update');

    form.appendChild(input);
    form.appendChild(inputBtn);
    // e.target.parentNode.appendChild(form);
    e.target.parentNode.parentNode.replaceChild(form, div);


    form.onsubmit = (e) => {
      e.preventDefault();
      e.target.parentNode.childNodes[0].data = form.formInput.value;
      e.target.parentNode.removeChild(form);   
    }
  }
}