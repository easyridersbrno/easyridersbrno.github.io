var MINI = require('minified');
var _=MINI._, $=MINI.$, $$=MINI.$$, EE=MINI.EE, HTML=MINI.HTML;


$(function() {
    DrawMapsWithLayer('maps_container');
    // GeoMaps('maps_container');

    // var maps = EE('span', {$: 'button'}, 'Google Maps');
    // maps.onClick(function() { 
    //     $('#maps_container').set('-hidden');
    //     $('#mapy_container').set('+hidden');
    // })
    // var mapy = EE('span', {$: 'button'}, 'Mapy.cz');
    // mapy.onClick(function() {
    //     $('#mapy_container').set('-hidden');
    //     $('#maps_container').set('+hidden');
    //     DrawMapyWithLayer('mapy_container');
    // })

    // $('.header').add([maps, mapy]);


    var slider = EE('input', {'type': 'range', 'min': 0, 'max': 1, 'step': 0.05, 'value': 0.75});
    slider.onChange(function (value, i, t) {
        //google
        $('.gmap_img').set('$opacity', value);
    })
    $('body').add(EE('div', {$: 'slider-container'}, slider));

});
