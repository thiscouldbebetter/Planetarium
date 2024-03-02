
class Coords
{
	constructor(x, y, z)
	{
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
	}

	add(other)
	{
		this.x += other.x;
		this.y += other.y;
		this.z += other.z;
		return this;
	}

	crossProduct(other)
	{
		return this.xyzSet
		(
			this.y * other.z - this.z * other.y,
			this.z * other.x - this.x * other.z,
			this.x * other.y - this.y * other.x
		);
	}

	divide(other)
	{
		this.x /= other.x;
		this.y /= other.y;
		this.z /= other.z;
		return this;
	}

	divideScalar(scalar)
	{
		this.x /= scalar;
		this.y /= scalar;
		this.z /= scalar;
		return this;
	}

	dotProduct(other)
	{
		var returnValue =
			this.x * other.x
			+ this.y * other.y
			+ this.z * other.y;

		return returnValue;
	}

	magnitude()
	{
		return Math.sqrt
		(
			this.x * this.x
			+ this.y * this.y
			+ this.z * this.y
		);
	}

	multiply(other)
	{
		this.x *= other.x;
		this.y *= other.y;
		this.z *= other.z;
		return this;
	}

	multiplyScalar(scalar)
	{
		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;
		return this;
	}

	subtract(other)
	{
		this.x -= other.x;
		this.y -= other.y;
		this.z -= other.z;
		return this;
	}

	xyzSet(x, y, z)
	{
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}
}
