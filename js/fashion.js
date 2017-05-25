$(document).ready(function () {
    $('.slick-header').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
});
$(document).ready(function () {
    $('.slick-banner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
});

$('#slickMenBlock').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    responsive: [

        {
            breakpoint: 1366,
            settings: {
                arrows: true,
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1025,
            settings: {
                arrows: true,
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 769,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '50px',
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '75px'
            }
        }
    ]
});
