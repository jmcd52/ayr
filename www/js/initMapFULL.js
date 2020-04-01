// JavaScript Document

//global variable for overlay image
var fandfLower;

//global variable for the drawn map
var map;
//global variables for marker arrays
var geoMarkers = [];
var foodMarkers = [];
var transportMarkers = [];
//global variables for marker visibility by type
var foodVisible = false;
var transportVisible = false;
//global variable defining the root location for marker icon images
var iconBase = "../images/icons/";


//map icon definitions
var icons = {
          food: {
            name: 'Food',
            icon: iconBase + 'cafe.png'
          },
          transport: {
            name: 'Transport',
            icon: iconBase + 'transportIcon.png'
          },
          info: {
            name: 'Info',
            icon: iconBase + 'info-i_maps.png'
          }
        };


// Initialize and add the map
function initMap() {
  // The location of Frog and Fiddle
  var frog = {lat: 51.903255, lng: -2.079292};
	
//map options	
var mapProp = {
        center: new google.maps.LatLng(51.903255, -2.079292),
        zoom: 18,
		mapTypeId: 'roadmap',
		zoomControl: true,
  		mapTypeControl: false,
  		scaleControl: true,
  		streetViewControl: true,
  		rotateControl: false,
  		fullscreenControl: false,
    };
	
	
//draw the map
map = new google.maps.Map(document.getElementById('map'), mapProp);
	
// Add controls to the map, allowing users to hide/show features.
        var styleControl = document.getElementById('style-selector-control');
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);

        // Apply new JSON when the user chooses to hide/show features.
        document.getElementById('hide-poi').addEventListener('click', function() {
          map.setOptions({styles: styles['hide']});
        });
        document.getElementById('show-poi').addEventListener('click', function() {
          map.setOptions({styles: styles['default']});
        });
	
	//style definition for hiding majority of POIs
      var styles = {
        default: null,
        hide: [
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
      };	
	
// Creates a marker, positioned at F and F venue
  var marker = new google.maps.Marker({position: frog, map: map});
						
		//define the bounds of the venue
		var fandfBounds = {
			north: 51.903591459857985,
			south: 51.903213042320544,
			east: -2.079031688465534,
			west: -2.0794397498077614
		};
		
		//set up a Ground Overlay of the image to show within the bounds set up above
		fandfLower = new google.maps.GroundOverlay( 'https://soundwave.studentsites.glos.ac.uk/Soundwave/images/fandfOverlay.png', fandfBounds);
	
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
				
				//variable defining the bar area bounds
				var barBounds = {
			north: 51.903335,
			south: 51.903283,
			east: -2.079207,
			west: -2.079404
		};
				
				var parkCampusBounds = {
			north: 51.888485746557876,
			south: 51.88621331876025,
			east: -2.086274063476594,
			west: -2.0905485291137893
		};
				//variable to store the audio player
				var audio = document.getElementById("audioPlayer"); 
				
				//set location element to textually show users location
				//if the users coordinates are between the bar bounds
				if(coordinates.latitude > barBounds.south && coordinates.latitude < barBounds.north && coordinates.longitude < barBounds.east && coordinates.longitude > barBounds.west)
				{
					//set element to say they're in the bar area
					document.getElementById('location').innerHTML = "in the bar area";
					
						audio.pause();
						audio.src = "../audio/277289__kwahmah-02__busy-restraunt.wav";
						audio.load();
						audio.play();
				//if the users coordinates are inside the park campus bounds
				}else if(coordinates.latitude > parkCampusBounds.south && coordinates.latitude < parkCampusBounds.north && coordinates.longitude < parkCampusBounds.east && coordinates.longitude > parkCampusBounds.west)
				{
					//display at Park Campus
					document.getElementById('location').innerHTML = "at Park Campus";
						audio.pause();
						audio.src = "../audio/eerie.wav";
						audio.load();
						audio.play();
				}else{
					//otherwise show user coordinate
					document.getElementById('location').innerHTML = coordinates.latitude + ", " + coordinates.longitude;
				}
				
				




				
			}
			//geolocation fail
			function error( error ) {
				
			  console.warn( 'ERROR(' + error.code + '): ' + error.message );
				
			}
			
			//run geolocation with success, error functions above, with defined options
			navigator.geolocation.watchPosition( success, error, options );
			
		} else {
			
		  	/* geolocation IS NOT available */
			
		}


}// end of initMap function


	//add a given overlay
	function addOverlay( overlay ) {
		
		//add the overlay
		overlay.setMap( map );
		
		
		//area co-ordinates
		var barLat = 51.903305;
		var barLng = -2.079285;
		var smokeLat = 51.903449;
		var smokeLng = -2.079124;
		var musLat = 51.903485;
		var musLng = -2.079234;
		
		//create marker for the bar
		var bar = new google.maps.Marker({
					//position of the marker
					position: new google.maps.LatLng( barLat, barLng ),
					//the map to be drawn om
					map: map,
					//the title of the marker
					title: 'The bar',
					//the image the marker should use
					icon: iconBase + 'barIcon.png'
				});
		
		//create marker for the music area
		var music = new google.maps.Marker({
					position: new google.maps.LatLng( musLat, musLng ),
					map: map,
					title: 'The music barn',
					icon: iconBase + 'musicIcon.png'
				});
		
		//create marker for the smoking area
		var smoke = new google.maps.Marker({
					position: new google.maps.LatLng( smokeLat, smokeLng ),
					map: map,
					title: 'The smoking are',
					icon: iconBase + 'smokingAreaIcon.png'
				});
		
		
		
	}
	
	//remove a given overlay	
	function removeOverlay( overlay ) {
		
		//remove the overlay	
		overlay.setMap( null );
		
	}

