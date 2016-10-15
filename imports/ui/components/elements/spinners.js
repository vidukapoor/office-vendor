import { Template } from 'meteor/templating';

import './spinners.html';

Template.spinners.onRendered(function(){

    // Require here makes possible to run the js when the template
    // markup is ready. Otherwise standard jQuery.ready won't work

    // Loaders.CSS
    require('../../../vendor/loaders.css/loaders.css.js');

})

