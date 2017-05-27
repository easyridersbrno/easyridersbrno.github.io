
function DrawMapyWithLayer(container) {
    var m = new SMap(JAK.gel(container));
    m.addDefaultLayer(SMap.DEF_BASE).enable();
    // m.addDefaultControls();

    var overlay = new SMap.Layer.Image();
    m.addLayer(overlay);
    overlay.enable();

    /* Add overlay; TODO: coords */
    var leftTop = SMap.Coords.fromWGS84(13, 50);
    var rightBottom = SMap.Coords.fromWGS84(13.9, 49.9);
    console.log(leftTop);
    console.log(rightBottom);
    vrstva.addImage("https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg", leftTop, rightBottom);
}