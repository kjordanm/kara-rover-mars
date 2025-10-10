import { MovementInstruction, Orientation } from './Types';
import { Position } from './Position';
import { Translator } from './Translator';

export class MarsRover {
	position: Position;
	orientation: Orientation;

	constructor(position: Position, orientation: Orientation) {
		this.position = position;
		this.orientation = orientation;
	}

	moveTo(movementInstructions: MovementInstruction[]): void {
		const translator = new Translator();

		movementInstructions.forEach((movementInstruction) => {
			const movement = translator.getMovement(movementInstruction, this.position, this.orientation);
			this.position = movement.position;
			this.orientation = movement.orientation as Orientation;
		});
	}

	getPosition(): Position {
		return new Position(this.position.x, this.position.y);
	}
}
