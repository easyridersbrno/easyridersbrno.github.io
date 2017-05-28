var map;
function GeoMaps(container) {
  map = new google.maps.Map(document.getElementById(container), {
    zoom: 13,
    center: {lat: 49.2005619, lng: 16.6061786}
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
      'slopes.geojson');
}