Router.configure({
    layoutTemplate: 'layout'
        // loadingTemplate: 'loading'
});

// Default route
Router.route('/', function() {
    Router.go('dashboard');
});

// Dashboard
Router.route('dashboard', function() {
    this.render('Dashboard');
});

// Cards
Router.route('cards', function() {
    this.render('cards');
});

// Charts
Router.map(function() {
    this.route('chart-flot', function() {
        this.render('chartsFlot');
    });
    this.route('chart-radial', function() {
        this.render('chartsRadial');
    });
    this.route('chart-rickshaw', function() {
        this.render('chartsRickshaw');
    });
});

// Forms
Router.map(function() {
    this.route('form-classic', function() {
        this.render('classicInputs');
    });
    this.route('form-advanced', function() {
        this.render('formsAdvanced');
    });
    this.route('form-validation', function() {
        this.render('formsValidation');
    });
    this.route('form-material', function() {
        this.render('materialInputs');
    });
    this.route('form-editor', function() {
        this.render('formsEditor');
    });
    this.route('form-upload', function() {
        this.render('formUpload');
    });
    this.route('form-xeditable', function() {
        this.render('XEditable');
    });
    this.route('form-wizard', function() {
        this.render('wizard');
    });
});

// Tables
Router.map(function() {
    this.route('table-classic', function() {
        this.render('classicTables');
    });
    this.route('table-datatables', function() {
        this.render('datatables');
    });
    this.route('table-bootgrid', function() {
        this.render('bootgrid');
    });
});

// Layouts
Router.map(function() {
    this.route('layout-boxed', function() {
        this.render('boxedLayout');
    });
    this.route('layout-columns', function() {
        this.render('columnsLayout');
    });
    this.route('layout-containers', function() {
        this.render('containers');
    });
    this.route('layout-overlap', function() {
        this.render('overlapLayout');
    });
    this.route('layout-tabs', function() {
        this.render('tabsLayout');
    });
});

// Elements
Router.map(function() {
    this.route('bootstrap', function() {
        this.render('bootstrap');
    });
    this.route('buttons', function() {
        this.render('buttons');
    });
    this.route('colors', function() {
        this.render('colors');
    });
    this.route('grid-masonry', function() {
        this.render('gridMasonry');
    });
    this.route('grid', function() {
        this.render('grid');
    });
    this.route('icons', function() {
        this.render('icons');
    });
    this.route('lists', function() {
        this.render('lists');
    });
    this.route('nestable', function() {
        this.render('nestable');
    });
    this.route('spinners', function() {
        this.render('spinners');
    });
    this.route('sweetalert', function() {
        this.render('sweetalert');
    });
    this.route('typography', function() {
        this.render('typography');
    });
    this.route('utilities', function() {
        this.render('utilities');
    });
    this.route('whiteframes', function() {
        this.render('whiteframes');
    });
});

// Maps
Router.map(function() {
    this.route('google-map-full', function() {
        this.render('fullsizeGoogleMaps');
    });
    this.route('google-map', function() {
        this.render('googleMaps');
    });
    this.route('vector-map', function() {
        this.render('vectorMaps');
    });
});

// Pages
Router.map(function() {
    this.route('timeline', function() {
        this.render('timeline');
    });
    this.route('invoice', function() {
        this.render('invoice');
    });
    this.route('pricing', function() {
        this.render('pricing');
    });
    this.route('contacts', function() {
        this.render('contacts');
    });
    this.route('faq', function() {
        this.render('faq');
    });
    this.route('projects', function() {
        this.render('projects');
    });
    this.route('blog', function() {
        this.render('blog');
    });
    this.route('blog-article', function() {
        this.render('blogArticle');
    });
    this.route('gallery', function() {
        this.render('gallery');
    });
    this.route('messages-board', function() {
        this.render('messagesBoard');
    });
    this.route('profile', function() {
        this.render('profile');
    });
    this.route('search', function() {
        this.render('search');
    });
    this.route('wall', function() {
        this.render('wall');
    });
});

// User pages
Router.map(function() {
    this.route('lock', function() {
        this.render('lock');
        this.layout('userLayout');
    });
    this.route('login', function() {
        this.render('login');
        this.layout('userLayout');
    });
    this.route('recover', function() {
        this.render('recover');
        this.layout('userLayout');
    });
    this.route('signup', function() {
        this.render('signup');
        this.layout('userLayout');
    });
});

// Router transitions

Router.onAfterAction(function() {

    var ANIMATION_CLASS = 'fadeIn'; // see animate.css
    var ANIMATION_EVENTS = 'animationend webkitAnimationEnd oanimationend MSAnimationEnd';
    var wrapper = $('main').addClass('animated');

    $('.layout-container').removeClass('sidebar-visible');

    wrapper
    // detach previous events
        .off(ANIMATION_EVENTS)
        // attach new event
        .on(ANIMATION_EVENTS, function() {
            // remove animation and prepare for next transition
            wrapper.removeClass(ANIMATION_CLASS)
        })
        // start animation
        .addClass(ANIMATION_CLASS);
});