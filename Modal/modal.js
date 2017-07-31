

$('button').on('click', function () {
    $('#overlay, #overlay-back').fadeIn(500);
});

$('#overlay-back').on('click', function() {
  $('#overlay, #overlay-back').fadeOut(500);
})