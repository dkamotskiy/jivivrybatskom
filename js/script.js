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
//Обработка нажатий вертикального слайдера
$(document).ready(function(){
    $( ".col-md-4 .vertical-selection-1" ).click(function() {
        $(".vertical-selection-1").attr("class","vertical-selection-1 vertical-slider-img selected-vertical-slider");
        $(".vertical-selection-2").attr("class","vertical-selection-2 vertical-slider-img");
        $(".vertical-selection-3").attr("class","vertical-selection-3 vertical-slider-img");
        $(".vertical-selection-4").attr("class","vertical-selection-4 vertical-slider-img");
        $(".vertical-selection-5").attr("class","vertical-selection-5 vertical-slider-img");
        $(".vertical-selection-6").attr("class","vertical-selection-6 vertical-slider-img");
        $(".selector-strelka1").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        $("#ol-first").attr("style","display:block;");
        $("#ol-second").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        });
    $( ".col-md-4 .vertical-selection-2" ).click(function() {
        $(".vertical-selection-2").attr("class","vertical-selection-2 vertical-slider-img selected-vertical-slider");
        $(".vertical-selection-1").attr("class","vertical-selection-1 vertical-slider-img");
        $(".vertical-selection-3").attr("class","vertical-selection-3 vertical-slider-img");
        $(".vertical-selection-4").attr("class","vertical-selection-4 vertical-slider-img");
        $(".vertical-selection-5").attr("class","vertical-selection-5 vertical-slider-img");
        $(".vertical-selection-6").attr("class","vertical-selection-6 vertical-slider-img");
        $(".selector-strelka2").attr("style","display:block;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        $("#ol-second").attr("style","display:block;");
        $("#ol-first").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        });
    $( ".col-md-4 .vertical-selection-3" ).click(function() {
        $(".vertical-selection-3").attr("class","vertical-selection-3 vertical-slider-img selected-vertical-slider");
        $(".vertical-selection-2").attr("class","vertical-selection-2 vertical-slider-img");
        $(".vertical-selection-1").attr("class","vertical-selection-1 vertical-slider-img");
        $(".vertical-selection-4").attr("class","vertical-selection-4 vertical-slider-img");
        $(".vertical-selection-5").attr("class","vertical-selection-5 vertical-slider-img");
        $(".vertical-selection-6").attr("class","vertical-selection-6 vertical-slider-img");
        $(".selector-strelka3").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        $("#ol-third").attr("style","display:block;");
        $("#ol-first").attr("style","display:none;");
        $("#ol-first").attr("style","display:none;");
        });
    $( ".col-md-4 .vertical-selection-4" ).click(function() {
        $(".vertical-selection-4").attr("class","vertical-selection-4 vertical-slider-img selected-vertical-slider");
        $(".vertical-selection-2").attr("class","vertical-selection-2 vertical-slider-img");
        $(".vertical-selection-3").attr("class","vertical-selection-3 vertical-slider-img");
        $(".vertical-selection-1").attr("class","vertical-selection-1 vertical-slider-img");
        $(".vertical-selection-5").attr("class","vertical-selection-5 vertical-slider-img");
        $(".vertical-selection-6").attr("class","vertical-selection-6 vertical-slider-img");
        $(".selector-strelka4").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        $("#ol-first").attr("style","display:block;");
        $("#ol-second").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        });
    $( ".col-md-4 .vertical-selection-5" ).click(function() {
        $(".vertical-selection-5").attr("class","vertical-selection-5 vertical-slider-img selected-vertical-slider");
        $(".vertical-selection-2").attr("class","vertical-selection-2 vertical-slider-img");
        $(".vertical-selection-3").attr("class","vertical-selection-3 vertical-slider-img");
        $(".vertical-selection-4").attr("class","vertical-selection-4 vertical-slider-img");
        $(".vertical-selection-1").attr("class","vertical-selection-1 vertical-slider-img");
        $(".vertical-selection-6").attr("class","vertical-selection-6 vertical-slider-img");
        $(".selector-strelka5").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $(".selector-strelka6").attr("style","display:none;");
        $("#ol-second").attr("style","display:block;");
        $("#ol-first").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        });
    $( ".col-md-4 .vertical-selection-6" ).click(function() {
        $(".vertical-selection-6").attr("class","vertical-selection-6 vertical-slider-img selected-vertical-slider");
        $(".vertical-selection-2").attr("class","vertical-selection-2 vertical-slider-img");
        $(".vertical-selection-3").attr("class","vertical-selection-3 vertical-slider-img");
        $(".vertical-selection-4").attr("class","vertical-selection-4 vertical-slider-img");
        $(".vertical-selection-5").attr("class","vertical-selection-5 vertical-slider-img");
        $(".vertical-selection-1").attr("class","vertical-selection-1 vertical-slider-img");
        $(".selector-strelka6").attr("style","display:block;");
        $(".selector-strelka2").attr("style","display:none;");
        $(".selector-strelka3").attr("style","display:none;");
        $(".selector-strelka4").attr("style","display:none;");
        $(".selector-strelka5").attr("style","display:none;");
        $(".selector-strelka1").attr("style","display:none;");
        $("#ol-third").attr("style","display:block;");
        $("#ol-first").attr("style","display:none;");
        $("#ol-first").attr("style","display:none;");
        });
});
// Обработка нажатий горизонтального слайдера над Bootstrap
$(document).ready(function(){
    $( ".col-md-8 .vertical-selection-1" ).click(function() {
        $("#ol-first").attr("style","display:block;");
        $("#ol-second").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        $(".col-md-8 .vertical-selection-1").attr("style","border: 3px solid #149d34;");
        $(".col-md-8 .vertical-selection-2").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-3").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-4").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-5").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-6").attr("style","border: none;");
        });
    $( ".col-md-8 .vertical-selection-2" ).click(function() {
        $("#ol-second").attr("style","display:block;");
        $("#ol-first").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        $(".col-md-8 .vertical-selection-2").attr("style","border: 3px solid #149d34;");
        $(".col-md-8 .vertical-selection-1").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-3").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-4").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-5").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-6").attr("style","border: none;");
        });
    $( ".col-md-8 .vertical-selection-3" ).click(function() {
        $("#ol-third").attr("style","display:block;");
        $("#ol-second").attr("style","display:none;");
        $("#ol-first").attr("style","display:none;");
        $(".col-md-8 .vertical-selection-3").attr("style","border: 3px solid #149d34;");
        $(".col-md-8 .vertical-selection-2").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-1").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-4").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-5").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-6").attr("style","border: none;");
        });
    $( ".col-md-8 .vertical-selection-4" ).click(function() {
        $("#ol-first").attr("style","display:block;");
        $("#ol-second").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        $(".col-md-8 .vertical-selection-4").attr("style","border: 3px solid #149d34;");
        $(".col-md-8 .vertical-selection-2").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-3").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-1").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-5").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-6").attr("style","border: none;");
        });
    $( ".col-md-8 .vertical-selection-5" ).click(function() {
        $("#ol-second").attr("style","display:block;");
        $("#ol-first").attr("style","display:none;");
        $("#ol-third").attr("style","display:none;");
        $(".col-md-8 .vertical-selection-5").attr("style","border: 3px solid #149d34;");
        $(".col-md-8 .vertical-selection-2").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-3").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-4").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-1").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-6").attr("style","border: none;");
        });
    $( ".col-md-8 .vertical-selection-6" ).click(function() {
        $("#ol-third").attr("style","display:block;");
        $("#ol-second").attr("style","display:none;");
        $("#ol-first").attr("style","display:none;");
        $(".col-md-8 .vertical-selection-6").attr("style","border: 3px solid #149d34;");
        $(".col-md-8 .vertical-selection-2").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-3").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-4").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-5").attr("style","border: none;");
        $(".col-md-8 .vertical-selection-1").attr("style","border: none;");
        });
});
//Инициализация свайпа каруселей Bootstrap
$('.carousel').bcSwipe({ threshold: 50 });
//Инициализация свайпа каруселей jCarousel
$('.jcarousel').jcarousel().jcarouselSwipe();
// Обработка нажатий на главной странице
$(document).ready(function() {
    var w = $(window).width(); 
    if (w >= 992) { 
$(document).ready(function(){
    $( ".img-2 img" ).click(function() {
        $(".img-2 .img-responsive").attr("src","img/img-2-selected.jpg");
        $(".img-6 .img-responsive").attr("src","img/img6.jpg");
        $(".img-7 .img-responsive").attr("src","img/img7.jpg");
        $(".img-3 .img-responsive").attr("src","img/img3.jpg");
        $(".img-2 span").attr("style","color:#000;");
        $(".img-6 span").attr("style","color:#fff;");
        $(".img-7 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#fff;");
        $(".img-2 .buttons-image2").attr("style","display:block;");
        $(".img-3 .buttons-image3").attr("style","display:none;");
        $(".img-6 .buttons-image6").attr("style","display:none;");
        $(".img-7 .buttons-image7").attr("style","display:none;");
        });
    $( ".img-3 img" ).click(function() {
        $(".img-3 .img-responsive").attr("src","img/img3-selected.jpg");
        $(".img-2 .img-responsive").attr("src","img/img2.jpg");
        $(".img-6 .img-responsive").attr("src","img/img6.jpg");
        $(".img-7 .img-responsive").attr("src","img/img7.jpg");
        $(".img-2 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#000;");
        $(".img-6 span").attr("style","color:#fff;");
        $(".img-7 span").attr("style","color:#fff;");
        $(".img-2 .buttons-image2").attr("style","display:none;");
        $(".img-3 .buttons-image3").attr("style","display:block;");
        $(".img-6 .buttons-image6").attr("style","display:none;");
        $(".img-7 .buttons-image7").attr("style","display:none;");
        });
    $( ".img-6 img" ).click(function() {
        $(".img-6 .img-responsive").attr("src","img/img-6-selected.jpg");
        $(".img-2 .img-responsive").attr("src","img/img2.jpg");
        $(".img-7 .img-responsive").attr("src","img/img7.jpg");
        $(".img-3 .img-responsive").attr("src","img/img3.jpg");
        $(".img-6 span").attr("style","color:#000;");
        $(".img-2 span").attr("style","color:#fff;");
        $(".img-7 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#fff;");
        $(".img-2 .buttons-image2").attr("style","display:none;");
        $(".img-3 .buttons-image3").attr("style","display:none;");
        $(".img-6 .buttons-image6").attr("style","display:block;");
        $(".img-7 .buttons-image7").attr("style","display:none;");
        });
    $( ".img-7 img" ).click(function() {
        $(".img-7 .img-responsive").attr("src","img/img-7-selected.jpg");
        $(".img-6 .img-responsive").attr("src","img/img6.jpg");
        $(".img-2 .img-responsive").attr("src","img/img2.jpg");
        $(".img-3 .img-responsive").attr("src","img/img3.jpg");
        $(".img-7 span").attr("style","color:#000;");
        $(".img-6 span").attr("style","color:#fff;");
        $(".img-2 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#fff;");
        $(".img-2 .buttons-image2").attr("style","display:none;");
        $(".img-3 .buttons-image3").attr("style","display:none;");
        $(".img-6 .buttons-image6").attr("style","display:none;");
        $(".img-7 .buttons-image7").attr("style","display:block;");
        });
  });
  }
  });
