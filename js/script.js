$('.slider').slick({
    autoplay: true,
    speed: 3000,
    lazyLoad: 'progressive',
    arrows: true,
    dots: false,
    prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function (e) {

    e.preventDefault();

    var arrow = $(this);

    if (!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});



var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,

        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            slidesPerView: 3,
            spaceBetween: 50,
            speed: 6000,
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slideActiveClass: "active",
            navigation: {
                nextEl: ".next",
                prevEl: ".prev"
            },
            pagination: {
                el: ".pagination",
                clickable: true
            },
            autoplay: {
                enabled: true,
                delay: 1
            },
        },
    }

});


$(document).ready(function () {
    $('.your-class').slick({
        infinite: true,
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 5500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1,

                }
            }
        ]
    });

});

$(document).ready(function () {
    $('.your-class1').slick({
        infinite: true,
        slidesToShow: 4,
        dots: true,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                    slidesToShow: 1,

                }
            }
        ]
    });

});

$(document).ready(function () {
    $('.packages_sl').slick({
        infinite: true,
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 3,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5500,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: false,
                    slidesToShow: 2,

                }
            }
        ]
    });

});