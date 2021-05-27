$(document).on('ready', function () {
    $(".regular").slick({

        slidesToShow: 2.7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        touchMove: true,
        swipeToSlide: true,
        arrows: true,
        prevArrow: '<span class="slick-prev" > </span>',
        nextArrow: '<span class="slick-next" > </span>',
        responsive:[{
    breakpoint: 880,
    settings: {
        slidesToShow: 1.7,
        slidesToScroll: 1
    }
},{
    breakpoint: 600,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
}]

    });

});