$(document).ready(function() {

    // var w = $(window).width();
    //     h = $(window).height();
    // var w = $(document).width();
    //     h = $(document).height();


    // console.log( 'width' +  w );
    // console.log( 'width' + h );



});

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    offsetsect1 = $('.sect-1').offset().top;
    offsetsect2 = $('.sect-2').offset().top;
    offsetsect3 = $('.sect-3').offset().top;
    offsetsect4 = $('.sect-4').offset().top;
    offsetsect5 = $('.sect-5').offset().top;

    $('.h1').css({
        "transform": "translate( 0% , " + (scrollTop - offsetsect1) + "%",
    });
    $('.h2').css({
        "transform": "translate( 0% , " + (scrollTop - offsetsect2) * 1.4 + "%",
    });
    $('.h3').css({
        "transform": "translate( 0% , " + (scrollTop - offsetsect3) * 1.1 + "%",
    });
    $('.sect-4 img').css({
        "transform": "translate( 0% , " + (scrollTop - offsetsect4) / 11 + "%",
    });
    $('.h5').css({
        "transform": "translate( 0% , " + (scrollTop - offsetsect5) * 1.4  + "%",
    });

})
