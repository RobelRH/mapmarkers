let map;

function initMap() {
    // map location to open when the map launchs
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 9.00113, lng: 38.79049},
        zoom: 13,
        mapId: '4498a7a2326d572',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    })

    // list of house
    // lets pass
    // first_name, last_name, phone, housenumber
    const houses = [
        ["john", "doe", "09000000", "BL-361", 9.00438072367348, 38.780354037806546],
        ["albert", "doe", "09111111", "Ks-564", 9.011129960802846, 38.75711941004583],
        ["jane", "doe", "09222222", "F-670", 8.992663892488347, 38.758384394891024],
        ["chris", "doe", "09333333", "BL-078", 8.991857698531094, 38.79665631183061]
    ]

    let marker;

    //
    for (let i=0; i < houses.length; i++) {
        const house = houses[i]

        const marker = new google.maps.Marker({
            position: {lat: house[4], lng: house[5]},
            map,
            title: "Hello World!",
            icon: {
                url: 'icons8-home-16.svg',
                scaledSize: new google.maps.Size(30, 30)
            },
            animation: google.maps.Animation.DROP
        });

        // view user on map
        const contentString =
            '<div id="content">' +
                `<h2>${house[0] + ' ' + house[1]}</h2>` +
                `<h3>${house[2]}</h3>` +
                '<div>' +
                    `<p><b>House Number : ${house[3]} </b></p> ` +
                    `<p><b>user profile</b>, <a href="http://localhost:3000/users/${house[0]}" target="_blank">user profile link</a> </p>` +
                "</div>" +
            "</div>";
            
        // users info window
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });
    
        // click house to get user info
        // you have to click the markers
        marker.addListener("click", () => {
            infowindow.close();
            infowindow.open({
              anchor: marker,
              map,
              shouldFocus: false,
            });
        });
    }

}