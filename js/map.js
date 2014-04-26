$(document).ready(function() {
  if ($('#map').length) {
    map = new GMaps({
      div: '#map',
      lat: 51.499940,
      lng: -2.547272
    });
  }
});