//function to remove previous geolocation marker
function removeMarkers(){
    for(i=0; i<geoMarkers.length; i++){
        geoMarkers[i].setMap(null);
    }
}

//function to toggle custom transport POI markers
function toggleTransport(){
	
	//map place marker definitions
        var features = [
          {
            position: new google.maps.LatLng(51.897345, -2.099619),
            type: 'transport'
          }, {
            position: new google.maps.LatLng(51.899777, -2.077832),
            type: 'transport'
          }
        ];
	
	//if the markers are not visible
	if(!transportVisible){
		//for each featured location - defined above
        features.forEach(function(feature) {
			//draw a new marker
          var marker = new google.maps.Marker({
			  //at the position above
            position: feature.position,
			  //with the corresponding icon by type
            icon: icons[feature.type].icon,
			  //on the map 
            map: map
          });
			//push the markers into the global array
			transportMarkers.push(marker);
        });
		//update visibility variable
		transportVisible = true;
		//otherwise they are visible
	}else{
		//set the visibility variable to false
		transportVisible = false;
		//for each of the markers in the array
		for(i=0; i<transportMarkers.length; i++){
		//setMap null -- hide the markers
        transportMarkers[i].setMap(null);
    }
	}
	
}

//function to toggle the food markers -- same method as the transport markers
function toggleFood(){
	//map place marker definitions
        var features = [
          {
            position: new google.maps.LatLng(51.901233, -2.074015),
            type: 'food'
          }, {
            position: new google.maps.LatLng(51.901960, -2.076289),
            type: 'food'
          }, {
            position: new google.maps.LatLng(51.897951, -2.077984),
            type: 'food'
          }, {
            position: new google.maps.LatLng(51.903198, -2.076502),
            type: 'food'
          }, {
            position: new google.maps.LatLng(51.45, -2.3),
            type: 'food'
          }
        ];
	
	if(!foodVisible){
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
			foodMarkers.push(marker);
        });
		foodVisible = true;
	}else{
		foodVisible = false;
		for(i=0; i<foodMarkers.length; i++){
        foodMarkers[i].setMap(null);
    }
	}
}