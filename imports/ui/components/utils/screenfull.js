
(function() {
    'use strict';

    Template.header.onRendered(initScreenfull);

    function initScreenfull() {
        var element = $('[data-toggle-fullscreen]');
            // Not supported under IE (requires jQuery Browser)
        if (window.jQBrowser.msie) {
            element.addClass('hide');
        } else {
            element.on('click', function(e) {
                e.preventDefault();

                if (screenfull.enabled) {

                    screenfull.toggle();

                } else {
                    // Fullscreen not enabled ;
                }

            });
        }
    }

})();