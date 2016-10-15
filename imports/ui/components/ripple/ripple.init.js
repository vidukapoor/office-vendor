import { Template } from 'meteor/templating';

(function() {
    'use strict';

    Template.layout.onRendered(initRipple);

    function initRipple() {
        $('.ripple').each(function(){
            new Ripple($(this));
        });
    }

})();
