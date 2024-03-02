
class Polar
{
	constructor(azimuthInTurns, elevationInTurns, radius)
	{
		this.azimuthInTurns = azimuthInTurns || 0;
		this.elevationInTurns = elevationInTurns || 0;
		this.radius = radius || 1;
	}

	overwriteCoords(coordsToOverwrite)
	{
		var radiansPerTurn = Math.PI * 2;
		var azimuthInRadians =
			this.azimuthInTurns * radiansPerTurn;
		var elevationInRadians =
			this.elevationInTurns * radiansPerTurn;

		coordsToOverwrite.xyzSet
		(
			Math.cos(azimuthInRadians),
			Math.sin(elevationInRadians),
			this.radius
		);
	}

	// RA/Decl.

	static fromStringRightAscensionAndDeclination
	(
		rightAscensionAndDeclinationAsString
	)
	{
		var azimuthInTurns = 0; // todo
		var elevationInTurns = 0; // todo

		var polar = new Polar
		(
			azimuthInTurns,
			elevationInTurns,
			1 // radius
		);

		return polar;
	}

	toStringRightAscensionAndDeclination()
	{
		var returnValue = "todo"; // todo

		return returnValue;
	}
}
