
class Orientation
{
	constructor(forward, down)
	{
		this.forward = forward;
		this.right = this.down.clone().crossProduct(this.forward);
		this.down = down;
	}
}
