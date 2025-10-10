import { Position } from '../core/Position';
import { MarsRover } from '../core/MarsRover';
import { MovementInstruction } from '../core/Types';

describe('MARS ROVER', () => {
	it('should create an instance of MARS ROVER', () => {
		const marsRover = new MarsRover(new Position(0, 0), 'N');
		expect(marsRover).toBeInstanceOf(MarsRover)
	});

	it('should move L point 0,0 with orientation N', () => {
		const marsRover = new MarsRover(new Position(0, 0), 'N');
		const instructions = 'L';

		marsRover.moveTo(instructions.split('') as MovementInstruction[]);
		expect({
			position: marsRover.getPosition(),
			orientation: marsRover.orientation,
		}).toEqual({
			position: marsRover.getPosition(),
			orientation: 'W',
		});
	});

	it('should move F point 0,0 with orientation N', () => {
		const marsRover = new MarsRover(new Position(0, 0), 'N');
		const instructions = 'F';

		marsRover.moveTo(instructions.split('') as MovementInstruction[]);
		expect({
			position: marsRover.getPosition(),
			orientation: marsRover.orientation,
		}).toEqual({
			position: new Position(0, 1),
			orientation: 'N',
		});
	});

	it('should move RFRF point 0,0 with orientation N', () => {
		const marsRover = new MarsRover(new Position(0, 0), 'N');
		const instructions = 'RFLF';

		marsRover.moveTo(instructions.split('') as MovementInstruction[]);
		expect({
			position: marsRover.position,
			orientation: marsRover.orientation,
		}).toEqual({
			position: new Position(1, 1),
			orientation: 'N',
		});
	});

});
