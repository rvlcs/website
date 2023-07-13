var RVLCS;
(function (RVLCS) {
    function scrollToFixed(selector) {
        var bodyClass = 'navbar-fixed-padding';
        var fixedClass = 'fixed-top';
        var $window = $(window);
        var $body = $('body');
        var $elem = $(selector);
        var $parent = $elem.parent();
        var position = $elem.offset();
        if ($window.scrollTop() > position.top) {
            $body.addClass(bodyClass);
            $parent.addClass(fixedClass);
        }
        $window.scroll(function () { return scrolling(); });
        function scrolling() {
            if ($window.scrollTop() > position.top) {
                $body.addClass(bodyClass);
                $parent.addClass(fixedClass);
            }
            else if ($parent.hasClass(fixedClass)) {
                $body.removeClass(bodyClass);
                $parent.removeClass(fixedClass);
            }
        }
    }
    RVLCS.scrollToFixed = scrollToFixed;
})(RVLCS || (RVLCS = {}));
$(window).ready(function () {
    $('#main-nav .nav-link, .serviceLink').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href').replace('/', '')).offset().top - 102
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});