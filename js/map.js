$(document).ready(function() {
  if ($('#map').length) {
    map = new GMaps({
      div: '#map',
      lat: 51.500500,
      lng: -2.548000,
      zoom: 17
    });

    // Cribs Q
    map.addMarker({
      lat: 51.501629,
      lng: -2.548818,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Cribs Q',
      infoWindow: {
        content: '<p>Cribs Q</p><p>358 tap-ins this month</p>'
      }
    });

    // Q Block Info Point
    map.addMarker({
      lat: 51.501285,
      lng: -2.548807,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Q Block Info Point',
      infoWindow: {
        content: '<p>Q Block Info Point</p><p>129 tap-ins this month</p>'
      }
    });

    // Q Block Pond
    map.addMarker({
      lat: 51.501120,
      lng: -2.548608,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Q Block Pond',
      infoWindow: {
        content: '<p>Q Block Pond</p><p>980 tap-ins this month</p>'
      }
    });

    // Full Of Beans
    map.addMarker({
      lat: 51.500395,
      lng: -2.548038,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Full Of Beans',
      infoWindow: {
        content: '<p>Full Of Beans</p><p>84 tap-ins this month</p>'
      }
    });

    // Jimmy Deane's Fruit & Veg
    map.addMarker({
      lat: 51.500395,
      lng: -2.548038,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Jimmy Deane\'s Fruit & Veg',
      infoWindow: {
        content: '<p>Jimmy Deane\'s Fruit &amp; Veg</p><p>102 tap-ins this month</p>'
      }
    });

    // The SU Shop
    map.addMarker({
      lat: 51.500200,
      lng: -2.547376,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'The SU Shop',
      infoWindow: {
        content: '<p>The SU Shop</p><p>577 tap-ins this month</p>'
      }
    });

    // Escape Bar
    map.addMarker({
      lat: 51.500061,
      lng: -2.547478,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Escape Bar',
      infoWindow: {
        content: '<p>Escape Bar</p><p>1036 tap-ins this month</p>'
      }
    });

    // Red Bar
    map.addMarker({
      lat: 51.500049,
      lng: -2.547588,
      icon: "/build/img/map-marker-tappoint.png",
      title: 'Red Bar',
      infoWindow: {
        content: '<p>Red Bar</p><p>712 tap-ins this month</p>'
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

    if (markerName = location.hash.substr(1)) {
      markerNames = $.map(map.markers, function(m) { return m.title.toLowerCase().replace(/\W/g, '');})
      index = markerNames.indexOf(markerName);

      if (marker = map.markers[index]) {
        map.setCenter(marker.position.lat(), marker.position.lng());
      }
    }
  }
});
