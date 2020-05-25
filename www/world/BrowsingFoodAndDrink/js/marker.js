var changeAnimationDuration = 500;
var resizeAnimationDuration = 1000;

function Marker(poiData) {

    this.poiData = poiData;
    this.isSelected = false;

    /*
        With AR.PropertyAnimations you are able to animate almost any property of ARchitect objects. This sample
        will animate the opacity of both background drawables so that one will fade out while the other one fades
        in. The scaling is animated too. The marker size changes over time so the labels need to be animated too in
        order to keep them relative to the background drawable. AR.AnimationGroups are used to synchronize all
        animations in parallel or sequentially.
    */
    this.animationGroupIdle = null;
    this.animationGroupSelected = null;

    /* Create the AR.GeoLocation from the poi data. */
    var markerLocation = new AR.GeoLocation(poiData.latitude, poiData.longitude, poiData.altitude);

    /* Create an AR.ImageDrawable for the marker in idle state. */
    this.markerDrawableFood = new AR.ImageDrawable(World.markerDrawableIdle, 2.5, {
        zOrder: 0,
        opacity: 1.0,
        /*
            To react on user interaction, an onClick property can be set for each AR.Drawable. The property is a
            function which will be called each time the user taps on the drawable. The function called on each tap
            is returned from the following helper function defined in marker.js. The function returns a function
            which checks the selected state with the help of the variable isSelected and executes the appropriate
            function. The clicked marker is passed as an argument.
        */
        onClick: Marker.prototype.getOnClickTrigger(this)
    });

    
/*
    this.descriptionLabel = new AR.Label(poiData.description.trunc(15), 0.8, {
        zOrder: 1,
        translate: {
            y: -0.55
        },
        style: {
            textColor: '#FFFFFF'
        }
    });*/

    /*
        Create an AR.ImageDrawable using the AR.ImageResource for the direction indicator which was created in the
        World. Set options regarding the offset and anchor of the image so that it will be displayed correctly on
        the edge of the screen.
    */
    this.directionIndicatorDrawable = new AR.ImageDrawable(World.markerDrawableDirectionIndicator, 0.1, {
        enabled: false,
        verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
    });


    /*
        Create the AR.GeoObject with the drawable objects and define the AR.ImageDrawable as an indicator target on
        the marker AR.GeoObject. The direction indicator is displayed automatically when necessary. AR.Drawable
        subclasses (e.g. AR.Circle) can be used as direction indicators.
    */
    this.markerObject = new AR.GeoObject(markerLocation, {
        drawables: {
            cam: [this.markerDrawableFood],
            indicator: this.directionIndicatorDrawable,
        }
    });

    return this;
}

/* Will truncate all strings longer than given max-length "n". e.g. "foobar".trunc(3) -> "foo...". */
String.prototype.trunc = function(n) {
    return this.substr(0, n - 1) + (this.length > n ? '...' : '');
};