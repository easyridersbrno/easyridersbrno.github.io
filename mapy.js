
function DrawMapyWithLayer(container) {
    var center = SMap.Coords.fromWGS84(16.6061786, 49.2005619);
    var m = new SMap(JAK.gel(container), center, 13);
    m.addDefaultLayer(SMap.DEF_BASE).enable();
    m.addDefaultControls();

    var overlay = new SMap.Layer.Image();
    m.addLayer(overlay);
    overlay.enable();

    /* Add overlay; TODO: coords */
    var leftTop = SMap.Coords.fromWGS84(16.339, 49.279);
    var rightBottom = SMap.Coords.fromWGS84(16.858, 49.13);

    var imageId = overlay.addImage("map.svg", leftTop, rightBottom);
}

function MapyChangeOpacity(opacity) {

}