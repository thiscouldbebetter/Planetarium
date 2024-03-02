
class PlanetariumView
{
	constructor(celestialSphere, observation, imageRenderedSize)
	{
		this.celestialSphere = celestialSphere;
		this.observation = observation;
		this.imageRenderedSize = imageRenderedSize;
	}

	drawImageToGraphicsContext(graphicsContext)
	{
		var g = graphicsContext;

		var camera = new Camera
		(
			this.imageRenderedSize,
			null, // focalLength
			
		);
		// todo
	}	
}
