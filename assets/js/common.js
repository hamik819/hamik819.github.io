var Portfolio = window.Portfolio || {};
Portfolio = (function($) {
	'use strict';
	var common = {
		
		init: function() {
			
		}
	};

    var main = {
        bgChange: function(){
            $(window).on('scroll', function(){
                var top = $('.section2').offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = $(window).height();
                if( scrollTop > top - (windowHeight - (windowHeight * 0.25)) ){
                    $('body').addClass('colorful');
                }else if( scrollTop < top ){
                    $('body').removeClass('colorful');
                }
            });
        },
        imageShow: function(){
            $('.section2').hover(function(){
                $('.circle').addClass('hover');
            }, function(){
                $('.circle').removeClass('hover');
            });
        },
		
		init: function() {
			main.bgChange();
            // main.imageShow();
		}
	};

	$(document).ready(function() {
		common.init();

		if( $('.main').length > 0 ){
            var top = $('.section2').offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            if( scrollTop > top - (windowHeight - (windowHeight * 0.25)) ){
                $('body').addClass('colorful');
            }else if( scrollTop < top ){
                $('body').removeClass('colorful');
            }
			main.init();   
		}

	});

	return {
		// layerOpen: common.layerOpen,
		// layerClose: common.layerClose,
	};
})($);

$(window).resize(function() {
	
});
