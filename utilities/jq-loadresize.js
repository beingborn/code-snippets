$(window).on('load resize', function() {
    var width = $(window).width();

    if (width < 1280) {
        $('.ele').hide();
        $('.ele').removeAttr("href");
    } else {
        $('.ele').show();
    }
});