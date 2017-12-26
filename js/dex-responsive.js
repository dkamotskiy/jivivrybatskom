var dex_responsive;
(function($){

	function is_touch_device(){
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	function clamp( a ){
		return a < 0 ? 0 : ( a > 100 ? 100 : a );
	}

	dex_responsive = {

		loaded : false,
		mouse_parallax : [],

		init : function(){
			$(window).on( 'load resize', dex_responsive.call );
			$(function(){
				if( ! is_touch_device() ){
					$(window).off('mousemove.dex').on('mousemove.dex', dex_responsive.mouse_move );
				}
			});
		},

		resize : function(){

			$('.dex-mlp-parallax').each(function(){
				var $self = $(this),
					ratio = $self.data('orig-ratio');
				if( $self.hasClass( 'dex-custom' ) ){
					$self.height( $self.width() / ratio );
				} else if( $self.hasClass( 'dex-fullscreen' ) ){
					$self.width( $(window).width() );
					$self.height( $(window).height() );
				}
				$('.dex-mlp-layer',this).each(function(){
					if( ! $(this).data('orig-left') ){
						$(this).data('orig-left', parseInt( this.style.left ) );
					}
					if( ! $(this).data('orig-top') ){
						$(this).data('orig-top', parseInt( this.style.top ) );
					}
					if( ! $(this).data('orig-width') ){
						$(this).data('orig-width', parseInt( this.style.width ) );
					}
					if( ! $(this).data('orig-height') ){
						$(this).data('orig-height', parseInt( this.style.height ) );
					}
					var props = {
						left   : ( ( $(this).data('orig-left') * $self.width() ) / $self.data('orig-width') ) + 'px',
						top    : ( ( $(this).data('orig-top') * ( $self.width() / $self.data('orig-ratio') ) ) / $self.data('orig-height') ) + 'px',
						width  : ( ( $(this).data('orig-width') * $self.width() ) / $self.data('orig-width') ) + 'px',
						height : ( ( $(this).data('orig-height') * ( $self.width() / $self.data('orig-ratio') ) ) / $self.data('orig-height') ) + 'px'
					};
					$(this).css( props );
				});
			});

		},

		mouse_move : function( e ){
			var x = e.clientX, y = e.clientY, w = $(window).width(), h = $(window).height(),
				parallaxes = dex_responsive.mouse_parallax;
			for( var i = 0, c = parallaxes.length; i < c; i++ ){
				var $elem = $( parallaxes[i].elem ),
					width = $elem.width(),
					origWidth = $elem.data('orig-width'),
					origHeight = $elem.data('orig-height'),
					origRatio = $elem.data('orig-ratio');
				parallaxes[i].elem.style.backgroundPosition =
					clamp( parallaxes[i].r * ( w / 2 - x ) + ( ( parallaxes[i].x * width ) / origWidth ) ) + '% ' +
					clamp( parallaxes[i].r * ( h / 2 - y ) + ( ( parallaxes[i].y * ( width / origRatio ) ) / origHeight ) ) + '%';
				for( var j = 0, n = parallaxes[i].layers.length; j < n; j++ ){
					parallaxes[i].layers[j].elem.style.left =
						( parallaxes[i].layers[j].r * ( w / 2 - x ) + ( ( parallaxes[i].layers[j].x * width ) / origWidth ) ) + 'px';
					parallaxes[i].layers[j].elem.style.top =
						( parallaxes[i].layers[j].r * ( h / 2 - y ) + ( ( parallaxes[i].layers[j].y * ( width / origRatio ) ) / origHeight ) ) + 'px';
				}
			}
		},

		auto_scroll : function(){
			var orig = $(window).scrollTop();
			$(window).scrollTop( orig + 1 );

			setTimeout(function(){

				$(window).scrollTop( orig );

			}, 0 );
		},

		call : function( event ){

			// prevent firing resize event, before load event
			if( 'load' == event.type ){
				dex_responsive.loaded = true;
			}

			if( dex_responsive.loaded ){
				setTimeout( function(){

					$.stellar().data('plugin_stellar').destroy();

					dex_responsive.resize();

					$.stellar().data('plugin_stellar').init();

					dex_responsive.auto_scroll();

				}, 0 );
			}

		}

	};

	dex_responsive.init();

})(jQuery);
