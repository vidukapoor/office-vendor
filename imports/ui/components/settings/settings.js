import { Template } from 'meteor/templating';

import './settings.tpl.html';

(function() {
    'use strict';

    Template.settings.onRendered(initSettings);

    function initSettings() {

        // Themes setup
        var themes = [
            'theme-1',
            'theme-2',
            'theme-3',
            'theme-4',
            'theme-5',
            'theme-6',
            'theme-7',
            'theme-8',
            'theme-9'
        ];

        var body = $('body');
        var header = $('.layout-container > header');
        var sidebar = $('.layout-container > aside');
        var brand = sidebar.find('.sidebar-header');
        var content = $('.layout-container > main');

        // Handler for themes preview
        $('input[name="setting-theme"]:radio').change(function() {
            var index = this.value;
            if (themes[index]) {
                body.removeClass(themeClassname);
                body.addClass(themes[index]);
            }
        });
            // Regular expression for the pattern bg-* to find the background class
            function themeClassname(index, css) {
                var cmatch = css.match(/(^|\s)theme-\S+/g);
                return (cmatch || []).join(' ');
            }


        // Handler for menu links
        $('input[name="headerMenulink"]:radio').change(function() {
            var menulinks = $('.menu-link');
            // remove allowed classses
            menulinks.removeClass('menu-link-slide menu-link-arrow menu-link-close');
            // Add selected
            menulinks.addClass(this.value);
        });

        // Handlers for layout variations
        // var lContainer = $('.layout-container');
        $('#sidebar-showheader').change(function() {
            brand[this.checked ? 'show' : 'hide']();
        });
        var sidebarToolbar = $('.sidebar-toolbar');
        $('#sidebar-showtoolbar').change(function() {
            sidebarToolbar[this.checked ? 'show' : 'hide']();
        });

        $('#sidebar-offcanvas').change(function() {
            body[this.checked ? 'addClass' : 'removeClass']('sidebar-offcanvas');
        });
    }

})();