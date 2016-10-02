(function () {

    var
        map,

        marker,

        mapPosition = {
            lat: 50.45848419,
            lng: 30.42357266
        };

    function showGoogleMaps() {

        var mapOptions = {
            zoom: 14,
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: mapPosition
        };

        map = new google.maps.Map(document.getElementById('googlemaps_b'), mapOptions);

        marker = new google.maps.Marker({
            position: mapPosition,
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

(function () {

    mapPosition = {
        lat: 50.4453614,
        lng: 30.5253583
    };

    function showGoogleMaps() {

    mapOptions = {
        zoom: 14,
        streetViewControl: false,
        scaleControl: false,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: mapPosition
    };

        map = new google.maps.Map(document.getElementById('googlemaps_k'), mapOptions);

        marker = new google.maps.Marker({
            position: mapPosition,
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


