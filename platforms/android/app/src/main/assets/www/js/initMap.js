var map;
var worldBounds = {
	north:80,
	south:-80,
	west:-180,
	east:180,
};
var cPoint = {lat: 60, lng:-5};
//global variables for marker arrays
var geoMarkers = [];
var countryMarkers = [];
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
		zoom: 2.5,
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
	addCountryMarkers();

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

function addCountryMarkers(){
	var fraLat = 46.445794;
	var fraLng = 2.362551;
	var ukLat = 53.226299;
	var ukLng = -1.676103;
	var gerLat = 50.967340;
	var gerLng = 10.321835;
	
	//create marker showing France
				var markerFra = new google.maps.Marker({
					position: new google.maps.LatLng( fraLat, fraLng ),
					map: map,
					title: 'France',
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
				countryMarkers.push(markerFra, markerUK, markerGer);
				
				//add marker link
				markerFra.addListener('click', function(){
					app.loadCustomARchitectWorldFromURL('www/world/01_ImageTracking_1_ImageOnTarget/index.html');
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