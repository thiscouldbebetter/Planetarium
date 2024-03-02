
class CelestialSphere
{
	constructor(stars)
	{
		this.stars = stars;
	}

	static demo()
	{
		var starsAsStrings = 
		[
			// "name, right ascension, declination"
			"Fakestar, 0h0m0s, 0.0"
		];

		var stars = starsAsStrings.map
		(
			x => Star.fromString(x)
		);

		var celestialSphere =
			new CelestialSphere(stars);

		return celestialSphere;
	}
}
