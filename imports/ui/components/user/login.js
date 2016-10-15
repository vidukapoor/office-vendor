import './login.html';

(function() {
    'use strict';

    Template.login.onRendered(userLogin);

    function userLogin() {

        var $form = $('#user-login');
        $form.validate({
            errorPlacement: errorPlacementInput,
            // Form rules
            rules: {
                accountName: {
                    required: true,
                    email: true
                },
                accountPassword: {
                    required: true
                }
            },
            submitHandler: function(/*form*/) {
                // form.submit();
                console.log('Form submitted!');
            }
        });
    }

    // Necessary to place dyncamic error messages
    // without breaking the expected markup for custom input
    function errorPlacementInput(error, element) {
        if( element.parent().is('.mda-form-control') ) {
            error.insertAfter(element.parent()); // insert after .mda-form-control
        }
        else if ( element.is(':radio') || element.is(':checkbox')) {
            error.insertAfter(element.parent());
        }
        else {
            error.insertAfter(element);
        }
    }

})();