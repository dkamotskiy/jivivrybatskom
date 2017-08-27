$(document).ready(function() {
	$(".phone-number").mask("8(999) 999-9999");
});
$(document).ready(function() {
	$('#top').click(function () {
		$('body, html').animate({scrollTop: 0}, 1000);
});
});
$(document).ready(function() {
	$('#top2').click(function () {
		$('body, html').animate({scrollTop: 0}, 1000);
});
});
// Нажатие
$(document).ready(function(){
    $( "#selector-video-1" ).click(function() {
        $("#selector-video-1").attr("style","border: 3px solid #899e00;");
        $("#selector-video-2").attr("style","border: 3px solid #fff;");
        $("#selector-video-3").attr("style","border: 3px solid #fff;");
        $("#selector-video-4").attr("style","border: 3px solid #fff;");
        });
    $( "#selector-video-2" ).click(function() {
        $("#selector-video-2").attr("style","border: 3px solid #899e00;");
        $("#selector-video-1").attr("style","border: 3px solid #fff;");
        $("#selector-video-3").attr("style","border: 3px solid #fff;");
        $("#selector-video-4").attr("style","border: 3px solid #fff;");
        });
    $( "#selector-video-3" ).click(function() {
        $("#selector-video-3").attr("style","border: 3px solid #899e00;");
        $("#selector-video-2").attr("style","border: 3px solid #fff;");
        $("#selector-video-1").attr("style","border: 3px solid #fff;");
        $("#selector-video-4").attr("style","border: 3px solid #fff;");
        });
    $( "#selector-video-4" ).click(function() {
        $("#selector-video-4").attr("style","border: 3px solid #899e00;");
        $("#selector-video-2").attr("style","border: 3px solid #fff;");
        $("#selector-video-3").attr("style","border: 3px solid #fff;");
        $("#selector-video-1").attr("style","border: 3px solid #fff;");
        });
});
//Высота iframe
$(document).ready(function(){
$(function(){
  $('iframe').height($('iframe').width()/2);

  $(window).resize(function(){
    $('iframe').height($('iframe').width()/2);
  });
});
});

$(document).ready(function(){
    $( "#vertical-selection-1" ).click(function() {
        $("#vertical-selection-1").attr("class","vertical-slider-img selected-vertical-slider");
        $("#vertical-selection-2").attr("class","vertical-slider-img");
        $("#vertical-selection-3").attr("class","vertical-slider-img");
        $("#vertical-selection-4").attr("class","vertical-slider-img");
        $("#vertical-selection-5").attr("class","vertical-slider-img");
        $("#vertical-selection-6").attr("class","vertical-slider-img");
        $(".selector-strelka1").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        });
    $( "#vertical-selection-2" ).click(function() {
        $("#vertical-selection-2").attr("class","vertical-slider-img selected-vertical-slider");
        $("#vertical-selection-1").attr("class","vertical-slider-img");
        $("#vertical-selection-3").attr("class","vertical-slider-img");
        $("#vertical-selection-4").attr("class","vertical-slider-img");
        $("#vertical-selection-5").attr("class","vertical-slider-img");
        $("#vertical-selection-6").attr("class","vertical-slider-img");
        $(".selector-strelka2").attr("style","display:block;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        });
    $( "#vertical-selection-3" ).click(function() {
        $("#vertical-selection-3").attr("class","vertical-slider-img selected-vertical-slider");
        $("#vertical-selection-2").attr("class","vertical-slider-img");
        $("#vertical-selection-1").attr("class","vertical-slider-img");
        $("#vertical-selection-4").attr("class","vertical-slider-img");
        $("#vertical-selection-5").attr("class","vertical-slider-img");
        $("#vertical-selection-6").attr("class","vertical-slider-img");
        $(".selector-strelka3").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        });
    $( "#vertical-selection-4" ).click(function() {
        $("#vertical-selection-4").attr("class","vertical-slider-img selected-vertical-slider");
        $("#vertical-selection-2").attr("class","vertical-slider-img");
        $("#vertical-selection-3").attr("class","vertical-slider-img");
        $("#vertical-selection-1").attr("class","vertical-slider-img");
        $("#vertical-selection-5").attr("class","vertical-slider-img");
        $("#vertical-selection-6").attr("class","vertical-slider-img");
        $(".selector-strelka4").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        });
    $( "#vertical-selection-5" ).click(function() {
        $("#vertical-selection-5").attr("class","vertical-slider-img selected-vertical-slider");
        $("#vertical-selection-2").attr("class","vertical-slider-img");
        $("#vertical-selection-3").attr("class","vertical-slider-img");
        $("#vertical-selection-4").attr("class","vertical-slider-img");
        $("#vertical-selection-1").attr("class","vertical-slider-img");
        $("#vertical-selection-6").attr("class","vertical-slider-img");
        $(".selector-strelka5").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        });
    $( "#vertical-selection-6" ).click(function() {
        $("#vertical-selection-6").attr("class","vertical-slider-img selected-vertical-slider");
        $("#vertical-selection-2").attr("class","vertical-slider-img");
        $("#vertical-selection-3").attr("class","vertical-slider-img");
        $("#vertical-selection-4").attr("class","vertical-slider-img");
        $("#vertical-selection-5").attr("class","vertical-slider-img");
        $("#vertical-selection-1").attr("class","vertical-slider-img");
        $(".selector-strelka6").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        });
});
$('.carousel').bcSwipe({ threshold: 50 });
$('.jcarousel').jcarousel().jcarouselSwipe();