$(document).ready(function() {

    $('#hero-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoHeight: true,
        autoHeightClass: 'owl-height',
        responsive:{ 
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#reviews-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: false,
        responsive:{ 
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // Old JS

    $('.mobile_menu_toggle').on('click', function(e) {
        e.preventDefault();
        $('.mobile_menu').toggleClass('hidden');
        $('.header-global').toggleClass('mobile-open');
    });

    if ($('.portfolio_example_slider').length) {
        $('.portfolio_example_slider').slick({
            arrows: false,
            focusOnSelect: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            slidesPerRow: 1,
            infinite: true
        });

        $('.slick-left-arrow').click(function() {
            $('.portfolio_example_slider').slick('slickPrev');
        });
        $('.slick-right-arrow').click(function() {
            $('.portfolio_example_slider').slick('slickNext');
        });
    }

    $('.title').click(function() {
        $('#category_dropdown').show();
    });
    $('#category_dropdown a').click(function(e) {
        $('.title').text($(this).text());
        $('.category_dropdown').hide();
        $(this).addClass('current');
        e.preventDefault();
    });

});