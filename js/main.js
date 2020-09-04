$(window).on('load', function () {
    $('#section-loading').fadeOut();
});

$(document).ready(function () {
    if ($(window).width() < 854) {
        startCarousel();
    } else {
        $('.owl-carousel').addClass('off');
    }


    function startCarousel() {
        $("#owl_about_main_slider").owlCarousel({
            navigation: true, // Show next and prev buttons
            slideSpeed: 500,
            margin: 10,
            paginationSpeed: 400,
            autoplay: false,
            items: 1,
            itemsDesktop: false,
            itemsDesktopSmall: false,
            itemsTablet: false,
            itemsMobile: false,
            loop: true,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            responsive: {
                0: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                600: {
                    items: 2,
                    nav: true,
                    loop: false
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }
        });
        var li = $(".owl-item li ");
        $(".owl-item li").click(function () {
            li.removeClass('active');
        });
    }

    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }
});

$(window).resize(function () {
    if ($(window).width() < 854) {
        startCarousel();
    } else {
        stopCarousel();
    }
});


$(document).ready(function () {
    (function ($) {
        $(window).on("load", function () {
            $(".tab-content-inner").mCustomScrollbar({
                theme: "my-theme"
            });
        });


    })(jQuery);

});

$(document).ready(function () {
    $('.dropdwon-form').selectpicker();
});
