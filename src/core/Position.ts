export class Position {

	private static readonly MAX_LATITUDE = 20;
	private static readonly MAX_LONGITUDE = 20;
	private static readonly MIN_LATITUDE = 0;
	private static readonly MIN_LONGITUDE = 0;

	private	constructor(private readonly x: number, private readonly y: number) {
		this.x = x;
		this.y = y;
	}

	static create(x: number, y: number) {

		if(x < this.MIN_LATITUDE || y < this.MIN_LONGITUDE) {
			throw new Error("Position value can not be negative");
		}

		if(x >= this.MAX_LATITUDE) {
			return new Position(x % this.MAX_LATITUDE, y);
		}

		if(y >= this.MAX_LONGITUDE) {
			return new Position(x, y % this.MAX_LONGITUDE);
		}

		return new Position(x, y);
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	increaseLatitude() {
		return Position.create(this.x + 1, this.y);
	}

	increaseLongitude() {
		return Position.create(this.x, this.y + 1);
	}

	decreaseLatitude(){
		if(this.x === 0) {
			return Position.create(Position.MAX_LATITUDE - 1, this.y);
		}
		return Position.create(this.x - 1, this.y);
	}

	decreaseLongitude()  {
		if(this.y === 0) {
			return Position.create(this.x, Position.MAX_LONGITUDE - 1);
		}
		return Position.create(this.x, this.y - 1);
	}
}
