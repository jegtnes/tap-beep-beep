$(document).ready(function() {
  if ($('#map').length) {
    map = new GMaps({
      div: '#map',
      lat: 51.499940,
      lng: -2.547272
    });

    // Cribs Q
    map.addMarker({
      lat: 51.501629,
      lng: -2.548818,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Cribs Q',
      infoWindow: {
        content: '<p>Cribs Q</p>'
      }
    });

    // Q Block Info Point
    map.addMarker({
      lat: 51.501285,
      lng: -2.548807,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Q Block Info Point',
      infoWindow: {
        content: '<p>Q Block Info Point</p>'
      }
    });

    // Q Block Pond
    map.addMarker({
      lat: 51.501120,
      lng: -2.548608,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Q Block Pond',
      infoWindow: {
        content: '<p>Q Block Pond</p>'
      }
    });

    // Full Of Beans
    map.addMarker({
      lat: 51.500395,
      lng: -2.548038,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Full Of Beans',
      infoWindow: {
        content: '<p>Full Of Beans</p>'
      }
    });

    // Jimmy Deane's Fruit & Veg
    map.addMarker({
      lat: 51.500395,
      lng: -2.548038,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Jimmy Deane\'s Fruit & Veg',
      infoWindow: {
        content: '<p>Jimmy Deane\'s Fruit &amp; Veg</p>'
      }
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
