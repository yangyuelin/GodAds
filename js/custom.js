AOS.init({
    duration: 800,
    easing: 'slide',
    disable: 'mobile',
    once: true
});




$(function() {

    'use strict';

    $(".loader").delay(200).fadeOut("slow");
    $("#overlayer").delay(200).fadeOut("slow");

    var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function() {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function() {
                var $this = $(this);

                $this.prepend('<span class="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function(e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function() {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })

        $('body').on('click', '.js-menu-toggle', function(e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $('body').find('.js-menu-toggle').addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function(e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                    $('body').find('.js-menu-toggle').removeClass('active');
                }
            }
        });
    };
    siteMenuClone();

    var owlPlugin = function() {
        if ($('.owl-3-slider').length > 0) {
            var owl3 = $('.owl-3-slider').owlCarousel({
                loop: true,
                autoHeight: true,
                margin: 40,
                autoplay: true,
                smartSpeed: 700,
                items: 4,
                stagePadding: 0,
                nav: true,
                dots: true,
                navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    },
                    1100: {
                        items: 3
                    }
                }
            });
        }
        $('.js-custom-next-v2').click(function(e) {
            e.preventDefault();
            owl3.trigger('next.owl.carousel');
        })
        $('.js-custom-prev-v2').click(function(e) {
            e.preventDefault();
            owl3.trigger('prev.owl.carousel');
        })
        if ($('.owl-4-slider').length > 0) {
            var owl4 = $('.owl-4-slider').owlCarousel({
                loop: true,
                autoHeight: true,
                margin: 10,
                autoplay: true,
                smartSpeed: 700,
                items: 4,
                nav: false,
                dots: true,
                navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1100: {
                        items: 4
                    }
                }
            });
        }


        if ($('.owl-single-text').length > 0) {
            var owlText = $('.owl-single-text').owlCarousel({
                loop: true,
                autoHeight: true,
                margin: 0,
                autoplay: true,
                smartSpeed: 1200,
                items: 1,
                nav: false,
                navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>']
            });
        }
        if ($('.owl-single').length > 0) {
            var owl = $('.owl-single').owlCarousel({
                loop: true,
                autoHeight: true,
                margin: 0,
                autoplay: true,
                smartSpeed: 800,
                items: 1,
                nav: false,
                navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
                onInitialized: counter
            });

            function counter(event) {
                $('.owl-total').text(event.item.count);
            }

            $('.js-custom-owl-next').click(function(e) {
                e.preventDefault();
                owl.trigger('next.owl.carousel');
                owlText.trigger('next.owl.carousel');
            })
            $('.js-custom-owl-prev').click(function(e) {
                e.preventDefault();
                owl.trigger('prev.owl.carousel');
                owlText.trigger('prev.owl.carousel');
            })

            $('.owl-dots .owl-dot').each(function(i) {
                $(this).attr('data-index', i - 3);
            });

            owl.on('changed.owl.carousel', function(event) {
                var i = event.item.index;
                if (i === 1) {
                    i = event.item.count;
                } else {
                    i = i - 1;
                }
                $('.owl-current').text(i);
                $('.owl-total').text(event.item.count);
            })
        }

    }
    owlPlugin();

    var counter = function() {

        $('.count-numbers').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('ut-animated')) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.counter > span').each(function() {
                    var $this = $(this),
                        num = $this.data('number');
                    $this.animateNumber({
                        number: num,
                        numberStep: comma_separator_number_step
                    }, 5000);
                });

            }

        }, { offset: '95%' });

    }
    counter();

    // jarallax
    var jarallaxPlugin = function() {
        if ($('.jarallax').length > 0) {
            $('.jarallax').jarallax({
                speed: 0.2
            });
        }
    };
    jarallaxPlugin();



    var links = $('.js-hover-focus-one .service-sm')
        .mouseenter(function() {
            links.addClass('unfocus');
            $(this).removeClass('unfocus');
        }).mouseleave(function() {
            $(this).removeClass('unfocus');
            links.removeClass('unfocus');
        })


    $('.site-nav-wrap li a').click(function() {
        $("body").removeClass("offcanvas-menu");
        $(".burger").removeClass("active");
    })

})

// $('#index_tag').click(function() {

//     $('html,body').animate({ scrollTop: $('#index').offset().top }, 800);
// });

// $('#about_tag').click(function() {

//     $('html,body').animate({ scrollTop: $('#about').offset().top }, 800);
// });
// $('#service_tag').click(function() {

//     $('html,body').animate({ scrollTop: $('#service').offset().top }, 800);
// });
// $('#backstage_tag').click(function() {

//     $('html,body').animate({ scrollTop: $('#backstage').offset().top }, 800);
// });
// $('#work_tag').click(function() {

//     $('html,body').animate({ scrollTop: $('#work').offset().top }, 800);
// });


let mainNavLinks = document.querySelectorAll(".site-menu li a");
// let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

// window.addEventListener("scroll", event => {
//     let fromTop = window.scrollY;

//     mainNavLinks.forEach(link => {
//         let section = document.querySelector(link.hash);

//         if (
//             section.offsetTop <= fromTop &&
//             section.offsetTop + section.offsetHeight > fromTop
//         ) {
//             link.classList.add("active");
//         } else {
//             link.classList.remove("active");
//         }
//     });
// });



// menu fixed js code
$(window).scroll(function() {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        $('.site-nav').addClass('menu_fixed animated fadeInDown');
    } else {
        $('.site-nav').removeClass('menu_fixed animated fadeInDown');
    }
});
if (document.getElementById('default-select')) {
    $('select').niceSelect();
}