form.onclick = function(event) {
  event.target.style.backgroundColor = 'yellow';

  alert("target = " + event.target.tagName + ", this=" + this.tagName);

  // event.target.style.backgroundColor = '';
};


let container = document.getElementById('container');

container.addEventListener('click', function (event) {
  console.log(event.target);  //gives just the button
  console.log(event.currentTarget); //gives container: location of handler
  console.log(this);  //gives entire container BUT if use arrow function you'll get window object; why? automatic binding
  container.removeChild(event.target);
})