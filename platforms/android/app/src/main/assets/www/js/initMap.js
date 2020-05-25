var map;
var worldBounds = {
	north:51.992839,
	south:51.720586,
	west:-2.414698,
	east:-1.694470,
};
var cPoint = {lat: 51.899284, lng:-2.078342};
//global variables for marker arrays
var geoMarkers = [];
var attractionMarkers = [];
//global variable defining the root location for marker icon images
var iconBase = "./img/icons/";
//country co-ordinates

function initMap() {
	var mapOptions = {
		center: cPoint,
		restriction: {
			latLngBounds: worldBounds,
			strictBounds: false,
		},
		zoom: 12,
		mapTypeId: 'roadmap',
		zoomControl: true,
  		mapTypeControl: false,
  		scaleControl: true,
  		streetViewControl: false,
  		rotateControl: false,
  		fullscreenControl: false,
	};
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	geolocation();
	addAttractionMarkers();

	};

function geolocation(){
	//geolocation
	//test if geolocation is available
		if ( "geolocation" in navigator ) {
			
		  	/* geolocation is available */
			//options
			var options = {
			  	timeout: 100000,
				enableHighAccuracy: true,
			};
			
			//geolocation success
			function success( position ) {
				//store coordinates
			  	var coordinates = position.coords;
				
				//log co-ords to console
				console.log( 'Your current position is: ' );
			  	console.log( 'Latitude : ' + coordinates.latitude );
			  	console.log( 'Longitude: ' + coordinates.longitude );
			  	console.log( 'More or less ' + coordinates.accuracy + ' meters.' );
				
				//call function to remove previous marker showing users previous location
				removeMarkers();
				
				//create marker showing current location
				var markerCL = new google.maps.Marker({
					position: new google.maps.LatLng( coordinates.latitude, coordinates.longitude ),
					map: map,
					title: 'Current Position!',
					icon: iconBase + 'geoIcon.png'
				});
				
				//put the marker into the marker array
				geoMarkers.push(markerCL);

				
			}
			//geolocation fail
			function error( error ) {
				
			  console.warn( 'ERROR(' + error.code + '): ' + error.message );
				
			}
			
			//run geolocation with success, error functions above, with defined options
			navigator.geolocation.watchPosition( success, error, options );
			
		} else {
			
		  	/* geolocation IS NOT available */
			console.log("geo fail");
		}
}

function removeMarkers(){
    for(i=0; i<geoMarkers.length; i++){
        geoMarkers[i].setMap(null);
    }
}

function addAttractionMarkers(){
	var pumpLat = 51.911970;
	var pumpLng = -2.067357;
	var ukLat = 53.226299;
	var ukLng = -1.676103;
	var gerLat = 50.967340;
	var gerLng = 10.321835;
	
	//create marker showing Pump Rooms
				var markerPump = new google.maps.Marker({
					position: new google.maps.LatLng( pumpLat, pumpLng ),
					map: map,
					title: 'Pittville Pump Rooms',
				});
	
	//create marker showing UK
				var markerUK = new google.maps.Marker({
					position: new google.maps.LatLng( ukLat, ukLng ),
					map: map,
					title: 'UK',
				});
	
		//create marker showing Germany
				var markerGer = new google.maps.Marker({
					position: new google.maps.LatLng( gerLat, gerLng ),
					map: map,
					title: 'Germany',
				});
				
				//put the marker into the marker array
				attractionMarkers.push(markerPump, markerUK, markerGer);
				
				//add marker link
				markerPump.addListener('click', function(){
					app.loadCustomARchitectWorldFromURL('www/world/07_3dModels_6_3dModelAtGeoLocation/index.html');
				});
}

/*function initMap() {
//map options	
var mapProp = {
        center: new google.maps.LatLng(7, 0),
        zoom: 2.5,
		mapTypeId: 'terrain',
		zoomControl: false,
  		mapTypeControl: true,
  		scaleControl: true,
  		streetViewControl: false,
  		rotateControl: false,
  		fullscreenControl: false,
    };

	
//draw the map
map = new google.maps.Map(document.getElementById('map'), mapProp);
	
}// end of initMap function
*/