// Обработка нажатий на главной странице - адаптивная версия
$(document).ready(function() {
    var w = $(window).width(); 
    if (w < 992) { 
$(document).ready(function(){
    $( ".img-2 img" ).click(function() {
        $(".img-2 .img-responsive").attr("src","img/img-2-selected.jpg");
        $(".img-6 .img-responsive").attr("src","img/img6.jpg");
        $(".img-7 .img-responsive").attr("src","img/img7.jpg");
        $(".img-3 .img-responsive").attr("src","img/img3.jpg");
        $(".img-2 span").attr("style","color:#000;");
        $(".img-6 span").attr("style","color:#fff;");
        $(".img-7 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#fff;");
        $(".img-2 .buttons-image-responsive").attr("style","display:block;");
        $(".img-3 .buttons-image-responsive").attr("style","display:none;");
        $(".img-6 .buttons-image-responsive").attr("style","display:none;");
        $(".img-7 .buttons-image-responsive").attr("style","display:none;");
        });
    $( ".img-3 img" ).click(function() {
        $(".img-3 .img-responsive").attr("src","img/img3-selected.jpg");
        $(".img-2 .img-responsive").attr("src","img/img2.jpg");
        $(".img-6 .img-responsive").attr("src","img/img6.jpg");
        $(".img-7 .img-responsive").attr("src","img/img7.jpg");
        $(".img-2 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#000;");
        $(".img-6 span").attr("style","color:#fff;");
        $(".img-7 span").attr("style","color:#fff;");
        $(".img-3 .buttons-image-responsive").attr("style","display:block;");
        $(".img-2 .buttons-image-responsive").attr("style","display:none;");
        $(".img-6 .buttons-image-responsive").attr("style","display:none;");
        $(".img-7 .buttons-image-responsive").attr("style","display:none;");
        });
    $( ".img-6 img" ).click(function() {
        $(".img-6 .img-responsive").attr("src","img/img-6-selected.jpg");
        $(".img-2 .img-responsive").attr("src","img/img2.jpg");
        $(".img-7 .img-responsive").attr("src","img/img7.jpg");
        $(".img-3 .img-responsive").attr("src","img/img3.jpg");
        $(".img-6 span").attr("style","color:#000;");
        $(".img-2 span").attr("style","color:#fff;");
        $(".img-7 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#fff;");
        $(".img-6 .buttons-image-responsive").attr("style","display:block;");
        $(".img-3 .buttons-image-responsive").attr("style","display:none;");
        $(".img-2 .buttons-image-responsive").attr("style","display:none;");
        $(".img-7 .buttons-image-responsive").attr("style","display:none;");
        });
    $( ".img-7 img" ).click(function() {
        $(".img-7 .img-responsive").attr("src","img/img-7-selected.jpg");
        $(".img-6 .img-responsive").attr("src","img/img6.jpg");
        $(".img-2 .img-responsive").attr("src","img/img2.jpg");
        $(".img-3 .img-responsive").attr("src","img/img3.jpg");
        $(".img-7 span").attr("style","color:#000;");
        $(".img-6 span").attr("style","color:#fff;");
        $(".img-2 span").attr("style","color:#fff;");
        $(".img-3 span").attr("style","color:#fff;");
        $(".img-7 .buttons-image-responsive").attr("style","display:block;");
        $(".img-3 .buttons-image-responsive").attr("style","display:none;");
        $(".img-6 .buttons-image-responsive").attr("style","display:none;");
        $(".img-2 .buttons-image-responsive").attr("style","display:none;");
        });
  });
  }
  });
