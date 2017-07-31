
const centered = document.querySelectorAll('.center');
console.log(centered);

centered.forEach(div => {
  div.addEventListener('mouseenter', (e) => {
    console.log(e); 
    e.target.childNodes[0].classList.add('slide-in');
  })
})
