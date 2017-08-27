(function($) {
    $(function() {
        var jcarousel = $('#our-partners .jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 730) {
                    width = width / 4;
                } else if (width >= 50) {
                    width = width / 3;
                } else if (width >= 950) {
                    width = width / 5;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('#our-partners .jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('#our-partners .jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('#our-partners .jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
// ==========================================================================================================
(function($) {
    $(function() {
        var jcarousel = $('#adaptiv-slider-menu .jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 730) {
                    width = width / 4;
                } else if (width >= 50) {
                    width = width / 3;
                } else if (width >= 950) {
                    width = width / 5;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('#adaptiv-slider-menu .jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('#adaptiv-slider-menu .jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('#adaptiv-slider-menu .jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
