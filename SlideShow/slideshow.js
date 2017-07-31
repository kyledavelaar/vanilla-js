const slides = document.querySelectorAll('.slide');
let index = 0;

const changeSlide = (n) => {
  slides[index].classList.remove('showing');
  index = (n + slides.length) % slides.length;
  slides[index].classList.add('showing');
  changeCircle();
}

const nextSlide = () => {
  changeSlide(index + 1);
} 

const prevSlide = () => {
  changeSlide(index - 1);
}

let slideInterval = setInterval(nextSlide, 4000)


//------------CONTROLS--------------------------
let playing = true;
let pauseBtn = document.getElementById('pause');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

const pauseSlideShow = () => {
  playing = false;
  clearInterval(slideInterval);
  pauseBtn.innerHTML = '&#9658;';
}

const startSlideShow = () => {
  playing = true;
  slideInterval = setInterval(nextSlide, 4000);
  pauseBtn.innerHTML =  '&#10074;&#10074;'; 
}

pauseBtn.addEventListener('click', () => {
  if (playing) {
    pauseSlideShow();
  } else {
    startSlideShow();
  }
});

next.addEventListener('click', () => {
  pauseSlideShow();
  nextSlide();
});

prev.addEventListener('click', ()=> {
  pauseSlideShow();
  prevSlide();
});


//--------3 DOTS--------------

const dots = document.getElementById('dots');

dots.addEventListener('click', (e) => {
  slides[index].classList.remove('showing');
  if (e.target.id === '0') {
    index = 0;
  } else if (e.target.id === '1') {
    index = 1;
  } else if (e.target.id === '2') {
    index = 2;
  }
  slides[index].classList.add('showing');
  changeCircle();
});

function changeCircle() { 
  let prevDot = document.querySelectorAll('.dot-selected')[0];
  
  prevDot.classList.remove('dot-selected');

  let currentDot = document.querySelector(`.dot:nth-child(${index + 1})`);
  
  currentDot.classList.add('dot-selected');
}
