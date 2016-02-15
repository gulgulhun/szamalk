$(document).ready(function(){
    $(".slide_flip").click(function(){
        $(".slide_menu").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#button_right").click(function(){
        $(".hatterkep").animate({right: '+=100%'});
    });
});
$(document).ready(function(){
    $("#button_left").click(function(){
        $(".hatterkep").animate({right: '-=100%'});
    });
});