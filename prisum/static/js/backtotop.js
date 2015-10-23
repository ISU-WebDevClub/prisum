// Requires jQuery

$(document).ready(function() {
    var backToTop = $('.back-to-top');

    // Show or hide the sticky footer button, and keep it above the footer
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            backToTop.fadeIn(200);
        } else {
            backToTop.fadeOut(200);
        }

        if (backToTop.offset().top + backToTop.outerHeight() > $('#footer').offset().top - 12) {
            backToTop.css({'position': 'absolute', 'bottom': ($('#footer').outerHeight() + 12)});
        }

        if ($(this).scrollTop() + $(this).height() < $(document).height() - $('#footer').outerHeight()) {
            backToTop.css({'position': 'fixed', 'bottom': '12px'});
        }
    });

    // Animate the scroll to top
    backToTop.click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 200);
    });
});