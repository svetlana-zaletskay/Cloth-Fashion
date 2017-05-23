$(document).ready(function(){
    $('.slick-header').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
});
});
$(document).ready(function(){
    $('.slick-banner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
});

$('#slickMenBlock').slick({
    slidesToShow: 6,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                slidesToShow: 6
            }
        },
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '56px',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '65px',
                slidesToShow: 1
            }
        }
    ]
});