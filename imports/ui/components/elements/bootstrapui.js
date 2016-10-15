import { Template } from 'meteor/templating';

import './bootstrapui.html';

(function() {
    'use strict';

    Template.bootstrap.onRendered(runBootstrap);

    function runBootstrap() {

        // POPOVER
        // -----------------------------------

        $('[data-toggle="popover"]').popover();

        // TOOLTIP
        // -----------------------------------

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

    }

})();