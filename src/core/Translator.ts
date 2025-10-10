import { MarsPlanet } from './MarsPlanet';
import { Position } from './Position';
import { MovementInstruction, Orientation } from './Types';

const orientationGuide = ['N', 'E', 'S', 'W'];

export class Translator {
	constructor() {}

	moveOrientationRight(currentOrientation: Orientation) {
		const indexOfOrientation: number = orientationGuide.indexOf(currentOrientation);

		if (indexOfOrientation == 3) {
			return orientationGuide[0];
		}

		return orientationGuide[indexOfOrientation + 1];
	}

	moveOrientationLeft(currentOrientation: Orientation) {
		const indexOfOrientation: number = orientationGuide.indexOf(currentOrientation);
		if (indexOfOrientation == 0) {
			return orientationGuide[3];
		}

		return orientationGuide[indexOfOrientation - 1];
	}

	moveForward(orientation: Orientation): (p: Position) => Position {
		const movements = {
			N: this.moveUp,
			E: this.moveRight,
			S: this.moveDown,
			W: this.moveLeft,
		};

		return movements[orientation];
	}

	moveBackward(orientation: Orientation) {
		const movements = {
			N: this.moveDown,
			E: this.moveLeft,
			S: this.moveUp,
			W: this.moveRight,
		};
		return movements[orientation];
	}

	getMovementByInstruction(instruction: MovementInstruction): (o: Orientation) => (p: Position) => Position {
		const dictionaryOfMovements: Record<string, (o: Orientation) => (p: Position) => Position> = {
			F: this.moveForward.bind(this),
			B: this.moveBackward.bind(this),
		};

		return dictionaryOfMovements[instruction];
	}

	getOrientationByInstruction(instruction: MovementInstruction): (o: Orientation) => string {
		const dictionaryOfOrientations: Record<string, (o: Orientation) => string> = {
			L: this.moveOrientationLeft,
			R: this.moveOrientationRight,
		};

		return dictionaryOfOrientations[instruction];
	}

	getMovement(
		instruction: MovementInstruction,
		position: Position,
		orientation: Orientation
	): { orientation: Orientation; position: Position } {
		let coordenadas = {
			orientation: 'N' as Orientation,
			position: new Position(0, 0),
		};

		if (instruction === 'L' || instruction === 'R') {
			const movement = this.getOrientationByInstruction(instruction);
			coordenadas = {
				orientation: movement(orientation) as Orientation,
				position: position,
			};
		}

		if (instruction === 'F' || instruction === 'B') {
			const movementOrientation = this.getMovementByInstruction(instruction);
			const movementDirection = movementOrientation(orientation);

			coordenadas = {
				orientation: orientation,
				position: movementDirection(position),
			};
		}

		return coordenadas;
	}

	private moveUp(position: Position) {
		const newPositionY = position.y + 1;

		if(MarsPlanet.maxPositionY < newPositionY) {
			return new Position(position.x, 0);
		}

		return new Position(position.x, newPositionY);
	}

	private moveDown(position: Position) {
		const newPositionY = position.y - 1;

		if(MarsPlanet.minPositionX > newPositionY) {
			return new Position(position.x, MarsPlanet.maxPositionY);
		}
		
		return new Position(position.x, position.y - 1);
	}

	private moveLeft(position: Position) {
		const newPositionX = position.x - 1;
		
		if(newPositionX < MarsPlanet.minPositionX) {
			return new Position(MarsPlanet.maxPositionX, position.y);
		}

		return new Position(position.x - 1, position.y);
	}

	private moveRight(position: Position) {
		
		const newPositionX = position.x + 1;
		
		if(newPositionX > MarsPlanet.maxPositionX) {
			return new Position(0, position.y);
		}

		return new Position(position.x + 1, position.y);
	}
}
