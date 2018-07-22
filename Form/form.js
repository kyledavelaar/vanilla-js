let counter = 0;

var form = document.getElementById('my-form');

form.onsubmit = function (event) {
  event.preventDefault();
  //input
  let firstName = document.querySelector('#first').value;
  let lastName = document.querySelector('[name="last"]').value;
  //radio
  let gender = document.querySelectorAll('[name="gender"]');
  let selectedGender;
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
      break;
    }
  }
  //check box
  let animal = document.querySelectorAll('[name="animal"]');
  let animals = [];
  for (let i = 0; i < animal.length; i += 1) {
    if (animal[i].checked) {
      animals.push(animal[i].value);
    }
  }
  //select
  let plant = document.querySelector('[name="plants"]').value;
  
  console.log(firstName, lastName, selectedGender, animals, plant);

  if (firstName === "" || lastName === "") return;

  let li = document.createElement('li')
  li.innerHTML = firstName + ' ' + lastName + ' ' + gender + ' ' + animal + ' ' + plant;
  li.setAttribute('id', counter)  //give each li an id with the counter
  
  if (counter % 3 === 0) {
    li.style.color = 'red';
    li.className = 'decorate' //add class to the item
  }
  document.querySelector('ul').append(li);
  
  counter++;
  
  form.reset();
}

document.querySelector('ul').onclick = function(e) {
  e.target.classList.toggle('red');
}

//------------------------------------------


// $('#my-form').submit((e) => {
//   e.preventDefault();
  
//   let first = $('[name="first"]').val();
//   let last = $('[name="last"]').val();
//   //radio
//   let gender = $('[name="gender"]:checked').val();
//   //checkbox
//   let animal = $('[name="animal"]:checked').val();
//   //select
//   let plant = $('[name="plants"]').val()


//   if (counter % 2 === 0) {
//     let li = document.createElement('li')
//     $(li).css('color', 'red').append(`${first} ${last} : ${gender} : ${animal} : ${plant}`);
//     $('ul').append(li);
//   } else {
//     $('ul').append(`<li>${first} ${last} : ${gender} : ${animal} : ${plant}</li>`);
//   }

//   counter++;
  
//   $('#my-form')[0].reset();
// })


