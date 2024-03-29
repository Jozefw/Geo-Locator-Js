window.onload = getMyLocation;

function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation);
	}

	// getCurrentPosition takes a suscess parameter, error parm and options parm, we only used success
	else {
		alert("oops, no geo location support");

	}
}

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var div = document.getElementById("location");
	div.innerHTML = "You are at Latitude: "
+ latitude + ", Longitude; " + longitude;

showMap(position.coords);

}

var map;
function showMap(coords) {

var googleLatAndLong =
new google.maps.LatLng(coords.latitude,
coords.longitude);

var mapOptions = {
zoom: 10,
center: googleLatAndLong,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var mapDiv = document.getElementById("map");
map = new google.maps.Map(mapDiv, mapOptions);

var title = "Your Location";
var content = "You are here: " + coords.latitude + "," + coords.longitude;
addMarker(map, googleLatAndLong, title, content);
}

function addMarker (map, latlong, title, content) {
	var markerOptions = {
		map: map,
		position: latlong,
		title: title,
		clickable: true,
	};

		var marker = new google.maps.Marker(markerOptions);

		var infoWindowOptions = {
		content: content,
		postition: latlong,

	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, "click", function() {
		infoWindow.open(map);
	});
	
	}

	




