
class UiEventHandler
{
	static buttonRender_Clicked()
	{
		var d = document;

		var textareaStars = d.getElementById("");
		var starsAsString = textareaStars.value;
		var newline = "\n";
		var starsAsLines = starsAsString.split(newline);
		var stars = starsAsLines.map(x => Star.fromString(x) );

		
		var observationTime = new Date(); // todo

		var inputLatitudeInDegreesNorthOfEquator =
			d.getElementById
			(
				"inputLatitudeInDegreesNorthOfEquator"
			);

		var inputLongitudeInDegreesEastOfPrimeMeridian =
			d.getElementById
			(
				"inputLongitudeInDegreesEastOfPrimeMeridian"
			);

		var latitudeInDegreesNorthOfEquator = parseFloat
		(
			inputLatitudeInDegreesNorthOfEquator.value
		);

		var longitudeInDegreesEastOfPrimeMeridian = parseFloat
		(
			inputLongitudeInDegreesEastOfPrimeMeridian.value
		);

		var observationLatitudeLongitude =
			new LatitudeLongitude.fromStrings
			(
				latitudeInDegreesNorthOfEquator,
				longitudeInDegreesEastOfPrimeMeridian
			);

		var observeration = new Observation
		(
			observationTime,
			observationLatitudeLongitude,
			observerOrientationAsPolar
		);
			
		var planetariumView = new PlanetariumView
		(
			stars,
			observation
		);

		var inputImageSizeInPixelsX =
			d.getElementById("inputImageSizeInPixelsX");
		var inputImageSizeInPixelsY =
			d.getElementById("inputImageSizeInPixelsY");
		var imageSizeInPixelsX =
			parseInt(inputImageSizeInPixelsX.value);
		var imageSizeInPixelsY =
			parseInt(inputImageSizeInPixelsY.value);

		var canvas = d.createElement("canvas");
		canvas.width = imageSizeInPixelsX;
		canvas.height = imageSizeinPixelsY;

		var g = canvas.getContext("2d");

		planetariumView.drawToGraphicsContext(g);

		var divImageRendered =
			d.getElementById("divImageRendered");
		divImageRendered.innerHTML = "";
		divImageRendered.appendChild(canvas);
	}

	static buttonStarPositionsLoadDemo_Clicked()
	{
		var celestialSphere = CelestialSphere.demo();
		var stars = celestialSphere.stars;
		var starsAsLines = stars.map(x => x.toString() );
		var newline = "\n";
		var starsAsString =
			starsAsLines.join(newline);

		var d = document;
		var textareaStars =
			d.getElementById("textareaStars");
		textareaStars.value = starsAsString;
	}
}
