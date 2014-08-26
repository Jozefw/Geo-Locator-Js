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
}

function displayError(error) {
	var errorTypes = {
		0: "Unkown Error",
		1: "Permission Denied by user",
		2: "Position is not available",
		3: "RequestTimed out",
	};

	var errorMessage = errorTypes[error.code];
	if (error.code === 0 || error.code === 2) {
		errorMessage = errorMessage + " " + error.message;
	}

	var div = document.getElementById("location");
	div.innerHTML = errorMessage;

}