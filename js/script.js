// Инициализация свайпа каруселей
$('.jcarousel')
    .jcarousel()       // init jcarousel
    .jcarouselSwipe(); // init jcarouselSwipe
// Маска-----------------------------------------------------------
jQuery(function($){
   $("#phone-form").mask("+7 (999) 999-9999");
});

$('.center').slick({
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// Якоря
$(document).ready(function() {
$("a.yakor").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top - 53;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
});