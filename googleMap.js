jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Westport Park', 38.478192,-85.479931],
        ['Morgan Conservation Park', 38.496079,-85.382663],
        ['Wendell Moore Park', 38.393796,-85.436903],
        ['Peggy Baker Park', 38.324421, -85.434157],
        ['Briar Hill Park', 38.322720, -85.514611]
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Westport Park</h3>' +
        '<p>Address: 6617 Mainstreet Westport, KY 40077</p>' +
        '<p>Located on the Ohio River, Westport Park features boat docks, a playground, pavilion and plenty of green space. Wonderful views of the river!</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Morgan Conservation Park</h3>' +
        '<p>Address: 1200 E Hwy 524 Lagrange, KY 40031</p>' +
        '<p>A nature preserve featuring trails, a pavilion and abundant wildlife. Perfect for hiking!</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Aquatic Center / OC Parks and Rec / Wendell Moore Park</h3>' +
        '<p>Address: 1551 N. Hwy 393 Lagrange, KY 40031</p>' +
        '<p>A versatile park with a large play area, two pavilions and basketball and tennis courts. Great place for a reunion or get toegether!</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Peggy Baker Park</h3>' +
        '<p>Address: 6914 Rte 2858 Crestwood, KY 40014</p>' +
        '<p>A ballpark with 4 large fields, 2 small fields with a playground and pavilion. Home to the South Oldham Little League. Come catch a game!</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Briar Hill Park</h3>' +
        '<p>Address: 7407 E Orchard Grass Blvd Crestwood, KY 40014</p>' +
        '<p>A community park with a playground, pavilion, walking trails, basketball and tennis courts.</p>' +
        '</div>'],
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    //closes the info window when someone clicks somewhere else on the map
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(10);
        google.maps.event.removeListener(boundsListener);
    });
    
}