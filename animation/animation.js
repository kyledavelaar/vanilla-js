
$('#blue').css({'height': '100px', 'width': '100px', 'background-color':'blue', 'position':'absolute'})

$('#blue').click(function(){
  $(this).animate({left :'+=150px', top: '+=150px'}, 'slow');
})