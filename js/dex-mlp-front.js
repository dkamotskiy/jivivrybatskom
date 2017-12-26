(function($){
	function is_touch_device(){
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	function clamp( a ){
		return a < 0 ? 0 : ( a > 100 ? 100 : a );
	}
	$(function(){
		var $layers = { 'bg': [], 'ly': [] }, $sto,
			collection = [];
		$('.dex-mlp-parallax').each(function(){
			$(this)
				.attr( 'data-stellar-horizontal-offset', parseInt( $(this).offset().top ) )
				.find( '.dex-container' ).width( $(this).parent().width() );
			if( $(this).hasClass( 'dex-custom' ) ){
				if( $(this).hasClass( 'dex-force-fw' ) ){
					$(this).css({
						'width': $(window).width(),
						'max-width': $(window).width(),
						'left': $(this).position().left - $(this).offset().left
					});
				}
			} else if( $(this).hasClass( 'dex-fullscreen' ) ){
				$(this).css({
					'width': $(window).width(),
					'max-width': $(window).width(),
					'height': $(window).height(),
					'left': $(this).position().left - $(this).offset().left
				});
			}
			if( $(this).hasClass( 'dex-mouse' ) ){
				var $lyrs = $(this).find('.dex-mlp-layer');
				$layers.bg.push( parallax = {
					'elem': this,
					'x': 50,
					'y': 50,
					'r': parseFloat( $(this).attr('data-move-ratio') / 10 ),
					'layers': []
				} );
				$lyrs.each(function(){
					$layers.ly.push( obj = {
						'elem': this,
						'parent': $(this).closest('.dex-mlp-parallax'),
						'x': parseInt( this.style.left ),
						'y': parseInt( this.style.top ),
						'r': parseFloat( $(this).attr('data-move-ratio') / 10 )
					} );
					parallax.layers.push( obj );
				});
				collection.push( parallax );
			}
		});
		if( typeof dex_responsive == 'object' ){
			dex_responsive.mouse_parallax = collection;
		}
		if( ! is_touch_device() ){
			if( $layers.bg.length > 0 ){
				$(window).on('mousemove.dex',function(e){
					var x = e.clientX, y = e.clientY, w = $(window).width(), h = $(window).height();
					for( var i = 0; i < $layers.bg.length; i++ ){
						$layers.bg[i].elem.style.backgroundPosition =
							clamp( $layers.bg[i].r * ( w / 2 - x ) + $layers.bg[i].x ) + '% ' +
							clamp( $layers.bg[i].r * ( h / 2 - y ) + $layers.bg[i].y ) + '%';
					}
					for( var i = 0; i < $layers.ly.length; i++ ){
						$layers.ly[i].elem.style.left = ( $layers.ly[i].r * ( w / 2 - x ) + $layers.ly[i].x ) + 'px';
						$layers.ly[i].elem.style.top = ( $layers.ly[i].r * ( h / 2 - y ) + $layers.ly[i].y ) + 'px';
					}
				});
			}
		}
		$.stellar({
			responsive: true,
			horizontalScrolling: false,
			verticalScrolling: true
		});
		$(window).resize(function(){
			$('.dex-mlp-parallax').each(function(){
				$(this).find('.dex-layer-container,.dex-container').width( $(this).parent().width() );
				if( $(this).hasClass( 'dex-custom' ) ){
					if( $(this).hasClass( 'dex-force-fw' ) ){
						$(this).css({
							'width': $(window).width(),
							'max-width': $(window).width(),
							'left': $(this).position().left - $(this).offset().left
						}).find('.dex-layer-container').width( $(window).width() );
					}
				} else if( $(this).hasClass( 'dex-fullscreen' ) ){
					$(this).css({
						'width': $(window).width(),
						'max-width': $(window).width(),
						'height': $(window).height(),
						'left': $(this).position().left - $(this).offset().left
					});
				}
			});
		});
	});
})(jQuery);
