function initMap() {
    const location = { lat: 37.967667, lng: -1.214861 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: location,
        mapTypeId: "roadmap",
        styles: [
            {
                featureType: "all",
                elementType: "all",
                stylers: [
                    { saturation: -80 }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "all",
                stylers: [
                    { hue: "#00ffee" },
                    { saturation: 50 }
                ]
            },
            {
                featureType: "poi.business",
                elementType: "all",
                stylers: [
                    { hue: "#6699ff" }
                ]
            }
        ]
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Restaurante Ni Hao",
        animation: google.maps.Animation.DROP,
        icon: {
            url: "https://maps.google.com/mapfiles/kml/shapes/restaurant.png",
            scaledSize: new google.maps.Size(40, 40)
        }
    });

    const infowindow = new google.maps.InfoWindow({
        content: "<h3>Restaurante Ni Hao</h3><p>Entrevías, Alcantarilla<br>Murcia, España</p>"
    });

    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
        });
    });

    // Manejo de errores
    google.maps.event.addListener(map, 'tilesloaded', function() {
        console.log('Map tiles loaded successfully.');
    });

    google.maps.event.addListener(map, 'tilesloaded', function(error) {
        if (error) {
            console.error('Error loading map tiles:', error);
        }
    });
}

