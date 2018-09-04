const image = document.getElementById('image');

// const pic = new Image();
// pic.src = image.src;
// pic.onload = alert('image loaded')
// let hana;

localforage.getItem('hana')
  .then(hanaCached => {
    if (hanaCached) {
      const blob = new Blob([hanaCached]);
      const hana = window.URL.createObjectURL(blob);
      image.setAttribute('src', hana);
    } else {
      // use jpg and set it in cache
      getImageAndCache("shir.jpg");
    }
  });

// image.setAttribute('src', 'shir.jpg');

function getImageAndCache(imageSource) {
  fetch(imageSource)
    .then(function(response) {
      return response.blob()
    })
    .then(function(blob) {
      localforage.setItem('hana', blob)
        .then(function(cached) {
          // This will be a valid blob URI for an <img> tag.
          const blob = new Blob([cached]);
          const hana = window.URL.createObjectURL(blob);
          image.setAttribute('src', hana);
        }).catch(function(err) {
          console.log(err);
        });
    });
}




function arrayBufferToBlob(buffer, type) {
  return new Blob([buffer], {type: type});
}

function blobToArrayBuffer(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', (e) => {
      resolve(reader.result);
    });
    reader.addEventListener('error', reject);
    reader.readAsArrayBuffer(blob);
  });
}