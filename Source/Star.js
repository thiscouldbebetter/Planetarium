
class Star
{
	constructor(name, visualMagnitude, posAsPolar)
	{
		this.name = name;
		this.visualMagnitude = visualMagnitude;
		this.posAsPolar = posAsPolar;
	}

	// String.

	static fromString(stringToParse)
	{
		var delimiter = ";";
		var fields = stringToParse.split(delimiter);

		var name = fields[0];
		var posAsRightAscensionAndDeclination = fields[1];
		var posAsPolar = Polar.fromStringRightAscensionAndDeclination
		(
			posAsRightAscensionAndDeclination
		);

		var star = new Star(name, posAsPolar);

		return star;
	}

	toString()
	{
		var posAsStringRightAscensionAndDeclination =
			this.posAsPolar.toStringRightAscensionAndDeclination();

		var fields =
		[
			this.name,
			posAsStringRightAscensionAndDeclination
		];

		var delimiter = ";"
		var starAsString = fields.join(delimiter);

		return starAsString;
	}
}
