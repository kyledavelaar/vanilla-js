
const url = 'https://jsonplaceholder.typicode.com/posts/1'

//test if JSON is in valid format before you parse it! 
function parseJSON(source) {
  try {
    return JSON.parse(source)
  } 
  catch (e) {
    throw Error 
  }
}

function getData(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
     let data = parseJSON(this.responseText);
      document.getElementById("demo").innerHTML = `<h1>${data.title}</h1><p>${data.body}</p>`;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

getData(url);



// $.get(url, (data) => {
//   if (data) {
//     document.querySelectorAll('.loading')[0].setAttribute('style', 'display: none');
//   }
//   console.log('TITLE', data.title);
// })