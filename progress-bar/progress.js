
let button = document.querySelector('button');

button.addEventListener('click', progress);

function progress() {
  let green = document.querySelectorAll('.green')[0];

  let width = 0;
  let progress = setInterval(increase, 10);

  function increase() {
    if (width >= 100) {
      clearInterval(progress);
    } else {
      width++;
      green.style.width = `${width}%`;
      green.innerText = `${width}%`;
    }
  }
}