var width;
var height;

$(document).ready(function() {
   //Set height of the sidebar fixed on load
   width = $(window).width();
   height = $(window).height()
   if(width <= 800) {
     $('#left').css('height', 'auto');
     return;
   }
   $('#left').css('height', height + 'px');
   $('#landing-head').css('height', height * 0.55 + 'px');
});

// change active on navbar on click
$('.nav li').click(function(){
  $('.nav li').removeClass('active');
  $(this).addClass('active');
});

//prevents sidebar from resizing if just height is changed
window.onresize = function() {
  if($(this).height() <= height && $(this).width() == width) {
    return;
  }
  width = $(this).width();
  height = $(this).height();
  if(width <= 800) {
    console.log("here");
    $('#left').css('height', 'auto');
    $('#landing-head').css('height', '100vh');
  }
  if(width > 800) {
    $('#left').css('height', height + 'px');
    $('#landing-head').css('height', height * 0.55 + 'px');
  }
};


//TODO height resize for landing head and
