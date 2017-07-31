


document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault();
  let wantToGo = document.querySelector('[name="go"]:checked');
  console.log(wantToGo ? 'yes' : 'no');
});
