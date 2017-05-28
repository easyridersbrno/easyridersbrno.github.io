
function DrawMapyWithLayer(container) {
    var center = SMap.Coords.fromWGS84(16.6061786, 49.2005619);
    var m = new SMap(JAK.gel(container), center, 13);
    m.addDefaultLayer(SMap.DEF_BASE).enable();
    m.addDefaultControls();

    var overlay = new SMap.Layer.Image();
    m.addLayer(overlay);
    overlay.enable();

    /* Add overlay; TODO: coords */
    var leftTop = SMap.Coords.fromWGS84(16.5, 49.3);
    var rightBottom = SMap.Coords.fromWGS84(16.7, 49.1);

    var imageId = overlay.addImage("drawing.svg", leftTop, rightBottom);
}

function MapyChangeOpacity(opacity) {

}