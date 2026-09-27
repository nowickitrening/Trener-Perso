$(function() {

    // MENU
    $('.navbar-collapse a').on('click', function(){
        $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
        disable: 'mobile',
        duration: 600,
        once: true
    });

    // SMOOTHSCROLL (Wykluczamy przyciski z atrybutem data-cal-link)
    $('.nav-link.smoothScroll, a.smoothScroll').on('click', function(event) {
        var $anchor = $(this);
        var href = $anchor.attr('href');

        if (href && href.startsWith('#') && href.length > 1) {
            $('html, body').stop().animate({
                scrollTop: $(href).offset().top - 49
            }, 1000);
            event.preventDefault();
        }
    });

});
