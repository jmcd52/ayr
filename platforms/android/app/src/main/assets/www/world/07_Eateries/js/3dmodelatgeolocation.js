var referringButton = document.referrer;
	alert(referButton);

var World = {
	
    init: function initFn() {
        this.createModelAtLocation();
    },
	
    createModelAtLocation: function createMarkers() {

//POI indicator images
        var indicatorImage = new AR.ImageResource("assets/indi.png", {
            onError: World.onError
        });

        var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });

//Marker Location Variables
		var costaLoc = new AR.GeoLocation(51.900548, -2.075260);
		var starLoc = new AR.GeoLocation(51.903218, -2.076048);
		var havanaLoc = new AR.GeoLocation(51.904581, -2.068171);
		var mcdonaldsLoc = new AR.GeoLocation(51.901914, -2.076230);
		var kfcLoc = new AR.GeoLocation(51.901232, -2.074014);
		var wagamamaLoc = new AR.GeoLocation(51.900893, -2.076320);
//load marker image resources
		var cafeIcon = new AR.ImageResource("assets/cafe.png");
		var foodIcon = new AR.ImageResource("assets/food.png");

//Marker object definitions
var costaDrawable = new AR.ImageDrawable(cafeIcon, 3, {
  scale: 1,
  zOrder: 5,
  opacity: 1.0,
  onClick : function() {
	  			this.scale = 1.3;
	  			starDrawable.scale = 1; havanaDrawable.scale = 1; mcdonaldsDrawable.scale = 1; kfcDrawable.scale = 1; wagamamaDrawable.scale = 1;
	  			//document.getElementById("detailBtn").removeAttribute('disabled');
      			document.getElementById("attractionName").innerHTML = "Costa Coffee";
				//document.getElementById("attName").innerHTML = "Costa Coffee";
				document.getElementById("attDesc").innerHTML = "Costa Description";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(costaLoc.distanceToUser()) + "m";
    }
});
var starDrawable = new AR.ImageDrawable(cafeIcon, 3, {
  scale: 1,
  zOrder: 5,
  opacity: 1.0,
  onClick : function() {
	  			this.scale = 1.3;
	  			costaDrawable.scale = 1; havanaDrawable.scale = 1; mcdonaldsDrawable.scale = 1; kfcDrawable.scale = 1; wagamamaDrawable.scale = 1;
	  			//document.getElementById("detailBtn").removeAttribute('disabled');
      			document.getElementById("attractionName").innerHTML = "Starbucks Coffee";
				//document.getElementById("attName").innerHTML = "Starbucks Coffee";
				document.getElementById("attDesc").innerHTML = "Starbucks Description";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(starLoc.distanceToUser()) + "m";
    }
});
var havanaDrawable = new AR.ImageDrawable(cafeIcon, 3, {
  scale: 1,
  zOrder: 5,
  opacity: 1.0,
  onClick : function() {
	  			this.scale = 1.3;
	  			starDrawable.scale = 1; costaDrawable.scale = 1; mcdonaldsDrawable.scale = 1; kfcDrawable.scale = 1; wagamamaDrawable.scale = 1;
	  			//document.getElementById("detailBtn").removeAttribute('disabled');
      			document.getElementById("attractionName").innerHTML = "Havanas Coffee";
				//document.getElementById("attName").innerHTML = "Havanas Coffee";
				document.getElementById("attDesc").innerHTML = "Local coffee shop";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(havanaLoc.distanceToUser()) + "m";
    }
});
var mcdonaldsDrawable = new AR.ImageDrawable(foodIcon, 3, {
  scale: 1,
  zOrder: 5,
  opacity: 1.0,
  onClick : function() {
	  			this.scale = 1.3;
	  			starDrawable.scale = 1; havanaDrawable.scale = 1; costaDrawable.scale = 1; kfcDrawable.scale = 1; wagamamaDrawable.scale = 1;
	  			//document.getElementById("detailBtn").removeAttribute('disabled');
      			document.getElementById("attractionName").innerHTML = "McDonald's";
				//document.getElementById("attName").innerHTML = "McDonald's";
				document.getElementById("attDesc").innerHTML = "Popular Fast Food";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(mcdonaldsLoc.distanceToUser()) + "m";
    }
});
var kfcDrawable = new AR.ImageDrawable(foodIcon, 3, {
  scale: 1,
  zOrder: 5,
  opacity: 1.0,
  onClick : function() {
	  			this.scale = 1.3;
	  			starDrawable.scale = 1; havanaDrawable.scale = 1; mcdonaldsDrawable.scale = 1; costaDrawable.scale = 1; wagamamaDrawable.scale = 1;
	  			//document.getElementById("detailBtn").removeAttribute('disabled');
      			document.getElementById("attractionName").innerHTML = "Kentucky Fried Chicken";
				//document.getElementById("attName").innerHTML = "Kentucky Fried Chicken";
				document.getElementById("attDesc").innerHTML = "Popular chicken chain";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(kfcLoc.distanceToUser()) + "m";
    }
});
var wagamamaDrawable = new AR.ImageDrawable(foodIcon, 3, {
  scale: 1,
  zOrder: 5,
  opacity: 1.0,
  onClick : function() {
	  			this.scale = 1.3;
	  			starDrawable.scale = 1; havanaDrawable.scale = 1; mcdonaldsDrawable.scale = 1; kfcDrawable.scale = 1; costaDrawable.scale = 1;
	  			//document.getElementById("detailBtn").removeAttribute('disabled');
      			document.getElementById("attractionName").innerHTML = "Wagamama";
				//document.getElementById("attName").innerHTML = "Wagamama";
				document.getElementById("attDesc").innerHTML = "Oriental food";
				document.getElementById("poi-detail-distance").innerHTML = parseInt(wagamamaLoc.distanceToUser()) + "m";
    }
});
        

//Draws the markers to the screen
        this.geoObject1 = new AR.GeoObject(costaLoc, {
            drawables: {
                cam: [costaDrawable],
                indicator: [indicatorDrawable],
				enabled: true
            }
        });
		        this.geoObject2 = new AR.GeoObject(starLoc, {
            drawables: {
                cam: [starDrawable],
                indicator: [indicatorDrawable],
				enabled: true
            }
        });
		        this.geoObject3 = new AR.GeoObject(havanaLoc, {
            drawables: {
                cam: [havanaDrawable],
                indicator: [indicatorDrawable],
				enabled: true
            }
        });
		        this.geoObject4 = new AR.GeoObject(mcdonaldsLoc, {
            drawables: {
                cam: [mcdonaldsDrawable],
                indicator: [indicatorDrawable],
				enabled: true
            }
        });
		        this.geoObject5 = new AR.GeoObject(kfcLoc, {
            drawables: {
                cam: [kfcDrawable],
                indicator: [indicatorDrawable],
				enabled: true
            }
        });
		        this.geoObject6 = new AR.GeoObject(wagamamaLoc, {
            drawables: {
                cam: [wagamamaDrawable],
                indicator: [indicatorDrawable],
				enabled: true
            }
        });
    },
//Error function
    onError: function onErrorFn(error) {
        alert(error);
    }
};

World.init();