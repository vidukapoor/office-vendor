import { Template } from 'meteor/templating';

import './editor.html';

(function() {
    'use strict';

    Template.formsEditor.onRendered(formEditor);

    function formEditor() {

        // Summernote HTML editor
        $('.summernote').each(function(){
            $(this).summernote({
                height: 380
            });
        });

        $('.summernote-air').each(function(){
            $(this).summernote({
                airMode: true
            });
        });

    }

})();