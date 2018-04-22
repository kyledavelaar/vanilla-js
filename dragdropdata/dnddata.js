////////////////////////////////////
// make html
////////////////////////////////////
let names = ['abe', 'billy', 'constance', 'danny', 'edger', 'fawn', 'greg', 'harriot', 'ingred', 'jill', 'kerri', 'leona', 'manny', 'nancy']
let columnContainer = document.getElementById('columns')
let nameStartIndex;
let nameEndIndex;
let dragSrcEl = null;

function makeHtml(names) {
  columnContainer.innerHTML = '';

  names.forEach(name => {
    let div = document.createElement('div')
    div.classList.add('column')
    div.setAttribute('draggable', true)
    let header = document.createElement('header')
    header.innerText = name
    div.appendChild(header)
    columnContainer.appendChild(div)
  })
}

makeHtml(names)



//////////////////////////////////////
// set up draggable functionality
//////////////////////////////////////

function handleDragStart(e) {
  // e.target(this) element is the source node.
  // this.style.opacity = '0.4';
  let name = e.target.querySelector('header').innerText
  nameStartIndex = names.indexOf(name)
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this / e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // stops the browser from redirecting.
  }

  let name = e.target.querySelector('header').innerText
  nameEndIndex = names.indexOf(name)

  names = names.map((name, i) => {
    if (i === nameStartIndex) {
      return names[nameEndIndex]
    } else if (i === nameEndIndex) {
      return names[nameStartIndex]
    } else {
      return name
    }
  })
  // makeHtml(names)
  console.log('names', names)

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}


function handleDragEnd(e) {
  // this/e.target is the source node.
  cols.forEach(col => {
    col.classList.remove('over');
  });
}

var cols = document.querySelectorAll('#columns .column');
cols.forEach(col => {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});






