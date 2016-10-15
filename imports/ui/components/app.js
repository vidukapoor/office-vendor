/*!
 *
 * Centric - Bootstrap Admin Template
 *
 * Version: 1.4.1
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// IMPORTS
// -----------------------------------

import './charts/flot.js';
import './charts/radial.js';
import './charts/rickshaw.js';
import './colors/colors.constant.js';
import './colors/colors.js';
import './core/core.js';
import './dashboard/dashboard.js';
import './cards/cards.js';
import './elements/elements.js';
import './elements/spinners.js';
import './elements/bootstrapui.js';
import './elements/grid-masonry.js';
import './elements/nestable.js';
import './elements/sweetalert.js';
import './forms/dropzone.js';
import './forms/editor.js';
import './forms/forms.advanced.js';
import './forms/forms.classic.js';
import './forms/wizard.js';
import './forms/material.js';
import './forms/validation.js';
import './forms/xeditable.js';
import './header/header.js';
import './layouts/layouts.js';
import './maps/google-map-full.js';
import './maps/google-map.js';
import './maps/vector-map.js';
import './pages/messages.js';
import './pages/profile.js';
import './pages/gallery.js';
import './pages/search.js';
import './pages/wall.js';
import './pages/blog.js';
import './pages/timeline.html';
import './pages/invoice.html';
import './pages/pricing.html';
import './pages/contacts.html';
import './pages/faq.html';
import './pages/projects.html';
import './ripple/ripple.init.js';
import './ripple/ripple.js';
import './settings/settings.js';
import './sidebar/sidebar.js';
import './tables/bootgrid.js';
import './tables/datatable.js';
import './tables/tables.classic.js';
import './translate/translates.js';
import './user/user.js';
import './user/lock.js';
import './user/login.js';
import './user/recover.js';
import './user/signup.js';
import './utils/screenfull.js';
import './utils/svgreplace.js';

// APP START
// -----------------------------------

(function() {
    'use strict';

    // Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        options.async = true;
    });

})();