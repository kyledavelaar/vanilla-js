$('document').ready(function () {
  $('#fade').fadeOut(1000);

  //fade on click
  $('.blue').click(function () {
    $(this).fadeOut('slow');
  });

  //slide toggle
  $('button.slide-toggle').click(() => {
    $('p.slide-toggle').slideToggle('slow');
  })

  //create element
  let $h1 = $('<h1>Hello</h1>');
  $('body').append($h1);

  //not append inside but move after div
  $('#fade').after('<p> hi there</p>');


  //empty: deletes all descendents 
  //remove: only removes selected node;


  $h1.on('click', function () {
    $(this).toggleClass('orange')
  })

  $('#button').on('click', function (e) {
    e.preventDefault();
    let $value = $('input[name=checkListItem]').val()
    $('.list').append('<div class="item">' + $value + '</div>');

    $('form')[0].reset();
  })

  //remove item from list (must be on document not on .item)
  $(document).on('click', '.item', function (e) {
    $(this).remove();
  })

  $('input').on('focus', function () {
    //mozilla also change outline-style: solid;
    $(this).css('outline-color', '#FF0000')
  })


  //need position absolute for moving to work and must also click on document first
  $(document).keydown(function (key) {
    switch (key.which) {
      case 37:
        $('#move').animate({ left: '-=50px' }, 'fast');
        break;
      case 39:
        $('#move').animate({left: '+=50px'}, 'fast');
        break;
    }
  })


  //need jQuery UI library for these to work
    $('h1').on('click', function(){
      $(this).effect('bounce', {times:3}, 500);
    })   

    $("#menu").accordion({collapsible: true, active: false});
    
    $('h2').draggable();

    $('ol').sortable(); 
    
})