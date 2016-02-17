$(document).ready(function(){

  var scount = 0;

  function animateLeft() {
    scount++;
    $(".hatterkep").animate({right: '+=100%'});
	if (scount == 1){$(".hatterkep").hide(10);}
	if (scount == 0){$(".hatterkep").show();}
  }

  function animateRight() {
    scount--;
    $(".hatterkep").animate({right: '-=100%'});
	if (scount == 0){$(".hatterkep").show();}
    if (scount == -1){$(".hatterkep").hide(10);}
  }

  function toggleSlide() {
    $(".slide_menu").slideToggle("slow");
  }

  $(".slide_flip").click(toggleSlide);
  $("#button_right").click(animateLeft);
  $("#button_left").click(animateRight);
});