//Обработка ресайза картинок на странице vkomande
$(document).ready(function(){
    var h = $('.otzyvy').height() / 4;
    $('.vkomande-button').css({'height': h});
  });
$(window).resize(function(){
    var h = $('.otzyvy').height() / 4;
    $('.vkomande-button').css({'height': h});
  });
//Обработка нажатий на кнопки "Подробнее"
$(document).ready(function(){
    $( "#podrobnee-1" ).click(function() {
        $("#podrobnee-1-block-small").attr("style","display:none;");
        $("#podrobnee-3-block-small").attr("style","display:block;");
        $("#podrobnee-4-block-small").attr("style","display:block;");
        $("#podrobnee-2-block-small").attr("style","display:block;");
        $("#podrobnee-1-block").attr("style","display:block;");
        $("#podrobnee-2-block").attr("style","display:none;");
        $("#podrobnee-3-block").attr("style","display:none;");
        $("#podrobnee-4-block").attr("style","display:none;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
    $( "#podrobnee-2" ).click(function() {
        $("#podrobnee-1-block-small").attr("style","display:block;");
        $("#podrobnee-3-block-small").attr("style","display:block;");
        $("#podrobnee-4-block-small").attr("style","display:block;");
        $("#podrobnee-2-block-small").attr("style","display:none;");
        $("#podrobnee-2-block").attr("style","display:block;");
        $("#podrobnee-1-block").attr("style","display:none;");
        $("#podrobnee-3-block").attr("style","display:none;");
        $("#podrobnee-4-block").attr("style","display:none;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
    $( "#podrobnee-3" ).click(function() {
       $("#podrobnee-3-block").attr("style","display:block;");
        $("#podrobnee-1-block").attr("style","display:none;");
        $("#podrobnee-2-block").attr("style","display:none;");
        $("#podrobnee-4-block").attr("style","display:none;");
        $("#podrobnee-1-block-small").attr("style","display:block;");
        $("#podrobnee-2-block-small").attr("style","display:block;");
        $("#podrobnee-4-block-small").attr("style","display:block;");
        $("#podrobnee-3-block-small").attr("style","display:none;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
    $( "#podrobnee-4" ).click(function() {
        $("#podrobnee-4-block").attr("style","display:block;");
        $("#podrobnee-1-block").attr("style","display:none;");
        $("#podrobnee-3-block").attr("style","display:none;");
        $("#podrobnee-2-block").attr("style","display:none;");
        $("#podrobnee-1-block-small").attr("style","display:block;");
        $("#podrobnee-3-block-small").attr("style","display:block;");
        $("#podrobnee-2-block-small").attr("style","display:block;");
        $("#podrobnee-4-block-small").attr("style","display:none;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
});
$(document).ready(function() {
    var w = $(window).width(); 
    if (w >= 992) { 
        // Обработка нажатий на кнопку "Свернуть"
    $(document).ready(function(){
    $( "#svernut-1" ).click(function() {
        $("#podrobnee-1-block").attr("style","display:none;");
        $("#podrobnee-1-block-small").attr("style","display:block;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
    $( "#svernut-2" ).click(function() {
        $("#podrobnee-2-block").attr("style","display:none;");
        $("#podrobnee-2-block-small").attr("style","display:block;");
         var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
    $( "#svernut-3" ).click(function() {
        $("#podrobnee-3-block").attr("style","display:none;");
        $("#podrobnee-3-block-small").attr("style","display:block;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
    $( "#svernut-4" ).click(function() {
        $("#podrobnee-4-block").attr("style","display:none;");
        $("#podrobnee-4-block-small").attr("style","display:block;");
        var h = $('.otzyvy').height() / 4;
        $('.vkomande-button').css({'height': h});
        });
}); 
    }
  });