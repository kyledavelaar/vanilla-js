
let td = document.querySelectorAll('td');
let tbody = document.querySelector('tbody');
let total = document.getElementById('total');
let toggle = document.getElementsByClassName('extra')[0];
let body = document.querySelector('body');

//add numbers to table
for (let i = 0; i < td.length; i += 1) {
  td[i].setAttribute('style', 'padding: 20px; border: 1px solid black');
  td[i].innerHTML = i + 1
}

//sum total for each number clicked
tbody.onclick = (event) => {
  let sum = Number(total.innerText);
  sum += Number(event.target.innerText);
  total.innerHTML = sum;
}

//toggle class
toggle.onclick = (event) => {
  body.classList.toggle('toggleStyle');
}



//using jQuery

// let td = $('td');
// td.css({'padding': '20px', 'border': '1px solid black'})

// td.each(function(i) {
//   $(td[i]).append(i + 1);
// });

// let total = Number($('#total').html());

// $('table').click(function(e) {
//   total += Number($(e.target).text());
//   $('#total').html(total);
// });

// $('.extra').on('click', function() {
//   $('body').toggleClass('toggleStyle');
// })



