// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Typescript/Javascript code.

namespace RVLCS {
    export function scrollToFixed(selector: string): void {
        const bodyClass: string = 'navbar-fixed-padding';
        const fixedClass: string = 'fixed-top';
        const $window = $(window);
        const $body = $('body');
        const $elem = $(selector);
        const $parent = $elem.parent();
        const position = $elem.offset();

        if ($window.scrollTop() > position.top) {
            $body.addClass(bodyClass);
            $parent.addClass(fixedClass);
        }

        $window.scroll(() => scrolling());
        function scrolling() {
            if ($window.scrollTop() > position.top) {
                $body.addClass(bodyClass);
                $parent.addClass(fixedClass);
            } else if ($parent.hasClass(fixedClass)) {
                $body.removeClass(bodyClass);
                $parent.removeClass(fixedClass);
            }
        }
    }
}

$(window).ready(function () {
    $('#main-nav .nav-link, .serviceLink').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href').replace('/', '')).offset().top - 102
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });
});