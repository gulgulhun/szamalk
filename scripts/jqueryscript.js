$(document).ready(function(){

  var cucc = $(".login");

  function animateLoginToLeft() {
    $(".reg_page").addClass("menu_active");
    $(".circles, .reg").show();
    $(".circles, .reg").animate({left: '50%'}, "slow");
  }

  function animateLoginOut() {
    cucc.stop(true);
	$(".login_menu").stop(true);
    cucc.animate({height: '96px'}, "fast");
    cucc.animate({width: '196px'}, "fast");
	$(".login_menu").fadeIn("fast");
  }

  function animetaLoginIn() {
    cucc.stop(true);
	$(".login_menu").stop(true);
	$(".login_menu").fadeOut("fast");
    cucc.animate({width: '60px'}, "fast");
    cucc.animate({height: '55px'}, "fast");
  }

  $(".reg_page").click(animateLoginToLeft);

  cucc.mouseenter(animateLoginOut);
  cucc.mouseleave(animetaLoginIn);

});
