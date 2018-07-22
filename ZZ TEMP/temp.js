

let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let username = document.querySelector('#username').value;
  let password = document.querySelector('[name="password"]').value;
  let gender = document.querySelector('[name="gender"]:checked').value;
  let age = document.querySelector('[name="age"]').value;
  let colors = document.querySelectorAll('[name="color"]:checked').value
  console.log('sent', username, password, gender, age, colors)
})