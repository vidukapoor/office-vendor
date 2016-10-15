import { Template } from 'meteor/templating';

// Range Slider
import noUiSlider from '../../../vendor/nouislider/distribute/nouislider.js';

import './forms.advanced.html';

(function() {
    'use strict';

    Template.formsAdvanced.onRendered(formAdvanced);

    function formAdvanced() {

        if ( !$.fn.select2 ||
             !$.fn.datepicker ||
             !$.fn.clockpicker ||
             !$.fn.colorpicker ) return;

        // Select 2

        $('#select2-1').select2();
        $('#select2-2').select2();
        $('#select2-3').select2();
        $('#select2-4').select2({
            placeholder: 'Select a state',
            allowClear: true
        });

        // Datepicker

        $('#example-datepicker-1').datepicker();
        $('#example-datepicker-2').datepicker();
        $('#example-datepicker-3').datepicker();
        $('#example-datepicker-4')
            .datepicker({
                container:'#example-datepicker-container-4'
            });
        $('#example-datepicker-5')
            .datepicker({
                container:'#example-datepicker-container-5'
            });

        // Clockpicker
        var cpInput = $('.clockpicker').clockpicker();
        // auto close picker on scroll
        $('main').scroll(function() {
            cpInput.clockpicker('hide');
        });


        // UI SLider (noUiSlider)

        $('.ui-slider').each(function() {

            noUiSlider.create(this, {
                start: $(this).data('start'),
                connect: 'lower',
                range: {
                    'min': 0,
                    'max': 100,
                }
            });
        });

        // Range selectable
        $('.ui-slider-range').each(function() {
            noUiSlider.create(this, {
                start: [25, 75],
                range: {
                    'min': 0,
                    'max': 100
                },
                connect: true
            });

        });

        // Live Values
        $('.ui-slider-values').each(function() {
            var slider = this;

            noUiSlider.create(slider, {
                start: [35, 75],
                connect: true,
                // direction: 'rtl',
                behaviour: 'tap-drag',
                range: {
                    'min': 0,
                    'max': 100
                }
            });

            slider.noUiSlider.on('slide', updateValues);
            updateValues();

            function updateValues() {
                var values = slider.noUiSlider.get();
                // Connecto to live values
                $('#ui-slider-value-lower').html(values[0]);
                $('#ui-slider-value-upper').html(values[1]);
            }
        });

        // Colorpicker

        $('#cp-demo-basic').colorpicker({
            customClass: 'colorpicker-2x',
            sliders: {
                saturation: {
                    maxLeft: 200,
                    maxTop: 200
                },
                hue: {
                    maxTop: 200
                },
                alpha: {
                    maxTop: 200
                }
            }
        });
        $('#cp-demo-component').colorpicker();
        $('#cp-demo-hex').colorpicker();

        $('#cp-demo-bootstrap').colorpicker({
            colorSelectors: {
                'default': '#777777',
                'primary': '#337ab7',
                'success': '#5cb85c',
                'info': '#5bc0de',
                'warning': '#f0ad4e',
                'danger': '#d9534f'
            }
        });

    }

})();