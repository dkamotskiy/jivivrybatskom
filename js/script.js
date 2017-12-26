$ = jQuery;
// Спасибо за заявку
$("form button").click(function () {
  if($(this).hasClass("disabled"))
    {}
  else {
    $('.pr').css('display','none');
    $('form').css('display','flex');
    $('form').css('padding','0');
    $('.success-form').css('display','flex');
  }
});
$(document).ready(function() {
  $('.center').slick({
  centerMode: true,
  arrows: true,
  centerPadding: '0',
  // infinite: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
  });

// Искры--------------------------------------------------------------------------------------------------
  $(document).ready(function(){
    var show = true;
    var countbox = ".first";
    $(window).on("scroll load resize", function(){
 
        if(!show || $(countbox).length == 0) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 450 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        

        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
        $('.first').bind(mousewheelevt, function(e){
            var scrollpercent = 0.3;
            var picheight = ($(window).scrollTop() - $(".first").offset().top)*scrollpercent;

            var $el1 = $('#sparks');
            // var $el2 = $('.personazh');

            $el1.css("top", picheight/2+"px");  
            // $el2.css("top", picheight+"px");  
        });

        $(".first").on("mousemove", function(){
            let sx = window.innerWidth,
                sy = window.innerHeight,

                parallax_percent = 12;

                e = window.event,

                posX = e.clientX,
                posY = e.clientY,

                n1 = (posX/sx*2-1)/parallax_percent*sx,
                n2 = (posY/sy*2-1)/parallax_percent*sy,
                $el1 = $('#sparks'),
                $el2 = $('.personazh');

            $el1.css("transform", "translate("+(-n1/2)+"px, "+(-n2/2)+"px)");
            $el2.css("transform", "translate("+(-n1/20)+"px, "+(-n2/20)+"px)");
        });
                }
            });
        });

  // Якоря
$(document).ready(function() {
 
 
   $("a.nav-link").click(function() {
      $('#navbarSupportedContent').collapse('hide');
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
 
});