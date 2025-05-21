/*
    Miniport by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $nav = $('#nav');

    // Breakpoints.
    breakpoints({
        xlarge: [ '1281px', '1680px' ],
        large: [ '981px', '1280px' ],
        medium: [ '737px', '980px' ],
        small: [ null, '736px' ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Scrolly.
    $('#nav a, .scrolly').scrolly({
        speed: 1000,
        offset: function() { return $nav.height(); }
    });

    // Dropdown Menu Fix: Ensuring it works with other scripts.
    $(document).ready(function () {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(function (dropdown) {
            const content = dropdown.querySelector('.dropdown-content');

            if (content) {
                dropdown.addEventListener('mouseenter', function () {
                    content.style.display = 'block';
                });

                dropdown.addEventListener('mouseleave', function () {
                    content.style.display = 'none';
                });

                // Mobile: Toggle dropdown on click
                dropdown.addEventListener('click', function (event) {
                    event.stopPropagation();
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                });

                // Hide dropdown if click is outside
                document.addEventListener('click', function (event) {
                    if (!dropdown.contains(event.target)) {
                        content.style.display = 'none';
                    }
                });
            }
        });
    });

})(jQuery);
