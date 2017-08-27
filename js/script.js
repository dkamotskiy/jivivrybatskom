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
//Инициализация свайпа каруселей Bootstrap
$('.carousel').bcSwipe({ threshold: 50 });
//Инициализация свайпа каруселей jCarousel
$('.jcarousel').jcarousel().jcarouselSwipe();
//Обработка нажатий на кнопки "Подробнее"
$(document).ready(function(){
    $( "#podrobnee-1" ).click(function() {
        $("#podrobnee-1-small").html("Недавно был опыт с компанией Vremonte. Сделали у нас ремонт на высшем уровне. Мы делали капитальный ремонт в старой хрущевской квартире. Муж нашел фирму, нареканий никаких, все было сделано в срок и очень качественно. Отдельная благодарность дизайнеру Елене, бригадиру Евгению и его команде: сделали нам все так, как мы хотели, а где-то даже лучше, т.к. сотрудники профессионалы и отлично знают, где как сделать, успехов вам!");
        $("#podrobnee-2-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-3-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-4-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-1-block").attr("class","aktiv");
        $("#podrobnee-2-block").attr("class","");
        $("#podrobnee-3-block").attr("class","");
        $("#podrobnee-4-block").attr("class","");
        });
    $( "#podrobnee-2" ).click(function() {
        $("#podrobnee-2-small").html("Недавно был опыт с компанией Vremonte. Сделали у нас ремонт на высшем уровне. Мы делали капитальный ремонт в старой хрущевской квартире. Муж нашел фирму, нареканий никаких, все было сделано в срок и очень качественно. Отдельная благодарность дизайнеру Елене, бригадиру Евгению и его команде: сделали нам все так, как мы хотели, а где-то даже лучше, т.к. сотрудники профессионалы и отлично знают, где как сделать, успехов вам!");
        $("#podrobnee-1-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-3-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-4-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-2-block").attr("class","aktiv");
        $("#podrobnee-1-block").attr("class","");
        $("#podrobnee-3-block").attr("class","");
        $("#podrobnee-4-block").attr("class","");
        });
    $( "#podrobnee-3" ).click(function() {
        $("#podrobnee-3-small").html("Недавно был опыт с компанией Vremonte. Сделали у нас ремонт на высшем уровне. Мы делали капитальный ремонт в старой хрущевской квартире. Муж нашел фирму, нареканий никаких, все было сделано в срок и очень качественно. Отдельная благодарность дизайнеру Елене, бригадиру Евгению и его команде: сделали нам все так, как мы хотели, а где-то даже лучше, т.к. сотрудники профессионалы и отлично знают, где как сделать, успехов вам!");
        $("#podrobnee-1-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-2-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-4-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-3-block").attr("class","aktiv");
        $("#podrobnee-2-block").attr("class","");
        $("#podrobnee-1-block").attr("class","");
        $("#podrobnee-4-block").attr("class","");
        });
    $( "#podrobnee-4" ).click(function() {
        $("#podrobnee-4-small").html("Недавно был опыт с компанией Vremonte. Сделали у нас ремонт на высшем уровне. Мы делали капитальный ремонт в старой хрущевской квартире. Муж нашел фирму, нареканий никаких, все было сделано в срок и очень качественно. Отдельная благодарность дизайнеру Елене, бригадиру Евгению и его команде: сделали нам все так, как мы хотели, а где-то даже лучше, т.к. сотрудники профессионалы и отлично знают, где как сделать, успехов вам!");
        $("#podrobnee-1-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-3-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-2-small").html("Хочу выразить огромную благодарность сотрудникам и дизайнеру Елене за роскошный ремонт, бригадиру Николаю, отвечающему за капитальное строительство квартиры и ...");
        $("#podrobnee-4-block").attr("class","aktiv");
        $("#podrobnee-2-block").attr("class","");
        $("#podrobnee-3-block").attr("class","");
        $("#podrobnee-1-block").attr("class","");
        });
});