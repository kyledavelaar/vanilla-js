setInterval(() => {
  document.querySelectorAll('.animate').forEach(node => {
    node.classList.remove('animate');
    // this magic allows the loop to work
    void node.offsetWidth;
    node.classList.add('animate');
  })
}, 21000)


