var World = {

    init: function initFn() {
        this.createModelAtLocation();
    },

    createModelAtLocation: function createModelAtLocationFn() {

        /*
            First a location where the model should be displayed will be defined. This location will be relativ to
            the user.
        */
        //var location = new AR.RelativeLocation(null, 5, 0, 2);
		var location = new AR.GeoLocation(51.887572, -2.088735);
		
		var  distanceToUser = location.distanceToUser();
		//$("#poi-detail-distance").html(distanceToUser);
		document.getElementById("poi-detail-distance").innerHTML = parseInt(distanceToUser) + "m";

        /* Next the model object is loaded. */
        var modelEarth = new AR.Model("assets/fwood.wt3", {
            onError: World.onError,
            scale: {
                x: 50,
                y: 50,
                z: 50
            },
            rotate: {
                x: 0,
                y: 0
            }
        });

        var indicatorImage = new AR.ImageResource("assets/indi.png", {
            onError: World.onError
        });

        var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });

        /* Putting it all together the location and 3D model is added to an AR.GeoObject. */
        this.geoObject = new AR.GeoObject(location, {
            drawables: {
                cam: [modelEarth],
                indicator: [indicatorDrawable]
            }
        });
    },

    onError: function onErrorFn(error) {
        alert(error);
    }
};

World.init();