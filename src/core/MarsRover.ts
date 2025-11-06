import { Position } from './Position';
import { MovementInstruction, Navigator, Orientation } from './Navigator';

export class MarsRover {
	position: Position;
	orientation: Orientation;

	constructor(position: Position, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	moveTo(movementInstructions: MovementInstruction[]): void {
		const navigator = new Navigator();

		movementInstructions.forEach((movementInstruction) => {
			const movement = navigator.getMovement(movementInstruction, this.position, this.orientation);
			this.position = movement.position;
			this.orientation = movement.orientation as Orientation;
		});
	}

	getPosition(): Position {
		return Position.create(this.position.getX(), this.position.getY());
	}
}
