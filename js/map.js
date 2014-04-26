$(document).ready(function() {
  if ($('#map').length) {
    map = new GMaps({
      div: '#map',
      lat: 51.499940,
      lng: -2.547272
    });


    // Kudos to the the fine ladies and gents at Paulund for this function
    // http://www.paulund.co.uk/create-google-maps-with-gmaps-js
    GMaps.geolocate({
    success: function(position){
      map.setCenter(position.coords.latitude, position.coords.longitude);

      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        icon: "/build/img/map-marker-geolocation.png",
        title: 'You are here.',
        infoWindow: {
          content: '<p>You are here!</p>'
        }
      });
    },
    error: function(error){
      console.log('Geolocation failed: '+error.message);
    },
    not_supported: function(){
      console.log("Your browser has no geolocation")
    }
  });
  }
});
