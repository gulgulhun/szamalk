$(document).ready(function(){
  function animateLeft() {
    $(".hatterkep").animate({right: '+=100%'});
  }

  function animateRight() {
    $(".hatterkep").animate({right: '-=100%'});
  }

  function toggleSlide() {
    $(".slide_menu").slideToggle(2000);
  }

  $(".slide_flip").click(toggleSlide);
  $("#button_right").click(animateLeft);
  $("#button_left").click(animateRight);
});
