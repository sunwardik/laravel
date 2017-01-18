(function($) {
    "use strict";
    jQuery(document).ready(function($) {

        $('[data-toggle="tooltip"]').tooltip();

        //-----------------header sticky-----------------//

        $(window).on('scroll', function() {
            var navHeight = $(window).height() - 600;
            if ($(window).scrollTop() > navHeight) {
                $('#header-stikcy').addClass('on');
            } else {
                $('#header-stikcy').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '#header-stikcy',
            offset: 100

        });
        //-----------------header 2 sticky-----------------//
        $(window).on('scroll', function() {
            var navHeight = $(window).height() - 600;
            if ($(window).scrollTop() > navHeight) {
                $('#header2-stikcy').addClass('on');
            } else {
                $('#header2-stikcy').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '#header2-stikcy',
            offset: 100

        });
		//scroll to menu item

		$('a[href*="#"]:not([href="#"])').on('click', function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			  $('html, body').animate({
				scrollTop: target.offset().top - 75
			  }, 1000);
			  return false;
			}
		});
        //-----------------mobile menu-----------------//

        $('#navigation').slimmenu({
            resizeWidth: '767',
            collapserTitle: 'Main Menu',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });

        //---------------------- search section  ----------------------//

        $("#search-hidden").on('click', function(event) {
            $("#search-open").slideToggle("slow");
        });

        $('#slider').nivoSlider({
            pauseTime: 8000,
        });

        //portfolio section  

        $('.portfolio-list').mixItUp();

        //---------------------- portfolio light box  ----------------------//

        $('.lightbox').littleLightBox();

        //------------- wow js ---------------//

        new WOW().init();

        //------------- wow js ---------------//

        //------------- Team section    ---------------//

        var owl = $('#ourteam-carousel');
        owl.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            margin: 30,
            lazyLoad: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1440: {
                    items: 4
                }
            }
        })

        //--------------------- blog meta box function ------------------------
        $(".blog-item").hover(function() {
            $(this).find(".blog-meta").toggle('slow');
        })

        //------------- twitter section   ---------------//

        var owl = $('.twite-carousel');
        owl.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            margin: 30,
            autoplayHoverPause: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 600,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })

        //------------- client section    ---------------//

        var owl = $('.client-carousel');
        owl.owlCarousel({
            loop: false,
            nav: false,
            dots: true,
            margin: 30,
            autoplayHoverPause: true,
            lazyLoad: true,
            autoplay: true,
            autoplaySpeed: 600,
            responsive: {
                0: {
                    margin: 0,
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1440: {
                    items: 4
                }
            }

        })

        /*==========  Map  ==========*/

        var $googleMap = $('.maps');
        if ($googleMap.length > 0) {
            $googleMap.each(function() {
                var mapHeight = $(this).data('height'),
                    address = $(this).data('address'),
                    zoom = $(this).data('zoom'),
                    controls = $(this).data('disable-controls'),
                    scrollwheel = $(this).data('scrollwheel'),
                    marker = $(this).data('marker'),
                    markerTitle = $(this).data('marker-title'),
                    styles = $(this).data('styles');
                $(this).height(mapHeight);
                $(this).gmap3({
                    marker: {
                        address: address,
                        data: markerTitle,
                        options: {
                            icon: marker
                        },
                        events: {
                            mouseover: function(marker, event, context) {
                                var map = $(this).gmap3("get"),
                                    infowindow = $(this).gmap3({
                                        get: {
                                            name: "infowindow"
                                        }
                                    });
                                if (infowindow) {
                                    infowindow.open(map, marker);
                                    infowindow.setContent(context.data);
                                } else {
                                    $(this).gmap3({
                                        infowindow: {
                                            anchor: marker,
                                            options: {
                                                content: context.data
                                            }
                                        }
                                    });
                                }
                            },
                            mouseout: function() {
                                var infowindow = $(this).gmap3({
                                    get: {
                                        name: "infowindow"
                                    }
                                });
                                if (infowindow) {
                                    infowindow.close();
                                }
                            }
                        }
                    },
                    map: {
                        options: {
                            zoom: zoom,
                            disableDefaultUI: controls,
                            scrollwheel: scrollwheel,
                            styles: styles
                        }
                    }
                });
            });
        }
        /*--------------------------------------------------*/
        /* Counter*/
        /*--------------------------------------------------*/
        $('.timer').countTo();

        $('.couner-time').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -200
        });

    });
}(jQuery))