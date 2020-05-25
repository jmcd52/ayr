var referrer = localStorage.getItem('mainReferButton');
alert(referrer);

var World = {

    init: function initFn() {
		AR.hardware.sensors.compass.correctionAngle = 10;
		//AR.context.scene.cullingDistance = 10;
		AR.context.scene.minScalingDistance = 50;
		//AR.context.scene.maxScalingDistance = 2000;
		//AR.context.scene.scalingFactor = 0.1; 
        this.createModelAtLocation();
    },
	
    createModelAtLocation: function createModelAtLocationFn() {

//Location Variables
		var dist = null;
		var URelLocE = new AR.RelativeLocation(null, 0, 20, 0);
		var URelLocW = new AR.RelativeLocation(null, 0, -20, 0);
		var URelLocN = new AR.RelativeLocation(null, 20, 0, 0);
		var fwoodLoc = new AR.GeoLocation(51.887572, -2.088735);
		var minohareLoc = new AR.GeoLocation(51.9000052,-2.0762254);
		var pumpLoc = new AR.GeoLocation(51.911953, -2.067353);
		
		var scaleDiv = 0.8;
		var fullDist = fwoodLoc.distanceToUser();
		var minoDist = minohareLoc.distanceToUser();
		var pumpDist = pumpLoc.distanceToUser();
		var fullScale = fullDist / 100;
		var minoScale = minoDist / 100;
		var pumpScale = pumpDist / 100;
		var fullScale2 = fullScale / (Math.sqrt(fullScale)) * 0.8;
		var minoScale2 = minoScale / (Math.sqrt(minoScale)) * 0.8;
		var pumpScale2 = pumpScale / (Math.sqrt(pumpScale)) * 0.8;
		var fullFinScale = Math.max(0.6, fullScale2 * 4 );
		var minoFinScale = Math.max(0.6, minoScale2 * 4 );
		var pumpFinScale = Math.max(0.6, pumpScale2 * 4 );
		
/* rotation button variable
		var modRotate = new AR.ImageResource("assets/rotateButton.png", {
            onError: World.onError
        });
		var rotateDrawable = new AR.ImageDrawable(modRotate, 0.1, {
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });*/

//3D Model object definitions with models for inspection preceding normal model
		var modelFullwoodInspect = new AR.Model("assets/fullwood.wt3", {
			enabled: false,
            onError: World.onError,
            scale: {
                x: fullFinScale * 1.25,
                y: fullFinScale * 1.25,
                z: fullFinScale * 1.25
            },
			onClick: function(){
				this.enabled = false;
				modelFullwood.enabled = true;
				//document.getElementById("rotateButton").style.display = "none";
				document.getElementById("attractionName").innerHTML = "Tap on an Attraction to find out more!";
				document.getElementById("attDesc").innerHTML = "Tap on an Attraction to find out more!";
				document.getElementById("poi-detail-distance").innerHTML = "?";
				//document.getElementsByClassName("giRHP").disabled = true;
				//document.getElementsByClassName("giRHM").disabled = true;
			}
		});
        var modelFullwood = new AR.Model("assets/fullwood.wt3", {
			enabled: true,
            onError: World.onError,
            scale: {
                x: fullFinScale,
                y: fullFinScale,
                z: fullFinScale
            },
			onClick: function(){
				//document.getElementsByClassName("giRHP").removeAttribute('disabled');
				//document.getElementsByClassName("giRHM").removeAttribute('disabled');
				//document.getElementById("rotateButton").style.display = "initial";
				document.getElementById("attractionName").innerHTML = "Fullwood House"
				document.getElementById("attDesc").innerHTML = "Fullwood House Description";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(fwoodLoc.distanceToUser()) + "m";
				this.enabled = false;
				modelFullwoodInspect.enabled = true;
			}
		});
		var modelHareInspect = new AR.Model("assets/minohare.wt3", {
			enabled: false,
            onError: World.onError,
            scale: {
                x: minoFinScale * 1.25,
                y: minoFinScale * 1.25,
                z: minoFinScale * 1.25
            },
			onClick: function(){
				this.enabled = false;
				modelHare.enabled = true;
				//document.getElementById("rotateButton").style.display = "none";
				document.getElementById("attractionName").innerHTML = "Tap on an Attraction to find out more!";
				document.getElementById("attDesc").innerHTML = "Tap on an Attraction to find out more!";
				document.getElementById("poi-detail-distance").innerHTML = "?";
				//document.getElementsByClassName("giRHP").disabled = true;
				//document.getElementsByClassName("giRHM").disabled = true;
			}
		});
        var modelHare = new AR.Model("assets/minohare.wt3", {
            onError: World.onError,
            scale: {
                x:  minoFinScale,
                y: minoFinScale,
                z:  minoFinScale
            },
            rotate: {
                x: 0,
                y: 0
            },
			onClick: function(){
				//document.getElementsByClassName("giRHP").removeAttribute('disabled');
				//document.getElementsByClassName("giRHM").removeAttribute('disabled');
				//document.getElementById("rotateButton").style.display = "initial";
				document.getElementById("attractionName").innerHTML = "The Hare and Minotaur";
				document.getElementById("attDesc").innerHTML = "Hare and Minotaur Description";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(minohareLoc.distanceToUser()) + "m";
				this.enabled = false;
				modelHareInspect.enabled = true;
			}
		});
		var modelPumpInspect = new AR.Model("assets/pumpRoom.wt3", {
			enabled: false,
            onError: World.onError,
            scale: {
                x: pumpFinScale * 1.25,
                y: pumpFinScale * 1.25,
                z: pumpFinScale * 1.25
            },
			onClick: function(){
				this.enabled = false;
				modelFullwood.enabled = true;
				//document.getElementById("rotateButton").style.display = "none";
				document.getElementById("attractionName").innerHTML = "Tap on an Attraction to find out more!";
				document.getElementById("attDesc").innerHTML = "Tap on an Attraction to find out more!";
				document.getElementById("poi-detail-distance").innerHTML = "?";
				//document.getElementsByClassName("giRHP").disabled = true;
				//document.getElementsByClassName("giRHM").disabled = true;
			}
		});
        var modelPump = new AR.Model("assets/pumpRoom.wt3", {
            onError: World.onError,
            scale: {
                x: pumpFinScale,
                y: pumpFinScale,
                z: pumpFinScale
            },
			onClick: function(){
				//document.getElementsByClassName("giRHP").removeAttribute('disabled');
				//document.getElementsByClassName("giRHM").removeAttribute('disabled');
				//document.getElementById("rotateButton").style.display = "initial";
				document.getElementById("attractionName").innerHTML = "Pittville Pump Room";
				document.getElementById("attDesc").innerHTML = "Pittville Pump Room Description";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(pumpLoc.distanceToUser()) + "m";
				this.enabled = false;
				modelPumpInspect.enabled = true;
			}
		});
//POI indicator images
        var indicatorImage = new AR.ImageResource("assets/indi.png", {
            onError: World.onError
        });
        var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
			enabled: true,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });
