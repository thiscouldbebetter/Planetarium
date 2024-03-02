
class Camera
{
	constructor
	(
		viewSizeInPixels,
		focalLengthInPixels,
		pos,
		orientation
	)
	{
		this.viewSizeInPixels = viewSizeInPixels;
		this.focalLengthInPixels = focalLengthInPixels;
		this.pos = pos;
		this.orientation = orientation;
	}

	coordsTransformWorldToView(coordsToTransformWorld)
	{
		var coordsView =
			coordsToTransformWorld;

		coordsView.subtract(this.pos);

		var ori = this.orientation;

		coordsView.xyzSet
		(
			ori.right.clone().dotProduct(coordsView),
			ori.down.clone().dotProduct(coordsView),
			ori.forward.clone().dotProduct(coordsView),
		);

		if (camera.focalLength != null)
		{
			// Note that this "perspective divide" is
			// not strictly necessary in the current application.
			var distance = coordsView.z;
			coordsView.divideScalar(distance);
			coordsView.z = distance;

			coordsView.divideScalar(this.focalLength);
		}

		// todo - Should this be inside the above if block?
		coordsView.multiplyScalar(this.viewSizeInPixels);

		return coordsView;
	}
}
