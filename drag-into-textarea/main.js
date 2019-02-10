document.addEventListener('dragstart', function (event) {
  event.dataTransfer.setData('Text', event.target.innerHTML);
});