//inspecting model indicators
        var fullIndiDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
			enabled: false,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });
		var hareIndiDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
			enabled: false,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });
		var pumpIndiDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
			enabled: false,
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });
//geoObjects draw the models to the screen
		this.geoObjectA = new AR.GeoObject(fwoodLoc, {
            drawables: {
                cam: [modelFullwoodInspect],
				indicator: [fullIndiDrawable]
            },
					onClick: function(){
						modelFullwood.enabled = true;
						modelHare.enabled = true;
						modelPump.enabled = true;
						indicatorDrawable.enabled = true;
						fullIndiDrawable.enabled = false;
					}
        });
//Draws the models to the screen
        this.geoObject1 = new AR.GeoObject(fwoodLoc, {
            drawables: {
                cam: [modelFullwood],
                indicator: [indicatorDrawable]
            },
			onClick: function(){
				modelFullwood.enabled = false;
				modelHare.enabled = false;
				modelPump.enabled = false;
				indicatorDrawable.enabled = false;
				fullIndiDrawable.enabled = true;
			}
        });
		this.geoObjectB = new AR.GeoObject(minohareLoc, {
            drawables: {
                cam: [modelHareInspect],
				indicator: [hareIndiDrawable]
            },
					onClick: function(){
						modelFullwood.enabled = true;
						modelHare.enabled = true;
						modelPump.enabled = true;
						indicatorDrawable.enabled = true;
						hareIndiDrawable.enabled = false;
					}
        });
		this.geoObject2 = new AR.GeoObject(minohareLoc, {
            drawables: {
                cam: [modelHare],
                indicator: [indicatorDrawable]
            },
			onClick: function(){
				modelFullwood.enabled = false;
				modelHare.enabled = false;
				modelPump.enabled = false;
				indicatorDrawable.enabled = false;
				hareIndiDrawable.enabled = true;
			}
        });
		this.geoObjectC = new AR.GeoObject(pumpLoc, {
            drawables: {
                cam: [modelPumpInspect],
				indicator: [pumpIndiDrawable]
            },
					onClick: function(){
						modelFullwood.enabled = true;
						modelHare.enabled = true;
						modelPump.enabled = true;
						indicatorDrawable.enabled = true;
						pumpIndiDrawable.enabled = false;
					}
        });
		this.geoObject3 = new AR.GeoObject(pumpLoc, {
            drawables: {
                cam: [modelPump],
                indicator: [indicatorDrawable]
            },
			onClick: function(){
				modelFullwood.enabled = false;
				modelHare.enabled = false;
				modelPump.enabled = false;
				indicatorDrawable.enabled = false;
				hareIndiDrawable.enabled = true;
			}
        });
document.getElementById('rHP').addEventListener("click", rHP);
document.getElementById('rHM').addEventListener("click", rHM);

function rHP(){
	modelFullwood.rotate.y += 20;
	modelHare.rotate.y += 20;
	modelPump.rotate.y += 20;
	modelFullwoodInspect.rotate.y += 20;
	modelHareInspect.rotate.y += 20;
	modelPumpInspect.rotate.y += 20;
}
function rHM(){
	modelFullwood.rotate.y -= 20;
	modelHare.rotate.y -= 20;
	modelPump.rotate.y -= 20;
	modelFullwoodInspect.rotate.y -= 20;
	modelHareInspect.rotate.y -= 20;
	modelPumpInspect.rotate.y -= 20;
}
    },
//Error function
    onError: function onErrorFn(error) {
        alert(error);
    },
	
};

World.init();
AR.context.onLocationChanged = function(latitude, longitude, altitude, accuracy){
  //now, add custom functionality to build the AR scene based on the location
	AR.context.scene.cullingDistance = 20000;
};
