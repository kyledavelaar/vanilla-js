const favs = document.getElementById('favs');
const articles = document.querySelectorAll('article');

articles.forEach((article, i) => {
  let p = document.createElement('p');
  p.innerText = "Picture" + (i + 1);
  p.classList.add('img-text');
  article.appendChild(p);
});

favs.addEventListener('mouseover', (e) => {
  console.log(e.target.id); 
})