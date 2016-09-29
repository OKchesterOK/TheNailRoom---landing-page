(function () {

    var
        map,

        marker,

        markerPosition = {
            lat: 50.458509281147066,
            lng: 30.42351667728076
        },

        mapPosition = {
            lat: 50.458509281147066,
            lng: 30.42147965456450
        };

    function showGoogleMaps() {

        var mapOptions = {
            zoom: 17,
            streetViewControl: false,
            scaleControl: true,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: mapPosition
        };

        map = new google.maps.Map(document.getElementById('googlemaps'), mapOptions);

        marker = new google.maps.Marker({
            position: markerPosition,
            map: map,
            draggable: false
        });
    }

    google.maps.event.addDomListener(window, 'load', showGoogleMaps);

    $(window).resize(function() {
        initializeMap();
    });

    function initializeMap() {
        marker.position = new google.maps.LatLng(mapPosition.lat, mapPosition.lng);
        marker.setMap(map);
    }

})();
