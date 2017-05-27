var m = new SMap(JAK.gel("m"));
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var vrstva = new SMap.Layer.Image();     /* Obrázková vrstva */
m.addLayer(vrstva);                      /* Přidat ji do mapy */
vrstva.enable();                         /* A povolit */

/* Přidat do vrstvy obrázek */
var leftTop = SMap.Coords.fromWGS84(13, 50);
var rightBottom = SMap.Coords.fromWGS84(13.999, 49.999);
vrstva.addImage("https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg", leftTop, rightBottom);
