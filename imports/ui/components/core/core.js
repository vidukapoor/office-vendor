import { Template } from 'meteor/templating';

import './core.layout.html';

Template.layout.onRendered(() => {

    // Set default theme
    $('body').addClass('theme-1');

});
