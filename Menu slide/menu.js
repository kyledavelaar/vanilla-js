
const button = document.querySelector('button');
const slider = document.getElementById('slider');

button.onclick = () => {
  if (slider.classList[0] === 'animate-in') {
    slider.classList.toggle('animate-out');
  } else {
    slider.classList.toggle('animate-in');
  }
}