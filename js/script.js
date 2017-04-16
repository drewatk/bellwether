var width;

$(document).ready(function() {
   //Set height of the sidebar fixed on load
   var width = $(window).width();
   $('#left').css('height', $(window).height() + 'px');
});

// change active on navbar on click
$('.nav li').click(function(){
  $('.nav li').removeClass('active');
  $(this).addClass('active');
});

//prevents sidebar from resizing if just height is changed
window.onresize = function() {
  if($(this).width() == width) {
    return;
  }
  width = $(this).width();
  if(width <= 800) {
    console.log("here");
    $('#left').css('height', 'auto');
  }
  if(width > 800) {
    $('#left').css('height', $(window).height() + 'px');
  }
};
