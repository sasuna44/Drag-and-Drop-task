document.getElementById("showMapButton").addEventListener("click", showMap);
document.getElementById("detailsButton").addEventListener("click", showDetails);
const  map_container = document.getElementById('map');
const informationDiv = document.getElementById("information");


function showMap() {
    if (!navigator.geolocation) {
        map_container.innerHTML ='Geolocation is not supported by your browser!';
        return;
    }
    
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 12
        };
        
        const map = new google.maps.Map(map_container, mapOptions);
    }, function(error) {
        map_container.innerText='Unable to retrieve your location!' ;
    });
}

function showDetails() {
    if (!navigator.geolocation) {
        map_container.innerText='Geolocation is not supported by your browser!';
        return;
    }
    
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const latitudeElement = document.querySelector(".latitude");
        const longitudeElement = document.querySelector(".longitude");
        informationDiv.style.display = "flex";
        latitudeElement.textContent = `Latitude ${latitude}`;
        longitudeElement.textContent = `Longitude ${longitude}`;
    }, function(error) {
        map_container.innerText=('Unable to retrieve your location!');
    });
}
